import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function CourseFeature() {
    const { t } = useTranslation("global");
    const features2 = [
        t('features2.text1'),
        t('features2.text2'),
        t('features2.text3'),
        t('features2.text4'),
        t('features2.text5'),
        t('features2.text6'),
    ];
    return (_jsxs("div", { className: "p-6 h-[450px]", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: t('features2.title') }), _jsx("div", { className: "grid md:grid-cols-2 gap-4", children: features2.map((feature, index) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "mt-1", children: _jsx(Check, { className: "h-4 w-4 text-blue-500" }) }), _jsx("p", { className: "text-sm", children: feature })] }, index))) })] }));
}
