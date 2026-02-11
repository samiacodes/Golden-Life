import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
// Import the Public/Landing specific components
// import LandingHeader from "@/pages/common/LandingHeader/LandingHeader"; 
import LandingFooter from "@/pages/common/LandingFooter/LandingFooter";
const LandingLayout = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen font-sans", children: [_jsx("main", { className: "flex-grow bg-[#FFF8DC]", children: _jsx(Outlet, {}) }), _jsx(LandingFooter, {})] }));
};
export default LandingLayout;
