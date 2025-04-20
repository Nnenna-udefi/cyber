"use client";
import React from "react";
import { GradientButton } from "./gradientButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="py-10 px-4 text-lg font-bold">
      <div
        className="flex gap-3 md:flex-row flex-col items-center"
        id="services"
      >
        <div className="md:w-[30%] w-full">
          <h2 className="uppercase text-sm">Services</h2>
          <h2 className=" font-extrabold text-2xl md:text-3xl">
            Cyber Security Solutions
          </h2>
        </div>
        <p className="md:w-[50%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio
          massa, rhoncus vel velit sit amet, rhoncus luctus libero. Nam tortor
          quam, dignissim sit amet eros eget, pretium congue
        </p>
        <GradientButton className="flex gap-2 ">
          View All <ArrowRight />
        </GradientButton>
      </div>

      <div className="flex gap-10 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg  custom-gradient flex flex-col items-center justify-center  border-[#1f0e2e]/30 border font-bold p-10 text-white "
        >
          <h3 className="text-2xl font-extrabold">Threat Detection</h3>
          <p className="py-4 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
          </p>
          <GradientButton>Read More</GradientButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg custom-gradient flex flex-col items-center justify-center  border-[#1f0e2e]/70 border font-bold p-10 text-white "
        >
          <h3 className="text-2xl font-extrabold">Incidence Report</h3>
          <p className="py-4 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
          </p>
          <GradientButton>Read More</GradientButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg custom-gradient flex flex-col items-center justify-center  border-[#1f0e2e] border font-bold p-10 text-white "
        >
          <h3 className="text-2xl font-extrabold">Penetration Testing</h3>
          <p className="py-4 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
          </p>
          <GradientButton>Read More</GradientButton>
        </motion.div>
      </div>
    </div>
  );
};
