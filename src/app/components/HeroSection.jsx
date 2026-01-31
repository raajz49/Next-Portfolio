"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="lg:py-24 relative overflow-hidden">
        {/* Abstract Stadium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[120px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">
            Game On
          </div>
          <h1 className="text-foreground mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 block mb-2">
              Hello, I&apos;m Raajz
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl text-muted-foreground font-semibold block mt-4">
               <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Front Foot Driver",
                  1000,
                  "Fullstack Engineer",
                  2000,
                  "Steve Smith Superfan",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
             Crafting world-class digital experiences with the precision of a master batsman. 
             From pixel-perfect frontend to robust backend architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Q0meFc_ypHdSLHyF2FB9EcRLL7IFauBT/view"
              target="_blank"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-primary/50 hover:bg-muted text-foreground font-semibold transition-all flex items-center justify-center"
            >
              View CV
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-5 place-self-center mt-12 lg:mt-0 relative"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            {/* Decorative Ring */}
             <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_60s_linear_infinite]" />
             
            <div className="absolute inset-4 rounded-full overflow-hidden bg-muted border-4 border-amber-400 shadow-2xl shadow-amber-500/20">
                <Image
                src="/images/profilepic.jpg"
                alt="Raajz Koirala"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
