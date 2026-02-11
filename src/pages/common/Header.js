import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
export default function Header() {
    return (_jsx("header", { className: "absolute top-0 left-0 w-full z-20", children: _jsxs("div", { className: "container mx-auto px-5 md:px-8 py-5 flex justify-between items-center", children: [_jsx(Logo, {}), _jsx(AuthButtons, {})] }) }));
}
