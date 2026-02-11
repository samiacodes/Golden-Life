import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../Header";
import Hero from "@/pages/landing/sections/Hero";
export default function LandingHeader() {
    return (_jsxs("div", { className: "relative min-h-screen bg-white overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 h-full sm:w-full md:w-1/2", children: _jsx("img", { src: "https://i.ibb.co.com/hRN1NgxF/landing1.jpg", alt: "Golden Life Hero", className: "h-full w-full object-cover" }) }), _jsx(Header, {}), _jsx(Hero, {})] }));
}
