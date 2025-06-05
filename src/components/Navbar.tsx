"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import HamburgerIcon from "@/Icons/HamburgerIcon";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const scrollThreshold = 80; // Adjust this value to control when the navbar changes

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/committee",
      label: "Committee",
    },
    {
      href: "/authors",
      label: "Authors",
    },
    {
      href: "/speakers",
      label: "Speakers",
    },
    {
      href: "/registrations",
      label: "Registrations",
    },
    {
      href: "/camera-ready",
      label: "Camera Ready Submissions",
    },
    {
      href: "/event-details",
      label: "Event Details",
    },
    {
      href: "/#contact",
      label: "Contact Us",
    },
  ];

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Track scroll position to determine if navbar is sticky
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only update state when crossing the threshold to avoid unnecessary re-renders
      if (!isScrolled && currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else if (isScrolled && currentScrollY <= scrollThreshold) {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case page is loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-md py-2 border-b-2 border-secondary"
          : "bg-background py-4"
      }`}
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - only visible when scrolled/sticky */}
          <div>
            <div className="sm:w-0 flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="ICITIIT"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                {/* <span className="ml-2 text-secondary font-bold hidden sm:inline">ICITIIT Conference</span> */}
              </Link>
            </div>
            {isScrolled && (
              <div className="hidden sm:block flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="ICITIIT"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  {/* <span className="ml-2 text-secondary font-bold hidden sm:inline">ICITIIT Conference</span> */}
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:block ${isScrolled ? "" : "mx-auto"}`}>
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-secondary hover:bg-secondary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button with SVG animated icon */}
          <div
            className={`md:hidden ${isScrolled ? "ml-auto" : "absolute right-4"}`}
          >
            <button
              className="p-2 rounded-full transition-all duration-200 cursor-pointer"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <HamburgerIcon
                open={isOpen}
                className={isScrolled ? "text-foreground" : "text-foreground"}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden "
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.3,
              }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background z-50 shadow-xl md:hidden"
            >
              <div className="h-full flex flex-col overflow-y-auto">
                {/* Mobile Menu Logo */}
                <div className="px-6 py-6 border-b-2 border-secondary flex justify-between items-center">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={toggleMenu}
                  >
                    <Image
                      src={logo}
                      alt="ICITIIT"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full text-foreground hover:text-secondary transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="px-6 py-6 flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:text-secondary px-3 py-3 rounded-md text-lg font-medium hover:bg-secondary/10 transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
