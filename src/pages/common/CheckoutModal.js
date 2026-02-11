'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import useModalStore from "@/store/Store";
import { Icon } from "./Icon";
import { AddressManager } from "./AddressManager";
export default function CheckoutModal() {
    const { isCheckoutModalOpen, closeCheckoutModal } = useModalStore();
    const [currentStep, setCurrentStep] = React.useState("address");
    const [currentAddress, setCurrentAddress] = React.useState(null);
    const [items, setItems] = React.useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation("global");
    React.useEffect(() => {
        try {
            const storedItems = localStorage.getItem("cart");
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems);
                if (Array.isArray(parsedItems)) {
                    setItems(parsedItems);
                }
                else {
                    console.warn('Invalid cart data in localStorage');
                    setItems([]);
                }
            }
        }
        catch (error) {
            console.error('Error parsing cart data:', error);
            setItems([]);
        }
    }, []);
    const updateQuantity = (id, quantity) => {
        const updatedItems = items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item);
        setItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };
    const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const totalPrice = items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
    const subtotal = totalPrice;
    const CheckoutContent = () => {
        const [selectedPayment, setSelectedPayment] = React.useState("wallet");
        const [termsAccepted, setTermsAccepted] = React.useState(false);
        const [errorMessage, setErrorMessage] = React.useState(null);
        const handleSubmit = () => {
            if (!termsAccepted) {
                setErrorMessage(t("checkoutModal.errorMessage"));
                return;
            }
            setErrorMessage(null);
            console.log("Submitting the checkout with payment method:", selectedPayment);
            navigate("/orderdetails");
        };
        const deliveryCharge = 50;
        const total = subtotal + deliveryCharge;
        return (_jsxs("div", { className: "max-w-md mx-auto bg-white rounded-lg shadow-lg flex flex-col h-[90vh]", children: [_jsxs("div", { className: "p-4 border-b flex items-center gap-2 bg-white z-10", children: [_jsx(Icon, { name: "mapPin" }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-semibold", children: currentAddress?.name }), _jsxs("p", { children: [currentAddress?.address, ", ", currentAddress?.district] })] }), _jsx("button", { onClick: () => setCurrentStep("address"), className: "text-primary hover:text-primary-light", children: t("checkoutModal.address.change") })] }), _jsx("div", { className: "flex-1 overflow-y-auto p-1 custom-scrollbar", children: _jsx("div", { className: "divide-y space-y-4", children: items.map((item, i) => (_jsxs("div", { className: "m-2 flex gap-6", children: [_jsx("div", { className: "w-8 h-8 bg-red-500", children: _jsx("img", { alt: item?.name || t("checkoutModal.product.unknownProduct"), className: "h-10 w-10 object-cover", src: "/image/products/maggi.webp" }) }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("h3", { className: "font-medium text-sm text-start", children: item?.name ? (item.name.length > 40 ? `${item.name.slice(0, 30)}...` : item.name) : t("checkoutModal.product.unknownProduct") }), _jsx("p", { className: "text-sm font-medium text-start", children: t("checkoutModal.product.priceCalculation", { price: item.price || 0, quantity: item.quantity || 0, totalPrice: (item.price || 0) * (item.quantity || 0) }) })] })] }, i))) }) }), _jsxs("div", { className: "p-4 space-y-4 bg-white border-t", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: t("checkoutModal.cart.totalItems") }), _jsx("span", { children: totalItems })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: t("checkoutModal.cart.subtotal") }), _jsxs("span", { children: ["\u09F3", subtotal] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: t("checkoutModal.cart.deliveryCharge") }), _jsxs("span", { children: ["\u09F3", deliveryCharge] })] }), _jsxs("div", { className: "flex justify-between font-semibold text-lg", children: [_jsx("span", { children: t("checkoutModal.cart.totalPrice") }), _jsxs("span", { children: ["\u09F3", total] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold", children: t("checkoutModal.payment.paymentOption") }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => setSelectedPayment("wallet"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "wallet" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: t("checkoutModal.payment.wallet") }), _jsx("button", { onClick: () => setSelectedPayment("bkash"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "bkash" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: t("checkoutModal.payment.bkash") }), _jsx("button", { onClick: () => setSelectedPayment("nogod"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "nogod" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: t("checkoutModal.payment.nogod") })] })] }), _jsxs("div", { className: "flex items-center mt-4", children: [_jsx("input", { type: "checkbox", id: "terms", checked: termsAccepted, onChange: (e) => setTermsAccepted(e.target.checked), className: "mr-2" }), _jsxs("label", { htmlFor: "terms", className: "text-sm space-x-2", children: [t("checkoutModal.terms.accept"), " ", _jsxs(Link, { to: "/help/privacy-policy", target: "", rel: "noopener noreferrer", className: "text-primary underline", children: [t("checkoutModal.terms.privacyPolicy"), ","] }), _jsxs(Link, { to: "/help/terms", target: "", rel: "noopener noreferrer", className: "text-primary underline", children: [t("checkoutModal.terms.termsAndConditions"), "."] })] })] }), errorMessage && (_jsx("div", { className: "text-red-500 text-sm", children: errorMessage }))] }), _jsx("div", { className: "p-4 border-t bg-white z-10", children: _jsx("button", { onClick: handleSubmit, className: "w-full px-4 py-2 bg-primary-default text-white rounded", children: t("checkoutModal.confirm") }) })] }));
    };
    const handleSaveAddress = (address, isDefault) => {
        setCurrentAddress(address);
        setCurrentStep("delivery");
    };
    return (_jsx("div", { className: `fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50 ${isCheckoutModalOpen ? '' : 'hidden'}`, children: _jsxs("div", { className: "max-w-md w-full h-[680px] mt-2 bg-white p-4 rounded-md shadow-lg", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("button", { onClick: closeCheckoutModal, children: _jsx(Icon, { name: "x" }) }) }), currentStep === "address" ? (_jsx(AddressManager, { onSaveAddress: handleSaveAddress })) : (_jsx(CheckoutContent, {}))] }) }));
}
