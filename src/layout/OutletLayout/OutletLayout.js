'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../../public/image/logo/logo.jpg';
import { ChevronRight, SquareTerminal, ChefHat, HelpCircleIcon, LogInIcon, ShoppingBag, ShoppingCart, GraduationCap, Package, Truck } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, } from "@/components/ui/sidebar";
import Footer from "@/pages/common/Footer/Footer";
import Header from "@/pages/common/Header/Header";
import useModalStore from "@/store/Store";
import Cart from "@/pages/Home/Cart/Cart";
import LiveChat from "@/pages/Home/LiveChat/Livechat";
import { useTranslation } from "react-i18next";
export default function OutletLayout() {
    const { changeCheckoutModal, openLoginModal } = useModalStore();
    const [activeCategory, setActiveCategory] = React.useState("outlet");
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
        ],
        navMain: {
            shopping: [
                {
                    title: t("navMain.title13"),
                    url: "/",
                    icon: SquareTerminal,
                    isActive: true,
                    items: [
                    // { title: "Web Development", url: "" },
                    // { title: "Mobile App Development", url: "" },
                    ],
                },
            ],
            course: [
                {
                    title: "Medicines",
                    url: "/course/medicines",
                },
            ],
            percel: [],
            topup: [],
            drive: [],
            cookups: [
                {
                    title: t("navMain.title13"),
                    url: "/cookups/ready-meals",
                    icon: ChefHat,
                    isActive: true,
                    items: [],
                },
            ],
            outlet: [],
        },
    };
    return (_jsxs(SidebarProvider, { className: '', children: [_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx("div", { className: "flex items-center justify-between p-2", children: _jsx("img", { src: logo, alt: "logo", className: "w-full border-b-2 border-gray pb-2" }) }) }), _jsx("div", { className: "px-4 py-3 border-b ", children: _jsx("div", { className: "flex flex-row justify-between gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2  ", children: data.categories.map((category) => (_jsxs(Link, { to: category.path, onClick: () => setActiveCategory(category.id), className: `h-16 w-24 p-3 flex flex-col items-center justify-center rounded ${activeCategory === category.id
                                    ? "bg-primary-default border border-primary-default text-white"
                                    : "border border-primary-default text-gray-700"}`, "aria-label": category.name, children: [(() => {
                                        const Icon = category.icon;
                                        return _jsx(Icon, { className: "h-6 w-6 mb-1" });
                                    })(), _jsx("span", { className: "text-xs", children: category.name })] }, category.id))) }) }), _jsx(SidebarContent, { children: _jsx(SidebarGroup, { children: _jsx(SidebarMenu, { children: data.navMain[activeCategory]?.map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: 'isActive' in item ? item.isActive : false, className: "group/collapsible ", children: _jsxs(SidebarMenuItem, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: ['icon' in item && item.icon && (() => {
                                                            const Icon = item.icon;
                                                            return _jsx(Icon, {});
                                                        })(), _jsx(Link, { to: item.url, children: item.title }), _jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: 'items' in item && item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx(Link, { to: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] }) }, item.title))) }) }) }), _jsx(SidebarFooter, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(DropdownMenu, { children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "flex justify-between items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-inner px-4 py-2 ", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs(Link, { to: "/help", className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-teal-500 rounded-full p-1", children: _jsx(HelpCircleIcon, { className: "h-4 w-4 text-white" }) }), _jsx("span", { className: "text-teal-600", children: "Help" })] }) }), _jsx("div", { className: "h-6 w-[1px] bg-gray-300 mx-4" }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs(Link, { to: '', onClick: openLoginModal, className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-blue-400 rounded-full p-1", children: _jsx(LogInIcon, { className: "h-4 w-4 text-white" }) }), _jsx("span", { className: "text-blue-400", children: "Login" })] }) })] }) }) }) }) }) }), _jsx(SidebarRail, {})] }), _jsx(SidebarInset, { children: _jsxs("main", { className: "pt-6 ", children: [_jsx("button", { onClick: changeCheckoutModal, className: "fixed right-0 top-[55%] -translate-y-1/2 bg-white border-2 border-primary-light rounded-l-full px-4 py-2 shadow-lg z-50", children: _jsxs("div", { className: "flex items-center", children: [_jsx(ShoppingBag, { className: "h-6 w-6 text-red-500" }), _jsx("div", { className: "border-l border-gray-300 h-8 mx-2" }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: " ITEMS" }), _jsx("div", { className: "text-sm", children: "\u09F3 " })] })] }) }), _jsx(Header, {}), _jsx(Cart, {}), _jsx(LiveChat, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }) })] }));
}
