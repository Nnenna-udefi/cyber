"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GradientButton } from "./gradientButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About Us", href: "/about" },
    { id: 3, text: "Services", href: "#services" },
    { id: 4, text: "Pricing", href: "/pricing" },
    { id: 5, text: "Contact Us", href: "/contact-us" },
  ];
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
            {navItems.map((items) => {
              const isActive = pathname === items.href;
              return (
                <li
                  key={items.id}
                  className={`hover:text-[#cb45ff] lg:text-xl text-base ${
                    isActive ? `text-[#cb45ff] ` : ``
                  }  `}
                >
                  <Link href={items.href}>{items.text}</Link>
                </li>
              );
            })}
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
