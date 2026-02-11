import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
// Instructor Component
const CourseInstructor = () => {
    const { t } = useTranslation('global');
    return (_jsx("div", { className: "p-6 border rounded-lg h-auto", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("img", { src: "../../../../public/image/courses/instructor.jpeg", alt: t('instructor.profile.imageAlt'), width: 64, height: 64, className: "rounded-full" }), _jsxs("div", { className: "space-y-1", children: [_jsx("h2", { className: "font-semibold text-lg", children: t('instructor.profile.name') }), _jsx("div", { className: "space-y-0.5 text-sm text-muted-foreground", children: t('instructor.profile.qualifications', { returnObjects: true }).map((qualification, index) => (_jsx("p", { children: qualification }, index))) })] })] }) }));
};
export default CourseInstructor;
