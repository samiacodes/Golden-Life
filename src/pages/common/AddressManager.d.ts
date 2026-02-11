import * as React from "react";
interface Address {
    label: "home" | "work" | "partner" | "other";
    name: string;
    district: string;
    address: string;
    phone: string;
    notes?: string;
}
export declare const AddressManager: React.FC<{
    onSaveAddress: (address: Address, isDefault: boolean) => void;
}>;
export {};
