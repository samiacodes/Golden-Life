import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "./Icon";
export const Select = ({ children, className = '', ...props }) => (_jsxs("div", { className: "relative", children: [_jsx("select", { className: `w-full p-2 border rounded appearance-none bg-background ${className}`, ...props, children: children }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: _jsx(Icon, { name: "chevronDown" }) })] }));
