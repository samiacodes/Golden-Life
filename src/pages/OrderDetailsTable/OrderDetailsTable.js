'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { OrderDetailsModal } from './OrderDetailsModal';
const dummyOrderDetails = [
    { id: 1, date: '2023-05-15', orderNo: 'ORD-001', customer: 'John Doe', total: 145.96, status: 'Delivered' },
    { id: 2, date: '2023-05-16', orderNo: 'ORD-002', customer: 'Jane Smith', total: 89.97, status: 'Shipped' },
    { id: 3, date: '2023-05-17', orderNo: 'ORD-003', customer: 'Bob Johnson', total: 299.99, status: 'Processing' },
    { id: 4, date: '2023-05-18', orderNo: 'ORD-004', customer: 'Alice Brown', total: 74.50, status: 'Pending' },
    { id: 5, date: '2023-05-19', orderNo: 'ORD-005', customer: 'Charlie White', total: 125.75, status: 'Shipped' },
    { id: 6, date: '2023-05-20', orderNo: 'ORD-006', customer: 'Diana Green', total: 89.50, status: 'Delivered' },
];
const OrderDetailsTable = () => {
    const [selectedOrder, setSelectedOrder] = React.useState(null);
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'Processing':
                return 'bg-blue-200 text-blue-800';
            case 'Shipped':
                return 'bg-purple-200 text-purple-800';
            case 'Delivered':
                return 'bg-green-200 text-green-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };
    const handleRowClick = (orderNo) => {
        setSelectedOrder(orderNo);
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Order Details" }), _jsx("div", { className: "overflow-x-auto shadow-md rounded-lg", children: _jsx("div", { className: "overflow-y-auto max-h-[400px]", children: _jsxs("table", { className: "min-w-full bg-white", children: [_jsx("thead", { className: "sticky top-0 bg-gray-200", children: _jsxs("tr", { className: "text-gray-600 uppercase text-sm leading-normal", children: [_jsx("th", { className: "py-3 px-6 text-left", children: "Date" }), _jsx("th", { className: "py-3 px-6 text-center", children: "Order-No" }), _jsx("th", { className: "py-3 px-6 text-left", children: "Customer" }), _jsx("th", { className: "py-3 px-6 text-right", children: "Total" }), _jsx("th", { className: "py-3 px-6 text-center", children: "Status" })] }) }), _jsx("tbody", { className: "text-gray-600 text-sm font-light", children: dummyOrderDetails.map((order) => (_jsxs("tr", { onClick: () => handleRowClick(order.orderNo), className: "border-b border-gray-200 hover:bg-gray-100 cursor-pointer", children: [_jsx("td", { className: "py-3 px-6 text-left whitespace-nowrap", children: order.date }), _jsx("td", { className: "py-3 px-6 text-center", children: order.orderNo }), _jsx("td", { className: "py-3 px-6 text-left", children: order.customer }), _jsxs("td", { className: "py-3 px-6 text-right", children: ["$", order.total.toFixed(2)] }), _jsx("td", { className: "py-3 px-6 text-center", children: _jsx("span", { className: `py-1 px-3 rounded-full text-xs ${getStatusColor(order.status)}`, children: order.status }) })] }, order.id))) })] }) }) }), _jsx(OrderDetailsModal, { isOpen: !!selectedOrder, onClose: () => setSelectedOrder(null), orderId: selectedOrder || '' })] }));
};
export default OrderDetailsTable;
