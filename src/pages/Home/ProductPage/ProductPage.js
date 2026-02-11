import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
const products = [
    {
        id: 1,
        name: "Potato Regular",
        image: "../../../../public/image/products/sharee3.jpg",
        weight: "600 gm",
        price: 39,
        mrp: 45,
        description: "Regular potatoes, perfect for home cooking. Rich in carbohydrates and minerals."
    },
    {
        id: 2,
        name: "Lal Alu (Red Potato Cardinal)",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 65,
        mrp: 70,
        description: "Red Potatoes Cardinal, mainly used for home cooking. Rich in vitamins and minerals."
    },
    {
        id: 3,
        name: "Roshun (Garlic Imported)",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 119,
        mrp: 125,
        description: "Imported garlic, known for its strong flavor and health benefits."
    },
    {
        id: 4,
        name: "Lal Peyaj (Onion Red Imported)",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 119,
        mrp: 130,
        description: "Imported red onions, essential for everyday cooking."
    },
    {
        id: 5,
        name: "Tomato",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 30,
        mrp: 35,
        description: "Fresh, ripe tomatoes perfect for salads and cooking."
    },
    {
        id: 6,
        name: "Carrot",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 40,
        mrp: 45,
        description: "Crunchy carrots loaded with vitamins, perfect for snacking and cooking."
    },
    {
        id: 7,
        name: "Cucumber",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 25,
        mrp: 30,
        description: "Fresh cucumbers, great for salads and hydration."
    },
    {
        id: 8,
        name: "Spinach",
        image: "../../../public/image/maggi.webp",
        weight: "250 gm",
        price: 15,
        mrp: 20,
        description: "Fresh spinach packed with iron and nutrients."
    },
    {
        id: 9,
        name: "Broccoli",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 80,
        mrp: 90,
        description: "Fresh broccoli, rich in fiber and antioxidants."
    },
    {
        id: 10,
        name: "Cauliflower",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 50,
        mrp: 60,
        description: "Fresh cauliflower, great for stir-fries and curries."
    },
    {
        id: 11,
        name: "Green Beans",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 40,
        mrp: 45,
        description: "Tender green beans, perfect for salads and side dishes."
    },
    {
        id: 12,
        name: "Capsicum",
        image: "../../../public/image/maggi.webp",
        weight: "250 gm",
        price: 25,
        mrp: 30,
        description: "Fresh capsicum, perfect for adding flavor to dishes."
    },
    {
        id: 13,
        name: "Pumpkin",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 30,
        mrp: 35,
        description: "Pumpkin rich in vitamins, ideal for soups and curries."
    },
    {
        id: 14,
        name: "Ginger",
        image: "../../../public/image/maggi.webp",
        weight: "250 gm",
        price: 30,
        mrp: 35,
        description: "Fresh ginger, a must-have for aromatic dishes."
    },
    {
        id: 15,
        name: "Garlic Local",
        image: "../../../public/image/maggi.webp",
        weight: "250 gm",
        price: 45,
        mrp: 50,
        description: "Locally sourced garlic with a mild flavor."
    },
    {
        id: 16,
        name: "Beetroot",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 35,
        mrp: 40,
        description: "Nutritious beetroots, perfect for salads and juices."
    },
    {
        id: 17,
        name: "Lettuce",
        image: "../../../public/image/maggi.webp",
        weight: "250 gm",
        price: 20,
        mrp: 25,
        description: "Fresh lettuce for healthy salads."
    },
    {
        id: 18,
        name: "Green Chilies",
        image: "../../../public/image/maggi.webp",
        weight: "100 gm",
        price: 10,
        mrp: 12,
        description: "Spicy green chilies to add heat to your dishes."
    },
    {
        id: 19,
        name: "Bitter Gourd",
        image: "../../../public/image/maggi.webp",
        weight: "500 gm",
        price: 30,
        mrp: 35,
        description: "Bitter gourd with unique taste and health benefits."
    },
    {
        id: 20,
        name: "Brinjal",
        image: "../../../public/image/maggi.webp",
        weight: "1 kg",
        price: 40,
        mrp: 45,
        description: "Fresh brinjal, perfect for curries and stir-fries."
    }
];
export default function ProductPage() {
    const { id } = useParams(); // Retrieve the id from the URL
    const productId = Number(id); // Convert id to a number if needed
    const [selectedProduct, setSelectedProduct] = useState(products.find((product) => product.id === productId) || null);
    const [quantities, setQuantities] = useState(Object.fromEntries(products.map((p) => [p.id, 1])));
    const updateQuantity = (productId, delta) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: Math.max(1, (prev[productId] || 1) + delta),
        }));
    };
    const discount = (mrp, price) => {
        return Math.round(((mrp - price) / mrp) * 100);
    };
    return (_jsxs("div", { className: "container mx-auto p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Fresh Vegetables" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4", children: products.map((product) => (_jsxs("div", { className: "border rounded-lg shadow-sm relative", children: [_jsx("button", { className: "absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors", onClick: () => console.log('Add to wishlist'), children: _jsx(Heart, { className: "w-5 h-5 text-red-500" }) }), _jsx("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover rounded-t-lg p-4" // Image spans full width and fills container
                         }), _jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("h3", { className: "font-semibold", children: product.name }), _jsx("p", { className: "text-sm text-gray-600", children: product.weight }), " "] }), _jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsxs("span", { className: "text-xl font-bold", children: ["\u20B9", product.price] }), _jsxs("span", { className: "text-sm text-gray-500 line-through", children: ["\u20B9", product.mrp] }), _jsxs("span", { className: "text-sm text-red-500", children: [discount(product.mrp, product.price), "% OFF"] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50", onClick: () => setSelectedProduct(product), children: "Show" }), _jsx("button", { className: "flex-1 px-4 py-2 bg-primary-default text-white rounded-md ", children: "Add to cart" })] })] })] }, product.id))) }), selectedProduct && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4", children: _jsxs("div", { className: "bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto", children: [_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: selectedProduct.name }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsx("img", { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full rounded-lg" }), _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-lg", children: selectedProduct.weight }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-2xl font-bold", children: ["\u20B9", selectedProduct.price] }), _jsxs("span", { className: "text-gray-500 line-through", children: ["\u20B9", selectedProduct.mrp] }), _jsxs("span", { className: "text-sm text-red-500 bg-red-50 px-2 py-1 rounded", children: [discount(selectedProduct.mrp, selectedProduct.price), "% OFF"] })] }), _jsxs("div", { className: "flex items-center gap-4 border rounded-md p-2 w-fit", children: [_jsx("button", { onClick: () => updateQuantity(selectedProduct.id, -1), className: "w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100", children: "-" }), _jsxs("span", { className: "w-12 text-center", children: [quantities[selectedProduct.id], " in bag"] }), _jsx("button", { onClick: () => updateQuantity(selectedProduct.id, 1), className: "w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100", children: "+" })] }), _jsx("p", { className: "text-gray-600", children: selectedProduct.description }), _jsx("button", { className: "w-full px-4 py-2 bg-primary-default text-white rounded-md ", children: "Buy Now" }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center", children: "\uD83D\uDE9A" }), "30 minute delivery"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center", children: "\uD83D\uDCB0" }), "Cash on delivery"] })] })] })] })] }), _jsx("div", { className: "border-t px-6 py-3 flex justify-end", children: _jsx("button", { className: "px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300", onClick: () => setSelectedProduct(null), children: "Close" }) })] }) }))] }));
}
