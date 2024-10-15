// pages/timelinePage.js
"use client";
import { GraduationCap } from 'lucide-react';
import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';

// Sample data for the timeline
const experiencesData = [
  {
    Name: 'Bachelor in Computer Science and Information Technology',
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
    <div className='block md:hidden container mx-auto ml-2 p-10 '>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center text-white max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-start md:text-center">My Timeline</h1>
        <div className="relative">
          {/* Vertical line for all screen sizes */}
          <div className="absolute w-1 bg-gray-400 bg-opacity-80 top-0 bottom-0 left-6 transform md:-translate-x-1/2"></div>
  
          {experiencesData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start mb-12 gap-2"
            >
              {/* Icon aligned to the left for all screens */}
              <div className="w-16 h-14  flex justify-center items-center border-4  border-white rounded-full bg-gray-700 bg-opacity-80 text-white relative mt-10 ">
                {item.icon}
              </div>
              <div className='mx-auto container '>
              {/* Content Box with increased width and gap */}
              <div className={`flex flex-col justify-start items-start bg-gray-900 rounded-lg shadow-lg p-6 w-[20rem]`}>
      <h2 className="text-[16px] font-semibold text-left">{item.Name}</h2>
      
      <p className="text-[13px] text-gray-400 font-semibold mb-2">{item.address}</p>
      <p className="text-[13px] text-gray-400 text-left">{item.description}</p>
      <p className="text-[13px] text-gray-500 mt-2">{item.date}</p>
    </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}  

export default TimelinePage;
