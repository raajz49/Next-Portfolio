"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stabilisation",
    description: "A web app with blogging and stabilization features for UNDP.",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://stabilisation.org/",
    previewUrl: "https://stabilisation.org/",
  },
  {
    id: 2,
    title: "Account Management System",
    description: "An application for automating the account features.",
    image: "/images/projects/ams.png",
    tag: ["All", "Web"],
    gitUrl: "https://ams.gajurelsarad.com.np/",
    previewUrl: "https://ams.gajurelsarad.com.np/",
  },
  {
    id: 3,
    title: "Scalper Investment",
    description: "Chat platform with multiple servers and channels.",
    image: "/images/projects/discord.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://scalperinvestment.com/",
    previewUrl: "https://scalperinvestment.com/",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description:
      "For latest movie and series recommendation on the basis of rating and popularity",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raajz49/Movie-Review-System",
    previewUrl: "https://rmdb.rajkoirala.com.np/",
  },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
           <span className="text-primary">03.</span> Match Highlights
        </h2>
        <div className="flex justify-center items-center gap-3 flex-wrap">
            {["All", "Web", "Mobile"].map((name) => (
            <ProjectTag
                key={name}
                name={name}
                isSelected={tag === name}
                onClick={setTag}
            />
            ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center text-muted-foreground py-16">
          <p>No innings found to display.</p>
        </div>
      ) : (
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
