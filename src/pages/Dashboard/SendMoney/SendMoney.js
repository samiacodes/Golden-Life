'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronLeft, Phone } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
export default function SendMoney() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the phone number
        if (!phoneNumber || phoneNumber.length < 10) {
            alert('Please enter a valid phone number.');
            return;
        }
        // Navigate to the next page with the phone number as a query parameter
        navigate(`/payamount?phone=${phoneNumber}`);
    };
    return (_jsxs("div", { className: "w-full max-w-md mx-auto bg-gray-50 min-h-screen p-4", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("button", { className: "text-blue-500", onClick: () => navigate(-1), children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("h1", { className: "text-xl font-semibold", children: "Send Money" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }), _jsx(Input, { type: "tel", placeholder: "Enter mobile number...", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), className: "pl-10 pr-4 py-2 w-full", required: true, pattern: "[0-9]*" })] }), _jsx(Button, { type: "submit", className: "w-full", children: "Submit" })] })] }));
}
