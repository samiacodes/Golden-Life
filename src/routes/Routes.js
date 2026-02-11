import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorpage/Errorpage";
import OrderDetails from "@/pages/Home/OrderDetails/OrderDetails";
import Story from "@/pages/Help/Story/Story";
import Career from "@/pages/Help/Career/Career";
import Contact from "@/pages/Help/Contact/Contact";
import PrivacyPolicy from "@/pages/Help/PrivacyPolicy/PrivacyPolicy";
// import UserLayout from "@/layout/userlayout/UserLayout";
import HelpLayout from "@/layout/HelpLayout/HelpLayout";
import Faq from "@/pages/Home/Faq/Faq";
import TermsOfUse from "@/pages/Help/TermsOfUse/TermsOfUse";
// import AllCategories from "@/pages/Home/AllCategories/AllCategories";
// import ProductPage from "@/pages/Home/ProductPage/ProductPage";
// import Home from "@/pages/Home/Home/Home";
// import AllProduct from "@/pages/Home/AllProducts/AllProducts";
import Trending from "@/pages/Home/TrendingCategory/Trending";
// import AdminLayout from "@/layout/AdminLAyout/AdminLayout";
// import Overview from "@/pages/Dashboard/Overview/Overview";
import AllCourses from "@/pages/Home/AllCourses/AllCourses";
import CourseViewPage from "@/pages/Home/CourseViewPage/CourseViewPage";
import CourseLayout from "@/layout/CourseLayout/CourseLayout";
import Hsc from "@/pages/Home/HSC/Hsc";
import Ssc from "@/pages/Home/SSC/Ssc";
import Course from "@/pages/Home/Course/Course";
import PercelLayout from "@/layout/PercelLayout/PercelLayout";
import TopupLayout from "@/layout/TopUplayout/TopUplayout";
import CommingSoon from "./../pages/commingSoon";
import OutletLayout from "@/layout/OutletLayout/OutletLayout";
import DriveLayout from "@/layout/DriveLayout/DriveLayout";
import Landing from "@/pages/Landing/Landing";
import LandingLayout from "@/layout/LandingLayout/LandingLayout";
// import AllCourses2 from "@/pages/Home/AllCourses2/AllCourses2";
import AddMoney from "@/pages/Dashboard/AddMoney/AddMoney";
import History from "@/pages/Dashboard/History/History";
import SendMoney from "@/pages/Dashboard/SendMoney/SendMoney";
// import PaymentMethod from "@/pages/Dashboard/PaymentMethod/PaymentMethod";
import SendMoneyAmount from "@/pages/Dashboard/SendMoneyAmount/SendMoneyAmount";
import SendMoneyConfirm from "@/pages/Dashboard/SendMoneyConfirm/SendMoneyConfirm";
// import SendMoney from './../pages/Dashboard/SendMoney/SendMoney';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: _jsx(LandingLayout, {}), // Has Navbar & Footer
        children: [
            {
                path: '/',
                element: _jsx(Landing, {}) // <--- The new Main Page
            },
            // Add other public pages here like Login, Register, etc.
        ]
    },
    // {
    //     path: '/dashborad',
    //     element: <UserLayout />,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <Home />
    //         },
    //         {
    //             path: 'allcategories',
    //             element: <AllCategories />
    //         },
    //         {
    //             path: 'all-courses',
    //             element: < AllCourses2 />
    //         },
    //         {
    //             path: 'productpage',  // Separate route for Help page
    //             element: <ProductPage />,
    //         },
    //         {
    //             path: 'allProducts',  // Separate route for Help page
    //             element: <AllProduct />,
    //         },
    //     ]
    // },
    {
        path: '/courses',
        element: _jsx(CourseLayout, {}),
        children: [
            {
                path: '/courses',
                element: _jsx(Course, {})
            },
            {
                path: 'hsc',
                element: _jsx(Hsc, {})
            },
            {
                path: 'ssc',
                element: _jsx(Ssc, {})
            },
        ]
    },
    {
        path: '/percel',
        element: _jsx(PercelLayout, {}), // Layout for percel page
        children: [
            {
                path: '/percel',
                element: _jsx(CommingSoon, {}),
            },
        ]
    },
    {
        path: '/topup',
        element: _jsx(TopupLayout, {}), // Layout for percel page
        children: [
            {
                path: '/topup',
                element: _jsx(CommingSoon, {}),
            },
        ]
    },
    {
        path: '/drive',
        element: _jsx(DriveLayout, {}), // Layout for percel page
        children: [
            {
                path: '/drive',
                element: _jsx(CommingSoon, {}),
            },
        ]
    },
    {
        path: '/outlet',
        element: _jsx(OutletLayout, {}), // Layout for percel page
        children: [
            {
                path: '/outlet',
                element: _jsx(CommingSoon, {}),
            },
        ]
    },
    {
        path: '/help',
        element: _jsx(HelpLayout, {}),
        children: [
            {
                path: '/help',
                element: _jsx(Faq, {})
            },
            {
                path: 'our-story', // Separate route for Help page
                element: _jsx(Story, {}),
            },
            {
                path: 'career', // Separate route for Help page
                element: _jsx(Career, {}),
            },
            {
                path: 'contact', // Separate route for Help page
                element: _jsx(Contact, {}),
            },
            {
                path: 'privacy-policy', // Separate route for Help page
                element: _jsx(PrivacyPolicy, {}),
            },
            {
                path: 'terms', // Separate route for Help page
                element: _jsx(TermsOfUse, {}),
            },
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <AdminLayout />, // Layout for dashboard panel
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <Overview />,
    //         },
    //         // {
    //         //     path: 'merchants',
    //         //     element: <MerchantList />,
    //         // },
    //         // {
    //         //     path: 'riders',
    //         //     element: <RiderList />,
    //         // },
    //         // {
    //         //     path: 'districts',
    //         //     element: <Districts />,
    //         // },
    //         // {
    //         //     path: 'setting',
    //         //     element: <Setting />,
    //         // },
    //         {
    //             path: 'addmoney',  // Separate route for Help page
    //             element: <AddMoney />,
    //         },
    //         {
    //             path: 'history',  // Separate route for Help page
    //             element: <History />,
    //         },
    //         {
    //             path: 'sendmoney',  // Separate route for Help page
    //             element: <SendMoney />,
    //         },
    //         {
    //             path: 'paymentmethod',  // Separate route for Help page
    //             element: <PaymentMethod />,
    //         },
    //     ],
    // },
    {
        path: '/allcourses', // Separate route for Help page
        element: _jsx(AllCourses, {}),
    },
    {
        path: '/orderdetails', // Separate route for Help page
        element: _jsx(OrderDetails, {}),
    },
    {
        path: '/trending', // Separate route for Help page
        element: _jsx(Trending, {}),
    },
    {
        path: '/productviewpage', // Separate route for Help page
        element: _jsx(CourseViewPage, {}),
    },
    {
        path: '/addmoney', // Separate route for Help page
        element: _jsx(AddMoney, {}),
    },
    {
        path: '/history', // Separate route for Help page
        element: _jsx(History, {}),
    },
    {
        path: '/sendmoney', // Separate route for Help page
        element: _jsx(SendMoney, {}),
    },
    {
        path: '/payamount', // Separate route for Help page
        element: _jsx(SendMoneyAmount, {}),
    },
    {
        path: '/sendmoneyconfirm', // Separate route for Help page
        element: _jsx(SendMoneyConfirm, {}),
    },
    {
        path: '*',
        element: _jsx(ErrorPage, {}), // Error page for undefined routes
    },
]);
