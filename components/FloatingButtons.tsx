"use client";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingButtons: FC = () => {
    const whatsappLink = "https://www.wasap.my/60125832365";
    const emailLink = "mailto:enquiry@vibrantsets.com.my?subject=Enquiry%20On%20Services%20And%20Job%20Subject&body=I%20found%20Vibrant%20Sets%20service%20and%20would%20like%20to%20know%20more%20about%20the%20following:";

    const [hoveredButton, setHoveredButton] = useState<"whatsapp" | "email" | null>(null);

    return (
        <>
            <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
                <div
                    className="relative flex items-center"
                    onMouseEnter={() => setHoveredButton("whatsapp")}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                    <AnimatePresence>
                        {hoveredButton === "whatsapp" && (
                            <motion.div
                                className="absolute right-full mr-3 flex items-center bg-green-600 text-white p-3 rounded-lg shadow-lg tooltip-bubble tooltip-whatsapp min-w-max"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-sm">Message us for enquiry!</span>
                                <div className="tooltip-tail-whatsapp"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                <div
                    className="relative flex items-center"
                    onMouseEnter={() => setHoveredButton("email")}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    <a
                        href={emailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope size={24} />
                    </a>
                    <AnimatePresence>
                        {hoveredButton === "email" && (
                            <motion.div
                                className="absolute right-full mr-3 flex items-center bg-blue-600 text-white p-3 rounded-lg shadow-lg tooltip-bubble tooltip-email min-w-max"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-sm">Send us an email for enquiry!</span>
                                <div className="tooltip-tail-email"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
                .tooltip-bubble {
                    position: relative;
                    color: white;
                    padding: 10px; /* Slightly increased padding */
                    border-radius: 8px; /* Rounded corners */
                    font-size: 0.875rem; /* Font size */
                    white-space: nowrap; /* Forces single-line display */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
                }

                .tooltip-whatsapp {
                    background-color: #4CAF50; /* WhatsApp tooltip background */
                }

                .tooltip-email {
                    background-color: #2196F3; /* Email tooltip background */
                }

                .tooltip-tail-whatsapp {
                    position: absolute;
                    top: 50%;
                    right: -8px; /* Adjust position */
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent; /* Tail color */
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                    border-left: 8px solid #4CAF50; /* Matching tail color */
                    margin-left: -4px; /* Center the tail */
                }

                .tooltip-tail-email {
                    position: absolute;
                    top: 50%;
                    right: -8px; /* Adjust position */
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent; /* Tail color */
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                    border-left: 8px solid #2196F3; /* Matching tail color */
                    margin-left: -4px; /* Center the tail */
                }
            `}</style>
        </>
    );
};

export default FloatingButtons;
