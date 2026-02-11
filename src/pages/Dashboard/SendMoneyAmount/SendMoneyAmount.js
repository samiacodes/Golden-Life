import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronLeft, ArrowRight, User2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSearchParams, useNavigate } from 'react-router-dom';
const QUICK_AMOUNTS = [100, 200, 300, 400];
export default function SendMoneyAmount() {
    const [amount, setAmount] = useState(0);
    const [searchParams] = useSearchParams(); // Correct destructuring
    const navigate = useNavigate();
    const phone = searchParams.get('phone') || '';
    // Mock data - in a real app, fetch user details based on the phone number
    const receiverName = "Jenny";
    const availableBalance = 10000;
    return (_jsxs("div", { className: "w-full max-w-md mx-auto bg-white min-h-screen", children: [_jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [_jsx("button", { className: "text-blue-500", onClick: () => navigate(-1), children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("h1", { className: "text-xl font-medium", children: "Send Money" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "text-gray-600 mb-3", children: "Receiver" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: _jsx(User2, { className: "w-6 h-6 text-purple-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-lg", children: receiverName }), _jsx("p", { className: "text-gray-600", children: phone })] })] })] }), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "text-gray-600 mb-6", children: "Amount" }), _jsxs("div", { className: "text-center mb-4", children: [_jsxs("p", { className: "text-5xl font-light mb-4", children: ["$", amount] }), _jsxs("p", { className: "text-gray-600", children: ["Available Balance: $", availableBalance] })] }), _jsx("div", { className: "grid grid-cols-2 gap-4 mt-8", children: QUICK_AMOUNTS.map((value) => (_jsx("button", { onClick: () => setAmount(value), className: `p-4 rounded-xl border ${amount === value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200'}`, children: value }, value))) })] }), _jsx("div", { className: "fixed bottom-0 left-0 right-0 p-4 ", children: _jsxs(Button, { className: "w-[40%] mx-auto flex items-center justify-between px-6", disabled: amount === 0, onClick: () => navigate(`/send-money/confirm?amount=${amount}&phone=${phone}`), children: [_jsx("span", { children: "Proceed" }), _jsx(ArrowRight, { className: "w-5 h-5" })] }) })] }));
}
