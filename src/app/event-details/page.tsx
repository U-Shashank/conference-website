"use client";
import { useState, useRef } from "react";
import * as motion from "motion/react-client";
import { link } from "fs";

export default function EventDetails() {
  // For scroll-based animations
  const introRef = useRef(null);
  const documentsRef = useRef(null);
  const downloadRef = useRef(null);

  // Conference files data
  const conferenceFiles = [
    {
      id: 1,
      title: "Event Program Schedule",
      isNew: true,
      link: "/files/event-program-schedule.pdf",
      description: "Download the complete program schedule for ICITIIT'26.",
    },
    {
      id: 2,
      title: "Paper Presentation Schedule",
      isNew: true,
      link: "/files/event-program-schedule.pdf",
      description:
        "Download the complete paper presentation schedule schedule for ICITIIT'26.",
    },
  ];

  const handleFileDownload = (file: any) => {
    // In a real application, this would trigger the download
    console.log(`Downloading ${file.filename}`);
    // You would implement actual download logic here
  };

  return (
    <div className="min-h-screen">
      {/* Custom Vibrant Header with Gradient */}
      <header className="relative w-full h-90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-secondary z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-20 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              Event Details
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Access comprehensive event documentation and important information
              for ICITIIT'26
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content - Vertically stacked sections */}
      <main className="text-center">
        {/* Event Overview Section */}
        <motion.section
          ref={introRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-8"
            >
              Event Documentation
            </motion.h2>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-xl p-8 shadow-md mb-10"
            >
              {/* <p className="text-foreground text-lg mb-6">
                Welcome to the ICITIIT'26 Event Details page. Here you can
                access all essential documentation for the conference including
                the complete program schedule and registration guidelines.
              </p> */}
              <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                {conferenceFiles.map((file, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="p-4 border rounded-lg bg-background hover:shadow-md transition-shadow w-full md:w-[calc(50%-0.75rem)]"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-foreground">
                        {file.title}
                      </h3>
                      {file.isNew && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 text-left mt-1">
                      {file.description}
                    </p>
                    <div className="text-left">
                      <a
                        href={file.link}
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Download
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
