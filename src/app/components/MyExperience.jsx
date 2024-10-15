// pages/timelinePage.js
"use client";
import { GraduationCap } from 'lucide-react';
import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';

// Sample data for the timeline
const experiencesData = [
  {
    Name: 'Bachelor of Science in Computer Science and Information Technology',
    address: 'Kathmandu, Nepal',
    description: 'Graduated with a Bachelor of Science in Computer Science and Information Technonology in 2024.',
    date: '2019-2024',
    icon: <GraduationCap />
  },
  {
    Name: 'Software Engineer',
    address:'On-Site',
    description: 'Working as an Associate Software Engineer at Pioneer Associated Private Limited. I used my skills in the PERN stack, utilizing React, Next.js, JavaScript, PostgreSQL, MySQL, and Express.js to build dynamic web applications.',
    date: '2023 - Present',
    icon: <RiReactjsFill className='w-[1.5rem] h-[1.5rem]' />
  },
  // {
  //   Name: 'Intern',
  //   address: 'Internship at XYZ Solutions, contributing to web development projects.',
  //   date: '2022 - 2023',
  //   icon: <GraduationCap />
  // },
  // {
  //   Name: 'High School Diploma',
  //   address: 'Completed high school with a focus on science and mathematics.',
  //   date: '2017 - 2019',
  //   icon: <GraduationCap />
  // },
];

const TimelinePage = () => {
  return (
    <div className='hidden md:block'>
    <div className=" min-h-screen flex items-center justify-center  p-4">
      <div className="text-center text-white max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8  text-start md:text-center">My Timeline</h1>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute   ml-[7.5rem] md:ml-0 w-1 bg-gray-400 bg-opacity-80 top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          {experiencesData.map((item, index) => (
  <div key={index} className={`flex items-start mb-12 flex-row-reverse md:${index % 2 === 1 ? 'flex-row' : 'flex-row-reverse'}`}>
    {/* Icon on the left/right */}
    <div className={`w-1/2 flex justify-center mt-16  md:${index % 2 === 1 ? 'ml-4 md:ml-[26rem]' : 'mr-4 md:mr-[26rem]'}`}>
      <div className="flex justify-center items-center w-[70px] h-[70px] border-4 border-white rounded-full bg-gray-700 bg-opacity-80 text-white relative -top-5">
        {/* Replace with appropriate icon */}
        <span >{item.icon}</span>
      </div>
    </div>
    {/* Content Box */}
    <div className={`flex flex-col justify-start items-start bg-gray-900 rounded-lg shadow-lg p-6 w-full`}>
      <h2 className="text-lg font-semibold text-left">{item.Name}</h2>
      
      <p className="text-gray-400 font-semibold mb-2">{item.address}</p>
      <p className="text-gray-400 text-left">{item.description}</p>
      <p className="text-gray-500 mt-2">{item.date}</p>
    </div>
  </div>
))}

        </div>
      </div>
      
    </div>
    </div>
  );
};

export default TimelinePage;
