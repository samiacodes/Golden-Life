'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../../public/image/logo/logo.jpg';
import { ChevronRight, ChefHat, HelpCircleIcon, LogInIcon, ShoppingBag, ShoppingCart, GraduationCap, Package, Truck, Lightbulb, Book, Zap, Users, DollarSign, Leaf, Microscope, Heart, Calculator, Globe, Camera, Briefcase, Palette, Code } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, } from "@/components/ui/sidebar";
import Footer from "@/pages/common/Footer/Footer";
import useModalStore from "@/store/Store";
import Cart from "@/pages/Home/Cart/Cart";
import LiveChat from "@/pages/Home/LiveChat/Livechat";
import CourseHeader from "@/pages/common/CourseHeader/CourseHeader";
import { useTranslation } from "react-i18next";
export default function CourseLayout() {
    const [activeCategory, setActiveCategory] = React.useState("courses");
    const { openLoginModal, toggleClicked, changeCheckoutModal } = useModalStore();
    const [t] = useTranslation("global");
    const data = {
        categories: [
            { id: "shopping", name: t("categories2.title"), icon: ShoppingCart, path: "/" },
            { id: "courses", name: t("categories2.title1"), icon: GraduationCap, path: "/courses" },
            { id: "percel", name: t("categories2.title2"), icon: Package, path: "/percel" },
            { id: "topup", name: t("categories2.title3"), icon: Package, path: "/topup" },
            { id: "drive", name: t("categories2.title4"), icon: Truck, path: "/drive" },
            { id: "cookups", name: t("categories2.title5"), icon: ChefHat, path: "/outlet" },
        ],
        navMain: {
            courses: [
                // {
                //     title: t("navMain.title30"),
                //     url: "/courses/programming",
                //     icon: SquareTerminal,
                //     isActive: true,
                //     items: [
                //         // { title: "Web Development", url: "" },
                //         // { title: "Mobile App Development", url: "" },
                //         // { title: "Data Science", url: "/courses/programming/data-science" },
                //         // { title: "Machine Learning", url: "/courses/programming/machine-learning" },
                //         // { title: "Game Development", url: "/courses/programming/game-development" },
                //         // { title: "Cloud Computing", url: "/courses/programming/cloud-computing" },
                //     ],
                // },
                // {
                //     title: t("navMain.title15"),
                //     url: "/courses/business",
                //     icon: Pill,
                //     items: [
                //         // { title: "Entrepreneurship", url: "/courses/business/entrepreneurship" },
                //         // { title: "Marketing", url: "/courses/business/marketing" },
                //         // { title: "Finance", url: "/courses/business/finance" },
                //         // { title: "Project Management", url: "/courses/business/project-management" },
                //         // { title: "Leadership", url: "/courses/business/leadership" },
                //     ],
                // },
                {
                    title: t("navMain.title16"),
                    url: "/courses/design",
                    icon: ShoppingBag,
                    items: [
                    // { title: "Graphic Design", url: "/courses/design/graphic-design" },
                    // { title: "UX/UI Design", url: "/courses/design/ux-ui-design" },
                    // { title: "3D Modeling", url: "/courses/design/3d-modeling" },
                    // { title: "Animation", url: "/courses/design/animation" },
                    // { title: "Illustration", url: "/courses/design/illustration" },
                    ],
                },
                {
                    title: t("navMain.title17"),
                    url: "",
                    icon: Code,
                    isActive: true,
                    items: [
                    // { title: "Web Development", url: "" },
                    // { title: "Mobile App Development", url: "" },
                    // { title: "Data Science", url: "" },
                    // { title: "Machine Learning", url: "" },
                    // { title: "Cloud Computing", url: "" },
                    // { title: "Cybersecurity", url: "" },
                    ],
                },
                {
                    title: t("navMain.title18"),
                    url: "",
                    icon: Palette,
                    items: [
                    // { title: "Graphic Design", url: "" },
                    // { title: "UX/UI Design", url: "" },
                    // { title: "3D Modeling", url: "" },
                    // { title: "Animation", url: "" },
                    // { title: "Illustration", url: "" },
                    ],
                },
                {
                    title: t("navMain.title19"),
                    url: "",
                    icon: Briefcase,
                    items: [
                    // { title: "Entrepreneurship", url: "" },
                    // { title: "Marketing", url: "" },
                    // { title: "Finance", url: "" },
                    // { title: "Project Management", url: "" },
                    // { title: "Leadership", url: "" },
                    ],
                },
                {
                    title: t("navMain.title20"),
                    url: "",
                    icon: Camera,
                    items: [
                    // { title: "Digital Photography", url: "" },
                    // { title: "Portrait Photography", url: "" },
                    // { title: "Landscape Photography", url: "" },
                    // { title: "Photo Editing", url: "" },
                    ],
                },
                {
                    title: t("navMain.title21"),
                    url: "",
                    icon: Globe,
                    items: [
                    // { title: "English", url: "" },
                    // { title: "Spanish", url: "" },
                    // { title: "Mandarin", url: "" },
                    // { title: "French", url: "" },
                    // { title: "German", url: "" },
                    ],
                },
                {
                    title: t("navMain.title22"),
                    url: "",
                    icon: Calculator,
                    items: [
                    // { title: "Algebra", url: "" },
                    // { title: "Calculus", url: "" },
                    // { title: "Statistics", url: "" },
                    // { title: "Geometry", url: "" },
                    ],
                },
                {
                    title: t("navMain.title23"),
                    url: "",
                    icon: Heart,
                    items: [
                    // { title: "Nutrition", url: "" },
                    // { title: "Yoga", url: "" },
                    // { title: "Personal Training", url: "" },
                    // { title: "Mental Health", url: "" },
                    ],
                },
                {
                    title: t("navMain.title24"),
                    url: "",
                    icon: Microscope,
                    items: [
                    // { title: "Physics", url: "" },
                    // { title: "Chemistry", url: "" },
                    // { title: "Biology", url: "" },
                    // { title: "Astronomy", url: "" },
                    ],
                },
                {
                    title: t("navMain.title25"),
                    url: "",
                    icon: Leaf,
                    items: [
                    // { title: "Climate Change", url: "" },
                    // { title: "Sustainability", url: "" },
                    // { title: "Conservation", url: "" },
                    // { title: "Renewable Energy", url: "" },
                    ],
                },
                {
                    title: t("navMain.title26"),
                    url: "",
                    icon: DollarSign,
                    items: [
                    // { title: "Investing", url: "" },
                    // { title: "Budgeting", url: "" },
                    // { title: "Retirement Planning", url: "" },
                    // { title: "Tax Planning", url: "" },
                    ],
                },
                {
                    title: t("navMain.title27"),
                    url: "",
                    icon: Users,
                    items: [
                    // { title: "Psychology", url: "" },
                    // { title: "Sociology", url: "" },
                    // { title: "Anthropology", url: "" },
                    // { title: "Political Science", url: "" },
                    ],
                },
                {
                    title: t("navMain.title28"),
                    url: "",
                    icon: Zap,
                    items: [
                    // { title: "Electrical Engineering", url: "" },
                    // { title: "Mechanical Engineering", url: "" },
                    // { title: "Civil Engineering", url: "" },
                    // { title: "Chemical Engineering", url: "" },
                    ],
                },
                {
                    title: t("navMain.title29"),
                    url: "",
                    icon: Book,
                    items: [
                    // { title: "Creative Writing", url: "" },
                    // { title: "Technical Writing", url: "" },
                    // { title: "Journalism", url: "" },
                    // { title: "Copywriting", url: "" },
                    ],
                },
                {
                    title: t("navMain.title30"),
                    url: "",
                    icon: Lightbulb,
                    items: [
                    // { title: "Time Management", url: "" },
                    // { title: "Public Speaking", url: "" },
                    // { title: "Critical Thinking", url: "" },
                    // { title: "Emotional Intelligence", url: "" },
                    ],
                },
            ],
        }
    };
    return (_jsxs(SidebarProvider, { children: [_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx("div", { className: "flex items-center justify-between p-2", children: _jsx("img", { src: logo, alt: "logo", className: "w-full border-b-2 border-gray pb-2" }) }) }), _jsx("div", { className: "px-4 py-3 border-b", children: _jsx("div", { className: "flex flex-row justify-between gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2", children: data.categories.map((category) => (_jsxs(Link, { to: category.path, onClick: () => setActiveCategory(category.id), className: `h-16 w-24 p-3 flex flex-col items-center justify-center rounded ${activeCategory === category.id
                                    ? "bg-primary-default border border-primary-default text-white"
                                    : "border border-primary-default text-gray-700"}`, "aria-label": category.name, children: [_jsx(category.icon, { className: "h-6 w-6 mb-1" }), _jsx("span", { className: "text-xs", children: category.name })] }, category.id))) }) }), _jsx(SidebarContent, { children: _jsx(SidebarGroup, { children: _jsx(SidebarMenu, { children: activeCategory === "courses" && data.navMain.courses.map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: _jsxs(SidebarMenuItem, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: [item.icon && _jsx(item.icon, { className: "mr-2" }), _jsx("span", { children: item.title }), _jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx(Link, { to: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] }) }, item.title))) }) }) }), _jsx(SidebarFooter, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(DropdownMenu, { children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "flex justify-between items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-inner px-4 py-2", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs(Link, { to: "/help", className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-teal-500 rounded-full p-1", children: _jsx(HelpCircleIcon, { className: "h-4 w-4 text-white" }) }), _jsx("span", { className: "text-teal-600", children: "Help" })] }) }), _jsx("div", { className: "h-6 w-[1px] bg-gray-300 mx-4" }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("button", { className: "flex items-center gap-2", onClick: openLoginModal, children: [_jsx("div", { className: "bg-blue-400 rounded-full p-1", children: _jsx(LogInIcon, { className: "h-4 w-4 text-white" }) }), _jsx("span", { className: "text-blue-400", children: "Login" })] }) })] }) }) }) }) }) }), _jsx(SidebarRail, {})] }), _jsx(SidebarInset, { children: _jsxs("main", { className: "pt-8 ms-4", children: [_jsx("button", { onClick: changeCheckoutModal, className: "fixed right-0 top-[55%] -translate-y-1/2 bg-white border-2 border-primary-light rounded-l-full px-4 py-2 shadow-lg z-50", children: _jsxs("div", { className: "flex items-center", children: [_jsx(ShoppingBag, { className: "h-6 w-6 text-red-500" }), _jsx("div", { className: "border-l border-gray-300 h-8 mx-2" }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: " ITEMS" }), _jsx("div", { className: "text-sm", children: "\u09F3 " })] })] }) }), _jsx(CourseHeader, {}), _jsx(Cart, {}), _jsx(LiveChat, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }) })] }));
}
