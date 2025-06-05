"use client";
import { useState, useRef } from "react";
import * as motion from "motion/react-client";

export default function Registrations() {
  // For scroll-based animations
  const introRef = useRef(null);
  const feesRef = useRef(null);
  const policyRef = useRef(null);

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
              Registration Information
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Complete your registration for ICITIIT'26 and join us at this
              premier information technology event
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content - Vertically stacked sections */}
      <main className="text-center">
        {/* Registration Types Section */}
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
              Registration Types
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-xl p-8 shadow-md mb-10"
            >
              <p className="text-foreground text-lg mb-6">
                ICITIIT'26 accepts three types of Registrations: Full Author,
                Accompanying Author and Participant. Full Author registration is
                for the presenting author of the accepted paper in the
                conference and it is mandatory. The presented papers will be
                published in IEEE Xplore if they meet the IEEE standards and
                pass the quality check. Authors who are not presenting can
                register as Accompanying Author. All other attendees of the
                conference can register as Participant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white rounded-lg p-6 shadow border-t-4 border-primary"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Full Author
                  </h3>
                  <p className="text-foreground">
                    For presenting authors of accepted papers. Registration is
                    mandatory for paper publication in IEEE Xplore.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white rounded-lg p-6 shadow border-t-4 border-secondary"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Accompanying Author
                  </h3>
                  <p className="text-foreground">
                    For co-authors of accepted papers who are not presenting but
                    wish to attend the conference.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white rounded-lg p-6 shadow border-t-4 border-primary"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Participant
                  </h3>
                  <p className="text-foreground">
                    For all other attendees interested in participating in the
                    conference without presenting a paper.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Registration Fees Section */}
        <motion.section
          ref={feesRef}
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
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Registration Fees
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="overflow-x-auto bg-white rounded-xl shadow-lg mb-10"
            >
              <table className="min-w-full divide-y divide-muted">
                <thead className="bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      colSpan={2}
                      className="px-6 py-4 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      Inside India
                    </th>
                    <th
                      scope="col"
                      colSpan={2}
                      className="px-6 py-4 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      Outside India
                    </th>
                  </tr>
                  <tr className="bg-primary/90">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      IEEE (INR)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      NON-IEEE (INR)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      IEEE (USD)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-primary-foreground uppercase tracking-wider"
                    >
                      NON-IEEE (USD)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-muted">
                  <tr className="bg-secondary/10">
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-sm font-medium text-foreground"
                    >
                      Last Date for Author Registration (on or before 20 Jan
                      2026)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      Academia/Industry Authors
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹8,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹9,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $250
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $300
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      Student Authors (UG/PG/Research Scholar)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹6,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹7,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $200
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $225
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      Co-Author/Attendee
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹2,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹3,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $100
                    </td>
                  </tr>
                  <tr className="bg-secondary/10">
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-sm font-medium text-foreground"
                    >
                      Late Registration (after 20 Jan 2026 up to 22 Jan 2026)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      Academia/Industry Authors
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹10,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹11,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $300
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $350
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      Student Authors (UG/PG/Research Scholar)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹8,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      ₹9,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $250
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground">
                      $275
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted rounded-xl p-6 shadow-md my-8"
            >
              <p className="text-foreground">
                The manuscript exceeding 6 pages should pay extra page charge of
                Rs.1000/per page (Indian authors) or 20 USD (Foreign Authors).
                The manuscript can be maximum of 8 pages.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Policy Section */}
        <motion.section
          ref={policyRef}
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
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Registration Policies
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary"
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Important Notes
                </h3>
                <ul className="space-y-4 text-justify">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      Please note that the fees shown above are inclusive of all
                      taxes and levies. Any extra charges along with applicable
                      taxes or levies, if any, will have to be borne by the
                      registrant.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      IEEE members are requested to upload IEEE membership card
                      / receipt of payment for 2025 online during the online
                      registration process if registering under IEEE category.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      Students are requested to upload valid student ID card
                      (front and back side) during the online registration
                      process if registering under that student category.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      Please keep a copy of the transaction ID, generated by the
                      payment gateway as well as by your bank. You may need
                      these later if you need to track your
                      payment/registration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      All correspondence regarding registration for ICITIIT'26
                      should contain Paper ID as well as registration
                      confirmation number.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-foreground">
                      Please note that ICITIIT'26, or its hosts, represented by
                      the Organizing Committee as well as the IEEE Kerala
                      Section, will not be responsible for any loss, financial
                      or otherwise, caused by improper transactions conducted
                      online. While Organizers have taken all reasonable
                      precautions to ensure a safe online transaction, it is the
                      registrant's responsibility, while paying the registration
                      fee, to secure their user IDs, passwords, Paper ID, etc.
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className=" flex flex-col justify-around space-y-8"
              >
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-secondary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    How to Register?
                  </h3>
                  <div className="flex items-center justify-center bg-muted p-4 rounded-lg mb-4">
                    <span className="text-lg font-bold text-secondary flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        ></path>
                      </svg>
                      Registration Closed
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Zero Refund Policy
                  </h3>
                  <p className="text-foreground">
                    There will be no refunds of registration fees under any
                    circumstances once a paper is accepted and registered by the
                    authors.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-secondary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    VISA Assistance
                  </h3>
                  <p className="text-foreground">
                    Once registration is complete, a separate request need to
                    send with registration details to{" "}
                    <a
                      href="mailto:icitiit26@iiitkottayam.ac.in"
                      className="text-primary hover:underline"
                    >
                      icitiit26@iiitkottayam.ac.in
                    </a>{" "}
                    in order to get the invitation letter for VISA purposes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
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
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need Help with Registration?
              </h3>
              <p className="text-foreground mb-6">
                If you have any questions or need assistance with the
                registration process, please don't hesitate to contact our
                support team.
              </p>
              <motion.a
                href="mailto:icitiit26@iiitkottayam.ac.in"
                whileHover={{ opacity: 0.92 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Contact Support
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
