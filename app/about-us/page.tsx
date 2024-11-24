"use client";
import React, { FC, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { aboutUsCoreValues, aboutUsClients } from '@/data/index';
import OurCompany from '@/assets/AboutUs/Our-Services.jpg';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

const AboutUs: FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const animateRef = useRef<HTMLImageElement | null>(null);
  return (
    <div className="bg-gray-50 text-gray-800 w-screen">
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-full w-screen py-20 md:py-32 lg:py-40 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${OurCompany.src})`,
            filter: "blur(2px)", // Increased blur for better readability
            zIndex: 0,
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Main content */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white z-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl font-medium text-gray-200 mt-4 max-w-xs md:max-w-lg lg:max-w-2xl leading-relaxed z-20 px-4 md:px-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Learn more about our company and the organisations that make it happen.
        </motion.p>
      </motion.div>

      {/* Company Overview */}
      <section className="relative h-auto md:h-80 bg-[#0f67b1] flex items-center justify-center px-4 md:px-6 py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-black max-w-sm md:max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Our Story
          </h1>
          <p className="mt-4 text-sm md:text-lg lg:text-xl text-white drop-shadow-md leading-relaxed">
            At Vibrant Set Sdn Bhd, we are committed to delivering excellence across a wide range of services. From manpower supply—both local and foreign—to facilities management, transport and vehicle maintenance, and IT solutions, we strive to be your trusted partner in ensuring seamless operations and innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-10 bg-[#f4f0d7]">
        <h2 className="text-3xl font-semibold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {aboutUsCoreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-4">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center">Our Clients</h2>
        
        <div className="mt-8 flex justify-center relative">
          <div className="max-w-2xl w-full relative">
            {/* Custom Navigation Arrows */}
            <div
              className="absolute left-[-1rem] md:left-[-2.5rem] top-1/2 transform -translate-y-1/2 text-gray-700 text-4xl z-50 cursor-pointer"
              onClick={() => swiperRef.current?.swiper.slidePrev()} // Go to the previous slide
            >
              &#10094;
            </div>
            
            <Swiper
              ref={swiperRef}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination'
              }}
              navigation // Enable navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              onSlideChange={(swiper) => {
                if (swiper.autoplay) {
                  swiper.autoplay.start(); // Restart autoplay on slide change
                }
              }}
            >
              {aboutUsClients.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center w-full h-40 rounded-lg shadow-md pb-10">
                    <img
                      src={client.image.src}
                      alt={`${client.image} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div
              className="absolute right-[-1rem] md:right-[-2.5rem] top-1/2 transform -translate-y-1/2 text-gray-700 text-4xl z-50 cursor-pointer"
              onClick={() => swiperRef.current?.swiper.slideNext()} // Go to the next slide
            >
              &#10095;
            </div>

            {/* Custom Pagination */}
            <div className="custom-swiper-pagination mt-1"></div>

            {/* Hide Default Swiper Navigation Arrows */}
            <style jsx global>{`
              .swiper-button-next,
              .swiper-button-prev {
                display: none !important;
              }
              .custom-swiper-pagination {
                display: flex;
                justify-content: center;
                position: absolute;
                bottom: 0;
                width: 100%;
              }
              .swiper-pagination-bullet {
                background-color: gray;
                opacity: 1;
                margin: 0 5px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              .swiper-pagination-bullet-active {
                background-color: black;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Interested in working with us?</h2>
        <p className="mt-4 text-lg">Contact us to learn more about our services and how we can help you achieve your goals.</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="/career" className="w-48">
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-full">
              Careers
            </button>
          </a>
          <a href="/contact" className="w-48">
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-full">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
