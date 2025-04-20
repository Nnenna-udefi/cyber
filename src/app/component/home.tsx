import React from "react";
import { GradientButton } from "./gradientButton";
import { ArrowRight } from "lucide-react";
import CompanyLogo from "@/images/companyLogo.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const HomeComponent = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden">
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
          <h2 className="text-4xl md:text-7xl font-bold pt-4">
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
        <div className="absolute top-0 left-0 w-full h-full bg-[#121423] opacity-40 z-0"></div>
      </div>

      <div className="text-white text-center bg-[#121423]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Trusted by more than <span className="text-[#c27752]">1600+</span>{" "}
          Companies around the globe
        </motion.p>
        <div className="flex gap-4 py-10">
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={CompanyLogo} alt="logo" />
            <p>LogoIpsum </p>
          </div>
        </div>
      </div>
    </div>
  );
};
