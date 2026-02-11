import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const dummyOrderItems = [
    { id: 1, product: 'Widget A', quantity: 2, unitPrice: 10.99, total: 21.98 },
    { id: 2, product: 'Gadget B', quantity: 1, unitPrice: 24.99, total: 24.99 },
    { id: 3, product: 'Tool C', quantity: 3, unitPrice: 7.50, total: 22.50 },
    { id: 4, product: 'Device D', quantity: 1, unitPrice: 99.99, total: 99.99 },
];
const OrderDetailsTable = () => {
    const orderTotal = dummyOrderItems.reduce((sum, item) => sum + item.total, 0);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Order Details" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full bg-white border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "py-2 px-4 border-b text-left", children: "Product" }), _jsx("th", { className: "py-2 px-4 border-b text-right", children: "Quantity" }), _jsx("th", { className: "py-2 px-4 border-b text-right", children: "Unit Price" }), _jsx("th", { className: "py-2 px-4 border-b text-right", children: "Total" })] }) }), _jsxs("tbody", { children: [dummyOrderItems.map((item) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "py-2 px-4 border-b", children: item.product }), _jsx("td", { className: "py-2 px-4 border-b text-right", children: item.quantity }), _jsxs("td", { className: "py-2 px-4 border-b text-right", children: ["$", item.unitPrice.toFixed(2)] }), _jsxs("td", { className: "py-2 px-4 border-b text-right", children: ["$", item.total.toFixed(2)] })] }, item.id))), _jsxs("tr", { className: "bg-gray-100 font-bold", children: [_jsx("td", { colSpan: 3, className: "py-2 px-4 border-b text-right", children: "Order Total:" }), _jsxs("td", { className: "py-2 px-4 border-b text-right", children: ["$", orderTotal.toFixed(2)] })] })] })] }) })] }));
};
export default OrderDetailsTable;
