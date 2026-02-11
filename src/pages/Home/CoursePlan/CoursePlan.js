import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PlayCircle, Users, Clock } from 'lucide-react'; // Ensure these icons are from 'lucide-react'
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
const CourseStructure = () => {
    const { t } = useTranslation("global"); // Initialize translation hook
    const [showCourseOutline, setShowCourseOutline] = useState(false); // To control CourseOutline visibility
    const openCourseOutline = () => {
        setShowCourseOutline(true); // Show CourseOutline when the button is clicked
    };
    return (_jsx("div", { className: "container mx-auto h-auto", children: _jsxs("div", { className: "p-2 rounded", children: [_jsx("h2", { className: "text-lg font-bold mt-2", children: t('courseStructure.title') }), _jsxs("div", { className: "grid grid-cols-2 gap-4 mt-4 mx-auto", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 bg-red-500 rounded-full", children: _jsx(PlayCircle, { className: "text-white w-6 h-6" }) }), _jsx("p", { className: "ml-4", children: t('features.text1') })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 bg-purple-500 rounded-full", children: _jsx(Users, { className: "text-white w-6 h-6" }) }), _jsx("p", { className: "ml-4", children: t('features.text2') })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 bg-green-500 rounded-full", children: _jsx(Clock, { className: "text-white w-6 h-6" }) }), _jsx("p", { className: "ml-4", children: t('features.text3') })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "p-3 bg-blue-500 rounded-full", children: _jsx(Users, { className: "text-white w-6 h-6" }) }), _jsx("p", { className: "ml-4", children: t('features.text4') })] })] })] }) }));
};
export default CourseStructure;
