import { FaArrowRight } from "react-icons/fa";

export const Button2 = ({ label }) => {
    return <div className="rounded-lg font-medium my-[14px] shadow-md border">
        <div className="flex justify-center px-[26px] py-[14px]">
        <div className="">{label}</div>
        <div className="my-auto mx-2">
            <FaArrowRight />
        </div>
        </div>
    </div>
}