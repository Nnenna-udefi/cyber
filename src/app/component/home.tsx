"use client";
import React from "react";
import { GradientButton } from "./gradientButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LogoScroller } from "./logoScroller";
export const HomeComponent = () => {
  return (
    <div className="text-lg">
      <div className="relative w-full overflow-hidden">
        {/* /* Background Video */}
        <div className="absolute top-0 left-0 w-full bg-[#121423] h-full z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube-nocookie.com/embed/VvqWZOE0fzc?autoplay=1&mute=1&loop=1&playlist=VvqWZOE0fzc&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 h-full text-white px-4 pt-12 pb-10"
        >
          <h1 className="text-xl uppercase font-bold">Welcome to Our Site</h1>
          <h2 className="text-4xl md:text-7xl font-bold py-4">
            Defend Your Digital World with{" "}
            <span className="hover:text-[#cb45ff]">ByteRox</span> Security
            Solution
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            quidem voluptas quae corporis saepe omnis vitae beatae, adipisci
            obcaecati repellendus, voluptatibus numquam laborum distinctio eum
            autem animi? Deserunt autem, ea inventore at vitae eaque, facilis
            voluptatibus error quos eveniet architecto, accusantium obcaecati ut
            quis
          </p>
          <div className="flex gap-4 text-lg mt-10">
            <GradientButton className="flex gap-2 font-bold">
              Get Started <ArrowRight />
            </GradientButton>
            <button className="py-2 px-8 uppercase text-white rounded-xl bg-black/30 font-bold hover:bg-gradient-to-r from-[#cb45ff] to-[#38a2e7]">
              Contact Us
            </button>
          </div>
        </motion.div>
        {/* Optional Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#170a24] opacity-40 z-0"></div>
      </div>

      <LogoScroller />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-center py-10 bg-[#2c133b] flex items-center justify-center flex-col"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl "
        >
          Manage Security services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="p-4 w-[70%]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ipsam
          rem animi reprehenderit ipsum nemo veniam ratione, harum in enim vitae
          odio.
        </motion.p>

        <div className="flex gap-10 mt-10">
          <div className="rounded-lg bg-[#2b1836] hover:text-3xl border-[#1f0e2e]/30 border font-bold p-10 text-white text-2xl">
            Cyber Threat Intelligence
          </div>
          <div className="rounded-lg bg-[#2b1836] hover:text-3xl border-[#1f0e2e]/70 border font-bold p-10 text-white text-2xl">
            Malware Removal
          </div>
          <div className="rounded-lg bg-[#2b1836] hover:text-3xl border-[#1f0e2e] border font-bold p-10 text-white text-2xl">
            24/7 Online Support
          </div>
        </div>
      </motion.div>
    </div>
  );
};
