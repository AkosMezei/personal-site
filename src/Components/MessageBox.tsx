import TextareaAutosize from 'react-textarea-autosize';
import {SendHorizontal, MessageCircle} from 'lucide-react'
import {FormEvent, useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import axios from 'axios';
import {FocusEvent} from "react";

interface Message {
    _id?: string;
    senderID: string;
    content: string;
    status: string;
    timestamp?: Date;
}

function MessageBox(){

    const [isExpanded, setIsExpanded] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);

    const [inputMessage, setInputMessage] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<string|null>(null)

    const getChatId = () => {
        try {
            return localStorage.getItem("chatId") || sessionStorage.getItem("chatId");
        } catch (e) {
            console.error("LocalStorage access error:", e);
            setError("getting chat ID locally")
            return null;
        }
    };

    const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
        //possibly add an isExpanded and/or isMobile check
        setTimeout(()=> {
            event.target.scrollIntoView({behavior: "smooth", block: "end",});
        }, 300)
    }

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

    useEffect(() => {
        if (isExpanded) {
            // Check if we already have a chat ID from localStorage
            const savedChatId = localStorage.getItem("chatId");
            if (savedChatId) {
                getMessagesById(savedChatId);
            }
        }
    }, [isExpanded]);
    
    // Get chat id if exists, if not, request from API
    async function ensureChatId() {
        const savedChatId = getChatId();
        if (savedChatId) {
            return savedChatId;
        } else {
            setIsLoading(true);
            try {
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
                localStorage.setItem("chatId", newChatId);
                sessionStorage.setItem("chatId", newChatId); //TODO implement trying to get this as a fallback when localstorage doesn't work
                return newChatId;
            } catch (error) {
                console.log(error);
                setError("getting chat ID from API")
                return null;
            } finally {
                setIsLoading(false);
            }
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!inputMessage.trim() || isLoading) return;

        const newMessage: Message = {
            senderID: "client",
            content: inputMessage.trim(),
            status: "sending"
        };

        // Optimistically update UI with "sending" status
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

    const handleExpandToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };
    
    
    return (
        <div>
            <AnimatePresence>
                {isExpanded && (
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
            <button onClick={handleExpandToggle} className="absolute p-2 right-3 bottom-1 bg-white/10 rounded-full">
                <MessageCircle />
            </button>
        </div>
    );
}

export default MessageBox;