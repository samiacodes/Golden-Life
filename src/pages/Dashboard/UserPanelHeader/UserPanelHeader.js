'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
// import { useTranslation } from 'next-i18next'
// import Link from 'next/link'
// import Image from 'next/image'
import { Moon, Sun, UserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function AdminHeader() {
    const { t } = useTranslation('global');
    // const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        setDarkMode(savedMode ? JSON.parse(savedMode) : false);
    }, []);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (_jsx("header", { className: "bg-white dark:bg-gray-800 shadow-sm", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: "/image/logo/logo.jpg", alt: t('logo_alt'), width: 36, height: 36, className: "h-9 w-auto object-cover" }), _jsxs("nav", { className: "ml-10 hidden md:flex space-x-8", children: [_jsx(Link, { to: "/addmoney", className: "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", children: "Add Money" }), _jsx(Link, { to: "/sendmoney", className: "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", children: "Send Money" }), _jsx(Link, { to: "/history", className: "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", children: "History" })] })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: toggleDarkMode, children: darkMode ? _jsx(Sun, { className: "h-5 w-5" }) : _jsx(Moon, { className: "h-5 w-5" }) }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: _jsx(UserRound, { className: "h-5 w-5" }) }) }), _jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [_jsx(DropdownMenuItem, { children: _jsx(Link, { to: "", children: "Address Book" }) }), _jsx(DropdownMenuItem, { children: _jsx(Link, { to: "", children: "Help Center" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "My Reviews" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "Return/Repair" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "Survey" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "Feedback" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "Profile" }) }), _jsx(DropdownMenuItem, { children: _jsx("button", { onClick: () => {
                                                    localStorage.removeItem('isAuthenticated');
                                                    // Add logout logic here
                                                }, children: "Logout" }) })] })] })] })] }) }));
}
