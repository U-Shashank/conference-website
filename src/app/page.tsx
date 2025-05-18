"use client"
import { useState, useRef, useEffect } from 'react';
import ConferenceHeader from '@/components/Conference';
import * as motion from 'motion/react-client';

export default function Home() {
  // For scroll-based animations
  const conferenceRef = useRef(null);
  const aboutRef = useRef(null);
  const datesRef = useRef(null);
  
  // Conference files with "new" flag for recent additions
  const conferenceFiles = [
    { 
      title: "Call for Papers", 
      description: "Details about submission requirements and research topics", 
      link: "/files/call-for-papers.pdf", 
      isNew: true 
    },
    { 
      title: "Registration Form", 
      description: "Conference registration details and payment information", 
      link: "/files/registration.pdf", 
      isNew: true 
    },
    { 
      title: "Conference Schedule", 
      description: "Detailed program with keynote speakers and sessions", 
      link: "/files/schedule.pdf", 
      isNew: false 
    },
    { 
      title: "Accommodation Guide", 
      description: "Information about hotels and transportation", 
      link: "/files/accommodation.pdf", 
      isNew: false 
    }
  ];
  
  // Important dates for the timeline
  const importantDates = [
    { date: "October 15, 2024", event: "Paper Submission Deadline" },
    { date: "November 20, 2024", event: "Notification of Acceptance" },
    { date: "December 15, 2024", event: "Camera-ready Paper Submission" },
    { date: "January 10, 2025", event: "Early Bird Registration Deadline" },
    { date: "February 21-22, 2025", event: "Conference Dates", current: false }
  ];

  return (
    <div className="min-h-screen">
      <ConferenceHeader />
      
      {/* Main Content - Vertically stacked sections */}
      <main>
        {/* Conference Information Section */}
        <motion.section 
          ref={conferenceRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Conference Information
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl text-foreground font-semibold mb-6">Conference Overview</h3>
                <p className="text-foreground mb-4">
                  The 6th International Conference on Innovative Trends in Information Technology (ICIIT 2025) 
                  brings together researchers, academics, and industry professionals to share their knowledge 
                  and research experiences in the fields of information technology.
                </p>
                <p className="text-foreground mb-4">
                  This year's special theme, "Secure, Trustworthy, and Socially Responsible AI," 
                  focuses on addressing the ethical challenges and security concerns in artificial intelligence 
                  as it becomes increasingly integrated into our daily lives.
                </p>
                <p className="text-foreground mb-4">
                  We invite original research papers on various topics including but not limited to:
                </p>
                <ul className="list-disc pl-5 mb-6 text-foreground">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Ethical Implications of AI Systems</li>
                  <li>Cybersecurity and Secure Computing</li>
                  <li>Big Data Analytics and Data Science</li>
                  <li>Internet of Things (IoT) and Smart Systems</li>
                  <li>Cloud Computing and Distributed Systems</li>
                  <li>Blockchain Technologies and Applications</li>
                  <li>Human-Computer Interaction</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl text-foreground font-semibold mb-6">Conference Documents</h3>
                <div className="space-y-4">
                  {conferenceFiles.map((file, index) => (
                    <motion.div 
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                      viewport={{ once: true }}
                      className="p-4 border rounded-lg bg-muted hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-foreground">{file.title}</h3>
                        {file.isNew && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{file.description}</p>
                      <a 
                        href={file.link} 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Download
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* About Us Section */}
        <motion.section 
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              About Us
            </motion.h2>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-foreground text-2xl font-semibold mb-4">Indian Institute of Information Technology Kottayam</h3>
                <p className="text-foreground mb-4">
                  The Indian Institute of Information Technology Kottayam (CEK) is one of the premier technical institutions in Kerala, 
                  established in 2000. Located in the beautiful city of Kottayam, the college offers undergraduate 
                  and graduate programs in various engineering disciplines.
                </p>
                <p className="text-foreground mb-4">
                  With state-of-the-art laboratories and a focus on innovation and research, CEK has become a 
                  hub for technological advancement in the region. The college has consistently produced graduates 
                  who are leaders in their fields across the globe.
                </p>
                <p className="text-foreground">
                  The Department of Information Technology at CEK is hosting the 6th International Conference on 
                  Innovative Trends in Information Technology, continuing its tradition of fostering academic 
                  excellence and industry collaboration.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <motion.div 
                  whileHover={{ rotate: 0 }}
                  className="relative w-full max-w-md aspect-video"
                >
                  <motion.div 
                    animate={{ 
                      rotate: [3, 2, 3],
                      transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
                    }}
                    className="absolute inset-0 bg-primary rounded-lg"
                  ></motion.div>
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Indian Institute of Information Technology Kottayam Campus" 
                    className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ rotate: 0 }}
                  className="relative w-full max-w-md aspect-video"
                >
                  <motion.div 
                    animate={{ 
                      rotate: [-3, -2, -3],
                      transition: { duration: 7, repeat: Infinity, repeatType: "reverse" }
                    }}
                    className="absolute inset-0 bg-secondary rounded-lg"
                  ></motion.div>
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Technology Conference Hall" 
                    className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-foreground text-2xl font-semibold mb-4">Department of Information Technology</h3>
                <p className="text-foreground mb-4">
                  The Department of Information Technology at CEK was established in 2001 and has since been 
                  at the forefront of IT education and research in the region. The department offers a Bachelor's 
                  program in Information Technology and a Master's program in Computer Science with specialization 
                  in Artificial Intelligence.
                </p>
                <p className="text-foreground mb-4">
                  With a focus on emerging technologies like AI, Machine Learning, and Cybersecurity, the department 
                  provides students with practical exposure to cutting-edge technologies through industry collaborations 
                  and research projects.
                </p>
                <p className="text-foreground">
                  The department has been organizing the International Conference on Innovative Trends 
                  in Information Technology biennially since 2015, bringing together researchers and practitioners 
                  from around the world.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Important Dates Section */}
        <motion.section 
          ref={datesRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Important Dates
            </motion.h2>
            
            <div className="relative">
              {/* Vertical line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-30"
                style={{ transformOrigin: "top" }}
              ></motion.div>
              
              {/* Timeline events */}
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ 
                      x: index % 2 === 0 ? -50 : 50, 
                      opacity: 0 
                    }}
                    whileInView={{ 
                      x: 0, 
                      opacity: 1 
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Circle on timeline */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg bg-primary"
                    ></motion.div>
                    
                    {/* Content box */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div 
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                        }}
                        className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out
                          ${item.current 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'}`}
                      >
                        <h3 className={`text-xl font-semibold mb-2 ${item.current ? 'text-primary-foreground' : 'text-primary'}`}>
                          {item.date}
                        </h3>
                        <p className={item.current ? 'text-primary-foreground' : 'text-foreground'}>
                          {item.event}
                        </p>
                        {item.current && (
                          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                            CURRENT
                          </div>
                        )}
                      </motion.div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center bg-muted rounded-lg p-6"
            >
              <h3 className="text-foreground text-xl font-medium mb-4">Need more information?</h3>
              <p className="text-muted-foreground mb-6">
                Please contact us if you have any questions about the conference timeline or submission process.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}