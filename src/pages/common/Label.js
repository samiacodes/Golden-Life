import { jsx as _jsx } from "react/jsx-runtime";
export const Label = ({ children, ...props }) => (_jsx("label", { ...props, className: `block text-sm font-medium text-foreground mb-1 ${props.className || ''}`, children: children }));
