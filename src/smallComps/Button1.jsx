import { FaArrowRight } from "react-icons/fa";

export const Button1 = ({ label }) => {
    return <div className="bg-[#FF4F00] text-white rounded-lg font-medium my-[14px] shadow-lg border ">
        <div className="flex justify-center px-[26px] py-[14px]">
        <div className="">{label}</div>
        <div className="my-auto mx-2">
            <FaArrowRight />
        </div>
        </div>
    </div>
}