'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { CameraIcon, MapPin, UserIcon, ArrowLeft, Search } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import useModalStore from '@/store/Store';
import logo from '../../../../public/image/logo/logo.jpg';
import { useTranslation } from 'react-i18next';
import LoginOptionsModal from '@/components/LoginoptionsModal';
const products = [
    { id: 1, name: 'Laptop', image: '../../../../public/image/search/laptop.jpg' },
    { id: 2, name: 'Smartphone', image: '../../../../public/image/search/smartphones.jpg' },
    { id: 3, name: 'Headphones', image: '../../../../public/image/search/headphones.jpg' },
    { id: 4, name: 'Camera', image: '../../../../public/image/search/camera.jpg' },
];
const Header = () => {
    const { isLoginModalOpen, openLoginModal, closeLoginModal } = useModalStore();
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [language] = useState('en');
    const cancelButtonRef = useRef(null);
    const [value] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [t, i18n] = useTranslation('global');
    const [isLoginOptionsModalOpen, setIsLoginOptionsModalOpen] = useState(false);
    const [loginMethod, setLoginMethod] = useState(null);
    // const [value, setValue] = useState('');
    // const [phone, setPhone] = useState("");
    // const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {
        if (searchText) {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
            setSuggestions(filteredProducts);
            setShowSuggestions(true);
        }
        else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchText]);
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };
    // const handlePhoneChange = (value: string | undefined) => {
    //     setPhone(value || "");
    //     setErrorMessage(null);
    // };
    const handlePhoneChange = (value) => {
        const newValue = value || "";
        setPhone(newValue); // Update the phone state
        // Validation logic
        if (newValue.length !== 11) {
            setErrorMessage("Phone number must be exactly 11 digits."); // Set error message
            setIsButtonDisabled(true); // Disable the button
        }
        else if (!/^\d+$/.test(newValue)) {
            setErrorMessage("Phone number can only contain digits."); // Only digits are allowed
            setIsButtonDisabled(true); // Disable the button
        }
        else {
            setErrorMessage(null); // Clear the error message
            setIsButtonDisabled(false); // Enable the button
        }
    };
    const handleOtpChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        setErrorMessage(null);
    };
    const handleVerify = () => {
        if (otp.join("").length !== 4) {
            setErrorMessage("Please enter a valid 4-digit OTP");
        }
        else {
            setErrorMessage(null);
            setStep(3);
        }
    };
    const handleSubmit = () => {
        alert("Successfully logged in");
        closeLoginModal();
    };
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
            setErrorMessage(null);
        }
    };
    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            console.log("Image selected:", file.name);
        }
        else {
            alert("Please select a valid image file");
        }
    };
    const handleSearch = () => {
        if (searchText || image) {
            console.log("Searching with:", { text: searchText, image: image?.name });
            setShowSuggestions(false);
        }
        else {
            alert("Please enter text or select an image to search");
        }
    };
    const handleSuggestionClick = (productName) => {
        setSearchText(productName);
        setShowSuggestions(false);
    };
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    console.log(i18n.language); // Should log 'bn' when switched to Bangla
    const openLoginOptionsModal = () => {
        setIsLoginOptionsModalOpen(true);
    };
    const handlePhoneLogin = () => {
        setLoginMethod('phone');
        setIsLoginOptionsModalOpen(false);
        openLoginModal();
    };
    const handleEmailLogin = () => {
        setLoginMethod('email');
        setIsLoginOptionsModalOpen(false);
        openLoginModal();
    };
    return (_jsxs("div", { className: '', children: [_jsxs("header", { className: " shadow md:w-[1100px] sm:w-full w-[370px] fixed top-3  -mt-7 sm:-mt-4 flex items-center justify-between bg-gray-50 p-2 z-10 rounded", children: [_jsxs("div", { className: "relative flex items-center gap-2 w-full p-2", children: [_jsx("input", { type: "text", placeholder: t('header.search'), className: "w-full pr-20 py-2 px-4 text-gray-800 rounded-md bg-gray-100 border-primary-default border", value: searchText, onChange: (e) => setSearchText(e.target.value), onBlur: () => setTimeout(() => setShowSuggestions(false), 200) }), _jsx("input", { type: "file", accept: "image/*", onChange: handleImageChange, className: "hidden", id: "imageInput" }), _jsxs("label", { htmlFor: "imageInput", className: "absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer flex", children: [_jsx(CameraIcon, { className: "h-6 w-6 text-gray-500" }), _jsx("div", { className: "h-5 w-[1px] bg-gray-400 mx-2" })] }), _jsx("button", { className: "absolute right-7 top-1/2 -translate-y-1/2", onClick: handleSearch, children: _jsx(Search, { className: "h-6 w-6 text-gray-500" }) })] }), imagePreview && (_jsx("div", { className: "absolute top-full left-0 mt-2", children: _jsx("img", { src: imagePreview, alt: "Preview", className: "w-10 h-10 object-cover rounded" }) })), showSuggestions && (_jsx("div", { className: "absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20", children: suggestions.length > 0 ? (suggestions.map((product) => (_jsxs("div", { className: "flex items-center p-2 hover:bg-gray-100 cursor-pointer", onClick: () => handleSuggestionClick(product.name), children: [_jsx("img", { src: product.image, alt: product.name, className: "w-10 h-10 mr-2 object-cover" }), _jsx("span", { children: product.name })] }, product.id)))) : (_jsx("div", { className: "p-2 text-gray-500", children: "No products found" })) })), _jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: " items-center border bg-primary-default rounded-full p-2 shadow hidden sm:hidden", children: [_jsx(MapPin, { size: 20, className: "text-white" }), _jsxs("select", { className: "bg-primary-default transition outline-none text-white hidden sm:hidden", children: [_jsx("option", { value: "Dhaka", children: "Dhaka" }), _jsx("option", { value: "Chittagong", children: "Chittagong" }), _jsx("option", { value: "Khulna", children: "Khulna" })] })] }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: toggleDropdown, className: "flex items-center bg-primary-default text-white px-3 py-1 border border-primary-default rounded-full", children: [_jsx(UserIcon, { className: "h-6 w-4" }), _jsx("span", { className: "ml-1 hidden sm:inline", children: t('header.login') })] }), dropdownOpen && (_jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20", children: [_jsx("button", { onClick: openLoginOptionsModal, className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: t('header.login') }), _jsx("button", { className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: t('header.profile') }), _jsx("button", { className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: t('header.settings') }), _jsx(Link, { to: '/dashboard', className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: t('header.dashboard') })] }))] }), _jsxs("div", { className: "flex items-center gap-1 mx-1 bg-primary-default border-gray-400 rounded-full", children: [_jsx("button", { className: `px-3 py-1 ${language === 'en' ? 'text-white' : 'text-gray-500'}`, onClick: () => handleChangeLanguage('en'), children: "EN" }), _jsx("div", { className: "h-6 w-[1px] bg-white mx-2" }), _jsx("button", { className: `px-3 py-1 ${language === 'bn' ? 'text-white' : 'text-gray-500'}`, onClick: () => handleChangeLanguage('bn'), children: "BN" })] })] })] }), _jsx(Transition.Root, { show: isLoginModalOpen, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-10", initialFocus: cancelButtonRef, onClose: closeLoginModal, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [_jsx("button", { type: "button", className: "absolute top-4 right-4 inline-flex items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500", onClick: closeLoginModal, children: t('header.close') }), _jsxs("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsx("img", { className: "mx-auto h-15 w-auto", src: logo, alt: "Your Company" }), _jsx("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: loginMethod === 'phone' ? (_jsxs(_Fragment, { children: [step === 1 && t('header.enterPhoneNumber'), step === 2 && t('header.enterOTP'), step === 3 && t('header.verifyDetails')] })) : (t('header.enterEmail')) })] }), _jsx("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: _jsxs("form", { className: "space-y-6", children: [loginMethod === 'phone' ? (_jsxs(_Fragment, { children: [step === 1 && (_jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium leading-6 text-gray-900", children: t('header.phoneNumber') }), _jsxs("div", { className: "flex flex-col items-start w-full", children: [_jsx(PhoneInput, { id: "phone", name: "phone", value: value, onChange: handlePhoneChange, required: true, defaultCountry: "BD", placeholder: t('header.phoneNumber'), className: "p-4 block w-full rounded-md mb-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), error && _jsx("span", { className: "text-red-500 text-sm mt-1", children: error })] }), _jsx("button", { type: "button", onClick: () => {
                                                                                        if (phone.length < 10) {
                                                                                            setErrorMessage("Please enter a valid phone number");
                                                                                        }
                                                                                        else {
                                                                                            setErrorMessage(null);
                                                                                            setStep(2);
                                                                                        }
                                                                                    }, className: "flex w-full justify-center rounded-md bg-primary-default px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: t('header.next') })] })), step === 2 && (_jsxs("div", { children: [_jsx("div", { className: "mt-2 flex justify-center", children: _jsx("div", { className: "grid grid-cols-4 gap-2", children: otp.map((value, index) => (_jsx("input", { type: "text", value: value, onChange: (e) => handleOtpChange(e, index), maxLength: 1, className: "text-center border p-2 rounded-md" }, index))) }) }), _jsxs("div", { className: "flex justify-center mt-4 gap-4", children: [_jsxs("button", { type: "button", className: "text-gray-500 hover:underline", onClick: handleBack, children: [_jsx(ArrowLeft, { className: "h-5 w-5 inline" }), " ", t('header.back')] }), _jsx("button", { type: "button", onClick: handleVerify, className: "rounded-md bg-primary-default px-3 py-1.5 text-sm font-semibold text-white shadow-sm", children: t('header.verify') })] })] })), step === 3 && (_jsx("div", { children: _jsx("button", { type: "button", onClick: handleSubmit, className: "mt-4 w-full flex justify-center rounded-md bg-primary-default px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: t('header.finish') }) }))] })) : (_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: t('header.email') }), _jsxs("div", { className: "flex flex-col items-start w-full", children: [_jsx(PhoneInput, { id: "phone", name: "phone", value: value, onChange: handlePhoneChange, required: true, defaultCountry: "BD", placeholder: t('header.phoneNumber'), className: "p-4 block w-full rounded-md mb-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), error && _jsx("span", { className: "text-red-500 text-sm mt-1", children: error })] }), _jsx("div", { className: "mt-2", children: _jsx("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", placeholder: 'Password Please', required: true, className: "block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", onChange: (e) => {
                                                                                    if (e.target.value.length < 8) {
                                                                                        setErrorMessage("Password must be at least 8 characters long");
                                                                                    }
                                                                                    else {
                                                                                        setErrorMessage(null);
                                                                                    }
                                                                                } }) }), _jsx("div", { className: "mt-2", children: _jsx("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-primary-default px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: t('header.login') }) })] })), errorMessage && (_jsx("div", { className: "mt-2 text-red-600 text-sm text-center", children: errorMessage }))] }) })] })] }) }) }) })] }) }), _jsx(LoginOptionsModal, { isOpen: isLoginOptionsModalOpen, onClose: () => setIsLoginOptionsModalOpen(false), onPhoneLogin: handlePhoneLogin, onEmailLogin: handleEmailLogin })] }));
};
export default Header;
