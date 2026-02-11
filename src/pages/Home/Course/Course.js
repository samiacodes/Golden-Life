import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AllCourses from '../AllCourses/AllCourses';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';
// import FeaturedCourse from '../FeaturedCourse/FeaturedCourse'
const Course = () => {
    return (_jsxs("div", { children: [_jsx(AllCourses, {}), _jsx(FeaturedCourse, {})] }));
};
export default Course;
