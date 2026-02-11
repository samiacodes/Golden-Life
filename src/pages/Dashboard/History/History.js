'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
const transactions = [
    ...Array(9).fill(null).map((_, i) => ({
        id: `wallet-${i}`,
        name: "Bkash",
        status: "Received",
        transactionId: "3434635234345",
        amount: 500,
        timestamp: "02:12pm 03/12/24",
        type: 'wallet'
    })),
    ...Array(9).fill(null).map((_, i) => ({
        id: `voucher-${i}`,
        name: "Gift Voucher",
        status: "Redeemed",
        transactionId: "7834635234345",
        amount: 250,
        timestamp: "03:15pm 03/12/24",
        type: 'voucher'
    })),
    ...Array(9).fill(null).map((_, i) => ({
        id: `recharge-${i}`,
        name: "Mobile Recharge",
        status: "Completed",
        transactionId: "9934635234345",
        amount: 100,
        timestamp: "04:20pm 03/12/24",
        type: 'recharge'
    }))
];
export default function History() {
    return (_jsxs("div", { className: "w-[40%] mx-auto bg-white min-h-screen", children: [_jsx("div", { className: "flex items-center gap-4 p-4 border-b", children: _jsx("h1", { className: "text-xl font-semibold", children: "History" }) }), _jsxs(Tabs, { defaultValue: "wallet", className: "w-full", children: [_jsxs(TabsList, { className: "w-full justify-start border-b rounded-none h-12 bg-transparent", children: [_jsx(TabsTrigger, { value: "wallet", className: "flex-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none", children: "Wallet" }), _jsx(TabsTrigger, { value: "voucher", className: "flex-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none", children: "Voucher" }), _jsx(TabsTrigger, { value: "recharge", className: "flex-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none", children: "Recharge" })] }), _jsx(TabsContent, { value: "wallet", className: "mt-0", children: _jsx("div", { className: "divide-y", children: transactions.filter(t => t.type === 'wallet').map((transaction) => (_jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { className: "h-12 w-12", children: _jsx("img", { src: "../../../../public/image/courses/instructor.jpeg", alt: "Profile", width: 48, height: 48, className: "rounded-full object-cover" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: transaction.name }), _jsx("p", { className: "text-gray-600", children: transaction.status }), _jsxs("p", { className: "text-gray-600 text-sm", children: ["TranxID: ", transaction.transactionId] })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "text-red-500 font-semibold", children: ["$", transaction.amount] }), _jsx("p", { className: "text-gray-600 text-sm", children: transaction.timestamp })] })] }, transaction.id))) }) }), _jsx(TabsContent, { value: "voucher", className: "mt-0", children: _jsx("div", { className: "divide-y", children: transactions.filter(t => t.type === 'voucher').map((transaction) => (_jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { className: "h-12 w-12", children: _jsx("img", { src: "../../../../public/image/courses/instructor.jpeg", alt: "Profile", width: 48, height: 48, className: "rounded-full object-cover" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: transaction.name }), _jsx("p", { className: "text-gray-600", children: transaction.status }), _jsxs("p", { className: "text-gray-600 text-sm", children: ["TranxID: ", transaction.transactionId] })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "text-red-500 font-semibold", children: ["$", transaction.amount] }), _jsx("p", { className: "text-gray-600 text-sm", children: transaction.timestamp })] })] }, transaction.id))) }) }), _jsx(TabsContent, { value: "recharge", className: "mt-0", children: _jsx("div", { className: "divide-y", children: transactions.filter(t => t.type === 'recharge').map((transaction) => (_jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { className: "h-12 w-12", children: _jsx("img", { src: "../../../../public/image/courses/instructor.jpeg", alt: "Profile", width: 48, height: 48, className: "rounded-full object-cover" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: transaction.name }), _jsx("p", { className: "text-gray-600", children: transaction.status }), _jsxs("p", { className: "text-gray-600 text-sm", children: ["TranxID: ", transaction.transactionId] })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "text-red-500 font-semibold", children: ["$", transaction.amount] }), _jsx("p", { className: "text-gray-600 text-sm", children: transaction.timestamp })] })] }, transaction.id))) }) })] })] }));
}
