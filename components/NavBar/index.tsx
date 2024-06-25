"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuItem from "./MenuItem";
import HamburgerIcon from "./HamburgerIcon";

const menuItems = [
  {
    href: "/",
    label: "PROJECTS",
    subItems: [
      { href: "/projects/trapped-downtown", label: "Trapped Downtown" },
      { href: "/projects/richfield-july-4", label: "Richfield 4th of July" },
      { href: "/projects/little-cup", label: "Little Cup" },
    ],
  },
  { href: "/about", label: "ABOUT" },
  // { href: "/contact", label: "CONTACT" },
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
    <nav className="relative bg-white text-black dark:bg-[#000] dark:text-white shadow-md dark:shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 md:pr-24 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="ml-2 md:ml-10 w-10 md:w-[86px]">
              <Image src="/m-logo.svg" alt="Logo" width={86} height={86} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <MenuItem href={item.href} label={item.label} />
                {item.subItems && (
                  <div className="absolute left-0 w-64 p-4 bg-white dark:bg-zinc-900 dark:text-white shadow-md dark:shadow-lg hidden group-hover:block">
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.href}
                        href={subItem.href}
                        label={subItem.label}
                      />
                    ))}
                  </div>
                )}
              </div>
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
            <div key={item.href}>
              <MenuItem
                href={item.href}
                label={item.label}
                onClick={closeNavbar}
              />
              {item.subItems && (
                <div className="ml-4">
                  {item.subItems.map((subItem) => (
                    <MenuItem
                      key={subItem.href}
                      href={subItem.href}
                      label={subItem.label}
                      onClick={closeNavbar}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
