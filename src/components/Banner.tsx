"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ieee from "../assets/ieee.png";
import iiit from "../assets/iiit-logo.jpg";
import keralaSection from "../assets/kerala.png";
import logo from "../assets/logo.png";

import Image from "next/image";
import Link from "next/link";

// Mock data - replace with your actual images
const organizerLogos = [
  { src: iiit, alt: "IIIT Kottayam" },
  { src: ieee, alt: "IEEE" },
  { src: keralaSection, alt: "Kerala Section" },
];

export function Banner() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % organizerLogos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:block bg-background border-b border-muted">
      <div className="max-w-7xl mx-auto flex flex-row justify-around items-center">
        {/* Left Section - Conference Info */}
        <div className="p-4 md:p-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src={logo}
                alt={"ICITIIT"}
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <div>
              <h2 className="text-xl font-bold text-foreground">ICITIIT'25</h2>
              <p className="text-sm text-muted-foreground">
                21-22 February 2025 • Indian Institute of Information Technology
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Organizer Slideshow */}
        <div className="p-4 md:p-6">
          <div className="relative h-24 w-48 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLogoIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={organizerLogos[currentLogoIndex].src}
                  alt={organizerLogos[currentLogoIndex].alt}
                  width={150}
                  height={0}
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
