import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, className = '', variant = 'default', ...props }) => {
    const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };
    return (_jsx("button", { className: `${baseStyle} ${variantStyles[variant]} ${className}`, ...props, children: children }));
};
