"use client";
import { useRef } from "react";
import { motion } from "motion/react";

export default function CameraReadySubmission() {
  // For scroll-based animations
  const instructionsRef = useRef(null);

  return (
    <div className="min-h-screen">
      {/* Vibrant Gradient Header */}
      <header className="relative w-full h-90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-20 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
            Camera Ready Submission{" "}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
            Guidelines and instructions for authors with accepted papers
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center">
        {/* Instructions Section */}
        <motion.section
          ref={instructionsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Instructions to Authors
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 bg-muted p-8 rounded-lg"
            >
              <div className="space-y-4">
                <p className="text-foreground">
                  Log in to Microsoft CMT to view the reviewer comments, if any,
                  and address all the concerns/comments of the reviewers in the
                  final submission.
                </p>

                <p className="text-foreground">
                  If there are no comments then it seems that your paper is
                  accepted by reviewers as it is without need for any revisions.
                </p>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-foreground font-medium">
                    The authors will have to submit a camera-ready version as
                    per the guidelines given on the conference website on or
                    before{" "}
                    <span className="text-primary font-bold">
                      13th February, 2025
                    </span>
                    .
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-secondary">
                  <p className="text-foreground font-medium">
                    Please make sure about the plagiarism of your manuscript
                    (below 30% similarity), using standard plagiarism checking
                    software (e.g Turnitin), before submitting the camera-ready
                    paper from your end to confirm the inclusion of the paper in
                    IEEE Xplore.
                  </p>
                  <p className="text-secondary font-bold mt-2">
                    If Plagiarism will be more than 30%, then your paper will
                    not be included in the conference.
                  </p>
                </div>

                <p className="text-foreground">
                  The authors are urged to ensure that the camera-ready
                  submission strictly follows the IEEE Template given on the
                  conference website.
                </p>

                <p className="text-foreground">
                  Authors of accepted papers should send the camera-ready paper
                  in IEEE PDF Xpress compatible (Conference ID:64777X) pdf
                  format through Microsoft CMT.
                </p>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-foreground font-medium">
                    The number of pages in Final Camera-Ready Paper must be
                    within Six Pages.
                  </p>
                  <p className="text-foreground mt-2">
                    The papers exceeding 6 pages (a maximum of 8 pages) should
                    pay extra page charge of Rs.1000/per page- (Indian authors)
                    or 20 USD (Foreign Authors)
                  </p>
                </div>

                <p className="text-foreground font-medium">
                  The camera-ready papers that do not meet these requirements
                  will not be submitted for further consideration to IEEE
                  Xplore.
                </p>
              </div>

              <hr className="border-t border-primary/20" />

              <div className="space-y-4">
                <h3 className="text-xl text-foreground font-semibold">
                  Registration Information
                </h3>

                <p className="text-foreground">
                  ICITIIT'26 accepts three types of Registrations: Full Author,
                  Accompanying Author and Participant. Full Author registration
                  is for the presenting author of the accepted paper in the
                  conference and it is mandatory.
                </p>

                <p className="text-foreground">
                  Authors who are not presenting can register as Accompanying
                  Author.
                </p>

                <p className="text-foreground">
                  If your paper has 2 presenters, any one of the authors should
                  be register as an co-author.
                </p>

                <p className="text-foreground">
                  All other attendees of the conference can register as
                  Participant.
                </p>

                <div className="p-4 bg-white rounded-lg border border-primary">
                  <p className="text-primary font-medium">
                    Zero Refund Policy: There will be no refunds of registration
                    fees under any circumstances once a paper is accepted and
                    registered by the authors.
                  </p>
                </div>
              </div>

              <hr className="border-t border-primary/20" />

              <div className="space-y-4">
                <h3 className="text-xl text-foreground font-semibold">
                  Presentation Template
                </h3>

                <div className="flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary mr-3"
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
                  <p className="text-foreground">
                    Download the official presentation template:
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      className="ml-2 text-primary font-medium underline"
                    >
                      Click here to access the PPT
                    </motion.a>
                  </p>
                </div>
              </div>

              <hr className="border-t border-primary/20" />

              <div className="space-y-4">
                <h3 className="text-xl text-foreground font-semibold">
                  Accommodation & Services
                </h3>

                <p className="text-foreground">
                  The institute will not provide transportation or accommodation
                  services during the conference dates. However, details of
                  nearby hotels are available in the Useful Links section. It is
                  recommended to book early to ensure availability.
                </p>

                <p className="text-foreground">
                  Participants of the conference will be provided with working
                  lunch during the conference dates.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit Camera-Ready Paper
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
