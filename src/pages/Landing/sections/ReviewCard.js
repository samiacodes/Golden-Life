import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Quote } from "lucide-react"; // Make sure you have lucide-react installed
const ReviewCard = ({ review }) => {
    return (_jsxs("div", { className: "h-full p-8 rounded-2xl text-white bg-gradient-to-br from-primary to-secondary flex flex-col shadow-xl relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" }), _jsx(Quote, { className: "w-10 h-10 mb-6 opacity-80" }), _jsxs("p", { className: "text-lg leading-relaxed flex-grow mb-8 italic", children: ["\"", review.content, "\""] }), _jsxs("div", { className: "flex items-center mt-auto", children: [_jsx("img", { src: review.image, alt: review.name, className: "w-14 h-14 rounded-full border-2 border-white mr-4 object-cover" }), _jsxs("div", { children: [_jsx("h4", { className: "text-xl font-bold", children: review.name }), _jsx("p", { className: "text-sm opacity-90", children: review.role })] })] })] }));
};
export default ReviewCard;
