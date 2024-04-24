'use client';
// Navbar.tsx

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const MenuItem: React.FC<{ href: string; label: string }> = ({
    href,
    label,
  }) => {
    const isActive = pathname === href;

    return (
      <Link href={href}
          className={`${
            isActive
              ? "text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              : "text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          } block px-4 py-2 rounded-md transition-colors duration-200 ease-in-out`}
        >
          {label}
      </Link>
    );
  };

  return (
    <nav className="bg-white text-black dark:bg-gray-800 dark:text-white shadow-md dark:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="mr-4">
              <Image src="/m-logo.png" alt="Logo" width={40} height={40} />
            </Link>
            <Link href="/">
              <span className="hidden md:block text-sm font-semibold">
                Meg Shoemaker
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <MenuItem href="/" label="Home" />
            <MenuItem href="/about" label="About" />
          </div>
          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              className="text-black dark:text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 space-y-2`}>
          <MenuItem href="/" label="Home" />
          <MenuItem href="/about" label="About" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
