"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-7 text-center sm:text-left"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                Hello World, I&apos;m Raajz
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
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4  mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[400px] h-[400px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              src="/images/profilepic.jpg"
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div> */}
        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="col-span-4 place-self-center mt-4 lg:mt-0"
>
  <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    <Image
      src="/images/profilepic.jpg"
      alt="hero image"
      layout="fill" // Use fill to make the image cover the div
      objectFit="cover" // Cover the div while maintaining aspect ratio
      className="rounded-full" // Keep the rounded effect
    />
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
