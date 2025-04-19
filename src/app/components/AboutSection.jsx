"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMysql, SiRefine, SiTypescript, SiVuedotjs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandPrisma, TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    items: [
      { name: "React", icon: <FaReact  className="w-8 h-8 " /> },
      { name: "Next", icon: <RiNextjsFill  className="w-8 h-8 " /> },
      { name: "Vue.js", icon: <SiVuedotjs className="w-6 h-8" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-8" /> },
      { name: "Express", icon: <SiExpress className="w-6 h-8" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql  className="w-6 h-8" /> },
      { name: "Refine", icon: < SiRefine  className="w-6 h-8" /> },
      { name: "Redux", icon: < TbBrandRedux   className="w-6 h-8" /> },
      { name: "Zustand", icon: < SiRefine  className="w-6 h-8" /> },
      { name: "JavaScript", icon: <DiJavascript  className="w-6 h-8" /> },
      { name: "Prisma", icon: <TbBrandPrisma  className="w-6 h-8" /> },
      { name: "TypeScript", icon: < SiTypescript  className="w-6 h-8" /> },
    ],
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Everest College, Biratnagar</li>
        <li>Tribhuvan University, Kathmandu</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React Development, Broadway Infosys</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/coffeekittle.jpg"
          width={500}
          height={500}
          className="hidden md:block rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Vue, Zustand, Linux, Node.js, Express, PostgreSQL,
            MySQL, PrismaORM, HTML, CSS, TailwindCSS, Git, Github and Gitlab. I am a consistent learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "skills" ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-16">
                {TAB_DATA.find((t) => t.id === tab).items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center w-32 p-2 bg-gray-800 hover:bg-gray-600 rounded-md text-white"
                  >
                    <span>{item.name}</span> {/* Skill name on the left */}
                    <div className="ml-2">{item.icon}</div> {/* Icon on the right */}
                  </div>
                ))}
              </div>
            ) : (
              TAB_DATA.find((t) => t.id === tab).content // Render content for other tabs
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
