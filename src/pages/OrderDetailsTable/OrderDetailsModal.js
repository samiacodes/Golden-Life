import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { OrderTimeline } from "./OrderTimeline";
import { Box, CheckCircle, Package } from "lucide-react";
export function OrderDetailsModal({ isOpen, onClose, orderId }) {
    const timelineItems = [
        {
            time: "11:20",
            date: "16",
            status: "Order Received",
            icon: _jsx(Package, { className: "w-4 h-4" })
        },
        {
            time: "12:35",
            date: "16",
            status: "Your order is being processed in Dubai - UAE warehouse."
        },
        {
            time: "15:00",
            date: "16",
            status: "Your order is ready to be shipped from Dubai - UAE warehouse."
        },
        {
            time: "15:10",
            date: "16",
            status: "Your order is shipped",
            icon: _jsx(Box, { className: "w-4 h-4" })
        },
        {
            time: "10:00",
            date: "18",
            status: "Your order has arrived in Riyadh - KSA warehouse."
        },
        {
            time: "10:30",
            date: "18",
            status: "Your order has been picked up by ARAMEX and on the way to Jeddah."
        },
        {
            time: "17:00",
            date: "18",
            status: "Your order has arrived in Jeddah and expected scheduled delivery is 19th November."
        },
        {
            time: "08:00",
            date: "19",
            status: "Your order is out for delivery."
        },
        {
            time: "13:00",
            date: "19",
            status: "Delivered",
            icon: _jsx(CheckCircle, { className: "w-4 h-4" })
        }
    ];
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-2xl max-h-[400px] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { children: ["Order #", orderId] }) }), _jsx(OrderTimeline, { items: timelineItems, trackingNumber: "7Y937849CV2", courier: "ARAMEX", deliveryType: "2-6 Days" })] }) }));
}
