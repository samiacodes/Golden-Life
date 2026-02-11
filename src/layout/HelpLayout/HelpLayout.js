"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import logo from '../../../public/image/logo/logo.jpg';
import { ChevronRight, SquareTerminal, ShoppingCart, ChefHat, HelpCircleIcon, LogInIcon, XCircle, GraduationCap, Package, Truck, HelpCircle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, } from "@/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import useModalStore from "@/store/Store";
import { useTranslation } from "react-i18next";
// This is sample data.
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
const tabs = [
    { name: 'My Account', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
export default function HelpLayout() {
    const [activeCategory, setActiveCategory] = React.useState("help");
    const location = useLocation();
    const { openLoginModal } = useModalStore();
    const [t] = useTranslation("global");
    const data = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
        },
        categories: [
            { id: "shopping", name: t("categories2.title"), icon: ShoppingCart, path: "/" },
            { id: "courses", name: t("categories2.title1"), icon: GraduationCap, path: "/courses" },
            { id: "percel", name: t("categories2.title2"), icon: Package, path: "/percel" },
            { id: "topup", name: t("categories2.title3"), icon: Package, path: "/topup" },
            { id: "drive", name: t("categories2.title4"), icon: Truck, path: "/drive" },
            { id: "outlet", name: t("categories2.title5"), icon: ChefHat, path: "/outlet" },
            { id: "help", name: t("categories2.title6"), icon: HelpCircle, path: "/help" },
        ],
        navMain: {
            shopping: [],
            courses: [],
            percel: [
                {
                    title: t("navMain.title31"),
                    url: "/percel/services",
                    icon: SquareTerminal,
                    isActive: true,
                    items: [
                    // { title: "Web Development", url: "" },
                    // { title: "Mobile App Development", url: "" },
                    // { title: "Local Delivery", url: "/percel/services/local-delivery" },
                    // { title: "International Shipping", url: "/percel/services/international-shipping" },
                    // { title: "Express Services", url: "/percel/services/express" },
                    // { title: "Tracking", url: "/percel/services/tracking" },
                    ],
                },
            ],
            topup: [],
            drive: [],
            outlet: [],
            help: []
        }
    };
    // Function to render the banner based on the current path
    const getBannerForPage = () => {
        switch (location.pathname) {
            case '/help/our-story':
                return (_jsx("div", { className: "banner our-story-banner", children: _jsx("h1", { children: t("Hmenu.story") }) }));
            case '/help/career':
                return (_jsx("div", { className: "banner career-banner", children: _jsx("h1", { children: t("Hmenu.Career") }) }));
            case '/help/contact':
                return (_jsx("div", { className: "banner contact-banner", children: _jsx("h1", { children: t("Hmenu.ContactUs") }) }));
            case '/help/privacy-policy':
                return (_jsx("div", { className: "banner privacy-policy-banner", children: _jsx("h1", { children: t("Hmenu.PrivacyPolicy") }) }));
            case '/help/terms':
                return (_jsx("div", { className: "banner terms-banner", children: _jsx("h1", { children: t("Hmenu.TermsofUse") }) }));
            default:
                return (_jsx("div", { className: "banner default-banner", children: _jsx("h1", { children: t("Hmenu.WelcometoHelp") }) }));
        }
    };
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleClear = () => {
        setSearchTerm('');
    };
    const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(filteredFaqs);
    return (
    // <div className="flex h-screen">
    _jsxs(SidebarProvider, { className: '', children: [_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx("div", { className: "flex items-center justify-between p-2", children: _jsx("img", { src: logo, alt: "logo", className: "w-full border-b-2 border-gray pb-2" }) }) }), _jsx("div", { className: "px-4 py-3 border-b ", children: _jsx("div", { className: "flex flex-row justify-between gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2  ", children: data.categories.map((category) => (_jsxs(Link, { to: category.path, onClick: () => setActiveCategory(category.id), className: `h-16 w-24 p-3 flex flex-col items-center justify-center rounded ${activeCategory === category.id
                                    ? "bg-primary-default border border-primary-default text-white"
                                    : "border border-primary-default text-gray-700"}`, "aria-label": category.name, children: [(() => {
                                        const Icon = category.icon;
                                        return _jsx(Icon, { className: "h-6 w-6 mb-1" });
                                    })(), _jsx("span", { className: "text-xs", children: category.name })] }, category.id))) }) }), _jsx(SidebarContent, { children: _jsx(SidebarGroup, { children: _jsx(SidebarMenu, { children: data.navMain[activeCategory]?.map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: _jsxs(SidebarMenuItem, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: ['icon' in item && item.icon && (() => {
                                                            const Icon = item.icon;
                                                            return _jsx(Icon, {});
                                                        })(), _jsx("span", { children: item.title }), _jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: 'items' in item && item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx("a", { href: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] }) }, item.title))) || null }) }) }), _jsx(SidebarFooter, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(DropdownMenu, { children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "flex justify-between items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-inner px-4 py-2 ", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs(Link, { to: "/help", className: "flex items-center gap-2", children: [_jsxs("div", { className: "bg-teal-500 rounded-full p-1", children: [_jsx(HelpCircleIcon, { className: "h-4 w-4 text-white" }), " "] }), _jsx("span", { className: "text-teal-600", children: t("help") })] }) }), _jsx("div", { className: "h-6 w-[1px] bg-gray-300 mx-4" }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("button", { className: "flex items-center gap-2", onClick: openLoginModal, children: [_jsxs("div", { className: "bg-blue-400 rounded-full p-1", children: [_jsx(LogInIcon, { className: "h-4 w-4 text-white" }), " "] }), _jsx("span", { className: "text-blue-400", children: t("login") })] }) })] }) }) }) }) }) }), _jsx(SidebarRail, {})] }), _jsx(SidebarInset, { children: _jsxs("main", { className: "", children: [_jsx("section", { className: "bg-primary-default py-20 ", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: getBannerForPage() }), _jsxs("div", { className: "relative max-w-md mx-auto", children: [_jsx("input", { type: "text", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "Type keywords to find an answer", className: "w-full px-4 py-2 rounded-full border-2 border-white text-gray-700 placeholder-gray-400 focus:outline-none" }), searchTerm && (_jsx("button", { onClick: handleClear, className: "absolute top-1/2 right-2 transform -translate-y-1/2 text-green-500", children: _jsx(XCircle, { size: 24 }) }))] })] }) }), _jsx("div", { className: "", children: _jsx("div", { className: "hidden sm:block", children: _jsx("div", { className: "border-b border-gray-200", children: _jsxs("nav", { className: "-mb-px flex space-x-8 justify-center", "aria-label": "Tabs", children: [_jsx(Link, { to: "/help/our-story", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.1") }), _jsx(Link, { to: "/help", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.2") }), _jsx(Link, { to: "/help/career", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.3") }), _jsx(Link, { to: "/help/contact", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.4") }), _jsx(Link, { to: "/help/privacy-policy", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.5") }), _jsx(Link, { to: "/help/terms", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium", children: t("Hmenu.6") })] }) }) }) }), _jsx(Outlet, {})] }) })] })
    // </div>
    );
}
