import { jsx as _jsx } from "react/jsx-runtime";
export const Textarea = (props) => (_jsx("textarea", { ...props, className: `w-full p-2 border rounded bg-background text-foreground ${props.className || ''}` }));
