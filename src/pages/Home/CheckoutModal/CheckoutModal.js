'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useModalStore from "@/store/Store";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
const Icon = ({ name }) => {
    const icons = {
        mapPin: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), _jsx("circle", { cx: "12", cy: "10", r: "3" })] }),
        clock: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }),
        x: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M18 6 6 18" }), _jsx("path", { d: "m6 6 12 12" })] }),
        home: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }),
        briefcase: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2" }), _jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })] }),
        heart: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }) }),
        plus: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M5 12h14" }), _jsx("path", { d: "M12 5v14" })] }),
        chevronDown: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "m6 9 6 6 6-6" }) }),
    };
    return icons[name] || null;
};
const Button = ({ children, className = '', variant = 'default', ...props }) => {
    const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };
    return (_jsx("button", { className: `${baseStyle} ${variantStyles[variant]} ${className}`, ...props, children: children }));
};
const Select = ({ children, className = '', ...props }) => (_jsxs("div", { className: "relative", children: [_jsx("select", { className: `w-full p-2 border rounded appearance-none bg-background ${className}`, ...props, children: children }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: _jsx(Icon, { name: "chevronDown" }) })] }));
const Switch = ({ checked, onChange, label }) => (_jsxs("label", { className: "flex items-center cursor-pointer", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "checkbox", className: "sr-only", checked: checked, onChange: e => onChange(e.target.checked) }), _jsx("div", { className: `block w-14 h-8 rounded-full ${checked ? 'bg-primary' : 'bg-gray-300'}` }), _jsx("div", { className: `dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${checked ? 'transform translate-x-6' : ''}` })] }), _jsx("div", { className: "ml-3 text-foreground font-medium", children: label })] }));
const Input = (props) => (_jsx("input", { ...props, className: `w-full p-2 border rounded bg-background text-foreground ${props.className || ''}` }));
const Textarea = (props) => (_jsx("textarea", { ...props, className: `w-full p-2 border rounded bg-background text-foreground ${props.className || ''}` }));
const Label = ({ children, ...props }) => (_jsx("label", { ...props, className: `block text-sm font-medium text-foreground mb-1 ${props.className || ''}`, children: children }));
const AddressManager = ({ onSaveAddress }) => {
    const [currentAddress, setCurrentAddress] = React.useState({
        label: "home",
        name: "",
        district: "",
        address: "",
        phone: "",
        notes: ""
    });
    const [isDefaultAddress, setIsDefaultAddress] = React.useState(false);
    React.useEffect(() => {
        const savedAddresses = JSON.parse(localStorage.getItem('addresses') || '{}');
        const defaultAddress = localStorage.getItem('defaultAddress');
        if (defaultAddress) {
            setCurrentAddress(savedAddresses[defaultAddress]);
            setIsDefaultAddress(true);
        }
        else if (savedAddresses[currentAddress?.label]) {
            setCurrentAddress(savedAddresses[currentAddress?.label]);
        }
    }, [currentAddress?.label]);
    const handleSaveAddress = (e) => {
        e.preventDefault();
        const savedAddresses = JSON.parse(localStorage.getItem('addresses') || '{}');
        savedAddresses[currentAddress?.label] = currentAddress;
        localStorage.setItem('addresses', JSON.stringify(savedAddresses));
        if (isDefaultAddress) {
            localStorage.setItem('defaultAddress', currentAddress?.label);
        }
        else {
            const currentDefault = localStorage.getItem('defaultAddress');
            if (currentDefault === currentAddress?.label) {
                localStorage.removeItem('defaultAddress');
            }
        }
        onSaveAddress(currentAddress, isDefaultAddress);
    };
    const LabelOptions = () => (_jsx("div", { className: "grid grid-cols-4 gap-4 mt-2", children: [
            { icon: "home", label: "home" },
            { icon: "briefcase", label: "work" },
            { icon: "heart", label: "partner" },
            { icon: "plus", label: "other" },
        ].map(({ icon, label }) => (_jsxs(Button, { type: "button", variant: currentAddress?.label === label ? "default" : "outline", className: "flex flex-col items-center gap-2 py-4", onClick: () => setCurrentAddress((prev) => ({
                ...prev,
                label: label,
            })), children: [_jsx(Icon, { name: icon }), _jsx("span", { className: "capitalize text-xs", children: label })] }, label))) }));
    return (_jsx("div", { className: "max-w-sm mx-auto bg-white p-4 rounded-md shadow-lg", children: _jsxs("form", { onSubmit: handleSaveAddress, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", type: "text", value: currentAddress?.name, onChange: (e) => setCurrentAddress({ ...currentAddress, name: e.target.value }), required: true, placeholder: "Name" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "address", children: "Address" }), _jsx(Input, { id: "address", type: "text", value: currentAddress?.address, onChange: (e) => setCurrentAddress({ ...currentAddress, address: e.target.value }), placeholder: "Address", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "district", children: "District" }), _jsxs(Select, { id: "district", value: currentAddress?.district, onChange: (e) => setCurrentAddress({ ...currentAddress, district: e.target.value }), required: true, children: [_jsx("option", { value: "", children: "Select a district" }), _jsx("option", { value: "Uttar Badda", children: "Uttar Badda" }), _jsx("option", { value: "Banani", children: "Banani" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: "Phone" }), _jsx(Input, { id: "phone", type: "tel", value: currentAddress?.phone, onChange: (e) => setCurrentAddress({ ...currentAddress, phone: e.target.value }), required: true, placeholder: "Phone" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "notes", children: "Delivery Notes" }), _jsx(Textarea, { id: "notes", placeholder: "Add any specific delivery instructions", value: currentAddress?.notes, onChange: (e) => setCurrentAddress({ ...currentAddress, notes: e.target.value }) })] }), _jsx(Label, { children: "Add a label" }), _jsx(LabelOptions, {}), _jsx("div", { className: "space-y-2", children: _jsx(Switch, { checked: isDefaultAddress, onChange: setIsDefaultAddress, label: "Save as default address" }) }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", className: "bg-primary text-white", children: "Save Address" }) })] }) }));
};
export default function CheckoutModal() {
    const { isCheckoutModalOpen, closeCheckoutModal } = useModalStore();
    const [currentStep, setCurrentStep] = React.useState("address");
    const [currentAddress, setCurrentAddress] = React.useState(null);
    const [items, setItems] = React.useState([]);
    const navigate = useNavigate();
    const [t] = useTranslation("global");
    // Load cart items from local storage on component mount
    React.useEffect(() => {
        const storedItems = localStorage.getItem("cart");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);
    const updateQuantity = (id, quantity) => {
        const updatedItems = items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item);
        setItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems)); // Save updated items to localStorage
    };
    console.log(items);
    // calculate total items and total price
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const subtotal = totalPrice;
    const CheckoutContent = () => {
        const [selectedPayment, setSelectedPayment] = React.useState("wallet");
        const [termsAccepted, setTermsAccepted] = React.useState(false);
        const [errorMessage, setErrorMessage] = React.useState(null);
        const handleSubmit = () => {
            if (!termsAccepted) {
                setErrorMessage("Please accept the terms and conditions before proceeding.");
                return;
            }
            setErrorMessage(null);
            // Log the selected payment method
            console.log("Submitting the checkout with payment method:", selectedPayment);
            // Navigate to the OrderDetails page
            navigate("/orderdetails"); // Adjust the path based on your routing setup
        };
        const deliveryCharge = 50;
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal + deliveryCharge;
        return (_jsxs("div", { className: "max-w-md mx-auto bg-white rounded-lg shadow-lg flex flex-col h-[90vh]", children: [_jsxs("div", { className: "p-4 border-b flex items-center gap-2 bg-white z-10", children: [_jsx(Icon, { name: "mapPin" }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-semibold", children: currentAddress?.name }), _jsxs("p", { children: [currentAddress?.address, ", ", currentAddress?.district] })] }), _jsx("button", { onClick: () => setCurrentStep("address"), className: "text-primary hover:text-primary-light", children: "Change" })] }), _jsx("div", { className: "flex-1 overflow-y-auto p-1 custom-scrollbar", children: _jsx("div", { className: "divide-y space-y-4", children: items.map((item, i) => (_jsxs("div", { className: "m-2 flex gap-6", children: [_jsx("div", { className: "w-8 h-8 bg-red-500", children: _jsx("img", { alt: item?.name, className: "h-10 w-10 object-cover", src: "../../../../public/image/products/maggi.webp" }) }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("h3", { className: "font-medium text-sm text-start", children: item?.name.length > 40 ? `${item?.name.slice(0, 30)}...` : item?.name }), _jsxs("p", { className: "text-sm font-medium text-start", children: ["\u09F3", item.price, " x ", item.quantity, " = \u09F3", item.price * item.quantity] })] })] }, i))) }) }), _jsxs("div", { className: "p-4 space-y-4 bg-white border-t", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Total Items:" }), _jsx("span", { children: totalItems })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Subtotal:" }), _jsxs("span", { children: ["\u09F3", subtotal] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Delivery Charge:" }), _jsxs("span", { children: ["\u09F3", deliveryCharge] })] }), _jsxs("div", { className: "flex justify-between font-semibold text-lg", children: [_jsx("span", { children: "Total Price:" }), _jsxs("span", { children: ["\u09F3", total] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold", children: "Payment Option" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => setSelectedPayment("wallet"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "wallet" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: "Wallet" }), _jsx("button", { onClick: () => setSelectedPayment("bkash"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "bkash" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: "Bkash" }), _jsx("button", { onClick: () => setSelectedPayment("nogod"), className: `w-1/3 p-2 border rounded text-center ${selectedPayment === "nogod" ? "bg-primary-default text-white" : "bg-gray-200"}`, children: "Nogod" })] })] }), _jsxs("div", { className: "flex items-center mt-4", children: [_jsx("input", { type: "checkbox", id: "terms", checked: termsAccepted, onChange: (e) => setTermsAccepted(e.target.checked), className: "mr-2" }), _jsxs("label", { htmlFor: "terms", className: "text-sm space-x-2", children: ["I accept the", " ", _jsx(Link, { to: "/help/privacy-policy", target: "", rel: "noopener noreferrer", className: "text-primary underline", children: "Privacy Policy," }), _jsx(Link, { to: "/help/terms", target: "", rel: "noopener noreferrer", className: "text-primary underline", children: "Terms and Conditions." })] })] }), errorMessage && (_jsx("div", { className: "text-red-500 text-sm", children: errorMessage }))] }), _jsx("div", { className: "p-4 border-t bg-white z-10", children: _jsx("button", { onClick: handleSubmit, className: "w-full px-4 py-2 bg-primary-default text-white rounded", children: "Confirm" }) })] }));
    };
    const handleSaveAddress = (address, isDefault) => {
        setCurrentAddress(address);
        setCurrentStep("delivery");
    };
    return (_jsx("div", { className: `fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50 ${isCheckoutModalOpen ? '' : 'hidden'}`, children: _jsxs("div", { className: "max-w-md w-full h-[680px] mt-2 bg-white p-4 rounded-md shadow-lg", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("button", { onClick: closeCheckoutModal, children: _jsx(Icon, { name: "x" }) }) }), currentStep === "address" ? (_jsx(AddressManager, { onSaveAddress: handleSaveAddress })) : (_jsx(CheckoutContent, {}))] }) }));
}
