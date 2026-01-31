"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMysql, SiRefine, SiTypescript, SiVuedotjs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandPrisma, TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    items: [
      { name: "React", icon: <FaReact className="w-6 h-6" />, level: "95" },
      { name: "Next.js", icon: <RiNextjsFill className="w-6 h-6" />, level: "90" },
      { name: "Vue.js", icon: <SiVuedotjs className="w-6 h-6" />, level: "85" },
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" />, level: "88" },
      { name: "Express", icon: <SiExpress className="w-6 h-6" />, level: "85" },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-6 h-6" />, level: "80" },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, level: "85" },
      { name: "Redux", icon: <TbBrandRedux className="w-6 h-6" />, level: "82" },
      { name: "Prisma", icon: <TbBrandPrisma className="w-6 h-6" />, level: "75" },
    ],
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        <li className="bg-card p-4 rounded-lg border border-border shadow-sm">
          <div className="font-bold text-primary">Tribhuvan University, Kathmandu</div>
          <div className="text-sm text-muted-foreground">B.Sc. CSIT (Computer Science)</div>
        </li>
        <li className="bg-card p-4 rounded-lg border border-border shadow-sm">
          <div className="font-bold text-primary">Everest College, Biratnagar</div>
          <div className="text-sm text-muted-foreground">Higher Secondary Education</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-4">
        <li className="bg-card p-4 rounded-lg border border-border shadow-sm flex items-center justify-between group">
          <span className="font-medium group-hover:text-primary transition-colors">React Development</span>
          <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20">Broadway Infosys</span>
        </li>
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
    <section className="py-20" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-xl overflow-hidden bg-card border border-border">
             <Image
              src="/images/coffeekittle.jpg"
              alt="Workspace"
              width={600}
              height={600}
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            />
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-mono text-sm">
                   &quot;Focus acts like a laser beam.&quot; — Steve Smith
                </p>
             </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">02.</span> Player Profile
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. Like a test match batter building an innings, 
            I believe in patience, technique, and accelerating when the moment is right.
            <br /><br />
            My tech stack is my kit bag—constantly updated and meticulously maintained.
          </p>
          
          <div className="flex flex-row gap-8 mb-8 border-b border-border pb-1">
            {TAB_DATA.map((t) => (
               <button
                 key={t.id}
                 onClick={() => handleTabChange(t.id)}
                 className={cn(
                   "pb-2 text-sm font-bold uppercase tracking-widest transition-all relative",
                   tab === t.id 
                     ? "text-primary border-b-2 border-primary" 
                     : "text-muted-foreground hover:text-foreground"
                 )}
               >
                 {t.title}
               </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {tab === "skills" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {TAB_DATA.find((t) => t.id === tab).items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary/50 hover:bg-muted transition-all group"
                  >
                    <div className="text-primary group-hover:text-amber-500 transition-colors">{item.icon}</div>
                    <div>
                        <div className="font-semibold text-sm">{item.name}</div>
                        {/* <div className="text-xs text-muted-foreground">Rating: {item.level}</div> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                  {TAB_DATA.find((t) => t.id === tab).content}
                </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
