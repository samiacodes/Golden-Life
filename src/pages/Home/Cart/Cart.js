'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Gift, Plus, ShoppingBag, X } from 'lucide-react';
// import CheckoutModal from "../CheckoutModal/CheckoutModal";
import useModalStore from "@/store/Store";
import { useTranslation } from "react-i18next";
import CheckoutModal from "@/pages/common/CheckoutModal";
const Button = ({ children, className = '', variant = 'default', ...props }) => (_jsx("button", { className: `px-4 py-2 rounded ${variant === 'outline' ? 'border border-gray-300' : 'bg-blue-500 text-white'} ${className}`, ...props, children: children }));
export default function Cart() {
    const location = useLocation();
    const [isOpen, setIsOpen] = React.useState(location.state?.isOpen || false);
    const [showCode, setShowCode] = React.useState(false);
    const { isCheckoutModalOpen, changeCheckoutModal, clicked } = useModalStore();
    const [items, setItems] = React.useState([]);
    const [t] = useTranslation("global");
    React.useEffect(() => {
        try {
            const storedItems = localStorage.getItem('cart');
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems);
                if (Array.isArray(parsedItems)) {
                    const itemsWithNumbers = parsedItems.map(item => ({
                        ...item,
                        price: Number(item.price) || 0,
                        quantity: Number(item.quantity) || 0
                    }));
                    setItems(itemsWithNumbers);
                }
                else {
                    console.warn('Invalid cart data in localStorage');
                    setItems([]);
                }
            }
            else {
                setItems([]);
            }
        }
        catch (error) {
            console.error('Error parsing cart data:', error);
            setItems([]);
        }
    }, [clicked]);
    const updateQuantity = (id, quantityChange) => {
        const updatedItems = items.map(item => item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + quantityChange) }
            : item);
        setItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };
    const totalItems = items?.reduce((acc, item) => acc + (Number(item?.quantity) || 0), 0) || 0;
    const total = items?.reduce((acc, item) => acc + ((Number(item?.price) || 0) * (Number(item?.quantity) || 0)), 0) || 0;
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => setIsOpen(true), className: "fixed right-0 top-[55%] -translate-y-1/2 bg-white border-2 border-primary-light rounded-l-full px-4 py-2 shadow-lg z-50", children: _jsxs("div", { className: "flex items-center", children: [_jsx(ShoppingBag, { className: "h-6 w-6 text-red-500" }), _jsx("div", { className: "border-l border-gray-300 h-8 mx-2" }), _jsxs("div", { children: [_jsxs("div", { className: "font-semibold", children: [totalItems, " ", t("cart.TotalItems")] }), _jsxs("div", { className: "text-sm", children: ["\u09F3 ", total] })] })] }) }), isOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 ", children: _jsxs("div", { className: "bg-white  w-full max-w-md h-[100vh] overflow-auto  shadow-lg", children: [_jsx("div", { className: "sticky top-0 bg-white border-b z-10", children: _jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plus, { className: "h-5 w-5" }), _jsxs("span", { className: "font-medium", children: [totalItems, " ", t("cart.TotalItems")] })] }), _jsx(Button, { variant: "outline", className: "text-sm", onClick: () => setIsOpen(false), children: _jsx(X, { className: "h-4 w-4" }) })] }) }), _jsx("div", { className: "divide-y", children: items && items.length > 0 ? (items.map((item) => (_jsxs("div", { className: "p-4 flex gap-4", children: [_jsx("div", { className: "w-1/3", children: _jsx("img", { alt: item?.name || 'Product', className: "w-full h-auto object-cover", src: "/placeholder.svg?height=100&width=100", width: 200, height: 100 }) }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("h3", { className: "font-medium text-sm mb-2 text-nowrap", children: item?.name ? (item.name.length > 40 ? `${item.name.slice(0, 40)}...` : item.name) : 'Unknown Product' }), _jsxs("div", { className: "flex items-center justify-around mt-auto", children: [_jsxs("div", { className: "flex items-center border rounded text-xs", children: [_jsx("button", { onClick: () => item?.id && updateQuantity(item.id, -1), className: "px-1 py-0.5", children: _jsx(ChevronDown, { className: "h-3 w-3" }) }), _jsx("span", { className: "w-6 text-center", children: item?.quantity || 0 }), _jsx("button", { onClick: () => item?.id && updateQuantity(item.id, 1), className: "px-1 py-0.5", children: _jsx(ChevronUp, { className: "h-3 w-3" }) })] }), _jsxs("p", { className: "text-sm font-medium", children: ["\u09F3 ", (Number(item?.price) || 0).toFixed(2), " \u00D7 ", item?.quantity || 0, " = \u09F3 ", ((Number(item?.price) || 0) * (Number(item?.quantity) || 0)).toFixed(2)] })] })] }), _jsx("button", { onClick: () => item?.id && updateQuantity(item.id, -(item.quantity || 0)), className: "text-gray-500 hover:text-gray-700 self-start", children: _jsx(X, { className: "h-4 w-4" }) })] }, item?.id || 'unknown')))) : (_jsx("div", { className: "p-4 text-center text-gray-500", children: t("cart.CartEmpty") })) }), _jsxs("div", { className: "sticky bottom-0 bg-white border-t p-4 space-y-4", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs(Button, { className: "w-full bg-primary-default hover:bg-gray-300 text-gray-800 flex items-center justify-center gap-2", onClick: () => setShowCode(!showCode), children: [_jsx(Gift, { className: "h-6 w-6" }), t("cart.ApplyCode")] }) }), showCode && (_jsxs("div", { className: "flex gap-2", children: [_jsx("input", { className: "flex-1 px-3 py-2 border rounded", placeholder: t("cart.CodePlaceholder") }), _jsx(Button, { className: "bg-primary-default", children: t("cart.GoButton") }), _jsx(Button, { variant: "outline", onClick: () => setShowCode(false), children: t("cart.CloseCodeInput") })] })), _jsx("div", { children: _jsxs("button", { onClick: changeCheckoutModal, className: "w-full flex justify-center bg-primary-default text-white text-xl py-2 rounded text-center gap-6", children: [_jsx("span", { children: t("cart.CheckoutButton") }), _jsx("div", { className: "border-2 border-primary-light h-8 mx-2" }), _jsxs("span", { className: "text-nowrap space-x-3 text-xl", children: ["\u09F3 ", total.toFixed(2)] })] }) })] })] }) })), isCheckoutModalOpen && _jsx(CheckoutModal, {})] }));
}
