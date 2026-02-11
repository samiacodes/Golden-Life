import * as React from "react";
interface Lesson {
    id: string;
    type: string;
    number: string;
    title: string;
    thumbnail: string;
    color: string;
    badge: string;
    image: string;
    instructor: string;
    rating: number;
    studentsEnrolled: number;
    duration: string;
    level: string;
    category: string;
}
declare const CourseCarousel: React.FC<{
    courses: Lesson[];
    title: string;
    onSelect: (lesson: Lesson) => void;
    onAddToCart: (lesson: Lesson) => void;
}>;
export default CourseCarousel;
