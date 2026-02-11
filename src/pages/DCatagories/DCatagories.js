import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shirt, Laptop, Pizza, Car, Home, Dumbbell, Smartphone, Watch, Headphones, Camera, Book, Gamepad } from 'lucide-react';
export default function ProductCategories() {
    const products = [
        // Row 1
        { name: "Clothing", icon: _jsx(Shirt, { className: "w-6 h-6" }) },
        { name: "Electronics", icon: _jsx(Laptop, { className: "w-6 h-6" }) },
        { name: "Food & Grocery", icon: _jsx(Pizza, { className: "w-6 h-6" }) },
        { name: "Automotive", icon: _jsx(Car, { className: "w-6 h-6" }) },
        { name: "Home & Garden", icon: _jsx(Home, { className: "w-6 h-6" }) },
        { name: "Sports & Fitness", icon: _jsx(Dumbbell, { className: "w-6 h-6" }) },
        { name: "Mobile Phones", icon: _jsx(Smartphone, { className: "w-6 h-6" }) },
        // Row 2
        { name: "Watches", icon: _jsx(Watch, { className: "w-6 h-6" }) },
        { name: "Audio", icon: _jsx(Headphones, { className: "w-6 h-6" }) },
        { name: "Cameras", icon: _jsx(Camera, { className: "w-6 h-6" }) },
        { name: "Books", icon: _jsx(Book, { className: "w-6 h-6" }) },
        { name: "Gaming", icon: _jsx(Gamepad, { className: "w-6 h-6" }) },
        { name: "Clothing", icon: _jsx(Shirt, { className: "w-6 h-6" }) },
        { name: "Electronics", icon: _jsx(Laptop, { className: "w-6 h-6" }) },
        // Row 3
        { name: "Food & Grocery", icon: _jsx(Pizza, { className: "w-6 h-6" }) },
        { name: "Automotive", icon: _jsx(Car, { className: "w-6 h-6" }) },
        { name: "Home & Garden", icon: _jsx(Home, { className: "w-6 h-6" }) },
        { name: "Sports & Fitness", icon: _jsx(Dumbbell, { className: "w-6 h-6" }) },
        { name: "Mobile Phones", icon: _jsx(Smartphone, { className: "w-6 h-6" }) },
        { name: "Watches", icon: _jsx(Watch, { className: "w-6 h-6" }) },
        // { name: "Audio", icon: <Headphones className="w-6 h-6" /> },
    ];
    return (_jsxs("div", { className: "mt-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-2 mt-4 text-center", children: "Product Category" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2", children: products.map((product, index) => (_jsxs("div", { className: "flex flex-col items-center justify-center p-4 border rounded-md bg-white hover:shadow-md transition-shadow", children: [_jsx("div", { className: "mb-2 text-primary", children: product.icon }), _jsx("span", { className: "text-sm font-medium text-gray-700 text-center", children: product.name })] }, index))) })] }));
}
