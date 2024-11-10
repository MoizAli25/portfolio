"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide }  from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Adventure Travels offers thrilling and customizable travel experiences for those seeking excitement and exploration. From mountain treks and safaris to water sports and cultural immersions, our website connects adventurers with expert guides and unique destinations worldwide. Whether you're an experienced traveler or a first-time explorer, we provide the resources, inspiration, and support you need for an unforgettable adventure.",
        stack: [{ name: "Html 5" }, {name: "css 3"}, {
            name: "Javascript" }],
            image: "/assets/work/thumb.png",
            live: "",
            github: "",
    },
    {
        num: "02",
        category: "data analytics",
        title: "project 2",
        description: "The Data Visualization Dashboard for a call center provides real-time insights into key performance metrics such as call volume, average wait times, response times, and agent performance. With interactive charts and graphs, managers can quickly assess operational efficiency, identify trends, and make data-driven decisions to optimize workflows. The dashboard also allows for detailed analysis of customer interactions, highlighting areas for improvement and helping enhance overall customer satisfaction and service delivery.",
        stack: [{ name: "Ms Excel" }, {name: "PowerBi"}, {
            name: "Python" }],
            image: "/assets/work/thumb1.png",
            live: "",
            github: "",
    },
    {
        num: "03",
        category: "data analytics",
        title: "project 3",
        description: "The Cookie Company website offers a delightful array of freshly baked cookies, featuring a wide variety of flavors and ingredients to satisfy every sweet tooth. With a focus on quality, each batch is made with premium, locally sourced ingredients, ensuring a delicious and homemade taste in every bite. Customers can easily browse the menu, place custom orders, or explore gift boxes and subscription options. Whether you're craving classic chocolate chip, indulgent oatmeal raisin, or seasonal specialties, the Cookie Company guarantees a scrumptious experience with every purchase.",
        stack: [{ name: "Ms Excel" }, {name: "PowerBi"}, {
            name: "Python" }],
            image: "/assets/work/thumb2.png",
            live: "",
            github: "",
    },
    
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };  
    
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
         }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
             <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                          {project.num}
                        </div>
                        {/* project categary  */}
                        <h2 className="text-[42px] font-bold leading-3 text-white group-hover:text-amber-700 transition-all duration-500 capitalize">
                            {project.category} project
                        </h2>
                        {/* project description  */}
                        <p className="text-white/60">{project.description}</p>
                        {/* stock */}
                        <ul className="flex gap-6">
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-xl text-amber-700">
                                       {item.name}
                                       {/* remove the last comma */}
                                       {index !== project.stack.length - 1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                             {/* border */}
                          <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            <Link href={project.live}>
                        <TooltipProvider delayDutaion={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-amber-700" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Live project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github}>
                        <TooltipProvider delayDutaion={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-amber-700" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30} 
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image 
                                    src={project.image} 
                                    fill 
                                    className="object-cover"
                                    alt=""
                                    />
                                </div>
                                </div>
                                Slide</SwiperSlide>
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns 
                        containerStyles="flex gap-2 absolute right-0 bottom=[calc(50%_-_22px)] xl:bottom-0 z-20 w-full juxtify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                        />
                    </Swiper>
                </div>
                </div>   
                </div>
        </motion.section>
    );
};
export default Work;
