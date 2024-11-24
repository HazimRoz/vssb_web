"use client";
import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import ContactUsHero from '@/assets/contactushero2.jpg';
import { FaFacebook, FaTiktok } from 'react-icons/fa';

const ContactUs: FC = () => {
  const floatingVariants: Variants = {
    animate: {
      x: [0, 70, 0, -70, 0, 70, 0],
      y: [0, 70, -70, 0, 70, 70, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    stop: { x: 0, y: 0 },
  };

  const heartbeatVariants: Variants = {
    bounce: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-screen h-80 flex flex-col items-center justify-center text-white relative mt-16">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${ContactUsHero.src})`, // Use the imported image
            filter: 'blur(2px)', // Apply blur effect
            zIndex: 1, // Ensure it's behind other content
          }}
        />
        <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0"></div> {/* Increased opacity */}
        <div className="relative z-10 text-center p-6">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl"
            style={{
              textShadow: '2px 2px 0 rgba(150, 150, 150, 1)', // Balanced grey outline
            }}
          >
            Stay Connected with Our Community
          </h1>
          <p
            className="text-lg md:text-xl drop-shadow-lg"
            style={{
              textShadow: '1px 1px 0 rgba(150, 150, 150, 1)', // Balanced grey outline for paragraph
            }}
          >
            Follow us on social media to stay updated on our latest news and events.
          </p>
        </div>
      </section>

      {/* ITEMS SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-center h-auto relative space-y-8 md:space-y-0 md:space-x-8 py-12">
        
        {/* TikTok Circle - Left */}
        <a 
          href="https://www.tiktok.com/@vibrantsets?_t=8oOx5KxvWMM&_r=1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black bg-opacity-80 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 mb-8 md:mb-0 md:mr-16"
            variants={floatingVariants}
            animate="animate"
            whileHover="stop"
          >
            <FaTiktok className="text-white text-3xl md:text-4xl" />
          </motion.div>
        </a>

        {/* Main Circle with Caption */}
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 rounded-full flex flex-col items-center justify-center text-center relative shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
          initial={{ scale: 1 }}
          variants={heartbeatVariants}
          animate=""
          whileHover={{ scale: 1.1 }}
          style={{
            backgroundColor: '#f4e4b2', // Light background for the circle
            border: '4px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-30 rounded-full"></div>
          
          {/* Content with shadow for readability */}
          <h2 className="relative text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow-lg z-10">
            Discover More on Social Media
          </h2>
          <p className="relative text-white text-base md:text-lg drop-shadow-md z-10">
            See what we’re up to – follow along and stay connected!
          </p>
        </motion.div>

        {/* Facebook Circle - Right */}
        <a 
          href="https://www.facebook.com/share/yBD63MddbUnaBc3q/?mibextid=LQQJ4d" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-700 bg-opacity-90 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 mb-8 md:mb-0 md:ml-20"
            variants={floatingVariants}
            animate="animate"
            whileHover="stop"
          >
            <FaFacebook className="text-white text-3xl md:text-4xl" />
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default ContactUs;
