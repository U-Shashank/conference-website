"use client";
import { useRef } from "react";
import * as motion from "motion/react-client";

interface OrganizingCommitteeMember {
  name: string;
  position: string;
  email?: string;
  mobile?: string;
  ieeeId?: string;
}

interface OrganizingCommitteeGroup {
  title: string;
  members: OrganizingCommitteeMember[];
}

export default function Committee() {
  // References for scroll-based animations
  const committeeRef = useRef(null);
  const advisoryRef = useRef(null);
  const technicalRef = useRef(null);

  // Committee structure data
  const leadership = [
    {
      title: "Chief Patrons",
      members: [
        {
          name: "Prof. Dr. Prasad Krishna",
          position: "Director (Addl. charge), IIIT Kottayam",
        },
        { name: "Dr. M. Radhakrishnan", position: "Registrar, IIIT Kottayam" },
      ],
    },
    {
      title: "Patrons",
      members: [
        {
          name: "Prof P. Mohanan",
          position: "Professor In-charge, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Co Patrons",
      members: [
        {
          name: "Dr. Ebin Deni Raj",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
  ];

  const advisoryCommittee = {
    kerala: [
      {
        name: "Dr. Kannan Balakrishnan",
        affiliation: "Cochin University of Science and Technology, Kerala",
      },
      { name: "Dr. Manoj Changat", affiliation: "University of Kerala" },
    ],
    india: [
      { name: "Prof. Venkanna Udutalapally", affiliation: "NIT Warangal" },
      { name: "Dr. E. Sivasankar", affiliation: "NIT Trichy" },
    ],
    international: [
      {
        name: "Dr. Ganesh Neelakanta Iyer",
        affiliation:
          "School of Computing at the National University of Singapore (NUS)",
      },
    ],
  };

  const organizingCommittee: OrganizingCommitteeGroup[] = [
    {
      title: "General Chair",
      members: [
        {
          name: "Dr. Cinu C Kiliroor",
          position: "Assistant Professor, IIIT Kottayam",
          email: "cinu@iiitkottayam.ac.in",
          mobile: "9884 371 514",
          ieeeId: "100478167",
        },
      ],
    },
    {
      title: "General Co-Chair",
      members: [
        {
          name: "Dr. Divya Sindhu Lekha",
          position: "Assistant Professor, IIIT Kottayam",
          email: "divyaslekha@iiitkottayam.ac.in",
          mobile: "94960 24175",
          ieeeId: "90647270",
        },
        {
          name: "Dr. Selvi C",
          position: "Assistant Professor, IIIT Kottayam",
          email: "selvic@iiitkottayam.ac.in",
          mobile: "7708 371 700",
          ieeeId: "",
        },
      ],
    },
    {
      title: "TPC Chair",
      members: [
        {
          name: "Dr. Debarati Ganguly",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "TPC Co-Chair",
      members: [
        {
          name: "Dr. Manu Madhavan",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Publication Chair",
      members: [
        {
          name: "Dr. Koppala Guravaiah",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Publication Co-chair",
      members: [
        {
          name: "Dr. Rubell Marion Lincy",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Publicity Chair",
      members: [
        {
          name: "Dr. Josit Mariya",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Publicity Co-Chair",
      members: [
        {
          name: "Dr. Gayathri",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Finance Committee Chair",
      members: [
        {
          name: "Dr. Jayakrushna Sahoo",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
    {
      title: "Finance Committee Co-Chair",
      members: [
        {
          name: "Dr. Suchithra M S",
          position: "Assistant Professor, IIIT Kottayam",
        },
      ],
    },
  ];

  const technicalCommittee = {
    kerala: [
      {
        name: "Dr. Gangireddy Narendra Kumar Reddy",
        affiliation: "NIT Calicut",
      },
      {
        name: "Dr. Anuraj Mohan",
        affiliation: "NSS College of Engineering, Kerala",
      },
      {
        name: "Dr. Hiran H Lathabai",
        affiliation: "Amrita Viswa Vidyapeetham, Kollam",
      },
      { name: "Dr. T. Veni", affiliation: "NIT Calicut" },
    ],
    india: [
      {
        name: "Dr. Konjengbam Anand",
        affiliation: "Indian Institute of Technology, Dharwad",
      },
      { name: "Dr. Vani V", affiliation: "NIT Pudhucherry" },
      { name: "Dr. Keshab Nath", affiliation: "Bhattadev University, Bajali" },
      { name: "Dr. Preeth R", affiliation: "IIITDM Kancheepuram" },
    ],
    international: [
      {
        name: "Dr. R. Vedhapriyavadhana",
        affiliation: "University of the West of Scotland, London",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Custom Header with Gradient */}
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
              The Committee
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Meet the dedicated team behind the 7<sup>th</sup> International
              Conference on Innovative Trends in Information Technology
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center text-balance">
        {/* Leadership Section */}
        <section ref={committeeRef} className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Leadership
            </motion.h2>

            <div className="space-y-12">
              {leadership.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-muted rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-2xl text-primary font-semibold mb-6">
                    {group.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
                    {group.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 md:w-[calc(50%-0.75rem)]"
                      >
                        <h4 className="text-xl font-medium text-foreground">
                          {member.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {member.position}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Advisory Committee Section */}
        <section ref={advisoryRef} className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Advisory Committee
            </motion.h2>

            <div className="space-y-12">
              {/* Advisory - Kerala */}
              <div className="bg-muted rounded-lg shadow-sm p-6">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From Kerala
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {advisoryCommittee.kerala.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory - India */}
              <div className="bg-muted rounded-lg shadow-sm p-6 mt-8">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From outside Kerala, within India
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {advisoryCommittee.india.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory - International */}
              <div className="bg-muted rounded-lg shadow-sm p-6 mt-8">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From abroad
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {advisoryCommittee.international.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Organizing Committee Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Organizing Committee
            </motion.h2>

            <div className="space-y-12">
              {organizingCommittee.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-muted rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-2xl text-primary font-semibold mb-6">
                    {group.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                    {group.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                      >
                        <div className="flex-grow">
                          <h4 className="text-xl font-medium text-foreground">
                            {member.name}
                          </h4>
                          <p className="text-muted-foreground">
                            {member.position}
                          </p>
                        </div>

                        {/* Contact Details Section */}
                        {(member.email || member.mobile || member.ieeeId) && (
                          <div className="border-t pt-3 flex flex-row flex-wrap items-center justify-around gap-y-2 mt-3">
                            <div
                              className={`flex items-center gap-2 w-50 ${!member.email ? "invisible" : ""}`}
                            >
                              <span className="text-xs font-medium text-primary">
                                Email:
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {member.email || "N/A"}
                              </span>
                            </div>
                            <div
                              className={`flex items-center gap-2 ${!member.mobile ? "invisible" : ""}`}
                            >
                              <span className="text-xs font-medium text-primary">
                                Mobile:
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {member.mobile || "N/A"}
                              </span>
                            </div>
                            <div
                              className={`flex items-center gap-2 ${!member.ieeeId ? "invisible" : ""}`}
                            >
                              <span className="text-xs font-medium text-primary">
                                IEEE ID:
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {member.ieeeId || "xxxxxxxx"}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Technical Program Committee Section */}
        <section ref={technicalRef} className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Technical Program Committee
            </motion.h2>

            <div className="space-y-12">
              {/* TPC - Kerala */}
              <div className="bg-muted rounded-lg shadow-sm p-6">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From Kerala
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {technicalCommittee.kerala.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TPC - India */}
              <div className="bg-muted rounded-lg shadow-sm p-6">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From outside Kerala, within India
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {technicalCommittee.india.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TPC - International */}
              <div className="bg-muted rounded-lg shadow-sm p-6">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  From abroad
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-around">
                  {technicalCommittee.international.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
                    >
                      <h4 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
