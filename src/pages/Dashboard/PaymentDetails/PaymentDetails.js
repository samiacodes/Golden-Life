'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PaymentMethod from '../PaymentMethod/PaymentMethod';
export default function PaymentDetails({ onClose, type, amount }) {
    const [agreed, setAgreed] = useState(false);
    const [inputAmount, setInputAmount] = useState(amount.toString());
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const bonus = 500;
    const willReceive = parseInt(inputAmount) * 10;
    const handlePayNow = () => {
        setShowPaymentMethod(true);
    };
    const handleSelectPaymentMethod = (method) => {
        console.log('Selected payment method:', method);
        // Handle payment method selection
    };
    if (showPaymentMethod) {
        return (_jsx(PaymentMethod, { amount: parseInt(inputAmount), onClose: () => setShowPaymentMethod(false), onSelectMethod: handleSelectPaymentMethod }));
    }
    return (_jsxs("div", { className: "w-[40%] mx-auto bg-white min-h-screen", children: [_jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [_jsx("button", { className: "text-blue-500", onClick: onClose, children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("h1", { className: "text-xl font-semibold", children: "Payment Details" })] }), _jsxs("div", { className: "p-4 space-y-6", children: [_jsxs(Card, { className: "relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                                    backgroundImage: "url('/placeholder.svg?height=200&width=400')",
                                    opacity: 0.7
                                } }), _jsxs("div", { className: "relative p-6", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-3xl font-semibold text-white uppercase", children: type }), _jsx("p", { className: "text-white/90", children: "Bonus" }), _jsxs("p", { className: "text-white text-xl", children: ["\u09F3 ", bonus] })] }), _jsx("div", { className: "absolute top-6 right-6 bg-gradient-to-br from-blue-500 to-purple-600 px-6 py-3 rounded-xl", children: _jsx("span", { className: "text-2xl font-bold text-white", children: amount }) }), _jsx("div", { className: "absolute bottom-4 right-6", children: _jsx("span", { className: "text-white/90", children: "Regular" }) })] })] }), _jsxs("div", { className: "flex justify-between items-center py-4 border-b", children: [_jsx("div", { className: "text-gray-600", children: "Nagd Trx Charge" }), _jsx("div", { className: "font-semibold", children: "N/A" })] }), _jsxs("div", { className: "flex justify-between items-center py-4 border-b", children: [_jsx("div", { className: "text-gray-600", children: "You will Receive" }), _jsx("div", { className: "font-semibold", children: willReceive })] }), _jsx("div", { className: "space-y-4", children: _jsx(Input, { type: "number", value: inputAmount, onChange: (e) => setInputAmount(e.target.value), className: "text-2xl p-6" }) }), _jsxs("div", { className: "flex items-start space-x-2", children: [_jsx(Checkbox, { id: "terms", checked: agreed, onCheckedChange: (checked) => setAgreed(checked) }), _jsx("label", { htmlFor: "terms", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "\u0986\u09AE\u09BF \u09A8\u09BF\u09AF\u09BC\u09AE \u0993 \u09B6\u09B0\u09CD\u09A4\u09BE\u09AC\u09B2\u09BF\u09B0 \u09B8\u09BE\u09A5\u09C7\u0993 \u098F\u0995\u09AE\u09A4" })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsx(Button, { variant: "destructive", className: "flex-1", onClick: onClose, children: "CLOSE" }), _jsx(Button, { className: "flex-1", disabled: !agreed, onClick: handlePayNow, children: "PAY NOW" })] })] })] }));
}
