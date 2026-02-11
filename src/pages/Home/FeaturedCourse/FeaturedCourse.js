'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from "react-i18next";
export default function FeaturedCourse() {
    const { t } = useTranslation('global'); // Moved this to the top
    const courses = [
        {
            id: '1',
            title: t("course.fb"), // Now t is available here
            instructor: t("name.sakib"),
            price: '1,690',
            promoCode: 'SE1690',
            image: '../../../../public/image/featiredcourse/f4.jpg',
        },
        {
            id: '2',
            title: t("course.yt"), // Now t is available here
            instructor: t("name.ayman"),
            price: '3,850',
            promoCode: 'IELTS3850',
            image: '../../../../public/image/featiredcourse/f3.jpg',
        },
        {
            id: '3',
            title: t("course.seo"), // Now t is available here
            instructor: t("name.shahid"),
            price: '1,690',
            promoCode: 'EMKF1690',
            image: '../../../../public/image/featiredcourse/f2.jpg',
        },
        {
            id: '4',
            title: t("course.smm"), // Now t is available here
            instructor: t("name.ayman"),
            price: '890',
            promoCode: 'FBM890',
            image: '../../../../public/image/featiredcourse/f1.jpg',
        },
    ];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const scrollPrev = React.useCallback(() => {
        if (emblaApi)
            emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = React.useCallback(() => {
        if (emblaApi)
            emblaApi.scrollNext();
    }, [emblaApi]);
    return (_jsx("div", { className: "md:max-w-[1040px] w-[370px] sm:w-full min-h-[400px] py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h1", { className: "text-4xl font-bold text-black mb-4", children: t("course.h") }), _jsx("p", { className: "text-black mb-8", children: t("course.p") }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "overflow-hidden", ref: emblaRef, children: _jsx("div", { className: "flex", children: courses.map((course) => (_jsx("div", { className: "flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4", children: _jsx(Card, { className: "border-0 shadow mb-4", children: _jsxs(CardContent, { className: "p-0 relative", children: [_jsxs("div", { className: "relative pb-[30%]", children: [_jsx("img", { src: course.image, alt: course.title, className: "w-[500px] h-[170px] object-cover rounded-t-lg" }), _jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [_jsx("h3", { className: "text-xl font-bold text-black mb-2", children: course.title }), _jsx("p", { className: "text-gray-600 text-sm", children: course.instructor })] })] }), _jsxs("div", { className: "p-4 space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "text-black", children: [_jsx("span", { className: "text-sm", children: t("sections.price") }), _jsxs("div", { className: "text-2xl font-bold", children: ["\u09F3", course.price] })] }), _jsxs("div", { className: "rounded px-3 py-1", children: [_jsx("span", { className: "text-white text-sm", children: "PROMO CODE" }), _jsx("div", { className: "text-green-400 font-mono font-bold", children: course.promoCode })] })] }), _jsxs("div", { className: "flex justify-between gap-4", children: [_jsx(Button, { className: "w-full bg-green-500 hover:bg-green-600 text-white", children: t("buttons.show") }), _jsx(Button, { className: "w-full bg-gray-400 hover:bg-green-600 text-white", children: t("buttons.enroll") })] })] })] }) }) }, course.id))) }) }), _jsx(Button, { onClick: scrollPrev, className: "absolute -left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-white/20 text-white border-0", "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "h-6 w-6 text-black" }) }), _jsx(Button, { onClick: scrollNext, className: "absolute -right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-white/20 text-white border-0", "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "h-6 w-6 text-black" }) })] })] }) }));
}
