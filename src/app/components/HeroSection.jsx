"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiReactjsFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="relative lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-7 text-center sm:text-left"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                Hello, I&apos;m Raajz
              </span>
            </h1>
            <h2 className="text-gray-300 mb-6 text-xl sm:text-2xl lg:text-3xl font-semibold whitespace-nowrap">              
              <TypeAnimation
                sequence={[
                  "Web Developer", 2000,
                  "Fullstack Developer", 2000,
                  "Software Engineer", 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
            Hello, I&apos;m  Raajz, a graduate from Tribhuvan University with a B.Sc. in Computer Science and Information Technology (CSIT). I initially focused on frontend development mainly in React and Vue.js, but I have since expanded my skills and am now a fullstack developer, passionate about creating seamless and efficient digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Hire Me
              </Link>
              <Link
                href="https://drive.google.com/file/d/1Q0meFc_ypHdSLHyF2FB9EcRLL7IFauBT/view"
                target="_blank"
                className="inline-block px-6 py-3 rounded-full border border-teal-500 text-teal-400 font-medium hover:bg-teal-600 hover:border-teal-600 hover:text-white transition"
              >
                View CV
              </Link>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-5 flex justify-center sm:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gray-800 shadow-lg">
              <Image
                src="/images/profilepic.jpg"
                alt="Profile picture of Raajz"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-2 right-2 bg-gradient-to-br from-teal-400 to-blue-500 p-1 rounded-full">
                <RiReactjsFill className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}