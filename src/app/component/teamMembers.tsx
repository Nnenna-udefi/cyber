"use client";
import React from "react";
import { GradientButton } from "./gradientButton";
import { ArrowRight, Facebook, Instagram, Linkedin, X } from "lucide-react";
import { motion } from "framer-motion";
import Janice from "@/images/janice.jpg";
import Justin from "@/images/justin.jpg";
import Image from "next/image";

export const Members = () => {
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
            Team
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className=" font-extrabold text-2xl md:text-3xl"
          >
            Our Expert Team Members
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

      <div className="flex lg:flex-row flex-col gap-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg border-b-[15px] border-b-[#261535] custom-gradient flex flex-col pb-6 items-center justify-center  border-[#1f0e2e]/30 border font-bold  text-white "
        >
          <Image src={Justin} alt="Justin" />
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold pt-6"
          >
            Justin Deviz
          </motion.h3>
          <p className="py-4 text-center text-base">Justin Deviz</p>
          <div className="flex gap-2">
            <Facebook
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <Instagram
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <X className="rounded-full bg-[#cc48ff] p-2 text-white" size={30} />
            <Linkedin
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg border-b-[15px] border-b-[#261535] custom-gradient flex flex-col pb-6 items-center justify-center  border-[#1f0e2e]/70 border font-bold  text-white "
        >
          <Image src={Janice} alt="Janice" />
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold pt-6"
          >
            Janice Zapery
          </motion.h3>
          <p className="py-4 text-center text-base">Janice Zapery</p>
          <div className="flex gap-2">
            <Facebook
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <Instagram
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <X className="rounded-full bg-[#cc48ff] p-2 text-white" size={30} />
            <Linkedin
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-lg border-b-[15px] border-b-[#261535] custom-gradient flex flex-col pb-6 items-center justify-center  border-[#1f0e2e] border font-bold  text-white "
        >
          <Image src={Justin} alt="Justin" />
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-2xl font-bold pt-6"
          >
            Mike Pomir
          </motion.h3>
          <p className="py-4 text-center text-base">Mike Pomir</p>
          <div className="flex gap-2">
            <Facebook
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <Instagram
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
            <X className="rounded-full bg-[#cc48ff] p-2 text-white" size={30} />
            <Linkedin
              className="rounded-full bg-[#cc48ff] p-2 text-white"
              size={30}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
