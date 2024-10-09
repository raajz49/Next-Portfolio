"use client";
import { GraduationCap, Briefcase } from "lucide-react";
import React, { useEffect, useState } from "react";

const MyExperience = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full"></div>

        {/* Work - Left side */}
        <div
          className={`flex items-center justify-start w-full mb-16 transition-all duration-500 ease-in-out ${
            scrollY > 100 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="w-1/2  pl-8 mt-[-1rem] bg-gray-800 rounded-lg py-4 relative">
            <div >
              <h3 className="text-lg font-semibold">Bachelor in Computer Science and Information Technology</h3>
            </div>
            <p className="text-gray-500">Kathmandu, Nepal</p>
            <p className="text-gray-500">Graduated in 2024.</p>
          </div>
          {/* Date on the right side */}
          <div className="absolute left-[calc(50%+1rem)] top-0 mt-[-10px] pl-10 ">
            <p className="text-gray-500">2019-2024</p>
          </div>
          {/* Emoji for work in center of line */}
          <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full text-white absolute left-1/2 transform -translate-x-1/2 -top-5">
            <GraduationCap size={20} />

          </div>
        </div>

        {/* College - Right side */}
        <div
          className={`flex items-center justify-end w-full mb-10 transition-all duration-500 ease-in-out ${
            scrollY > 300 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="w-1/2  mt-[-0.6rem] bg-gray-800 py-4 rounded-lg  text-right relative">
            <h3 className="text-lg  font-semibold text-start pl-10">Software Engineer</h3>
            <p className="text-gray-500 text-start pl-10">On-Site</p>
            <p className="text-gray-500 text-start pl-10">
              Working as an Associate Software Engineer at Pioneer Associated Private Limited. I used my skills in the PERN stack, utilizing React, Next.js, JavaScript, PostgreSQL, MySQL, and Express.js to build dynamic web applications.
            </p>
          </div>
          {/* Date on the left side */}
          <div className="absolute left-[calc(50%-10rem)] top-0 mt-[-10px] ">
            <p className="text-gray-500">2023 - Present</p>
          </div>
          {/* Emoji for college in center of line */}
          <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full text-white absolute left-1/2 transform -translate-x-1/2 -top-5">
            <Briefcase size={20} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
