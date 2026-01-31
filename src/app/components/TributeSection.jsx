"use client";
import { motion } from "framer-motion";

const StatCard = ({ label, value, subtext }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
  >
    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary mb-2 font-mono break-words">{value}</div>
    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    {subtext && <div className="text-xs text-amber-500 mt-1 font-medium">{subtext}</div>}
  </motion.div>
);

export default function TributeSection() {
  return (
    <section id="tribute" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Inspiration</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Coding with the same unconventional brilliance and obsession with perfection as the modern legend.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard label="Test Average" value="56" subtext="Best since Bradman" />
          <StatCard label="Test Centuries" value="37" subtext="Conversion Master" />
          <StatCard label="Style" value="Unorthodox" subtext="Problem Solver" />
          <StatCard label="Dedication" value="100%" subtext="Shadow Batting at 3AM" />
        </div>

        <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-dashed border-border text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-amber-400 to-primary opacity-50" />
           <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/80">
            &quot;I just want to bat... and write clean code.&quot;
           </blockquote>
           <div className="mt-4 font-bold text-primary">— Raajz (channeling Smudge)</div>
        </div>
      </div>
    </section>
  );
}
