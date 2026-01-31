import React from "react";
import { cn } from "@/lib/utils";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={cn(
        "rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300",
        isSelected
          ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
          : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-muted"
      )}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
