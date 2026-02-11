import React from "react";
interface CourseBannerProps {
    title?: string;
    instructor?: string;
    rating?: number;
    studentsEnrolled?: number;
    duration?: string;
    level?: string;
    category?: string;
    backgroundImage?: string;
}
declare const CourseBanner: React.FC<CourseBannerProps>;
export default CourseBanner;
