import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Categories() {
    const [t] = useTranslation('global');
    const categories = [
        {
            id: 1,
            name: t("categories.beautyCare"),
            icon: "../../../../public/image/categories/c1.jpg",
        },
        {
            id: 2,
            name: t("categories.womensApparels"),
            icon: "../../../../public/image/categories/c2.jpg",
        },
        {
            id: 3,
            name: t("categories.mensWear"),
            icon: "../../../../public/image/categories/c13.png",
        },
        {
            id: 4,
            name: t("categories.mobileGadgets"),
            icon: "../../../../public/image/categories/c14.png",
        },
        {
            id: 5,
            name: t("categories.homeDecoration"),
            icon: "../../../../public/image/categories/c15png.jpg",
        },
        {
            id: 6,
            name: t("categories.homeAppliances"),
            icon: "../../../../public/image/categories/c16.png",
        },
        {
            id: 7,
            name: t("categories.toysKidsBabies"),
            icon: "../../../../public/image/categories/c17.png",
        },
        {
            id: 8,
            name: t("categories.kidsFashion"),
            icon: "../../../../public/image/categories/c18.png",
        },
        {
            id: 9,
            name: t("categories.jewelleryAccessories"),
            icon: "../../../../public/image/categories/c19.png",
        },
        {
            id: 10,
            name: t("categories.womensBag"),
            icon: "../../../../public/image/categories/c20.png",
        },
        {
            id: 11,
            name: t("categories.mensBag"),
            icon: "../../../../public/image/categories/c21.png",
        },
        {
            id: 12,
            name: t("categories.watchesAccessories"),
            icon: "../../../../public/image/categories/c1.jpg",
        },
    ];
    return (_jsxs("div", { className: "py-10 -mt-6 md:max-w-[1100px] w-[370px] sm:w-full", children: [_jsxs("div", { className: "flex items-center justify-between mb-6 bg-primary-light p-2", children: [_jsx("h2", { className: "text-lg text-white font-medium", children: t("header.categories") }), _jsxs(Link, { to: "allcategories", className: "text-white text-sm font-medium flex items-center hover:underline", children: [t("header.allCategories"), _jsx(ChevronRight, { className: "h-6 w-6" })] })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2", children: categories.map((category) => (_jsxs(Link, { to: "", className: "flex flex-col items-center p-4 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow", children: [_jsx("div", { className: "w-12 h-12 mb-3", children: _jsx("img", { src: category.icon, alt: category.name, className: "w-full h-full object-contain" }) }), _jsx("span", { className: "text-sm text-center text-gray-900 text-nowrap", children: category.name })] }, category.id))) })] }));
}
