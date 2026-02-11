import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the capital of Switzerland?",
        answer: "The capital of Switzerland is Bern. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What languages are spoken in Switzerland?",
        answer: "Switzerland has four official languages: German, French, Italian, and Romansh.",
    },
    {
        question: "What is the currency of Switzerland?",
        answer: "The currency of Switzerland is the Swiss Franc (CHF).",
    },
    {
        question: "What is Swiss cheese?",
        answer: "Swiss cheese is a generic term for several cheese varieties that are produced in Switzerland.",
    },
    {
        question: "What is the Swiss Alps?",
        answer: "The Swiss Alps are a mountain range located in Switzerland known for their stunning beauty and skiing opportunities.",
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Faq = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-white", children: _jsx("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:px-8 ", children: _jsxs("div", { className: "mx-auto max-w-4xl divide-y divide-gray-900/10", children: [_jsx("h2", { className: "text-4xl font-bold leading-10 tracking-tight text-gray-900", children: "Frequently Asked Questions" }), _jsx("dl", { className: "mt-10 space-y-6 divide-y divide-gray-900/10", children: filteredFaqs.map((faq) => (_jsx(Disclosure, { as: "div", className: "pt-6", children: ({ open }) => (_jsxs(_Fragment, { children: [_jsx("dt", { children: _jsxs(Disclosure.Button, { className: "flex w-full items-start justify-between text-left text-gray-900", children: [_jsx("span", { className: "text-base font-semibold leading-7", children: faq.question }), _jsx("span", { className: "ml-6 flex h-7 items-center", children: open ? (_jsx(MinusSmallIcon, { className: "h-6 w-6", "aria-hidden": "true" })) : (_jsx(PlusSmallIcon, { className: "h-6 w-6", "aria-hidden": "true" })) })] }) }), _jsx(Disclosure.Panel, { as: "dd", className: "mt-2 pr-12", children: _jsx("p", { className: "text-base leading-7 text-gray-600", children: faq.answer }) })] })) }, faq.question))) })] }) }) }) }));
};
export default Faq;
