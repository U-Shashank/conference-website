"use client";
import { useState } from "react";

export default function Footer() {
  // const [emailValue, setEmailValue] = useState("");

  // interface SubscribeFormEvent extends React.FormEvent<HTMLFormElement> {
  //   preventDefault: () => void;
  // }

  // const handleSubscribe = (e: SubscribeFormEvent): void => {
  //   e.preventDefault();
  //   // Handle subscription logic
  //   alert(`Thank you for subscribing with: ${emailValue}`);
  //   setEmailValue("");
  // };

  // Previous conference versions
  const previousConferences = [
    { year: "2025", location: "Kottayam, Kerala", link: "https://icitiit25.iiitkottayam.ac.in"},
    { year: "2024", location: "Kottayam, Kerala", link: "https://icitiit24.iiitkottayam.ac.in"},
  ];

  // Useful links
  const usefulLinks = [
    { name: "Call for Papers", link: "/files/call-for-papers.pdf" },
    { name: "Registration", link: "/registration" },
    { name: "Submissions", link: "/submissions" },
    { name: "Program", link: "/program" },
    { name: "Speakers", link: "/speakers" },
    { name: "Venue", link: "/venue" },
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 justify-center text-center">
          {/* About ICITIIT */}
          <div className="col-span-1 lg:col-span-2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ICITIIT'26
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center md:text-justify">
              The 7<sup>th</sup> International Conference on Innovative Trends
              In Information Technology (ICITIIT'26) is an event covering all
              aspects of software and hardware designs of intelligent and smart
              computing systems. The conference is technically co-sponsored by
              IEEE Kerala Section.
            </p>
            <p className="text-gray-300 text-sm mb-4 text-center md:text-justify">
              ICITIIT'26 allows attendees to benefit from various topics that
              cover state-of-art Information Technology research and
              development.
            </p>
            <p className="text-gray-300 text-sm text-center md:text-justify">
              Accepted and presented papers will be submitted for possible
              publication in IEEE Xplore.
            </p>
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://twitter.com/icitiit"
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/icitiit"
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/icitiit"
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Useful Links
            </h3>
            <div className="flex justify-center md:justify-start">
              <ul className="space-y-2 text-left flex flex-col items-start">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-blue-500 text-sm flex items-center transition-colors justify-center md:justify-start"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
              Previous Versions
            </h3>
            <ul className="space-y-2">
              {previousConferences.map((conf, index) => (
                <li key={index}>
                  <a
                    href={conf.link}
                    className="text-gray-300 hover:text-blue-500 text-sm flex items-center transition-colors justify-center md:justify-start"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    ICITIIT'{conf.year}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Subscribe */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Contact Us
            </h3>
            <div className="flex justify-center">
              <div className="space-y-3 flex flex-col">
                <p className="text-gray-300 text-sm flex items-center justify-center md:justify-start">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  info@icitiit.org
                </p>

                <p className="text-gray-300 text-sm flex items-center justify-center md:justify-start">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  +91 482 220 2185
                </p>
                <p className="text-gray-300 text-sm flex items-start justify-center md:justify-start">
                  <svg
                    className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Indian Institute of Information Technology Kottayam
                  <br />
                  Kottayam, Kerala, India - 686016
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-80 bg-gray-900 rounded-lg shadow-md overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.128109491185!2d76.6500519!3d9.7552146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce23bc170053%3A0x8757971e61eb21dd!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e0!3m2!1sen!2sin!4v1747504329594!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800 mb-6"></div>

        {/* Copyright and Footer Links */}
        <div className="flex flex-col justify-between items-center">
          <p className="text-sm text-gray-400 text-center mb-4 md:mb-0">
            © {new Date().getFullYear()} ICITIIT'26. All rights reserved.{" "}
            <br className="md:hidden" />
            Organized by Indian Institute of Information Technology Kottayam.
          </p>
        </div>
      </div>
    </footer>
  );
}
