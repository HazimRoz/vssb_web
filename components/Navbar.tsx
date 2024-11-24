"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { navItems } from '@/data/index';
import Logo from '@/assets/logo_vssb.png';
import { usePathname } from 'next/navigation';

const variants = {
  open: { opacity: 1, y: 100, height: "auto" },
  closed: { opacity: 0, y: "-100%", height: 0 },
};

const pageTitles: Record<string, string> = {
  '/': "Home",
  '/about-us': "About Us",
  '/what-we-do': "What We Do",
  '/career': "Career",
  '/contact-us': "Contact Us",
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || "Default Title";
  const [selectedNavItem, setSelectedNavItem] = useState<string | null>(pageTitle);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavItemClick = (name: string) => {
    setSelectedNavItem(name);
    setIsMobileMenuOpen(false); // Close mobile menu when an item is clicked
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-100 bg-opacity-100 shadow-md z-50">
      <div className="fixed top-0 w-full bg-gray-100 bg-opacity-100 z-10">
        <div className="relative container mx-auto flex justify-between items-center px-4 z-20">
          {/* LOGO SECTION */}
          <div className="flex items-center py-1">
            <Link href="/" onClick={() => handleNavItemClick("Home")}>
              <Image
                src={Logo}
                alt="VSSB"
                width={140}
              />
            </Link>
          </div>

          {/* NAVIGATION LINKS SECTION */}
          <div className="hidden md:flex">
            <ul className="flex space-x-6">
              {navItems.map((navItem: any, index: number) => (
                <li
                  key={index}
                  className={`text-md font-mono font-semibold cursor-pointer px-3 py-2 rounded 
                    hover:text-blue-500 hover:bg-gray-200
                    ${selectedNavItem === navItem.name ? 'text-blue-500' : ''}`}
                >
                  <Link href={navItem.link}
                  onClick={() => handleNavItemClick(navItem.name)}>
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MENU BUTTON SECTION */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <AiOutlineCloseCircle className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SECTION */}
      <motion.nav
        ref={menuRef}
        className="md:hidden left-0 w-full bg-gray-100 shadow-md overflow-hidden"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={variants}
        initial="closed"
        style={{ zIndex: isMobileMenuOpen ? 40 : 0 }}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {navItems.map((navItem: any, index: number) => (
            <li
              key={index}
              className={`text-lg font-mono font-semibold cursor-pointer px-3 py-2 rounded 
                hover:text-blue-500 hover:bg-gray-200
                ${selectedNavItem === navItem.name ? 'text-blue-500' : ''}`}
              onClick={() => handleNavItemClick(navItem.name)}
            >
              <Link href={navItem.link} className="block w-full h-full">
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

    </nav>
  );
};

export default Navbar;
