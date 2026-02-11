import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Book, Code, Palette, Calculator, Microscope, Globe, Music } from 'lucide-react';
export default function DCourse() {
    const courses = [
        // Row 1
        { name: "Mathematics", icon: _jsx(Calculator, { className: "w-6 h-6" }) },
        { name: "Computer Science", icon: _jsx(Code, { className: "w-6 h-6" }) },
        { name: "Art & Design", icon: _jsx(Palette, { className: "w-6 h-6" }) },
        { name: "Literature", icon: _jsx(Book, { className: "w-6 h-6" }) },
        { name: "Biology", icon: _jsx(Microscope, { className: "w-6 h-6" }) },
        { name: "Geography", icon: _jsx(Globe, { className: "w-6 h-6" }) },
        { name: "Music", icon: _jsx(Music, { className: "w-6 h-6" }) },
        // Row 2
        { name: "Mathematics", icon: _jsx(Calculator, { className: "w-6 h-6" }) },
        { name: "Computer Science", icon: _jsx(Code, { className: "w-6 h-6" }) },
        { name: "Art & Design", icon: _jsx(Palette, { className: "w-6 h-6" }) },
        { name: "Literature", icon: _jsx(Book, { className: "w-6 h-6" }) },
        { name: "Biology", icon: _jsx(Microscope, { className: "w-6 h-6" }) },
        { name: "Geography", icon: _jsx(Globe, { className: "w-6 h-6" }) },
        { name: "Music", icon: _jsx(Music, { className: "w-6 h-6" }) },
        // Row 3
        { name: "Mathematics", icon: _jsx(Calculator, { className: "w-6 h-10" }) },
        { name: "Computer Science", icon: _jsx(Code, { className: "w-6 h-6" }) },
        { name: "Art & Design", icon: _jsx(Palette, { className: "w-6 h-6" }) },
        { name: "Literature", icon: _jsx(Book, { className: "w-6 h-6" }) },
        { name: "Biology", icon: _jsx(Microscope, { className: "w-6 h-6" }) },
        { name: "Geography", icon: _jsx(Globe, { className: "w-6 h-6" }) },
        // { name: "Music", icon: <Music className="w-6 h-6" /> },
    ];
    return (_jsxs("div", { className: "mt-4 ", children: [_jsx("h1", { className: "text-2xl  font-bold mb-2 mt-4 text-center", children: "Course Catagory" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2", children: courses.map((course, index) => (_jsxs("div", { className: "flex flex-col items-center justify-center p-4 border rounded-md bg-white hover:shadow-md transition-shadow", children: [_jsx("div", { className: "mb-2 text-primary", children: course.icon }), _jsx("span", { className: "text-sm font-medium text-gray-700 text-center", children: course.name })] }, index))) })] }));
}
