import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import sampleImage1 from '../../../../public/image/Banner/Screenshot_6.png';
import sampleImage2 from '../../../../public/image/Banner/Screenshot_5.png';
import sampleImage3 from '../../../../public/image/Banner/Screenshot_7.png';
const Banner = () => {
    return (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 py-4 md:max-w-[1040px]  ", children: [_jsx("img", { src: sampleImage1, alt: "Discount Image 1", className: " min-w-[300px] h-auto md:w-full md:h-auto rounded-lg" }), _jsx("img", { src: sampleImage2, alt: "Discount Image 1", className: " min-w-[300px] h-auto rounded-lg" }), _jsx("img", { src: sampleImage3, alt: "Discount Image 1", className: " min-w-[300px]  h-auto rounded-lg" })] }));
};
export default Banner;
