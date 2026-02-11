import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import Header from "@/pages/common/Footer/Header/Header"
import HeroSection from "../HeroSection/HeroSection";
import Categories from "../Categories/Categories";
// import Cart from "../Cart/Cart";
// import LiveChat from "@/pages/Home/LiveChat/Livechat";
import ProductCategories from "../ProductCategories/ProductCategories";
import FreshSell from "../FreshSell/FreshSell";
import AutoScrollIcons from "../ScrollCategories/ScrollCategories";
// import Cart2 from "../Cart/Cart2";
import CourseCategories from "../CoursesCategory/CoursesCategory";
const Home = () => {
    return (_jsxs("div", { children: [_jsx(HeroSection, {}), _jsx(AutoScrollIcons, {}), _jsx(CourseCategories, {}), _jsx(Categories, {}), _jsx(ProductCategories, {}), _jsx(FreshSell, {})] }));
};
export default Home;
