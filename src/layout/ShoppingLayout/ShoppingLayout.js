'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import logo from "/image/logo/logo.jpg"; // Corrected path
import { ChevronRight, SquareTerminal, ShoppingCart, Pill, ChefHat, HelpCircleIcon, GraduationCap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, } from "@/components/ui/sidebar";
import Header from "@/pages/common/Header/Header";
import Footer from "@/pages/common/Footer/Footer";
const data = {
    categories: [
        { id: "shoppingg", name: "Shopping", icon: ShoppingCart, path: "/" },
        { id: "Course", name: "Course", icon: GraduationCap, path: "/Course" },
        { id: "pharmacy", name: "Pharmacy", icon: Pill, path: "/Percel" },
        { id: "cookups", name: "Cookups", icon: ChefHat, path: "/cookups" },
        { id: "cookups", name: "Cookups", icon: ChefHat, path: "/cookups" },
    ],
    navMain: {
        shopping: [
            {
                title: "Fruits & Vegetables",
                url: "#",
                icon: SquareTerminal,
                isActive: true,
                items: [
                    { title: "Fresh Fruits", url: "#" },
                    { title: "Fresh Vegetables", url: "#" },
                    { title: "Herbs & Seasonings", url: "#" },
                ],
            },
        ],
    },
};
export default function ShoppingLayout() {
    const [activeCategory, setActiveCategory] = React.useState("shopping");
    const navigate = useNavigate();
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        const category = data.categories.find((c) => c.id === categoryId);
        if (category?.path) {
            navigate(category.path);
        }
        else {
            console.warn("Invalid category path.");
        }
    };
    return (_jsxs(SidebarProvider, { children: [_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx("div", { className: "flex items-center justify-between p-2", children: _jsx("img", { src: logo, alt: "logo", className: "w-full border-b-2 border-gray pb-2" }) }) }), _jsx("div", { className: "px-4 py-3 border-b", children: _jsx("div", { className: "flex flex-row justify-between gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2", children: data.categories.map((category) => (_jsxs(Link, { to: category.path, onClick: () => handleCategoryChange(category.id), className: `h-16 w-24 p-3 flex flex-col items-center justify-center rounded ${activeCategory === category.id
                                    ? "bg-primary-default border border-primary-default text-white"
                                    : "border border-primary-default text-gray-700"}`, "aria-label": category.name, children: [_jsx(category.icon, { className: "h-6 w-6 mb-1" }), _jsx("span", { className: "text-xs", children: category.name })] }, category.id))) }) }), _jsx(SidebarContent, { children: _jsxs(SidebarGroup, { children: [_jsx(SidebarGroupLabel, { children: data.categories.find((c) => c.id === activeCategory)?.name }), _jsx(SidebarMenu, { children: data.navMain[activeCategory]?.map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: _jsxs(SidebarMenuItem, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: [item.icon && _jsx(item.icon, {}), _jsx("span", { children: item.title }), _jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx(Link, { to: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] }) }, item.title))) })] }) }), _jsx(SidebarFooter, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsxs("button", { className: "flex items-center gap-2 px-4 py-2", children: [_jsx(HelpCircleIcon, {}), _jsx("span", { children: "Help" })] }) }) }) }), _jsx(SidebarRail, {})] }), _jsx(SidebarInset, { children: _jsxs("main", { className: "pt-6 -ms-20", children: [_jsx(Header, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }) })] }));
}
