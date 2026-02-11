"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import course1 from "../../../../public/image/Banner/Screenshot_3.png"; // Ensure this path is correct
import CourseFeature from "../CourseFeature/CourseFeature";
const CourseOutline = () => {
    const [showCourseFeatures, setShowCourseFeatures] = useState(false); // State to toggle CourseFeature visibility
    const sliderRef = React.useRef(null);
    // const [currentSlide, setCurrentSlide] = React.useState(0);
    // Static course data
    const courses = [
        {
            id: 1,
            title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 586,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kilian Murphy",
                image: "/placeholder.svg",
            },
            price: 40,
            image: "/placeholder.svg",
        },
        {
            id: 6,
            title: "Introduction to Health and Nutrition",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 566,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kate Winslake",
                image: "/placeholder.svg",
            },
            price: 55,
            image: course1, // Correct usage
        },
    ];
    const slideLeft = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth;
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };
    const slideRight = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    const openCourseOutline = () => {
        setShowCourseFeatures(true); // Show the CourseFeature component when button is clicked
    };
    return (_jsxs("div", { className: "px-4 py-6 max-w-[1100px] mx-auto", children: [_jsx("button", { onClick: openCourseOutline, className: "px-6 py-2 bg-primary-default text-white rounded-lg transition-all mb-6", children: "Open Course Feature" }), _jsxs("div", { className: "p-4 bg-gray-100 rounded shadow-md h-[450px]", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Our popular courses" }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("div", { className: "max-w-2xl", children: _jsx("p", { className: "text-muted-foreground", children: "By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance." }) }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "border border-gray-300 rounded p-2 hover:bg-gray-100", onClick: slideLeft, "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), _jsx("button", { className: "border border-gray-300 rounded p-2 hover:bg-gray-100", onClick: slideRight, "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "h-4 w-4" }) })] })] }), _jsx("div", { ref: sliderRef, className: "flex overflow-x-hidden scroll-smooth", "aria-live": "polite", children: courses.map((course) => (_jsxs(Card, { className: "flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4 mr-6", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: course.image, alt: course.title, width: 400, height: 200, className: "object-cover w-full h-48 rounded-md" }), _jsxs("div", { className: "absolute top-2 right-2 flex gap-2", children: [_jsxs("button", { className: "bg-white rounded-full p-2 shadow hover:bg-gray-100", children: [_jsx(ShoppingCart, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Add to cart" })] }), _jsxs("button", { className: "bg-white rounded-full p-2 shadow hover:bg-gray-100", children: [_jsx(Heart, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Add to favorites" })] })] })] }), _jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx(Badge, { variant: "secondary", children: course.level }), _jsx(Badge, { variant: "secondary", children: course.category })] }), _jsx("h3", { className: "font-semibold mb-2 line-clamp-2", children: course.title }), _jsxs("div", { className: "flex items-center gap-1 mb-4", children: [_jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}` }, i))) }), _jsxs("span", { className: "text-sm text-muted-foreground", children: [course.rating, " (", course.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-4", children: [_jsx("div", { className: "flex items-center gap-1", children: _jsx("span", { children: course.duration }) }), _jsx("div", { className: "flex items-center gap-1", children: _jsxs("span", { children: [course.lessons, " Lessons"] }) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: course.instructor.image, alt: course.instructor.name, width: 32, height: 32, className: "rounded-full" }), _jsx("span", { className: "text-sm font-medium", children: course.instructor.name })] }), _jsxs("span", { className: "font-bold", children: ["$", course.price] })] })] })] }, course.id))) }), showCourseFeatures && _jsx(CourseFeature, {})] })] }));
};
export default CourseOutline;
