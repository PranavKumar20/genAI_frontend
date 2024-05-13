import { Button1 } from "../smallComps/Button1";
import { Button2 } from "../smallComps/Button2";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";
import React, { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button3 } from "../smallComps/Button3";


export const Body = () => {
    return <div>
        <HeroSection1 />
        <Features />
        <Frame />
        <Frame1 />
        <NeedHelp />
        <Footer />
        <NewsLetter />
    </div>
}


const HeroSection1 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center mx-8 md:ml-10 md:mt-10">
            <div className="md:w-1/2 md:mr-8">
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FF4F00] mb-4">Transform Ideas</div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">into apps with AI</div>
                <div className="text-gray-700 text-base md:text-lg lg:text-xl font-medium font-inter mb-8 md:w-3/4">Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled</div>
                <div className="flex">
                    <Button1 label="Get Started" />
                </div>
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 bg-black">
                <img className="w-full md:h-auto" src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715534848/Gen_ai_twitter/g6kdtc4zj25pectp7jev.png" alt="image" />
            </div>
        </div>
    );
};


const TextBox1 = ({ title, subtitle }) => {
    const words = title.split(' ');
    return (
        <div className="w-full md:w-[560px] mx-4 md:mx-10">
            <div className="flex">
                <div className="font-semibold text-3xl md:text-5xl ">
                    <span className="text-[#FF4F00] mr-2">{words[0]}</span>
                    {words.slice(1).join(' ')}
                </div>
            </div>
            <div className="font-medium text-lg md:text-xl ">{subtitle}</div>
        </div>
    );
};

const ImgBox1 = ({ img_url }) => {
    return (
        <div className="w-full md:w-[593px] h-[300px] md:h-[616px] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={img_url} alt="image" />
        </div>
    );
};

const Features = () => {
    return (
        <div className="mx-4 md:mx-[100px] mt-8 md:mt-[128px] ">
            <div className="mx-auto w-full md:w-[500px] ">
                <div className="mx-auto text-center text-3xl md:text-5xl font-semibold ">
                    Explore the power of AI apps generation
                </div>
                <div className="mx-auto text-center text-lg md:text-xl font-semibold pt-4 md:pt-10 ">
                    Unlock the full potential of your tech stack with Horizon's intuitive and Unlock the full potential of your tech stack with GenAI’s intuitive and
                </div>
            </div>
            <div className="flex flex-col md:flex-row pt-10 md:pt-[130px] my-4 ">
                <ImgBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715508077/Gen_ai_twitter/rpo0djd58eka5xtoxyrk.png" />
                <TextBox1 title="Unleash the power of AI with GenAI" subtitle="Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and" />
            </div>
            <div className="flex flex-col md:flex-row pt-16 my-4 ">
                <TextBox1 title="Unleash the power of AI with GenAI" subtitle="Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and" />
                <ImgBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715508076/Gen_ai_twitter/dqidawwciwfjr1lrpbuw.png" />
            </div>
            <div className="flex flex-col md:flex-row my-4 pt-16">
                <ImgBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715508077/Gen_ai_twitter/xzioaglhkpvziksyo1me.png" />
                <TextBox1 title="Unleash the power of AI with GenAI" subtitle="Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and" />
            </div>
        </div>
    );
};


const Frame = () => {
    return (
        <div className="mx-4 md:mx-[100px] mt-16 ">
            <div className="flex justify-center">
                <TextBox2 title="Essentially, everything you need to ship your first AI App" />
            </div>
            <div>
                <div className="flex flex-col md:flex-row justify-between mt-16 md:my-[24px] md:py-[24px] ">
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mt-[24px] md:pt-[24px] ">
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                    <FrameBox1 img_url="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715512171/Gen_ai_twitter/nmoezjwckxx6cn1ymyja.png" title="Quality apps" subtitle="Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success." />
                </div>
            </div>
        </div>
    );
};

const TextBox2 = ({ title }) => {
    const words = title.split(' ');
    return (
        <div className="w-full md:w-[900px] mx-4 md:mx-10">
            <div className="flex justify-center">
                <div className="font-semibold text-3xl md:text-5xl text-center ">
                    <span className="text-[#FF4F00]">{words[0]}</span>
                    {words.slice(1).join(' ')}
                </div>
            </div>
        </div>
    );
};

const FrameBox1 = ({ img_url, title, subtitle }) => {
    return (
        <div className="shadow-md m-2 rounded-xl w-full md:w-[360px] mx-4 md:mx-[48px] px-4 md:px-[24px] pb-4 md:pb-[32px] border pt-4 md:pt-[24px] ">
            <div className="w-[64px] mx-auto">
                <img src={img_url} alt="vector" />
            </div>
            <div className="text-lg md:text-xl font-semibold text-center pt-4 md:pt-[50px] ">
                {title}
            </div>
            <div className="pt-2 md:pt-[15px] font-medium text-base md:text-lg text-center">{subtitle}</div>
        </div>
    );
};



const Frame1 = () => {
    const perks1 = ["Market Trend Analysis", "Limited Query Mapping", "Standard Dashboards", "Email Notifications", "Entry-Level Support"];
    const perks2 = ["Everything in Explorer, plus:", "Predictive Analytics", "Advanced Query Mapping", "Customizable Dashboards", "Smart Alert System", "Extended Support"];
    const perks3 = ["Everything in Innovator, plus", "Competitor Benchmarking", "Holistic Market Visualization", "Adaptive Strategy Planner", "24/7 Priority Support", "Custom Integrations"];
    return (
        <div className="mx-4 md:mx-[100px] mt-16 ">
            <div>
                <div className="flex justify-center">
                    <div>
                        <TextBox3 title="Start making smarter decisions," i={2} />
                        <TextBox4 title="Choose a plan" />
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col md:flex-row justify-between my-4 md:my-[24px] py-[24px] ">
                        <SubBox1 label="Explorer" price="$4,99" period="/mo" perks={perks1} />
                        <SubBox2 label="Innovator" sublabel="BEST VALUE" price="$4,99" period="/mo" perks={perks2} />
                        <SubBox1 label="Visionary" price="$49,99" period="/mo" perks={perks3} />
                    </div>
                    <div className="flex justify-center my-4">
                        <TextBox5 title="Free trial" />
                        <TextBox5 title="Cancel anytime" />
                        <TextBox5 title="Support included" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const TextBox3 = ({ title, i }) => {
    const words = title.split(' ');
    return (
        <div className="mx-4 md:mx-10">
            <div className="flex justify-center">
                <div className="font-semibold text-3xl md:text-5xl text-center mx-2 ">
                    {words.map((word, index) => (
                        <span key={index}>
                            {index > 0 && " "}
                            <span className={index === i ? 'text-[#FF4F00]' : ''} >{word}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TextBox4 = ({ title }) => {
    return (
        <div className="mx-4 md:mx-10">
            <div className="flex justify-center">
                <div className="font-semibold text-3xl md:text-5xl text-center mx-2 ">
                    {title}
                </div>
            </div>
        </div>
    );
};

const TextBox5 = ({ title }) => {
    return (
        <div className="flex mx-4 md:mx-10">
            <div className="md:pt-1 w-4 h-4 md:w-6 md:h-6">
                <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1715527495/Gen_ai_twitter/bnjykvhlyef7rbrhyqum.png" alt="svg" />
            </div>
            <div className="text-sm md:text-xl text-[#FF4F00]  ">{title}</div>
        </div>
    );
};

const SubBox1 = ({ label, price, period, perks }) => {
    return (
        <div className="flex shadow-lg rounded-xl w-full md:w-[377px] border transform hover:scale-105 transition-transform duration-300 ">
            <div className="w-full">
                <div className="text-xl md:text-3xl font-semibold w-full text-center mt-10 hover:text-[#FF4F00] transition-colors duration-300">
                    {label}
                </div>
                <div className="flex justify-center mb-4">
                    <div className="text-3xl md:text-5xl font-semibold ">{price}</div>
                    <div className="text-3xl md:text-5xl text-[#9CA3AF] font-semibold ">{period}</div>
                </div>
                <div>
                    {perks.map((perk, index) => (
                        <SubBoxEntry key={index} title={perk} />
                    ))}
                </div>
                <div className="m-6 ">
                    <Button2 label="Get now" />
                </div>
            </div>
        </div>
    );
};

const SubBox2 = ({ label, sublabel, price, period, perks }) => {
    return (
        <div className="flex shadow-lg rounded-xl w-full md:w-[377px] border transform hover:scale-105 transition-transform duration-300">
            <div className="w-full">
                <div className="flex justify-center text-[#FF4F00] mt-10">
                    <div className="text-xl md:text-3xl font-semibold w-1/2 text-right hover:text-[#FF4F00] transition-colors duration-300">{label}</div>
                    <div className="w-1/2 flex  mx-2">
                        <div className="text-base md:text-lg font-semibold bg-orange-100 rounded-lg ">
                            <div className="m-2 flex justify-center items-center">
                                <div className="pt-1 px-1"><BiSolidCircle /></div>
                                {sublabel}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <div className="text-3xl md:text-5xl font-semibold ">{price}</div>
                    <div className="text-3xl md:text-5xl text-[#9CA3AF] font-semibold ">{period}</div>
                </div>
                <div>
                    {perks.map((perk, index) => (
                        <SubBoxEntry key={index} title={perk} />
                    ))}
                </div>
                <div className="mx-6 my-10">
                    <Button1 label="Get now" />
                </div>
            </div>
        </div>
    );
};




const SubBoxEntry = ({ title }) => {
    return (
        <div className="flex m-2">
            <div className="text-[#FF4F00] my-auto px-4">
                <FaArrowRight />
            </div>
            <div className="text-base md:text-lg font-medium">{title}</div>
        </div>
    );
};


const NeedHelp = () => {
    const faqs = [
        {
            question: 'What is GenAI?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
        {
            question: 'lorem ipsum dolor sit amet lorem ipsum dolor?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
        {
            question: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
        {
            question: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
        {
            question: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
        {
            question: 'lorem ipsum dolor sit amet lorem ipsum dolor?',
            answer: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
        },
    ];

    return (
        <div className="bg-[#EDF6FF] flex justify-center">
            <div className="w-full md:w-[640px]">
                <div className="flex justify-center">
                    <div className="text-3xl md:text-5xl font-semibold mt-10 ">Need Help?</div>
                </div>
                <div className="flex justify-center">
                    <div className="text-lg md:text-xl w-full md:w-[500px] text-center p-6 ">Don't worry, we got you. Here are some answers for your questions.</div>
                </div>
                <div className="mb-28">
                    <Faq faqs={faqs} />
                </div>
            </div>
        </div>
    );
};



const Faq = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className="max-w-lg mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="py-4 bg-white m-2">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleAnswer(index)}
                    >
                        <h3 className={`text-[16px] font-medium w-full px-2 flex justify-between ${index === activeIndex ? 'border-b border-gray-300' : ''}`}>
                            {faq.question}
                            <div>
                                {index === activeIndex ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                            </div>
                        </h3>
                    </div>
                    {index === activeIndex && (
                        <p className="mt-2 text-gray-600 px-2 text-[16px] ">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};



const Footer = () => {
    return <div className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg md:text-xl lg:text-2xl font-medium md:w-1/2 mb-8 md:mb-0">Get your AI apps built with blazing speed.</div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <Button1 label="Get Started" />
                </div>
            </div>
            <div className="border-b my-16"></div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <div className="text-xl md:text-2xl font-medium text-center md:text-left">GenAI</div>
                    <div className="text-base md:text-lg lg:text-xl mt-2 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="text-base md:text-lg lg:text-xl w-full md:w-2/3">
                        <div className="flex flex-col md:flex-row justify-between my-3">
                            <div className="md:w-1/3 md:flex md:justify-start " >About</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Company</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Press</div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-3">
                            <div className="md:w-1/3 md:flex md:justify-start " >Contact</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Product</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Careers</div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-3">
                            <div className="md:w-1/3 md:flex md:justify-start " >Blog</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Press</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >Newsletters</div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-3">
                            <div className="md:w-1/3 md:flex md:justify-start " >Story</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >More</div>
                            <div className="md:w-1/3 md:flex md:justify-start " >More</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base md:text-lg lg:text-xl text-center md:text-left">All rights reserved</div>
        </div>
    </div>;
}



const NewsLetter = () => {
    return (
        <div className="flex justify-center mt-16 px-4">
            <div className="max-w-3xl border-dashed border-[#9747FF] border p-6">
                <div>
                    <div className="text-center">
                        <div className="font-semibold text-3xl md:text-4xl lg:text-5xl">Detect Your next</div>
                        <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#FF4F00]">big move</div>
                    </div>
                    <div className="text-center mt-4">
                        <div className="text-sm md:text-base lg:text-lg">Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon's cutting-edge AI analytics.</div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center mt-10">
                        <input className="bg-gray-200 md:mt-3 px-4 py-4 md:py-1 md:mb-3 mx-2  md:mx-3 w-full md:w-2/3 rounded-lg mb-2 md:mb-0" type="text" placeholder="yourmail@gmail.com" />
                        <Button3 label="Subscribe Now" />
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-3xl md:text-4xl lg:text-5xl">Detect Your next</div>
                        <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#FF4F00]">big move</div>
                    </div>
                    <div className="text-center mt-4">
                        <div className="text-sm md:text-base lg:text-lg">Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon's cutting-edge AI analytics.</div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center mt-10">
                        <input className="bg-gray-200 md:mt-3 px-4 py-4 md:py-1 md:mb-3 mx-2  md:mx-3 w-full md:w-2/3 rounded-lg mb-2 md:mb-0" type="text" placeholder="yourmail@gmail.com" />
                        <Button3 label="Subscribe Now" />
                    </div>
                </div>
            </div>
        </div>
    );
}
