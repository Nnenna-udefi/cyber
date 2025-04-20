"use client";
import React from "react";
import Image from "next/image";
import CompanyLogo from "@/images/companyLogo.png"; // your image
import { motion } from "framer-motion";

export const LogoScroller = () => {
  const logos = Array(6).fill(0); // Replace with actual data if needed

  return (
    <div className="bg-[#121423]  text-white py-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-lg"
      >
        Trusted by more than <span className="text-[#c27752]">1600+</span>{" "}
        Companies around the globe
      </motion.p>

      {/* Outer container with overflow hidden */}
      <div className="relative overflow-hidden w-full mt-16">
        {/* Scrolling content */}
        <div className="logo-track">
          {[...logos, ...logos].map((_, idx) => (
            <div className="flex items-center gap-3 logo-item" key={idx}>
              <Image src={CompanyLogo} alt="logo" className="w-8 h-8" />
              <p className="animate-bounceY text-2xl">LogoIpsum</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
