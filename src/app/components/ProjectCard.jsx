import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-52 md:h-64 overflow-hidden">
         <Image
            src={imgUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-500"
         />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <Link
            href={gitUrl}
            className="h-12 w-12 border border-white/50 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-white"
            aria-label="View Code"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border border-white/50 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-white"
            aria-label="View Live Project"
          >
            <EyeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h5>
        <p className="text-muted-foreground text-sm flex-grow line-clamp-3">{description}</p>
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
             <span>Web App</span>
             {/* <span>2024</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
