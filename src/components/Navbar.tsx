"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-58">
      {/* Logo */}
      <div className="w-1/3 md:hidden md:justify-start lg:hidden lg:justify-center xl:justify-center xl:hidden">
        {/* <Link href="/" className="text-sm bg-[#1e1e2e] flex rounded-md">
          <span className="flex text-[#1e1e2e] font-bold justify-center items-center bg-[#1e1e2e] text-2xl p-2 m-2 rounded-md">
            ISAF
          </span>
        </Link> */}
      </div>
      <div className="w-1/3 flex justify-center md:justify-start lg:justify-center xl:justify-center ">
        <Link
          href="/"
          className="text-sm bg-[#cdd6f4] flex rounded-md justify-center"
        >
          <span className="flex text-[#cdd6f4] font-bold justify-center items-center bg-[#313244] text-2xl p-2 m-2 rounded-md">
            ISAF
          </span>
        </Link>
      </div>

      {/* NavList */}
      <div className="hidden items-center md:flex gap-10 w-1/3 md:justify-center lg:justify-center xl:justify-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link
              href={link.url}
              key={link.title}
              className={`p-2 rounded ${
                isActive
                  ? "bg-[#cdd6f4] text-[#313244] font-bold"
                  : "text-[#bac2de]"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>

      {/* Responsive Menu */}
      <div className="flex w-1/3 justify-end md:justify-end lg:justify-center xl:justify-center">
        {/* Menu */}
        <button className="w-10 h-5 flex flex-col items-end justify-evenly">
          <div className="w-6 h-1 bg-[#cdd6f4] dark:bg-gray-300 rounded"></div>
          <div className="w-4 h-1 bg-[#cdd6f4] dark:bg-gray-300 rounded"></div>
          <div className="w-2 h-1 bg-[#cdd6f4] dark:bg-gray-300 rounded"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
