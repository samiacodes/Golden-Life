"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useModalStore from "@/store/Store";
import { useTranslation } from "react-i18next";
export default function FreshSell() {
    const [t] = useTranslation('global');
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 30,
        seconds: 0,
    });
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const [cart, setCart] = useState([]);
    const { toggleClicked } = useModalStore();
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                }
                else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                }
                else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const products = [
        {
            id: 1,
            name: t('products.Silk Katan Saree'),
            image: "../../../../public/image/products/sharee2.jpg",
            originalPrice: 829,
            discountedPrice: 813,
            progress: 75,
        },
        {
            id: 2,
            name: t('products.EidCollection'),
            image: "../../../../public/image/products/watch.jpg",
            originalPrice: 1165,
            discountedPrice: 981,
            progress: 60,
        },
        {
            id: 3,
            name: t('products.SkatingShoe'),
            image: "../../../../public/image/products/shoe.jpg",
            originalPrice: 2820,
            discountedPrice: 2120,
            progress: 85,
        },
        {
            id: 4,
            name: t('products.samsungGalaxy'),
            image: "../../../../public/image/products/sharee3.jpg",
            originalPrice: 460,
            discountedPrice: 348,
            progress: 45,
        },
        {
            id: 5,
            name: t('products.LadisWatchwith'),
            image: "../../../../public/image/categories/c1.jpg",
            originalPrice: 480,
            discountedPrice: 435,
            progress: 90,
        },
        {
            id: 6,
            name: t('products.pulseOximeter'),
            image: "../../../../public/image/products/pulseoximeter.jpg",
            originalPrice: 1180,
            discountedPrice: 1157,
            progress: 30,
        },
    ];
    const handleMouseDown = (e) => {
        if (scrollRef.current) {
            isDraggingRef.current = true;
            startXRef.current = e.clientX - scrollRef.current.offsetLeft;
            scrollLeftRef.current = scrollRef.current.scrollLeft;
            scrollRef.current.style.cursor = "grabbing";
            scrollRef.current.addEventListener("mousemove", handleMouseMove);
            scrollRef.current.addEventListener("mouseup", handleMouseUp);
            scrollRef.current.addEventListener("mouseleave", handleMouseUp);
        }
    };
    const handleMouseMove = (e) => {
        if (!isDraggingRef.current || !scrollRef.current)
            return;
        const x = e.clientX - scrollRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5; // Adjust the speed here
        scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    };
    const handleMouseUp = () => {
        isDraggingRef.current = false;
        if (scrollRef.current) {
            scrollRef.current.removeEventListener("mousemove", handleMouseMove);
            scrollRef.current.removeEventListener("mouseup", handleMouseUp);
            scrollRef.current.removeEventListener("mouseleave", handleMouseUp);
            scrollRef.current.style.cursor = "grab"; // Reset cursor
        }
    };
    const addToCart = (product) => {
        // Retrieve existing cart items from localStorage
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        // Check if the product already exists in the cart
        const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            // If the product exists, update the quantity
            existingCart[existingProductIndex].quantity += 1;
        }
        else {
            // If the product does not exist, add it to the cart
            existingCart.push({
                ...product,
                price: product.discountedPrice, // Use the discounted price as price
                quantity: 1, // Initialize quantity to 1
            });
        }
        // Update state and localStorage
        setCart(existingCart);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        // Trigger update in other components
        toggleClicked();
    };
    return (_jsxs("div", { className: "md:max-w-[1100px] w-[370px] sm:w-full", children: [_jsxs("div", { className: "bg-orange-500 text-white px-4 py-3 flex items-center justify-between", children: [_jsx("span", { className: "font-medium", children: t('sections.freshSell') }), _jsxs("div", { className: "flex gap-1", children: [_jsx("span", { children: String(timeLeft.hours).padStart(2, '0') }), _jsx("span", { children: ":" }), _jsx("span", { children: String(timeLeft.minutes).padStart(2, '0') }), _jsx("span", { children: ":" }), _jsx("span", { children: String(timeLeft.seconds).padStart(2, '0') })] }), _jsxs(Link, { to: "/allProducts", className: "flex items-center hover:underline", children: [t('header.allProducts'), _jsx(ChevronRight, { className: "h-4 w-4" })] })] }), _jsx("div", { className: "flex gap-4 overflow-x-auto cursor-grab", ref: scrollRef, onMouseDown: handleMouseDown, style: { scrollbarWidth: 'none' }, children: products.map((product) => (_jsxs("div", { className: "flex-none w-[200px] md:w-[200px] bg-white overflow-hidden hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "aspect-square", children: _jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" }) }), _jsxs("div", { className: "p-3", children: [_jsx("h3", { className: "text-sm font-medium line-clamp-2 mb-2", children: product.name }), _jsxs("div", { className: "flex items-baseline gap-2 mb-2", children: [_jsxs("span", { className: "text-lg font-bold", children: ["\u09F3 ", product.discountedPrice] }), _jsxs("span", { className: "text-sm text-gray-500 line-through", children: ["\u09F3 ", product.originalPrice] })] }), _jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-orange-500 rounded-full", style: { width: `${product.progress}%` } }) }), _jsxs(Button, { size: "sm", variant: "outline", onClick: (e) => {
                                        e.preventDefault(); // Prevent default Link behavior
                                        addToCart(product); // Add product to the cart
                                    }, className: "w-full mt-2", children: [_jsx(ShoppingCart, { className: "h-4 w-4 mr-2" }), t('buttons.addToCart')] })] })] }, product.id))) })] }));
}
