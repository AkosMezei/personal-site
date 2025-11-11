import TextareaAutosize from 'react-textarea-autosize';
import {SendHorizontal, MessageCircle} from 'lucide-react'
import {FormEvent, useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import axios from 'axios';
import {FocusEvent} from "react";

/**
 * Represents a single message exchanged.
 *
 * @interface Message
 *
 * @property {string} [_id] - The unique identifier for the message.
 * @property {string} senderID - The identifier of the sender of the message.
 * @property {string} content - The textual content of the message.
 * @property {string} status - The status of the message (e.g., sent, delivered, read).
 * @property {Date} [timestamp] - The date and time when the message was created or sent (optional).
 */
interface Message {
    _id?: string;
    senderID: string;
    content: string;
    status: string;
    timestamp?: Date;
}

/**
 * Represents the properties for a MessageBox component.
 *
 * @typedef {Object} MessageBoxProps
 * @property {boolean} isOpen - Specifies whether the message box is currently open.
 * @property {function} onToggle - Callback function triggered to toggle the message box state.
 */
type MessageBoxProps = {
    isOpen: boolean,
    onToggle: () => void,
}

/**
 * A functional component for rendering a message box with chat functionality. It includes the ability to send and display messages, handle errors, and toggle the component's visibility.
 *
 * @param {Object} props - Props passed to the component.
 * @param {boolean} props.isOpen - Determines if the message box is currently open and visible.
 * @param {Function} props.onToggle - Callback function to handle the toggling of the message box's state.
 *
 * @return {JSX.Element} A rendered JSX element that represents the message box and its associated UI components.
 */
function MessageBox({isOpen, onToggle}:MessageBoxProps) {

    //state toggle for the idle animation of the expansion button, that should only play if the message box was not opened this session, as to not be annoying
    const [shouldAnimate, setShouldAnimate] = useState(true);

    //list of messages
    const [messages, setMessages] = useState<Message[]>([]);

    //message to be sent
    const [inputMessage, setInputMessage] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<string|null>(null)

    /**
     * Retrieves the chat ID from local storage or session storage.
     *
     * The function attempts to fetch the "chatId" key from localStorage first.
     * If not available, it will attempt to retrieve it from sessionStorage.
     * In the event of an error (e.g., storage access issues), it logs the error
     * to the console and sets an application-defined error while returning null.
     *
     * @returns {string|null} The chat ID if found, otherwise null.
     */
    const getChatId = () => {
        try {
            return localStorage.getItem("chatId") || sessionStorage.getItem("chatId");
        } catch (e) {
            console.error("LocalStorage access error:", e);
            setError("getting chat ID locally")
            return null;
        }
    };

    /**
     * Handles the focus event for a textarea element.
     * Triggers a smooth scroll to ensure the textarea is visible within the viewport
     * after a slight delay. This is to get around the textarea sometimes being obscured by the keyboard on mobile.
     *
     * @param {FocusEvent<HTMLTextAreaElement>} event - The focus event triggered by the textarea element.
     */
    const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
        //possibly add an isExpanded and/or isMobile check
        setTimeout(()=> {
            event.target.scrollIntoView({behavior: "smooth", block: "end",});
        }, 300)
    }

    /**
     * Fetches messages from the API for a given chat ID.
     *
     * @param {string} id - The unique identifier for the chat whose messages are to be retrieved. Equivalent to chatID.
     * @return {void} This method does not return a value but updates the state with the retrieved messages or logs an error.
     */
    function getMessagesById(id: string) {
        axios({
            method: 'GET',
            url: `/api/messages?chatID=${id}`,
        })
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => {
                console.log(error)
                setError("getting messages by ID from API")
            });
    }

    //lazy chat ID check, only check for it on intent, when the message box is opened
    useEffect(() => {
        if (isOpen) {
            // Check if we already have a chat ID from localStorage
            const savedChatId = localStorage.getItem("chatId");
            if (savedChatId) {
                getMessagesById(savedChatId);
            }
        }
    }, [isOpen]);
    
    // Get chat id if exists, if not, request from API
    async function ensureChatId() {
        const savedChatId = getChatId(); //try to get it from local/session storage
        if (savedChatId) {
            return savedChatId; //if we have a chat id, return it
        } else {
            setIsLoading(true); //if we do not have a chat id, start the new chat creation workflow
            try { //send an empty messages array to the API to signal new chat creation
                const response = await axios({
                    method: 'POST',
                    url:'/api/messages',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        conversationID: "string",
                        messages:[]
                    }
                });
                const newChatId = response.data.id;
                localStorage.setItem("chatId", newChatId); //save the chatId returned from the response after creation
                sessionStorage.setItem("chatId", newChatId);
                return newChatId; //return the newly created chatId
            } catch (error) {
                console.log(error);
                setError("getting chat ID from API") //set an error message
                return null;
            } finally {
                setIsLoading(false);
            }
        }
    }

    /**
     * Handles the submission of a message form. This function performs the following steps:
     * - Prevents default form submission behavior - reload in our case.
     * - Validates the input message and ensures it is not empty or the system is not in a loading state.
     * - Creates a new message object with "sending" status and optimistically updates the UI.
     * - Clears the input field immediately after message creation.
     * - Ensures a chat ID is available before attempting to send the message.
     * - Sends the message to the API using the acquired chat ID.
     * - Handles the API response, refreshing the messages list upon success, or reverting optimistic updates on an error.
     *
     * @param {FormEvent} e - The form submit event triggered when the form is submitted.
     */
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!inputMessage.trim() || isLoading) return; //if there is no message or we are currently loading (the chatId for example)

        const newMessage: Message = { //create a new empty message object
            senderID: "client",
            content: inputMessage.trim(),
            status: "sending"
        };

        // Optimistically update UI with a "sending" status
        setMessages(prevMessages => [...prevMessages, newMessage]);

        // Store the message temporarily
        const messageToSend = inputMessage;

        // Clear input right away
        setInputMessage('');

        // Ensure we have a chat ID before sending
        const id = await ensureChatId();
        if (!id) {
            // Handle error - couldn't get chat ID
            console.error("Failed to get chat ID");
            return;
        }

        // Send the message with the confirmed chat ID
        axios({
            method: 'POST',
            url: `/api/messages?chatID=${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                senderID: "client",
                content: messageToSend,
                status: "sent"
            }
        })
            .then(() => {
                // Refresh to get server-generated ID and any other changes
                getMessagesById(id);
            })
            .catch(error => {
                console.log(error);
                // Revert the optimistic update on error
                setError("sending message to API")
                getMessagesById(id);
            });
    };

    //simple expansion handler, that also turns off the idle animation
    const handleExpandToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (shouldAnimate) {
            setShouldAnimate(false);
        }
        onToggle();
    };

    return (
        <div>
            {/* Main message box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mb-12 m-3 right-0 bottom-9 flex flex-col justify-between bg-white/10 backdrop-blur-2xl rounded-lg max-w-96 aspect-[5/6]">
                        <div className="max-h-fit overflow-y-scroll flex flex-col-reverse">
                            <div className="m-3 flex flex-col">
                                {messages.map((message, index) => (
                                    <div
                                        key={message._id || index}
                                        className={`mt-3 flex ${message.senderID === "client" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`px-2 py-1 rounded-md max-w-[75%] ${message.senderID === "client" ? "bg-green-500/50" : "bg-teal-500/50"}`}>
                                        {message.content}
                                        {message.status === "sending" &&
                                            <span className="text-xs ml-2 opacity-50">(sending...)</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm mt-3 mx-3 text-center text-gray-400"> Please do not include sensitive information, the
                                messages are NOT end-to-end encrypted (yet).</p>
                            {error === null ? "" : <p className="text-sm mt-3 mx-3 text-center text-gray-900 bg-red-500/50 rounded-xl p-1"> There was an error during {error}, please try sending the message again. </p>}
                        </div>
                        <form className="flex justify-between" onSubmit={handleSubmit}>
                            <TextareaAutosize
                                id="message"
                                name="message"
                                minRows={1}
                                maxRows={6}
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="rounded-md m-3 w-full px-2 py-1 resize-none text-black"
                                disabled={isLoading}
                                onFocus={handleFocus}
                            />
                            <button type="submit" className="mr-3" disabled={isLoading}>
                                <SendHorizontal className="m-auto" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Chat icon */}
            <motion.button
                whileHover={{scale:1.2}}
                whileTap={{ scale: 0.9 }}
                onClick={handleExpandToggle}
                className="absolute p-2 right-3 bottom-1 bg-white/10 rounded-full"
                animate={shouldAnimate? {scale: [1, 1.3, 1, 1.3, 1]} : {scale:1}}
                transition={shouldAnimate? {
                    duration:1, repeat: Infinity, repeatDelay: 5, delay: 30,
                } : {duration:0.2}}
            >
                <MessageCircle />
            </motion.button>
        </div>
    );
}

export default MessageBox;