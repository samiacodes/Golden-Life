import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
const CommingSoon = () => {
    const [t] = useTranslation("global");
    return (_jsxs("div", { className: "w-full md:max-w-[1040px] mt-8 mb-4 flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-gray-800", children: t("comming.title1") }), _jsx("p", { className: "mt-4 text-lg text-gray-600", children: t("comming.title2") }), _jsxs("p", { className: "mt-2 text-sm text-gray-500", children: [t("comming.title3"), " ", _jsx("span", { className: "font-medium text-primary-default", children: "[Your Date Here]" })] })] }), _jsxs("div", { className: "mt-8", children: [_jsxs("form", { className: "flex flex-col sm:flex-row items-center gap-4", children: [_jsx("input", { type: "email", placeholder: t("comming.title5"), className: "w-full sm:w-auto px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-default" }), _jsx("button", { type: "submit", className: "px-6 py-2 bg-primary-default text-white rounded-md hover:bg-primary-dark transition", children: t("comming.title6") })] }), _jsx("p", { className: "mt-4 text-sm text-gray-500", children: t("comming.title7") })] })] }));
};
export default CommingSoon;
