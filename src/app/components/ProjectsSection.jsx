"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Unified project data
const projectsData = [
  { id: 1, title: "Stabilisation", description: "A web app with blogging and stabilization features for UNDP.", image: "/images/projects/image.png", tag: ["All", "Web"], gitUrl: "https://stabilisation.org/", previewUrl: "https://stabilisation.org/" },
  { id: 1, title: "Account Management System", description: "An application for automating the account features.", image: "/images/projects/ams.png", tag: ["All", "Web"], gitUrl: "https://ams.gajurelsarad.com.np/", previewUrl: "https://ams.gajurelsarad.com.np/" }, 
  { id: 2, title: "Scalper Investment", description: "Chat platform with multiple servers and channels.", image: "/images/projects/discord.jpg", tag: ["All", "Web"], gitUrl: "https://scalperinvestment.com/", previewUrl: "https://scalperinvestment.com/" },
  { id: 3, title: "User-Blog Website", description: "A blogging site where users can create and view posts.", image: "/images/projects/userblog.png", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
  { id: 4, title: "E-commerce Admin Dashboard", description: "Admin UI built with Next.js for e-commerce management.", image: "/images/projects/3.png", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
  { id: 5, title: "Movie Recommendation System", description: "For latest movie and series recommendation on the basis of rating and popularity", image: "/images/projects/movie.png", tag: ["All", "Web"], gitUrl: "https://github.com/raajz49/Movie-Review-System", previewUrl: "https://rmdb.rajkoirala.com.np/" },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Filter by tag
  const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

  // Animation variants
  const cardVariants = { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };

  return (
    <section id="projects" className="py-24 bg-[#121212] text-white">
      <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>

      {/* Tags */}
      <div className="flex justify-center items-center gap-4 mb-12">
        {['All', 'Web', 'Mobile'].map(name => (
          <ProjectTag
            key={name}
            name={name}
            isSelected={tag === name}
            onClick={setTag}
          />
        ))}
      </div>

      {/* Project Grid */}
      {filteredProjects.length === 0 ? (
  <div className="text-center text-lg text-gray-400 py-16 col-span-3">
    <p>No projects found in this category.</p>
    <p className="text-sm mt-2">Please select a different tag.</p>
  </div>
) : (
  <ul ref={ref} className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
    {filteredProjects.map((project, idx) => (
      <motion.li
        key={`${project.id}-${idx}`}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.4, delay: idx * 0.2 }}
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
