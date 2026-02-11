import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Courses() {
    const [t] = useTranslation('global');
    const courses = [
        {
            id: 1,
            name: t("courseNames.webDevelopment"), // Use t() for translation
            icon: "../../../../public/image/courses/c1.avif",
        },
        {
            id: 2,
            name: t("courseNames.blockchain"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 3,
            name: t("courseNames.webDevelopment"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 4,
            name: t("courseNames.dataScience"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 5,
            name: t("courseNames.graphicDesign"), // Use t() for translation
            icon: "../../../../public/image/courses/c2.jpg",
        },
        {
            id: 6,
            name: t("courseNames.digitalMarketing"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 7,
            name: t("courseNames.machineLearning"), // Use t() for translation
            icon: "../../../../public/image/courses/c4.jpg",
        },
        {
            id: 8,
            name: t("courseNames.uiUxDesign"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 9,
            name: t("courseNames.cloudComputing"), // Use t() for translation
            icon: "../../../../public/image/courses/c2.jpg",
        },
        {
            id: 10,
            name: t("courseNames.blockchain"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 11,
            name: t("courseNames.softwareTesting"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
        {
            id: 12,
            name: t("courseNames.bigData"), // Use t() for translation
            icon: "../../../../public/image/courses/c3.png",
        },
    ];
    return (_jsxs("div", { className: "py-10 -mt-6 md:max-w-[1100px] w-[370px] sm:w-full", children: [_jsxs("div", { className: "flex items-center justify-between mb-6 bg-primary-light p-2", children: [_jsx("h2", { className: "text-lg text-white font-medium", children: t('header.title') }), _jsxs(Link, { to: "/all-courses", className: "text-white text-sm font-medium flex items-center hover:underline", children: [t('header.allCourses'), _jsx(ChevronRight, { className: "h-6 w-6" })] })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:max-w-[1240px] sm:w-full", children: courses.map((course) => (_jsxs(Link, { 
                    // to={`/coursepage/${course.id}`}
                    to: '', className: "flex flex-col items-center p-4 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow", children: [_jsx("div", { className: "w-14 h-14 mb-3", children: _jsx("img", { src: course.icon, alt: course.name, className: "w-full h-full object-cover" }) }), _jsx("span", { className: "text-sm text-center text-gray-900 text-nowrap", children: course.name })] }, course.id))) })] }));
}
