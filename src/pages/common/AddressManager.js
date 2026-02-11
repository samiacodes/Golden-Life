import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Button } from "./Button";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Label } from "./Label";
import { Icon } from "./Icon";
import { useTranslation } from "react-i18next";
export const AddressManager = ({ onSaveAddress }) => {
    const { t } = useTranslation("global");
    const [currentAddress, setCurrentAddress] = React.useState({
        label: "home",
        name: "",
        district: "",
        address: "",
        phone: "",
        notes: ""
    });
    const [isDefaultAddress, setIsDefaultAddress] = React.useState(false);
    React.useEffect(() => {
        const savedAddresses = JSON.parse(localStorage.getItem("addresses") || "{}");
        const defaultAddress = localStorage.getItem("defaultAddress");
        if (defaultAddress) {
            setCurrentAddress(savedAddresses[defaultAddress]);
            setIsDefaultAddress(true);
        }
        else if (savedAddresses[currentAddress?.label]) {
            setCurrentAddress(savedAddresses[currentAddress?.label]);
        }
    }, [currentAddress?.label]);
    const handleSaveAddress = (e) => {
        e.preventDefault();
        const savedAddresses = JSON.parse(localStorage.getItem("addresses") || "{}");
        savedAddresses[currentAddress?.label] = currentAddress;
        localStorage.setItem("addresses", JSON.stringify(savedAddresses));
        if (isDefaultAddress) {
            localStorage.setItem("defaultAddress", currentAddress?.label);
        }
        else {
            const currentDefault = localStorage.getItem("defaultAddress");
            if (currentDefault === currentAddress?.label) {
                localStorage.removeItem("defaultAddress");
            }
        }
        onSaveAddress(currentAddress, isDefaultAddress);
    };
    const LabelOptions = () => (_jsx("div", { className: "grid grid-cols-4 gap-4 mt-2", children: [
            { icon: "home", label: "home" },
            { icon: "briefcase", label: "work" },
            { icon: "heart", label: "partner" },
            { icon: "plus", label: "other" }
        ].map(({ icon, label }) => (_jsxs(Button, { type: "button", variant: currentAddress?.label === label ? "default" : "outline", className: "flex flex-col items-center gap-2 py-4", onClick: () => setCurrentAddress((prev) => ({
                ...prev,
                label: label
            })), children: [_jsx(Icon, { name: icon }), _jsx("span", { className: "capitalize text-xs", children: t(`addressManager.labels.${label}`) })] }, label))) }));
    return (_jsx("div", { className: "max-w-sm mx-auto bg-white p-4 rounded-md shadow-lg", children: _jsxs("form", { onSubmit: handleSaveAddress, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: t("addressManager.form.name") }), _jsx(Input, { id: "name", type: "text", value: currentAddress?.name, onChange: (e) => setCurrentAddress({ ...currentAddress, name: e.target.value }), required: true, placeholder: t("addressManager.form.name") })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "address", children: t("addressManager.form.address") }), _jsx(Input, { id: "address", type: "text", value: currentAddress?.address, onChange: (e) => setCurrentAddress({ ...currentAddress, address: e.target.value }), placeholder: t("addressManager.form.address"), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "district", children: t("addressManager.form.district") }), _jsxs(Select, { id: "district", value: currentAddress?.district, onChange: (e) => setCurrentAddress({ ...currentAddress, district: e.target.value }), required: true, children: [_jsx("option", { value: "", children: t("addressManager.districts.select") }), _jsx("option", { value: "Uttar Badda", children: t("addressManager.districts.uttarBadda") }), _jsx("option", { value: "Banani", children: t("addressManager.districts.banani") })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: t("addressManager.form.phone") }), _jsx(Input, { id: "phone", type: "tel", value: currentAddress?.phone, onChange: (e) => setCurrentAddress({ ...currentAddress, phone: e.target.value }), required: true, placeholder: t("addressManager.form.phone") })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "notes", children: t("addressManager.form.notes") }), _jsx(Textarea, { id: "notes", placeholder: t("addressManager.form.notesPlaceholder"), value: currentAddress?.notes, onChange: (e) => setCurrentAddress({ ...currentAddress, notes: e.target.value }) })] }), _jsx(Label, { children: t("addressManager.form.label") }), _jsx(LabelOptions, {}), _jsx("div", { className: "space-y-2", children: _jsx(Switch, { checked: isDefaultAddress, onChange: setIsDefaultAddress, label: t("addressManager.form.defaultSwitch") }) }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", className: "bg-primary text-white", children: t("addressManager.form.saveButton") }) })] }) }));
};
