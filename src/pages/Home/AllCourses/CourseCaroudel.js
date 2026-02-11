import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
const CourseCarousel = ({ courses, title, onSelect, onAddToCart }) => {
    const [t] = useTranslation("global");
    return (_jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: title }), _jsxs(Carousel, { opts: {
                    align: "start",
                    loop: true,
                }, className: "w-full max-w-6xl mx-auto", children: [_jsx(CarouselContent, { children: courses.map((lesson, index) => (_jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3 pl-4", children: _jsx(Card, { className: "border-0 shadow-lg overflow-hidden transition-shadow hover:shadow-xl", children: _jsxs(CardContent, { className: "p-0", children: [_jsxs("div", { className: "relative aspect-[2/1] bg-teal-100", children: [_jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx(Button, { size: "icon", className: "h-16 w-16 rounded-full bg-white/90 hover:bg-white shadow-lg", children: _jsx(Play, { className: "h-8 w-8 text-slate-600 ml-1" }) }) }), _jsx("div", { className: "absolute bottom-2 right-2 bg-white rounded-md px-2 py-1 text-xs", children: lesson.badge })] }), _jsxs("div", { className: "p-4 space-y-2 mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: `w-2 h-2 rounded-full ${lesson.color}` }), _jsx("span", { className: "text-sm text-slate-600", children: lesson.type })] }), _jsxs("h4", { className: "font-medium text-start text-slate-900", children: [lesson.number, " - ", lesson.title] }), _jsxs("div", { className: "flex justify-between gap-4", children: [_jsx(Button, { className: "w-full bg-green-500 hover:bg-green-600 text-white", onClick: () => onSelect(lesson), children: t("buttons.show") }), _jsx(Button, { onClick: (e) => {
                                                                e.preventDefault(); // Prevent default Link behavior
                                                                onAddToCart(lesson); // Add lesson to the cart
                                                            }, className: "w-full bg-gray-400 hover:bg-green-600 text-white", children: t("buttons.addToCart") })] })] })] }) }) }, index))) }), _jsx(CarouselPrevious, { className: "absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-0 bg-white shadow-lg" }), _jsx(CarouselNext, { className: "absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-0 bg-white shadow-lg" })] })] }));
};
export default CourseCarousel;
