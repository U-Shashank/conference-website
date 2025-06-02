"use client"
import { useRef } from 'react';
import * as motion from 'motion/react-client';

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
        { name: "Prof. Dr. Prasad Krishna", position: "Director (Addl. charge), IIIT Kottayam" },
        { name: "Dr. M. Radhakrishnan", position: "Registrar, IIIT Kottayam" }
      ]
    },
    {
      title: "Patrons",
      members: [
        { name: "Prof P. Mohanan", position: "Professor In-charge, IIIT Kottayam" }
      ]
    },
    {
      title: "Co Patrons",
      members: [
        { name: "Dr. Ebin Deni Raj", position: "Assistant Professor, IIIT Kottayam" }
      ]
    }
  ];
  
  const advisoryCommittee = [
    { name: "Dr. S M Alex Raj", affiliation: "Indian Institute of Information Technology Trivandrum, Kerala" },
    { name: "Dr. Kannan Balakrishnan", affiliation: "Cochin University of Science and Technology, Kerala" },
    { name: "Dr. Manoj Changat", affiliation: "University of Kerala" },
    { name: "Dr. K Chandrasekharan", affiliation: "NIT Surathkal, Karnataka" },
    { name: "Dr. V M Thakare", affiliation: "SGB Amaravati University, Maharashtra" },
    { name: "Dr. Valentina E Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" }
  ];
  
  const organizingCommittee = [
    {
      title: "General Chair",
      members: [
        { name: "Dr. J. V. Bibal Benifa", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "General Co-Chair",
      members: [
        { name: "Dr. Divya Sindhu Lekha", position: "Assistant Professor, IIIT Kottayam" },
        { name: "Dr. Shamna H R", position: "Professor, Government Engineering College, Barton Hill" }
      ]
    },
    {
      title: "TPC Chair",
      members: [
        { name: "Dr. Debarati Ganguly", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "TPC Co-Chair",
      members: [
        { name: "Dr. Manu Madhavan", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Publication Chair",
      members: [
        { name: "Dr. Koppala Guravaiah", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Publication Co-chair",
      members: [
        { name: "Dr. Rubell Marion Lincy", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Publicity Chair",
      members: [
        { name: "Dr. Josit Mariya", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Publicity Co-Chair",
      members: [
        { name: "Dr. Gayathri", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Finance Committee Chair",
      members: [
        { name: "Dr. Jayakrushna Sahoo", position: "Assistant Professor, IIIT Kottayam" }
      ]
    },
    {
      title: "Finance Committee Co-Chair",
      members: [
        { name: "Dr. Suchithra", position: "Assistant Professor, IIIT Kottayam" }
      ]
    }
  ];
  
  const technicalCommittee = {
    india: [
      { name: "Dr. Gangireddy Narendra Kumar Reddy", affiliation: "NIT Calicut" },
      { name: "Dr. Anuraj Mohan", affiliation: "NSS Indian Institute of Information Technology, Kerala" },
      { name: "Dr. Hiran H Lathabai", affiliation: "Amrita Viswa Vidyapeetham, Kollam Kerala" },
      { name: "Dr. Konjengbam Anand", affiliation: "IIT Dharwad" },
      { name: "Dr. Keshab Nath", affiliation: "Bhattadev University, Bajali" },
      { name: "Dr. C Oswald", affiliation: "NIT Trichy" }
    ],
    international: [
      { name: "Dr. Deepak Padmanabhan", affiliation: "Queen's University, Belfast, UK" }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Custom Header with Gradient */}
      <header className="relative w-full h-80 overflow-hidden">
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
              Meet the dedicated team behind the 7th International Conference on Innovative Trends in Information Technology
              </motion.p>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className='text-center text-balance'>
        {/* Leadership Section */}
        <section 
          ref={committeeRef}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary font-bold text-center mb-12">
              Leadership
            </h2>
            
            <div className="space-y-12">
              {leadership.map((group, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="bg-muted rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-2xl text-primary font-semibold mb-6">{group.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300"
                      >
                        <h4 className="text-xl font-medium text-foreground">{member.name}</h4>
                        <p className="text-muted-foreground">{member.position}</p>
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
        <section 
          ref={advisoryRef}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary font-bold text-center mb-12">
              Advisory Committee
            </h2>
            
            <div className="bg-muted rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisoryCommittee.map((member, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300"
                  >
                    <h4 className="text-xl font-medium text-foreground">{member.name}</h4>
                    <p className="text-muted-foreground">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        
        {/* Organizing Committee Section */}
        <section 
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary font-bold text-center mb-12">
              Organizing Committee
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizingCommittee.map((group, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="bg-muted rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-xl text-primary font-semibold mb-4">{group.title}</h3>
                  <div className="space-y-4">
                    {group.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300"
                      >
                        <h4 className="text-lg font-medium text-foreground">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.position}</p>
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
        <section 
          ref={technicalRef}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary font-bold text-center mb-12">
              Technical Program Committee
            </h2>
            
            <div className="space-y-12">
              {/* TPC - India */}
              <div 
                className="bg-muted rounded-lg shadow-sm p-6"
              >
                <h3 className="text-2xl text-primary font-semibold mb-6">India</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicalCommittee.india.map((member, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300"
                    >
                      <h4 className="text-lg font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* TPC - International */}
              <div 
                className="bg-muted rounded-lg shadow-sm p-6"
              >
                <h3 className="text-2xl text-primary font-semibold mb-6">International</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicalCommittee.international.map((member, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-sm border border-muted transition-all duration-300"
                    >
                      <h4 className="text-lg font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.affiliation}</p>
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
