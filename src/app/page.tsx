"use client";
import { useState, useRef, useEffect } from "react";
import ConferenceHeader from "@/components/Conference";
import * as motion from "motion/react-client";
import facultyImage from "@/assets/faculty.png";
import campusImage from "@/assets/campus.png";
import { Currency } from "lucide-react";

export default function Home() {
  const conferenceRef = useRef(null);
  const aboutRef = useRef(null);
  const datesRef = useRef(null);

  const conferenceFiles = [
    {
      title: "Call for Papers",
      description: "Details about submission requirements and research topics",
      link: "/files/call-for-papers.pdf",
      isNew: true,
    },
    {
      title: "Registration Form",
      description: "Conference registration details and payment information",
      link: "/files/registration.pdf",
      isNew: true,
    },
    {
      title: "Conference Schedule",
      description: "Detailed program with keynote speakers and sessions",
      link: "/files/schedule.pdf",
      isNew: false,
    },
    {
      title: "Accommodation Guide",
      description: "Information about hotels and transportation",
      link: "/files/accommodation.pdf",
      isNew: false,
    },
  ];

  const [importantDates, setImportantDates] = useState([
    { date: "June 11, 2025", event: "Call for Papers Announcement", current: false },
    { date: "August 14, 2025", event: "Draft Paper Submission", current: false },
    { date: "September 16, 2025", event: "Notification of Acceptance", current: false },
    { date: "October 15, 2025", event: "Final Camera-ready Paper", current: false },
  ]);

  useEffect(() => {
    const today = new Date();

    setImportantDates((dates) =>
      dates.map((date, index) => {
        const eventDate = new Date(date.date);
        const prevDate = index > 0 ? new Date(dates[index - 1].date) : null;

        const isCurrent =
          (prevDate && today > prevDate && today <= eventDate) ||
          (!prevDate && today <= eventDate);

        return {
          ...date,
          current: isCurrent,
        };
      })
    );
  }, []);

  return (
    <div className="min-h-screen">
      <ConferenceHeader />

      <main className="">
        <motion.section
          ref={conferenceRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Conference Information
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl text-foreground font-semibold mb-6">
                  Conference Overview
                </h3>
                <p className="text-foreground mb-4 text-balance">
                  The 7th International Conference on Innovative Trends in
                  Information Technology (ICIIT 2026), held in Kottayam, Kerala,
                  India, highlights "AI, Automation, and Beyond: Pioneering
                  Trends in Information Technology" as its central theme.
                </p>
                <p className="text-foreground mb-4 text-balance">
                  This conference explores the transformative trends in
                  information technology, focusing on the convergence of
                  artificial intelligence (AI), automation, and next-generation
                  technologies. It covers the practical applications of AI,
                  including machine learning, predictive analytics, and natural
                  language processing, as well as the impact of automation in
                  enhancing efficiency across various industries.
                </p>
                <p className="text-foreground mb-4 text-balance">
                  Additionally, it delves into emerging fields like edge
                  computing, quantum computing, and blockchain, while addressing
                  key ethical issues such as algorithmic bias and workforce
                  disruption. Attendees will gain valuable insights into
                  navigating the future of IT, equipping them to leverage these
                  advancements responsibly and strategically.
                </p>
                <p className="text-foreground mb-4">
                  We invite original research papers on topics including
                  but not limited to:
                </p>
                <div className="flex justify-center md:justify-start text-left">
                  <ul className="list-disc pl-5 mb-6 text-left text-foreground">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Ethical Implications of AI Systems</li>
                  <li>Cybersecurity and Secure Computing</li>
                  <li>Big Data Analytics and Data Science</li>
                  <li>Internet of Things (IoT) and Smart Systems</li>
                  <li>Cloud Computing and Distributed Systems</li>
                  <li>Blockchain Technologies and Applications</li>
                  <li>Human-Computer Interaction</li>
                  <li>Edge Computing and Quantum Computing</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl text-foreground font-semibold mb-6 text-center md:text-left">
                  Conference Documents
                </h3>
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
                        <h3 className="font-medium text-foreground">
                          {file.title}
                        </h3>
                        {file.isNew && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {file.description}
                      </p>
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
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto text-center lg:text-lft px-2">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
                <p className="text-foreground mb-4">
                  Indian Institute of Information Technology, Kottayam, situated
                  in Valavoor, Pala, Kerala, is a distinguished institution
                  designated as "An Institute of National Importance" by the
                  Ministry of Education, Government of India, under the IIIT
                  (PPP) Act of 2017. Nestled in the culturally rich district of
                  Kerala, renowned for its vibrant educational ambiance, IIIT
                  Kottayam thrives in a distinctive environment that nurtures a
                  comprehensive learning journey.
                </p>
                <p className="text-foreground mb-4">
                  The campus, sprawling across 53 acres, offers an environment
                  of tranquility and beauty, providing an ideal backdrop for
                  scholarly pursuits and research endeavors. It boasts
                  state-of-the-art infrastructure, featuring cutting-edge
                  classrooms, advanced laboratories, extensive libraries,
                  comfortable hostels, and recreational facilities. IIIT
                  Kottayam is deeply committed to providing a diverse range of
                  programs, including the renowned 4-year B.Tech and B.Tech
                  (Hons) programs in Computer Science and Engineering,
                  Electronics and Communication Engineering, as well as
                  specialized tracks in Cyber Security and AI and Data Science.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <motion.div
                  whileHover={{ rotate: 0 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-md aspect-video"
                >
                  <img
                    src={campusImage.src}
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
                  viewport={{ once: true }}
                  className="relative w-full max-w-md aspect-video"
                >
                  <img
                    src={facultyImage.src}
                    alt="IIIT Kottayam Faculty"
                    className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div>
                <p className="text-foreground mb-4">
                  Beyond its academic offerings, IIIT Kottayam is deeply
                  ingrained in the cultural and intellectual fabric of Kerala,
                  often referred to as "God's Own Country" for its lush
                  landscapes and vibrant culture. Kerala is renowned for its
                  literacy rate, healthcare systems, and progressive social
                  indicators. The state embraces a unique blend of tradition and
                  modernity, making it an ideal backdrop for a forward-thinking
                  institution like IIIT Kottayam.
                </p>
                <p className="text-foreground mb-4">
                  The institute's faculty comprises seasoned professors and
                  researchers, all leaders in their respective fields, who
                  actively engage in cutting-edge research and contribute
                  significantly to the academic community. Their expertise is
                  passed on to students, fostering a culture of innovation and
                  intellectual curiosity.
                </p>
                <p className="text-foreground mb-4">
                  Furthermore, IIIT Kottayam encourages active collaboration
                  with industry partners and research organizations, opening
                  doors to internships, placements, and joint projects. This
                  vital connection between academia and industry equips students
                  with practical skills and experiences, preparing them for a
                  seamless transition into the professional world.
                </p>
                <p className="text-foreground">
                  IIIT Kottayam's research contributions in fields such as
                  Artificial Intelligence, Data Science, Cybersecurity, and
                  Computer Vision have earned it recognition both Nationally and
                  Internationally.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <motion.section
          ref={datesRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Important Dates
            </motion.h2>

            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-30"
                style={{ transformOrigin: "top" }}
              ></motion.div>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full"></div>

                <div className="space-y-4 md:space-y-6">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="relative flex items-center justify-center md:justify-start"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-4 h-4 rounded-full border-3 border-white shadow-md bg-primary z-10"
                      ></motion.div>

                      <div
                        className={`
          w-full md:w-1/2 px-3 md:px-4
          ${
            index % 2 === 0
              ? "md:mr-auto md:pr-6 md:text-right"
              : "md:ml-auto md:pl-6 md:text-left"
          }
          text-center
        `}
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.03,
                            boxShadow:
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          viewport={{ once: true }}
                          className={`p-3 md:p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out
              ${
                item.current ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
                        >
                          <h3
                            className={`
              text-base md:text-xl font-semibold mb-2
              ${item.current ? "text-primary-foreground" : "text-primary"}
            `}
                          >
                            {item.date}
                          </h3>
                          <p
                            className={`
              text-sm md:text-base leading-relaxed
              ${item.current ? "text-primary-foreground" : "text-foreground"}
            `}
                          >
                            {item.event}
                          </p>
                          {item.current && (
                            <div
                              className="mt-3 inline-flex items-center px-3 py-1 rounded-full
                text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                              CURRENT
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
