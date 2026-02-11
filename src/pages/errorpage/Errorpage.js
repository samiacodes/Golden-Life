import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ErrorPage = () => {
    return (_jsx("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-[#FAC12B]", children: "Oops!" }), _jsx("p", { className: "mt-4 text-xl text-gray-700", children: "Something went wrong." }), _jsx("p", { className: "mt-2 text-gray-600", children: "We're sorry for the inconvenience." }), _jsx("button", { onClick: () => window.location.reload(), className: "mt-6 bg-[#FAC12B] text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300", children: "Reload Page" })] }) }));
};
export default ErrorPage;
