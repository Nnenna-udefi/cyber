import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GradientButton } from "./gradientButton";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="text-white p-4 bg-[#170a24]">
      <div>
        <div className="flex justify-between items-center">
          <Image
            fetchPriority="high"
            width="300"
            height="155"
            src="https://kits.roxthemes.com/byterox/wp-content/uploads/2024/11/logo-DU-min.png.pagespeed.ce.Ek3z2Kc6K2.png"
            alt="logo"
            sizes="(max-width: 690px) 100vw, 690px"
          />
          <ul className="md:flex hidden gap-6 uppercase">
            <li>Home</li>
            <li>About Us</li>
            <Link href="#services">
              {" "}
              <li>Services</li>
            </Link>

            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
          <GradientButton>Get Started </GradientButton>
          <div className="md:hidden block">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};
