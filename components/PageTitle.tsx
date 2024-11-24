"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const pageTitles: Record<string, string> = {
  '/': "Home",
  '/about-us': "About Us",
  '/what-we-do': "What We Do",
  '/career': "Career",
  '/contact-us': "Contact Us",
};

const PageTitle: React.FC = () => {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || "Default Title";
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset key to force remount and trigger animation
    setKey(prevKey => prevKey + 1);
  }, [pathname]);

  return (
    <motion.div
      key={key}
      className="flex w-full items-center justify-center bg-dark-blue py-14 mt-16"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {pageTitle}
      </motion.h1>
    </motion.div>
  );
};

export default PageTitle;
