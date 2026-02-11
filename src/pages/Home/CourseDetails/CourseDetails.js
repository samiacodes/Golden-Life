import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
export default function CourseDetails() {
    const { t } = useTranslation("global");
    const faqItems = [
        {
            question: t("faqItems.question1"),
            answer: t("faqItems.answer1")
        },
        {
            question: t("faqItems.question2"),
            answer: t("faqItems.answer2")
        },
        {
            question: t("faqItems.question3"),
            answer: t("faqItems.answer3")
        },
        {
            question: t("faqItems.question4"),
            answer: t("faqItems.answer4")
        },
        {
            question: t("faqItems.question5"),
            answer: t("faqItems.answer5")
        },
        {
            question: t("faqItems.question6"),
            answer: t("faqItems.answer6")
        }
    ];
    return (_jsx("div", { className: "p-6 border rounded-lg h-[450px]", children: _jsx(Accordion, { type: "single", collapsible: true, className: "space-y-2", children: faqItems.map((item, index) => (_jsxs(AccordionItem, { value: `item-${index}`, children: [_jsx(AccordionTrigger, { className: "text-left", children: item.question }), _jsx(AccordionContent, { children: item.answer })] }, index))) }) }));
}
