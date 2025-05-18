
import { motion } from "motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImportantDates = () => {
  const datesRef = useRef(null);
  const isInView = useInView(datesRef, { once: true });

  const importantDates = [
    { date: "10 May 2025", event: "Registration Opens" },
    { date: "25 May 2025", event: "Abstract Submission Deadline" },
    { date: "1 June 2025", event: "Notification of Acceptance" },
    { date: "5 June 2025", event: "Final Paper Submission", current: true },
    { date: "15 June 2025", event: "Event Day" },
  ];

  return (
    <motion.section 
      ref={datesRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-secondary font-bold text-center mb-10"
        >
          Important Dates
        </motion.h2>

        <div className="relative pl-4 sm:pl-8 ml-2 border-l-2 border-secondary space-y-8">
          {importantDates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-2.5 top-1 w-3 h-3 bg-secondary rounded-full border border-white shadow-md"></div>
              <div className={`pl-6 text-sm sm:text-base ${item.current ? 'text-secondary font-semibold' : 'text-muted-foreground'}`}>
                <div className="text-secondary-foreground">{item.date}</div>
                <div>{item.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImportantDates;
