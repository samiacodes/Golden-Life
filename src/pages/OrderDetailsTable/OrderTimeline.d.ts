interface TimelineItem {
    time: string;
    date: string;
    status: string;
    icon?: JSX.Element;
}
interface OrderTimeline {
    items: TimelineItem[];
    trackingNumber: string;
    courier: string;
    deliveryType: string;
}
export declare function OrderTimeline({ items, trackingNumber, courier, deliveryType }: OrderTimeline): import("react/jsx-runtime").JSX.Element;
export {};
