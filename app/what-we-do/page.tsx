"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { whatWeDoItem } from '@/data/index';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import whatWeDoImage from '@/assets/WhatWeDo/whatwedo1.png';

const WhatWeDo = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({ width: 30, height: 420 });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animateRef = useRef<HTMLImageElement | null>(null);
  const isInView = useInView(animateRef, { once: true });
  const mainControl = useAnimation();
  const swiperRef = useRef<SwiperRef | null>(null); // Reference for the Swiper instance

  const selectedItem = whatWeDoItem.flatMap(category => category.items).find(item => item.id === selectedId);

  useEffect(() => {
    if (imageRef.current) {
      setImageSize({ width: imageRef.current.width, height: imageRef.current.height });
    }
  }, [currentImageIndex]);

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-full w-screen py-40 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // Only animate the main div's opacity
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${whatWeDoImage.src})`,
            filter: 'blur(1px)', // Set the desired blur level
            opacity: 0.7, // Apply opacity only to the background
            zIndex: -1 // Ensure this is behind all content
          }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-black"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Discover Our Expertise
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-semibold text-black mt-4 max-w-xl leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Learn about what we do and explore our projects across various industries.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            animateRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Now
        </motion.button>
      </motion.div>

      {/* Items Section */}
      <div ref={animateRef}>
        <motion.div 
          className="flex min-h-screen flex-col items-center md:px-20 pt-2 pb-10"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 }}
        >
          {whatWeDoItem.map((category) => (
            <div key={category.category} className="mb-10">
              <motion.div className={`p-10 rounded-lg shadow-lg text-black`} style={{ backgroundColor: category.bgColor }}>
                <h2 className="text-4xl font-extrabold mb-4">{category.category}</h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      onClick={() => {
                        setSelectedId(item.id);
                        setCurrentImageIndex(0); // Reset image index when a new item is selected
                      }}
                      className="p-6 border rounded-lg shadow-lg bg-white cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }} // Add hover effect
                    >
                      <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                        <motion.img 
                          src={item.imageFront.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300" // Added transition here
                        />
                      </div>
                      <motion.h2 className="text-2xl font-bold my-5">{item.title}</motion.h2>
                      <motion.h5 className="text-xl font-semibold">{item.subtitle}</motion.h5>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)} // Close on backdrop click
          >
            <motion.div
              className="relative w-11/12 md:w-4/5 max-w-3xl h-auto md:h-[70vh] bg-white rounded-md overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing on content click
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Swiper
                ref={swiperRef} // Assign ref to the Swiper instance
                navigation={true}
                modules={[Pagination, Navigation]}
                className="relative w-full h-full"
                onSlideChange={(swiper) => {
                  const realIndex = swiper.realIndex || 0;
                  setCurrentImageIndex(realIndex);
                }}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
              >
                {selectedItem.displayItem.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full md:min-h-[80vh] h-[40vh] md:h-[50vh] lg:h-[60vh] max-h-screen overflow-hidden">
                      <img
                        src={item.src.src}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                        ref={index === currentImageIndex ? imageRef : null}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-30 z-50">
                <motion.h2 className="text-lg md:text-2xl font-bold text-white">{selectedItem.title}</motion.h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-80 z-50">
                <motion.p className="text-sm md:text-base text-white text-center">
                  {selectedItem.displayItem[currentImageIndex]?.caption}
                </motion.p>
              </div>

              {/* Custom Navigation Arrows */}
              <div 
                className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 cursor-pointer ml-3"
                onClick={() => swiperRef.current?.swiper.slidePrev()} // Go to the previous slide
              >
                &#10094; {/* Left arrow icon */}
              </div>
              <div 
                className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 cursor-pointer mr-3"
                onClick={() => swiperRef.current?.swiper.slideNext()} // Go to the next slide
              >
                &#10095; {/* Right arrow icon */}
              </div>
              
              <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                  display: none;
                }
              `}</style>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatWeDo;
