"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="flex-row w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[60vw] rounded-xl">
      <div className="flex-row w-full h-full">
        <motion.h3 className="z-50 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
          Explore My
          <br /> Virtual Desktop
        </motion.h3>
        <LampContainer className="min-h-[130vh]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-0 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-900 h-[60vh] w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] rounded-xl tracking-tight">
              <iframe
                src="https://wintest.andrewstech.me/"
                className="m-1 h-[59vh] w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] rounded-xl tracking-tight"
              ></iframe>
            </div>
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
};

export default AboutPage;
