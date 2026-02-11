import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from 'react';
// import Hero from "./sections/Hero";
// import Stats from "./sections/Stats";
// import Services from "./sections/Services";
// import Features from "./sections/Features";
// import Products from "./sections/Products";
// import HowItWorks from "./sections/HowItWorks";
import LandingHeader from "../common/LandingHeader/LandingHeader";
import Reviews from "./sections/Reviews";
const Landing = () => {
    return (_jsxs("div", { className: "flex flex-col w-full", children: [_jsx(LandingHeader, {}), _jsx(Reviews, {})] }));
};
export default Landing;
