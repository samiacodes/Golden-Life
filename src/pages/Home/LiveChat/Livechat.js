'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
// import { Telegram } from 'lucide-react'; // Use Lucid Icons for Telegram
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function LiveChat() {
    const [t] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: 'agent' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '')
            return;
        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user'
        };
        setMessages([...messages, newMessage]);
        setInputMessage('');
        // Simulate agent response
        setTimeout(() => {
            const agentResponse = {
                id: messages.length + 2,
                text: "Thank you for your message. An agent will respond shortly.",
                sender: 'agent'
            };
            setMessages(prevMessages => [...prevMessages, agentResponse]);
        }, 1000);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: `fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`, children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsxs("div", { className: "flex justify-between items-center p-4 border-b", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Live Chat" }), _jsx("button", { onClick: () => setIsOpen(false), className: "text-gray-500 hover:text-gray-700", children: "\u00D7" })] }), _jsxs("div", { className: "flex-grow overflow-y-auto p-4 space-y-4", children: [messages.map((message) => (_jsx("div", { className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsx("div", { className: `max-w-[70%] p-2 rounded-lg ${message.sender === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'}`, children: message.text }) }, message.id))), _jsx("div", { ref: messagesEndRef })] }), _jsxs("form", { onSubmit: handleSendMessage, className: "flex items-center p-4 border-t", children: [_jsx("input", { type: "text", placeholder: "Type your message...", value: inputMessage, onChange: (e) => setInputMessage(e.target.value), className: "flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("button", { type: "submit", className: "px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600", children: "Send" })] })] }) }), _jsxs("div", { className: "fixed top-[65%] -translate-y-1/2 right-0 z-40 h-auto rounded-l-full bg-white px-2  Py-3 shadow-lg hover:bg-gray-100 border-2 border-primary-light", children: [_jsx("button", { onClick: () => setIsOpen(true), className: "px-4  text-black-500", children: t("chat") }), _jsxs("div", { className: "flex justify-center  space-x-2", children: [_jsx(Link, { to: "https://wa.me/YOUR_WHATSAPP_NUMBER", target: "_blank", rel: "noopener noreferrer", children: _jsx(FontAwesomeIcon, { icon: faWhatsapp, className: "h-7 w-7 text-green-600 hover:text-green-700" }) }), _jsx("div", { className: "border-l border-gray-300 h-8 mx-2" }), _jsx(Link, { to: "https://t.me/YOUR_TELEGRAM_USERNAME", target: "_blank", rel: "noopener noreferrer", children: _jsx(FontAwesomeIcon, { icon: faTelegram, className: "h-7 w-7 text-blue-600 hover:text-blue-700" }) })] })] })] }));
}
