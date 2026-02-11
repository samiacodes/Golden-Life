import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const dummyCourseOrders = [
    { id: 1, courseName: 'Introduction to React', date: '2023-05-15', price: 49.99, status: 'Completed' },
    { id: 2, courseName: 'Advanced JavaScript', date: '2023-05-20', price: 79.99, status: 'In Progress' },
    { id: 3, courseName: 'Python for Beginners', date: '2023-05-25', price: 39.99, status: 'Not Started' },
    { id: 4, courseName: 'Data Science Fundamentals', date: '2023-05-30', price: 89.99, status: 'In Progress' },
    { id: 5, courseName: 'Web Design Basics', date: '2023-06-05', price: 59.99, status: 'Completed' },
];
const CourseOrderTable = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-200 text-green-800';
            case 'In Progress':
                return 'bg-yellow-200 text-yellow-800';
            case 'Not Started':
                return 'bg-red-200 text-red-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Course Orders" }), _jsx("div", { className: "overflow-x-auto shadow-md rounded-lg", children: _jsxs("table", { className: "min-w-full bg-white", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-200 text-gray-600 uppercase text-sm leading-normal", children: [_jsx("th", { className: "py-3 px-6 text-left", children: "Date" }), _jsx("th", { className: "py-3 px-6 text-left", children: "Order No" }), _jsx("th", { className: "py-3 px-6 text-left", children: "Course Name" }), _jsx("th", { className: "py-3 px-6 text-right", children: "Price" }), _jsx("th", { className: "py-3 px-6 text-center", children: "Status" })] }) }), _jsx("tbody", { className: "text-gray-600 text-sm font-light", children: dummyCourseOrders.map((order) => (_jsxs("tr", { className: "border-b border-gray-200 hover:bg-gray-100", children: [_jsx("td", { className: "py-3 px-6 text-left whitespace-nowrap", children: order.date }), _jsxs("td", { className: "py-3 px-6 text-left", children: ["ORD-", order.id.toString().padStart(3, '0')] }), _jsx("td", { className: "py-3 px-6 text-left", children: order.courseName }), _jsxs("td", { className: "py-3 px-6 text-right", children: ["$", order.price.toFixed(2)] }), _jsx("td", { className: "py-3 px-6 text-center", children: _jsx("span", { className: `py-1 px-3 rounded-full text-xs ${getStatusColor(order.status)}`, children: order.status }) })] }, order.id))) })] }) })] }));
};
export default CourseOrderTable;
