"use client";
import { Brain, GraduationCap } from 'lucide-react';
import React from 'react';
import { FaVuejs } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

const experiencesData = [
  {
    name: 'Software Developer',
    address: 'Remote',
    description: 'Part-time Software Developer at ReviewsAI, building dynamic web and desktop applications with React.js and Tauri, mainly focused on engineering document automation and workflow efficiency.',
    date: '2025 – Present',
    icon: <Brain className="w-[1.5rem] h-[1.5rem]" />
  },  
  {
    name: 'Frontend Developer',
    address: 'On-Site',
    description: 'Currently working as a Junior Frontend Developer at Aayulogic Private Limited. I utilize my skills in Vue.js and its ecosystem to build dynamic web applications focused primarily on automating HRMS features.',
    date: '2025 – Present',
    icon: <FaVuejs className="w-[1.5rem] h-[1.5rem]" />
  },
  {
    name: 'Associate Software Engineer',
    address:'On-Site',
    description: 'Working as an Associate Software Engineer at Pioneer Associated Private Limited. I used my skills in the PERN stack, utilizing React, Next.js, JavaScript, PostgreSQL, MySQL, and Express.js to build dynamic web applications.',
    date: '2024 - 2025',
    icon: <RiReactjsFill className='w-[1.5rem] h-[1.5rem]' />
  },
  {
    name: 'Bachelor of Science in Computer Science and Information Technology',
    address: 'Kathmandu, Nepal',
    description: 'Graduated with a Bachelor of Science in Computer Science and Information Technonology in 2024.',
    date: '2019-2024',
    icon: <GraduationCap />
  },
];

const TimelinePage = () => {
  return (
    <div className='hidden md:block py-12'>
      <div className="flex justify-center p-4">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-foreground">My Timeline</h1>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border top-0 bottom-0"></div>
            
            {experiencesData.map((item, index) => (
              <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} w-full justify-center`}>
                
                {/* Content Box */}
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-bold text-foreground mb-1">{item.name}</h2>
                    <p className="text-sm font-semibold text-primary mb-2">{item.address}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    <p className="text-xs text-muted-foreground mt-3 font-mono">{item.date}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary z-10 text-primary">
                    {item.icon}
                </div>
                
                 {/* Empty space for the other side to balance flex */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
