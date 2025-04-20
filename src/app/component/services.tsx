"use client";
import React from "react";
import { GradientButton } from "./gradientButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="py-16 px-4 text-lg  bg-[#170a24]">
      <div
        className="flex gap-3 lg:flex-row flex-col items-center"
        id="services"
      >
        <div className="md:w-[30%] w-full">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="uppercase text-sm"
          >
            Services
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className=" font-extrabold text-2xl md:text-3xl"
          >
            Cyber Security Solutions
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="md:w-[50%] w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio
          massa, rhoncus vel velit sit amet, rhoncus luctus libero. Nam tortor
          quam, dignissim sit amet eros eget, pretium congue
        </motion.p>
        <GradientButton className="flex gap-2 ">
          View All <ArrowRight />
        </GradientButton>
      </div>

      <div className="flex ld:flex-row flex-col gap-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg  custom-gradient flex flex-col gap-3 items-center justify-center  border-[#1f0e2e]/30 border font-bold p-10 text-white "
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold"
          >
            Threat Detection
          </motion.h3>
          <p className="py-4 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
          </p>
          <GradientButton>Read More</GradientButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg custom-gradient flex flex-col gap-3 items-center justify-center  border-[#1f0e2e]/70 border font-bold p-10 text-white "
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold"
          >
            Incidence Report
          </motion.h3>
          <p className="py-4 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar
          </p>
          <GradientButton>Read More</GradientButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg custom-gradient flex flex-col gap-3 items-center justify-center  border-[#1f0e2e] border font-bold p-10 text-white "
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold"
          >
            Penetration Testing
          </motion.h3>
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
