// tabData.js
import { Code, Database, Server, Terminal, Layers } from "lucide-react"; // Importing icons

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    items: [
      { name: "Node.js", icon: <Code className="w-8 h-8 mb-2" /> },
      { name: "Express", icon: <Server className="w-8 h-8 mb-2" /> },
      { name: "PostgreSQL", icon: <Database className="w-8 h-8 mb-2" /> },
      { name: "MySQL", icon: <Database className="w-8 h-8 mb-2" /> },
      { name: "Prisma ORM", icon: <Layers className="w-8 h-8 mb-2" /> },
      { name: "JavaScript", icon: <Terminal className="w-8 h-8 mb-2" /> },
      { name: "TypeScript", icon: <Terminal className="w-8 h-8 mb-2" /> },
      { name: "React", icon: <Code className="w-8 h-8 mb-2" /> },
    ],
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   items: [
  //     { name: "Everest College, Biratnagar" },
  //     { name: "Tribhuvan University, Kathmandu" },
  //   ],
  // },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   items: [{ name: "React Development, Broadway Infosys" }],
  // },
];
