import TextareaAutosize from 'react-textarea-autosize';
import {SendHorizontal, MessageCircle} from 'lucide-react'
import {FormEvent, useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import axios from 'axios';

interface Message {
    _id?: string;
    senderID: string;
    content: string;
    status: string;
    timestamp?: Date;
}

function MessageBox(){
    
    const apiKey = import.meta.env.VITE_API_KEY;

    const [isExpanded, setIsExpanded] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);

    const [inputMessage, setInputMessage] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);

    const getChatId = () => {
        try {
            return localStorage.getItem("chatId") || sessionStorage.getItem("chatId");
        } catch (e) {
            console.error("LocalStorage access error:", e);
            return null;
        }
    };
    
    function getMessagesById(id: string) {
        axios({
            method: 'GET',
            url: `https://personalsitemessageapi.azure-api.net/api/messages/${id}/contents`,
            headers: {
                "X-API-Key": apiKey
            }
        })
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => console.log(error));
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

    async function ensureChatId() {
        const savedChatId = getChatId();
        if (savedChatId) {
            return savedChatId;
        } else {
            setIsLoading(true);
            try {
                const response = await axios({
                    method: 'POST',
                    url:'https://personalsitemessageapi.azure-api.net/api/messages',
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": apiKey
                    },
                    data: {
                        conversationID: "string",
                        messages:[]
                    }
                });
                const newChatId = response.data.id;
                localStorage.setItem("chatId", newChatId);
                sessionStorage.setItem("chatId", newChatId); //implement trying to get this as a fallback when localstorage doesn't work
                return newChatId;
            } catch (error) {
                console.log(error);
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
            content: inputMessage,
            status: "sending"
        };

        // Optimistically update UI with "sending" status
        setMessages(prevMessages => [...prevMessages, newMessage]);

        // Store the message temporarily
        const messageToSend = inputMessage;

        // Clear input right away for better UX
        setInputMessage('');

        // Ensure we have a chat ID before sending
        const id = await ensureChatId();
        if (!id) {
            // Handle error - couldn't get chat ID
            console.error("Failed to get chat ID");
            return;
        }

        // Now send the message with the confirmed chat ID
        axios({
            method: 'POST',
            url: `https://personalsitemessageapi.azure-api.net/api/messages/${id}/contents`,
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": apiKey
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
                        className="absolute m-3 right-0 bottom-9 flex flex-col justify-between bg-white/10 backdrop-blur-2xl rounded-lg h-1/2 aspect-[5/6]">
                        <div className="max-h-fit overflow-y-scroll flex flex-col-reverse">
                            <ul className="m-3">
                                {messages.map((message, index) => (
                                    <li
                                        key={message._id || index}
                                        className={`mt-3 px-2 py-1 rounded-md bg-white/5 ${message.senderID === "client" ? "ml-10" : "mr-10"}`}
                                    >
                                        {message.content}
                                        {message.status === "sending" && <span className="text-xs ml-2 opacity-50">(sending...)</span>}
                                    </li>
                                ))}
                            </ul>
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