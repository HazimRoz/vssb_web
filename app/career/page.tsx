"use client";
import Form from './form';
import { careerItem } from '@/data/index';
import useIsSmallScreen from '@/data/useIsSmallScreen';
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import CareerHero from '@/assets/Careers/consigning.jpg';
import React, { FC, useState, useRef, useEffect } from 'react';

interface Job {
  id: number;
  jobTitle: string;
  jobDescription: string;
  jobRequirement: string[];
  category?: string;
}

interface CareerCategory {
  category: string;
  item: Job[];
}

const Career: FC = () => {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]); // Track applied jobs by ID
  const [showForm, setShowForm] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rightOpen, setRightOpen] = useState(false); // Tracks if the right column is open
  const isSmallScreen = useIsSmallScreen();
  const jobListReft = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null); // Ref for the Form section
  const detailsRef = useRef<HTMLDivElement | null>(null);

  // Handles showing job details
  const handleReadDetailsClick = async (job: any, category: string) => {
    if (selectedJob?.id === job.id) return; // Do nothing if the same job is clicked
    if (!rightOpen) setRightOpen(true); // Open the right column if not already open

    // If a different job is selected, animate the change
    if (selectedJob && rightOpen) {
      setIsAnimating(true);
      setSelectedJob(null); // Close current job
      await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for closing animation to finish
      setIsAnimating(false);
    }

    // Check if the selected job has been applied for
    const jobIsApplied = isApplied(job);
  
    // Show the selected job and determine whether to show the form
    setShowForm(jobIsApplied); // Show form if the job has been applied for
    setSelectedJob({...job, category}); // Show the selected job
    
    if (jobListReft.current) {
      jobListReft.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Scroll to the form section
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handles the 'Apply' button click
const handleApplyClick = async (job: Job, category: string, fromLeftColumn: boolean = false) => {
  const isSameJob = selectedJob?.id === job.id;  // Check if the selected job is the same
  const jobIsApplied = isApplied(job);          // Check if the job is already applied

  // If the same job is clicked and the form is open, do nothing
  if (isSameJob && showForm) return;

  // Close current job if a different job is clicked while right column is open
  if (rightOpen && !isSameJob) {
    setSelectedJob(null);                       // Reset selected job
    await new Promise((resolve) => setTimeout(resolve, 500));  // Wait for animation to finish
  }

  // Open the right column if applying from the left column and it's not already open
  if (fromLeftColumn && !rightOpen) {
    setRightOpen(true);                         // Open the right column
  }

  // Update selected job and show the form
  setSelectedJob({ ...job, category });
  setShowForm(!jobIsApplied);                   // Show form if not already applied

  // Scroll to the form section
  if (formRef.current) {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  // Handles the form submission for a specific job
  const handleSubmitForm = (job: any) => {
    setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, job.id]); // Track applied job by ID
    setShowForm(true); // Keep the form open after submission
  };

  // Check if a job has been applied for (by ID)
  const isApplied = (job: any) => appliedJobs.includes(job.id);

  return (
    <div className="h-full w-screen bg-gray-50 py-8">
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
            backgroundImage: `url(${CareerHero.src})`,
            filter: "blur(2px)", 
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
          Join Our Team
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl font-medium text-gray-200 mt-4 max-w-xs md:max-w-lg lg:max-w-2xl leading-relaxed z-20 px-4 md:px-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          We’re looking for passionate individuals to help us make a difference. Explore exciting career opportunities and apply to become a part of our journey.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-150 z-10"
          onClick={() => {
            if (jobListReft.current) {
              jobListReft.current.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Explore Careers
        </motion.button>
      </motion.div>

      <div ref={jobListReft} className="max-w-screen pt-10 flex flex-col md:flex-row relative ">
        {/* Left column: Job List */}
        <motion.div
          className={`md:p-4 max-h-full ${
            rightOpen ? "md:w-[35%] w-full md:max-h-[120vh] border-r" : "md:w-3/5 w-full mx-auto"
          } transition-all duration-500 ease-in-out`}
          layout
          layoutId={rightOpen ? "open" : "closed"} // Optional for layout transitions
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 50, damping: 10 }}
        >
          <div className=''>
            <h2 className="pl-5 md:pl-0 text-2xl font-bold mb-6">Job Listings</h2>
          </div>
          <div className={`${rightOpen ? 'md:max-h-[100vh] overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:thin]' : ''}`}>
            <ul className={`flex ${rightOpen ? 'flex-row md:flex-col space-x-4 md:space-x-0':'flex-col'}`}>
              {careerItem.map((category) => (
                <div key={category.category} className="mb-6 ml-0">
                  <div className="bg-gray-200 md:rounded-md shadow-sm p-4 min-h-[200px]">
                    <h3 className="text-lg w-full font-semibold text-gray-800 mb-2">{category.category}</h3>
                    <ul className={`flex w-full md:flex-wrap  ${rightOpen ? 'space-y-0 md:space-y-2 space-x-2 md:space-x-0 flex-row md:flex-col':'space-y-4 flex-col'}`}>
                      {category.item.map((job) => (
                        <li
                          key={job.id} // Use job ID as key
                          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-500 ease-in-out w-full min-h-[100px] flex flex-col justify-between"
                        >
                          <div className="flex justify-between items-center">
                            <div className=''>
                              <span className={`text-black text-md mr-10 md:mr-0`}>{job.jobTitle}</span>
                            </div>
                            <div className='align-right'>
                              <div className={`flex flex-col justify-end flex-grow space-y-2 md:space-y-0 ${rightOpen ? 'w-full':'md:flex-row space-x-0 md:space-x-2'} `}>
                                <button
                                  onClick={() => handleReadDetailsClick(job, category.category)}
                                  className={`text-white text-sm max-h-20 max-w-32 bg-blue-600 ${rightOpen ? 'md:mb-4' : ''} hover:bg-blue-700 rounded-lg px-2 py-2 transition-all duration-500 ease-in-out whitespace-nowrap`}
                                >
                                  Read Details
                                </button>
                                <motion.button
                                  className={`max-w-32 max-h-20 text-sm text-white ${
                                    isApplied(job) ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                                  } rounded-lg px-2 py-2 transition-all duration-500 ease-in-out`}
                                  onClick={() => handleApplyClick({ ...job, category: category.category }, category.category, true)} // Apply from left column
                                  disabled={isApplied(job)} // Disable if already applied
                                  initial={{ scale: 1 }} // Initial scale for the animation
                                  animate={{ scale: isApplied(job) ? 1.05 : 1 }} // Animate scale on apply
                                  transition={{ duration: 0.2 }} // Quick transition for the scale
                                >
                                  {isApplied(job) ? 'Applied' : 'Apply'}
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right column: Job Details */}
        <AnimatePresence>
          {!isAnimating && rightOpen && selectedJob && (
            <motion.div
              ref={detailsRef}
              className="w-full md:w-[50%] p-6"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 50, damping: 10 }}
              layout
              layoutId={rightOpen ? "open" : "closed"} // Optional for layout transitions
            >
              <h1 className="text-3xl font-semibold text-gray-900">{selectedJob.category}</h1>
              <h2 className="text-3xl font-semibold text-gray-900">{selectedJob.jobTitle}</h2>
              <p className="mt-4 text-gray-700"><strong>Description:</strong> {selectedJob.jobDescription}</p>
              <p className="mt-2 text-gray-700"><strong>Requirements:</strong></p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {selectedJob.jobRequirement.map((req: string, index: number) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              {!isApplied(selectedJob) && (
                <button
                  className="mt-4 text-white bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2 transition duration-300"
                  onClick={() => handleApplyClick(selectedJob, selectedJob.category)} // Apply from right column
                  disabled={isAnimating}
                >
                  Apply
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Section */}
        <AnimatePresence>
          {showForm && selectedJob && (
            <motion.div
              ref={formRef}
              className={`relative w-full md:w-[40%] right-0 md:right-10 p-6 border-l bg-white shadow-md`}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 50, damping: 10 }}
            >
              {isApplied(selectedJob) ? (
                <motion.div 
                  className="text-2xl font-semibold text-blue-600"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut", type: "spring", stiffness: 50, damping: 10 }}
                >
                  You have applied for this job. Sit back and we will contact you soon!
                </motion.div>
              ) : <Form job={selectedJob} onSubmit={handleSubmitForm} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Career;
