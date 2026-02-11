import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import useModalStore from '@/store/Store';
import { useTranslation } from 'react-i18next';
export default function ProductCategories() {
    const scrollRef = useRef(null);
    const [cart, setCart] = useState([]);
    const { toggleClicked } = useModalStore();
    const { t } = useTranslation('global');
    const products = [
        { id: 1, title: t('products.onePieceGown'), image: "../../../../public/image/categories/c2.jpg", price: 59.99 },
        { id: 2, title: t('products.smartWatch'), image: "../../../../public/image/categories/c1.jpg", price: 129.99 },
        { id: 3, title: t('products.snapAndGrip'), image: "../../../../public/image/categories/c12.png", price: 19.99 },
        { id: 4, title: t('products.ladiesWinterOvercoat'), image: "../../../../public/image/categories/c3.jpg", price: 89.99 },
        { id: 5, title: t('products.stylishShirt'), image: "../../../../public/image/categories/c13.png", price: 39.99 },
        { id: 6, title: t('products.m19Original'), image: "../../../../public/image/categories/c4.jpg", price: 49.99 },
        { id: 7, title: t('products.m19Original'), image: "../../../../public/image/categories/c15png.jpg", price: 54.99 },
        { id: 8, title: t('products.m19Original'), image: "../../../../public/image/products/sharee3.jpg", price: 79.99 },
    ];
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
    const addToCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingProductIndex = storedCart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            storedCart[existingProductIndex].quantity += 1;
        }
        else {
            storedCart.push({
                ...product,
                price: product.price,
                quantity: 1,
            });
        }
        setCart(storedCart);
        localStorage.setItem("cart", JSON.stringify(storedCart));
        toggleClicked();
    };
    const handleMouseDown = (e) => {
        if (!scrollRef.current)
            return;
        const startX = e.clientX;
        const scrollLeft = scrollRef.current.scrollLeft;
        const handleMouseMove = (moveEvent) => {
            if (!scrollRef.current)
                return;
            const x = moveEvent.clientX;
            const walk = (x - startX) * 1.5;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        };
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    return (_jsx("div", { className: "py-2 shadow mb-5 bg-primary-default md:max-w-[1100px] sm:w-full w-[370px]", children: _jsxs("div", { className: "container mx-auto max-w-5xl px-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("div", { className: "bg-primary-light text-white px-4 py-1 rounded-full text-sm font-medium", children: t('productCategories.heading') }), _jsxs(Link, { to: "/allProducts", className: "text-white text-sm font-medium flex items-center hover:underline", children: [t('productCategories.allProducts'), _jsx(ChevronRight, { className: "h-4 w-4" })] })] }), _jsx("div", { className: "flex overflow-x-auto pb-4 cursor-grab", ref: scrollRef, onMouseDown: handleMouseDown, style: { scrollbarWidth: 'none' }, children: _jsx("div", { className: "flex gap-4", children: products.map((product) => (_jsxs(Link, { to: "#", className: "flex-none w-[190px] group border border-gray-300 rounded-lg p-2", children: [_jsxs("div", { className: "aspect-square rounded-lg overflow-hidden bg-gray-100 relative", children: [_jsx("img", { src: product.image, alt: product.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: _jsxs("span", { className: "text-white text-xl font-bold", children: ["$", product.price.toFixed(2)] }) })] }), _jsx("h3", { className: "mt-2 text-sm font-medium text-white line-clamp-2 text-nowrap", children: product.title }), _jsxs(Button, { size: "sm", variant: "outline", onClick: (e) => {
                                        e.preventDefault();
                                        addToCart(product);
                                    }, className: "w-full mt-2", children: [_jsx(ShoppingCart, { className: "h-4 w-4 mr-2" }), t('buttons.addToCart')] })] }, product.id))) }) })] }) }));
}
