'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Wallet, CreditCard, Banknote } from 'lucide-react';
const WalletAmount = () => {
    const [selectedOption, setSelectedOption] = useState("E-Wallet");
    const options = [
        { name: "Boucher", amount: 103040, icon: Wallet },
        { name: "Earning", amount: 203454, icon: CreditCard },
        { name: "Recharge", amount: 502356, icon: Banknote },
    ];
    const handleButtonClick = (name) => {
        setSelectedOption(name);
    };
    return (_jsx("div", { className: "flex flex-col items-center p-2", children: _jsx("div", { className: "flex flex-wrap gap-4 justify-center max-w-screen-lg", children: options.map(({ name, amount, icon: Icon }) => (_jsxs("button", { onClick: () => handleButtonClick(name), className: `flex flex-col items-center justify-center w-full sm:w-48 md:w-52 h-24 rounded-lg border-2 transition-all duration-300 ${selectedOption === name
                    ? "bg-primary text-white border-primary shadow-md scale-95"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"}`, children: [_jsx("span", { className: "text-lg sm:text-xl", children: name }), _jsxs("span", { className: "text-xl sm:text-2xl font-bold", children: ["$", amount.toFixed(0)] })] }, name))) }) }));
};
export default WalletAmount;
