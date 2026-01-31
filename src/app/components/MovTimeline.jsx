"use client";
import { GraduationCap } from 'lucide-react';
import React from 'react';
import { FaVuejs } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

const experiencesData = [
  
  {
    name: 'Frontend Developer',
    address: 'On-Site',
    description: 'Currently working as a Junior Frontend Developer at Aayulogic Private Limited. I utilize my skills in Vue.js and its ecosystem to build dynamic web applications.',
    date: '2025 – Present',
    icon: <FaVuejs className="w-[1.2rem] h-[1.2rem]" />
  },  
  {
    name: 'Software Engineer',
    address:'On-Site',
    description: 'Working as an Associate Software Engineer at Pioneer Associated Private Limited using PERN stack.',
    date: '2024 - Present',
    icon: <RiReactjsFill className='w-[1.2rem] h-[1.2rem]' />
  },
  {
    name: 'Bachelor in CSIT',
    address: 'Kathmandu, Nepal',
    description: 'Graduated with a Bachelor of Science in Computer Science and Information Technonology in 2024.',
    date: '2019-2024',
    icon: <GraduationCap />
  },
];

const MobileTimelinePage = () => {
  return (
    <div className='block md:hidden py-12 px-4'>
      <h1 className="text-3xl font-bold mb-8 text-center text-foreground">My Timeline</h1>
      <div className="relative pl-8 border-l-2 border-border ml-4 space-y-12">
        {experiencesData.map((item, index) => (
          <div key={index} className="relative">
             {/* Icon Dot */}
            <div className="absolute -left-[45px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary text-primary shadow-sm">
               {item.icon}
            </div>
            
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <h2 className="text-base font-bold text-foreground mb-1">{item.name}</h2>
                <p className="text-xs font-semibold text-primary mb-2">{item.address}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                <div className="text-xs font-mono text-muted-foreground bg-muted inline-block px-2 py-1 rounded">
                    {item.date}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  

export default MobileTimelinePage;
