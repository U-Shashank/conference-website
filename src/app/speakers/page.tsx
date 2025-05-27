"use client"
import { useState, useRef, useEffect } from 'react';
import * as motion from 'motion/react-client';
import pic from "@/assets/logo.png"

export default function Speakers() {
  // For scroll-based animations
  const plenaryRef = useRef(null);
  const keynoteRef = useRef(null);
  
  // Speaker data
  const plenarySpeakers = [
    {
      name: "Prof. Somdatta Sinha",
      title: "INSA Senior Scientist & Adjunct Prof. (IISER Kolkata & IISER Mohali). CCMB Hyderabad",
      talkTitle: "Biological Data and Computation",
      date: "21 February 2025",
      image: pic // Replace with actual image path
    },
    {
      name: "Prof. A M Mathai",
      title: "Emeritus Professor of Mathematics and Statistics, McGill University, Canada and Director of the Centre for Mathematical and Statistical Sciences, India",
      talkTitle: "On Some Recent Research in Statistics and Fractional Calculus",
      date: "21 February 2025",
      image: pic // Replace with actual image path
    }
  ];
  
  const keynoteSpeakers = [
    {
      name: "Sreekumar K P",
      title: "Vice president and Head Media and Communication at Tata Elxsi",
      talkTitle: "Gen AI:The great Job reshuffle",
      date: "21 February 2025",
      image: pic // Replace with actual image path
    },
    {
      name: "Dr. Rohini P",
      title: "Assistant Professor, IITDM Kanchipuram",
      talkTitle: "Image biomarkers for early diagnosis of neurodegenerative disorders.",
      date: "21 February 2025, 12.35 PM (IST)",
      image: pic // Replace with actual image path
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Custom Vibrant Header with Gradient */}
      <header className="relative py-20 bg-gradient-to-r from-primary/90 via-primary to-secondary/70 overflow-hidden h-80">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1600/400')] opacity-20 bg-cover bg-center"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          
          {/* Animated shapes */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/20"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/30"
          ></motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Our Distinguished Speakers
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-4xl mx-auto"
          >
            Featuring renowned experts in information technology, artificial intelligence, and data science sharing their insights and latest research
          </motion.p>
        </div>
      </header>

      {/* Main Content - Vertically stacked sections */}
      <main>
        {/* Plenary Talks Section */}
        <motion.section 
          ref={plenaryRef}
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
              Plenary Talks
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {plenarySpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-muted rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                      <img 
                        src={speaker.image.src}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-center md:aspect-square"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{speaker.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{speaker.title}</p>
                        <div className="mb-4">
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full">
                            Plenary Speaker
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-1">Talk Title:</h4>
                        <p className="text-foreground mb-4">"{speaker.talkTitle}"</p>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center text-muted-foreground">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span>{speaker.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Keynote Sessions Section */}
        <motion.section 
          ref={keynoteRef}
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
              Keynote Sessions
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {keynoteSpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-muted rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
                      <img 
                        src={speaker.image.src}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-center md:aspect-square"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{speaker.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{speaker.title}</p>
                        <div className="mb-4">
                          <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm font-medium rounded-full">
                            Keynote Speaker
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-1">Talk Title:</h4>
                        <p className="text-foreground mb-4">"{speaker.talkTitle}"</p>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center text-muted-foreground">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span>{speaker.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Additional Info Section */}
        {/* <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-muted"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Join Us For The Event</h3>
              <p className="text-foreground mb-6">
                Don't miss the opportunity to hear from these distinguished speakers and network with professionals in the field of information technology. 
                Register now to secure your spot at the conference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Register Now
              </motion.button>
            </motion.div>
          </div>
        </motion.section> */}
      </main>
    </div>
  );
}