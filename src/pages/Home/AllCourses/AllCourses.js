'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, } from "@/components/ui/dialog";
import Coursecatagory2 from "../Coursecatagory2/Coursecatagory2";
import CourseInstructor from "../Courseinstructor/CourseInstructor";
import CoursePlan from "../CoursePlan/CoursePlan";
import CourseDetails from "../CourseDetails/CourseDetails";
import CourseFeatures from "../CourseFeature/CourseFeature";
import { useTranslation } from "react-i18next";
import CourseCarousel from "@/pages/Home/AllCourses/CourseCaroudel";
//const CourseCarousel: React.FC<{ ... }> = ({ courses, title, onSelect, onAddToCart }) => { ... }
export default function AllCourses() {
    // const { changeCheckoutModal, toggleClicked } = useModalStore();
    const [selectedLesson, setSelectedLesson] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState("instructor");
    const [cart, setCart] = React.useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = React.useState(false);
    const { t } = useTranslation("global"); // Update here
    const scrollLeftRef = React.useRef(0);
    // const [cart, setCart] = React.useState<any[]>([]);
    const lessons = [
        {
            id: "1",
            type: t("type.1"), // Update here
            number: "2.1",
            title: t("title.2"), // Update here
            thumbnail: "/placeholder.svg?height=200&width=400",
            color: "bg-purple-500",
            badge: t("badge.HSC"), // Update here
            image: "/placeholder.svg?height=400&width=800",
            instructor: "Dr. Rahim Khan",
            rating: 4.8,
            studentsEnrolled: 1500,
            duration: "8 weeks",
            level: "Intermediate",
            category: "Mathematics",
        },
        {
            id: "2",
            type: t("type.2"), // Update here
            number: "8.1",
            title: t("title.3"), // Update here
            thumbnail: "/placeholder.svg?height=200&width=400",
            color: "bg-blue-500",
            badge: t("badge.JSC"), // Update here
            image: "/placeholder.svg?height=400&width=800",
            instructor: "Prof. Salma Begum",
            rating: 4.7,
            studentsEnrolled: 2000,
            duration: "6 weeks",
            level: "Beginner",
            category: "Physics",
        },
        {
            id: "3",
            type: t("type.5"), // Update here
            number: "8.1",
            title: t("title.1"), // Update here
            thumbnail: "/placeholder.svg?height=200&width=400",
            color: "bg-blue-500",
            badge: t("badge.SSC"), // Update here
            image: "/placeholder.svg?height=400&width=800",
            instructor: "Prof. Salma Begum",
            rating: 4.7,
            studentsEnrolled: 2000,
            duration: "6 weeks",
            level: "Beginner",
            category: "Physics",
        },
        {
            id: "4",
            type: t("type.4"), // Update here
            number: "8.1",
            title: t("title.2"), // Update here
            thumbnail: "/placeholder.svg?height=200&width=400",
            color: "bg-blue-500",
            badge: t("badge.PSC"), // Update here
            image: "/placeholder.svg?height=400&width=800",
            instructor: "Prof. Salma Begum",
            rating: 4.7,
            studentsEnrolled: 2000,
            duration: "6 weeks",
            level: "Beginner",
            category: "Physics",
        },
        // Add more lessons here...
    ];
    // const addToCart = (product: Product) => {
    //   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    //   const updatedCart = [...existingCart, {
    //     ...product,
    //     quantity: 1
    //   }];
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    // };
    const handleCourseSelect = (lesson) => {
        setSelectedLesson(lesson);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLesson(null);
    };
    // const addToCart = (lesson: Lesson) => {
    //   setCart((prevCart) => [...prevCart, lesson])
    //   setIsCartModalOpen(true)
    // }
    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };
    const addToCart = (lesson) => {
        // Retrieve existing cart items from localStorage
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        // Check if the lesson already exists in the cart
        const existingLessonIndex = existingCart.findIndex((item) => item.id === lesson.id);
        if (existingLessonIndex !== -1) {
            // If the lesson exists, update the quantity
            existingCart[existingLessonIndex].quantity += 1;
        }
        else {
            // If the lesson does not exist, add it to the cart
            existingCart.push({
                ...lesson,
                quantity: 1, // Initialize quantity to 1
            });
        }
        // Update state and localStorage
        setCart(existingCart);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        // Trigger update in other components
        // toggleClicked();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Coursecatagory2, {}), _jsxs("div", { className: "sm:w-full md:max-w-[1040px] w-[385px] mt-8 mb-4", children: [_jsxs("div", { className: "space-y-12", children: [_jsx(CourseCarousel, { courses: lessons.slice(0, 4), title: t("Popular Courses"), onSelect: handleCourseSelect, onAddToCart: addToCart }), _jsx(CourseCarousel, { courses: lessons, title: t("All Courses"), onSelect: handleCourseSelect, onAddToCart: addToCart })] }), isModalOpen && selectedLesson && (_jsx(Dialog, { open: isModalOpen, onOpenChange: closeModal, children: _jsxs(DialogContent, { className: "max-w-4xl", children: [_jsx(DialogHeader, {}), _jsxs("div", { className: "overflow-y-auto max-h-[80vh]", children: [_jsxs("div", { className: "relative w-full bg-cover bg-center text-white", style: { backgroundImage: `url(${selectedLesson.image})` }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), _jsx("div", { className: "relative z-10 h-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center", children: _jsxs("div", { className: "space-y-6 text-start", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: selectedLesson.title }), _jsxs("p", { className: "text-xl", children: ["Taught by ", _jsx("span", { className: "font-semibold", children: selectedLesson.instructor })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "w-5 h-5 text-yellow-400" }), _jsx("span", { className: "ml-1 font-medium", children: selectedLesson.rating })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Users, { className: "w-5 h-5" }), _jsxs("span", { className: "ml-1", children: [selectedLesson.studentsEnrolled.toLocaleString(), " students"] })] })] }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsxs(Badge, { className: "text-sm py-1 px-2 bg-white/20 text-white flex items-center", children: [_jsx(Clock, { className: "w-4 h-4 mr-1" }), selectedLesson.duration] }), _jsx(Badge, { className: "text-sm py-1 px-2 bg-white/20 text-white", children: selectedLesson.level }), _jsx(Badge, { className: "text-sm py-1 px-2 bg-white/20 text-white", children: selectedLesson.category })] })] }) })] }), _jsxs("div", { className: "p-2", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "flex space-x-4 bg-gray-200 p-1 rounded-md shadow", children: ["instructor", "structure", "details", "feature", "Add To cart"].map((tab) => (_jsx("button", { onClick: () => setSelectedTab(tab), "aria-selected": selectedTab === tab, className: `px-2 py-1 rounded-md transition-all duration-300 ${selectedTab === tab
                                                                ? "bg-primary-default text-white"
                                                                : "bg-gray-200 hover:bg-gray-300"}`, children: tab.charAt(0).toUpperCase() + tab.slice(1) }, tab))) }) }), _jsxs("div", { children: [selectedTab === "instructor" && _jsx(CourseInstructor, {}), selectedTab === "structure" && _jsx(CoursePlan, {}), selectedTab === "details" && _jsx(CourseDetails, {}), selectedTab === "feature" && _jsx(CourseFeatures, {})] })] })] })] }) }))] })] }));
}
