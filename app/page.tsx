"use client";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { HomeServices, HomeWhyChooseUs, HomeAboutUs } from '@/data/index';
import HomeImage from '@/assets/Home/HomeImage.jpg';
import ElNuwr from '@/assets/Home/OurPartners/ElNuwr.jpg';
import TnG from '@/assets/Home/OurPartners/tngLogo.png';
import { motion } from 'framer-motion';

export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null); // Change to HTMLDivElement if it's a section
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const yPosition = (typeof window !== "undefined" && window.innerWidth >= 1024) ? 100 : 80;

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  ;const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener for screen resizing
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Set isMounted to true when the component mounts
    setIsMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-10">
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative w-screen h-full py-40 overflow-hidden">
          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HomeImage.src})`,
              filter: 'blur(2px)', // Adjust the blur intensity as needed
            }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Text and Button Layer */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">We Come, We See, We Conquer</h1>
            <p className="mt-4 text-lg md:text-xl">Delivering a one-stop solution to meet your business requirements</p>
            <button onClick={scrollToServices} className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium">
              Learn More
            </button>
          </div>
        </section>

        <div className=''>
          {/* About Us Section */}
          <section ref={servicesRef} className="py-16 px-12 bg-[#faffaf] flex flex-col md:flex-row items-center">
            <div className="flex justify-center">
              <motion.div 
                className="md:w-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  className="text-3xl font-bold"
                  initial={{ x: '-100vw' }} 
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                >
                  About Us
                </motion.h2>
                
                <motion.p 
                  className="mt-4"
                  initial={{ x: '100vw' }} 
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                >
                  We specialize in providing top-quality manpower, workshop, and hostel management solutions tailored to client needs. 
                  Our team is dedicated to sourcing skilled local and foreign talent, maintaining productive workshops, and managing 
                  comfortable accommodations to support our workforce. With a focus on reliability and excellence, we deliver solutions 
                  that drive success.
                </motion.p>
                
                <a href="/about-us" className="mt-4 inline-block text-blue-600 hover:underline">
                  <div className='px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium'>
                    Read More
                  </div>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-8 bg-white">
            <h2 className="text-3xl font-semibold text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
              {HomeServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{
                    opacity: isMounted ? 1 : 0,
                    scale: isMounted && hoveredIndex === index ? 1.1 : 1, // Scale up on hover
                  }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Blurred Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.image.src})`,
                      filter: 'blur(1px)', // Adjust blur intensity as desired
                    }}
                  ></div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-40"></div>

                  {/* Content */}
                  <motion.div
                    className="relative z-10 p-4 rounded-lg"
                    animate={{ y: hoveredIndex === index ? 0 : yPosition }} // Move content up on hover
                    transition={{ duration: 0.3 }} // Adjust transition duration as desired
                  >
                    <h3
                      className={`mb-2 text-2xl font-semibold text-white drop-shadow-md ${
                        isSmallScreen && hoveredIndex !== index ? "transform translate-y-6" : ""
                      }`}
                    >
                      {service.title}
                    </h3>
                    <motion.p 
                      className="mt-4 text-white drop-shadow-md" 
                      initial={{ opacity: 0 }} // Initially hidden
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.a
                      href="/what-we-do"
                      className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full font-medium drop-shadow-md"
                      initial={{ opacity: 0 }} // Initially hidden
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>

                  {/* Scale effect on hover */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 px-8 bg-[#faffaf]">
            <h2 className="text-3xl font-semibold text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {HomeWhyChooseUs.map((reason, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition duration-300 text-center"
                  initial={{ opacity: 0 }} 
                  animate={isMounted ? { opacity: 1 } : { opacity: 0 }} 
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={reason.image.src} 
                    alt={reason.title} 
                    className="max-w-xs max-h-32 object-contain mb-4" 
                  />
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-4">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-16 px-8 bg-gray-50 items-center justify-center">
            <h2 className="text-3xl font-semibold text-center">Our Partners</h2>
            <div className="mt-8">
               {/* grid grid-cols-1 md:grid-cols-4 gap-8 */}
              {/* Repeat this block for each partner */}
              <div className="py-6 bg-gray-50 flex flex-row items-center justify-center gap-6">
                <Image
                  src={ElNuwr}
                  alt="ElNuwr logo"
                  className="w-auto h-24 object-contain hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src={TnG}
                  alt="TnG logo"
                  className="w-auto h-24 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="py-16 px-8 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="italic">"Excellent service and reliable team. Highly recommended!"</p>
                <p className="mt-4 font-semibold">- Client Name, Company</p>
              </div>
            </div>
          </section> */}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center w-screen">
        <h2 className="text-3xl font-semibold">Ready to get started?</h2>
        <p className="mt-4 text-lg">Check out our career opportunities or follow our social media.</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="/career" className="w-48">
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-full">
              Careers
            </button>
          </a>
          <a href="/contact-us" className="w-48">
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-full">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
