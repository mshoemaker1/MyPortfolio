"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuItem from "./MenuItem";
import HamburgerIcon from "./HamburgerIcon";

const menuItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-white text-black dark:bg-gray-800 dark:text-white shadow-md dark:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="ml-2 md:ml-10 w-10 md:w-[86px]">
              <Image src="/m-logo.png" alt="Logo" width={86} height={86} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <MenuItem key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden relative z-20">
            <button
              className="text-black dark:text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <HamburgerIcon isOpen={isOpen} />
            </button>
          </div>
        </div>

        {/* Responsive Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 dark:text-white shadow-md dark:shadow-lg ${
            isOpen ? "block" : "hidden"
          } md:hidden mt-2 space-y-2 z-10`}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={closeNavbar}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
