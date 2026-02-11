import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShoppingCart, Store, HeartPulse, Smartphone, Airplay, Cloud } from 'lucide-react';
const services = [
    { label: "Shopping", icon: _jsx(ShoppingCart, { size: 24 }), bg: "bg-blue-100" },
    { label: "Food", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Pharmacy", icon: _jsx(HeartPulse, { size: 24 }), bg: "bg-blue-100" },
    { label: "Mobile", icon: _jsx(Smartphone, { size: 24 }), bg: "bg-yellow-100" },
    { label: "Drive Offer", icon: _jsx(Airplay, { size: 24 }), bg: "bg-gray-100" },
    { label: "Cloud Business", icon: _jsx(Cloud, { size: 24 }), bg: "bg-purple-100" },
    { label: "Shopping", icon: _jsx(ShoppingCart, { size: 24 }), bg: "bg-blue-100" },
    { label: "Food", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
    { label: "Grocery", icon: _jsx(Store, { size: 24 }), bg: "bg-green-100" },
];
const Products = () => {
    return (_jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 p-0.5", children: services.map((service, index) => (_jsxs("div", { className: `flex flex-col items-center justify-center rounded-lg shadow p-2 ${service.bg}`, children: [service.icon, _jsx("p", { className: "mt-1 text-xs font-medium text-gray-700", children: service.label })] }, index))) }));
};
export default Products;
