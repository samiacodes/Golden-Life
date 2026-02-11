import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, User2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom'; // useLocation for accessing query params
// import { Button } from "@/components/ui/button"
export default function SendMoneyConfirm() {
    const location = useLocation(); // Access the current location (URL)
    const navigate = useNavigate(); // Navigation hook
    // Parse query parameters from the location
    const searchParams = new URLSearchParams(location.search);
    const amount = searchParams.get('amount') || '0';
    const phone = searchParams.get('phone') || '';
    // Mock data - in real app, fetch user details based on phone number
    const receiverName = "Jenny";
    return (_jsxs("div", { className: "w-full max-w-md mx-auto bg-white min-h-screen", children: [_jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [_jsx("button", { className: "text-blue-500", onClick: () => navigate(-1), children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("h1", { className: "text-xl font-medium", children: "Send Money" })] }), _jsx("div", { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: _jsx(User2, { className: "w-12 h-12 text-purple-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-lg", children: receiverName }), _jsx("p", { className: "text-gray-600", children: phone })] })] }) }), _jsx("div", { className: "p-4", children: _jsxs("h2", { className: "text-2xl font-semibold", children: ["Amount: ", amount] }) }), _jsxs("div", { className: "p-4 space-y-4", children: [_jsx("h3", { className: "text-xl text-blue-500 text-center", children: "Choose Payment Method" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx("button", { className: "p-4 border rounded-lg hover:bg-gray-50", children: _jsx("img", { src: "../../../../public/image/payment/nogod.png", alt: "bKash", width: 120, height: 40, className: "mx-auto" }) }), _jsx("button", { className: "p-4 border rounded-lg hover:bg-gray-50", children: _jsx("img", { src: "../../../../public/image/payment/rocket.jpg", alt: "Nagad", width: 120, height: 40, className: "mx-auto" }) })] }), _jsx("div", { className: "flex justify-center", children: _jsx("button", { className: "p-4 border rounded-lg hover:bg-gray-50 w-1/2", children: _jsx("img", { src: "../../../../public/image/payment/bikash.png", alt: "Rocket", width: 120, height: 40, className: "mx-auto" }) }) })] })] }));
}
