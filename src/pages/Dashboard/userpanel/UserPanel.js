"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import logo from '../../../public/image/logo/logo.jpg';
import { BookOpen, Bot, ChevronRight, SquareTerminal, ShoppingCart, Pill, ChefHat, HelpCircleIcon, LogInIcon, } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer/Footer";
// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    categories: [
        { id: "grocery", name: "Grocery", icon: ShoppingCart },
        { id: "pharmacy", name: "Pharmacy", icon: Pill },
        { id: "cookups", name: "Cookups", icon: ChefHat },
        { id: "cookups2", name: "Cookups", icon: ChefHat },
        { id: "cookups3", name: "Cookups", icon: ChefHat },
    ],
    navMain: {
        grocery: [
            {
                title: "Fruits & Vegetables",
                url: "#",
                icon: SquareTerminal,
                isActive: true,
                items: [
                    { title: "Fresh Fruits", url: "#" },
                    { title: "Fresh Vegetables", url: "#" },
                    { title: "Herbs & Seasonings", url: "#" },
                    { title: "Organic Produce", url: "#" },
                    { title: "Exotic Fruits", url: "#" },
                    { title: "Sprouts", url: "#" },
                    { title: "Cut Vegetables", url: "#" },
                    { title: "Leafy Greens", url: "#" },
                ],
            },
            {
                title: "Dairy & Eggs",
                url: "#",
                icon: Bot,
                items: [
                    { title: "Milk", url: "#" },
                    { title: "Cheese", url: "#" },
                    { title: "Eggs", url: "#" },
                    { title: "Yogurt", url: "#" },
                    { title: "Butter", url: "#" },
                    { title: "Cream", url: "#" },
                    { title: "Paneer", url: "#" },
                    { title: "Ghee", url: "#" },
                ],
            },
            {
                title: "Bakery",
                url: "#",
                icon: BookOpen,
                items: [
                    { title: "Bread", url: "#" },
                    { title: "Cakes", url: "#" },
                    { title: "Pastries", url: "#" },
                    { title: "Cookies", url: "#" },
                    { title: "Bagels", url: "#" },
                    { title: "Muffins", url: "#" },
                    { title: "Croissants", url: "#" },
                    { title: "Donuts", url: "#" },
                ],
            },
        ],
        pharmacy: [
            {
                title: "Medicines",
                url: "#",
                icon: Pill,
                isActive: true,
                items: [
                    { title: "Prescription Drugs", url: "#" },
                    { title: "Over-the-Counter", url: "#" },
                    { title: "Vitamins & Supplements", url: "#" },
                    { title: "Pain Relief", url: "#" },
                    { title: "Cold & Flu", url: "#" },
                    { title: "Antibiotics", url: "#" },
                    { title: "Allergy Medication", url: "#" },
                    { title: "Digestive Health", url: "#" },
                ],
            },
            {
                title: "Personal Care",
                url: "#",
                icon: Bot,
                items: [
                    { title: "Skincare", url: "#" },
                    { title: "Haircare", url: "#" },
                    { title: "Oral Care", url: "#" },
                    { title: "Deodorants", url: "#" },
                    { title: "Bath & Body", url: "#" },
                    { title: "Men's Grooming", url: "#" },
                    { title: "Feminine Hygiene", url: "#" },
                    { title: "Hand Sanitizers", url: "#" },
                ],
            },
            {
                title: "Health Devices",
                url: "#",
                icon: BookOpen,
                items: [
                    { title: "Blood Pressure Monitors", url: "#" },
                    { title: "Thermometers", url: "#" },
                    { title: "First Aid Kits", url: "#" },
                    { title: "Oximeters", url: "#" },
                    { title: "Glucose Meters", url: "#" },
                    { title: "Weighing Scales", url: "#" },
                    { title: "Nebulizers", url: "#" },
                    { title: "Pulse Oximeters", url: "#" },
                ],
            },
        ],
        cookups: [
            {
                title: "Ready Meals",
                url: "#",
                icon: ChefHat,
                isActive: true,
                items: [
                    { title: "Breakfast", url: "#" },
                    { title: "Lunch", url: "#" },
                    { title: "Dinner", url: "#" },
                    { title: "Appetizers", url: "#" },
                    { title: "Soups", url: "#" },
                    { title: "Salads", url: "#" },
                    { title: "Desserts", url: "#" },
                    { title: "Snacks", url: "#" },
                ],
            },
            {
                title: "Meal Kits",
                url: "#",
                icon: Bot,
                items: [
                    { title: "Family Meals", url: "#" },
                    { title: "Vegetarian", url: "#" },
                    { title: "Gourmet", url: "#" },
                    { title: "Low-Calorie", url: "#" },
                    { title: "Quick & Easy", url: "#" },
                    { title: "Asian Cuisine", url: "#" },
                    { title: "Italian Cuisine", url: "#" },
                    { title: "Mexican Cuisine", url: "#" },
                ],
            },
            {
                title: "Catering",
                url: "#",
                icon: BookOpen,
                items: [
                    { title: "Corporate Events", url: "#" },
                    { title: "Weddings", url: "#" },
                    { title: "Parties", url: "#" },
                    { title: "Birthday Parties", url: "#" },
                    { title: "Baby Showers", url: "#" },
                    { title: "Holiday Events", url: "#" },
                    { title: "Anniversary Dinners", url: "#" },
                    { title: "Private Chefs", url: "#" },
                ],
            },
        ],
    }
};
export default function AdminPanel() {
    const [activeCategory, setActiveCategory] = React.useState("grocery");
    return (
    // <div className="flex h-screen">
    _jsxs(SidebarProvider, { className: '', children: [_jsxs(Sidebar, { collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx("div", { className: "flex items-center justify-between p-2", children: _jsx("img", { src: logo, alt: "logo", className: "w-full border-b-2 border-gray pb-2" }) }) }), _jsx("div", { className: "px-4 py-3 border-b ", children: _jsx("div", { className: "flex flex-row justify-between gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2  ", children: data.categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `h-16 w-24 p-3 flex flex-col items-center justify-center rounded ${activeCategory === category.id
                                    ? "bg-primary-default border border-primary-default text-white"
                                    : "border border-primary-default text-gray-700"}`, "aria-label": category.name, children: [_jsx(category.icon, { className: "h-6 w-6 mb-1" }), _jsx("span", { className: "text-xs", children: category.name })] }, category.id))) }) }), _jsx(SidebarContent, { children: _jsxs(SidebarGroup, { children: [_jsx(SidebarGroupLabel, { children: data.categories.find(c => c.id === activeCategory)?.name }), _jsx(SidebarMenu, { children: data.navMain[activeCategory].map((item) => (_jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: _jsxs(SidebarMenuItem, { children: [_jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: [item.icon && _jsx(item.icon, {}), _jsx("span", { children: item.title }), _jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })] }) }), _jsx(CollapsibleContent, { children: _jsx(SidebarMenuSub, { children: item.items?.map((subItem) => (_jsx(SidebarMenuSubItem, { children: _jsx(SidebarMenuSubButton, { asChild: true, children: _jsx("a", { href: subItem.url, children: _jsx("span", { children: subItem.title }) }) }) }, subItem.title))) }) })] }) }, item.title))) })] }) }), _jsx(SidebarFooter, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(DropdownMenu, { children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "flex justify-between items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-inner px-4 py-2 ", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "bg-teal-500 rounded-full p-1", children: [_jsx(HelpCircleIcon, { className: "h-4 w-4 text-white" }), " "] }), _jsx("span", { className: "text-teal-600", children: "Help" })] }), _jsx("div", { className: "h-6 w-[1px] bg-gray-300 mx-4" }), _jsxs("button", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-blue-400", children: "Login" }), _jsxs("div", { className: "bg-blue-400 rounded-full p-1", children: [_jsx(LogInIcon, { className: "h-4 w-4 text-white" }), " "] })] })] }) }) }) }) }) }), _jsx(SidebarRail, {})] }), _jsxs(SidebarInset, { children: [_jsx("header", { className: " -ms-32 pt-0 flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", children: _jsx("div", { className: "flex items-center gap-2 px-4 w-full", children: _jsx("input", { type: "text", placeholder: "Search...", className: "w-full px-4 py-2 text-gray-800 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-primary-default" }) }) }), _jsx("div", { className: "-ms-32 mx-auto", children: _jsxs("main", { children: [_jsxs("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: [_jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-3", children: [_jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" })] }), _jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-3", children: [_jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" })] }), _jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-3", children: [_jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }), _jsx("div", { className: "aspect-video rounded-xl bg-muted/50" })] })] }), _jsx(Outlet, {}), _jsx(Footer, {})] }) })] })] })
    // </div>
    );
}
