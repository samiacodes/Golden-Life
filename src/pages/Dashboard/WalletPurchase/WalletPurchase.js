'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft } from 'lucide-react';
import { Card } from "@/components/ui/card";
export default function WalletPurchase() {
    return (_jsxs("div", { className: "w-[40%] mx-auto bg-white min-h-screen", children: [_jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [_jsx("button", { className: "text-blue-500", children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("h1", { className: "text-xl font-semibold", children: "Wallet Purchase" })] }), _jsx("div", { className: "p-4 space-y-4", children: [100, 200, 500, 1000].map((amount) => (_jsxs(Card, { className: "relative overflow-hidden cursor-pointer transition-transform hover:scale-[0.99] active:scale-[0.97]", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                                backgroundImage: `url('/placeholder.svg?height=200&width=400')`,
                                opacity: 0.7
                            } }), _jsxs("div", { className: "relative p-6 flex justify-between items-center", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-2xl font-semibold text-white", children: "Wallet Amount" }), _jsx("p", { className: "text-white/90", children: "Regular" })] }), _jsx("div", { className: "bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-2 rounded-xl", children: _jsx("span", { className: "text-xl font-bold text-white", children: amount.toFixed(2) }) })] })] }, amount))) })] }));
}
