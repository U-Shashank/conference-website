"use client"
import { useRef } from 'react';
import * as motion from 'motion/react-client';

export default function Authors() {
  // References for scroll-based animations
  const tracksRef = useRef(null);
  const instructionsRef = useRef(null);
  
  // Technical tracks data structure
  const technicalTracks = [
    {
      title: "Generative AI",
      topics: [
        "Variational Autoencoders (VAEs)",
        "Text generation with GPT (Generative Pre-trained Transformer) models",
        "Creative AI and generative art",
        "Conditional generation and control in generative models",
        "Video synthesis and deepfake detection",
        "Audio generation",
        "Ethical considerations in generative AI"
      ]
    },
    {
      title: "Advancements in machine and deep learning",
      topics: [
        "Transfer Learning and Domain Adaptation",
        "Self-Supervised and Unsupervised Learning",
        "Deep Neural Networks/Machine Learning for real time applications",
        "Federated Learning",
        "Attention Mechanisms and Transformer Models",
        "Reinforcement Learning and Autonomous Systems"
      ]
    },
    {
      title: "Frontiers in Big Data Analytics",
      topics: [
        "Real-time stream processing and analytics",
        "Automated machine learning pipelines and model deployment",
        "Spatial-temporal data analysis and applications",
        "Time-series forecasting and predictive analytic",
        "Graph analytics for social networks and recommendation systems",
        "Big Data Processing and Storage",
        "Integration of structured and unstructured data sources",
        "Interactive dashboards and visual analytics"
      ]
    },
    {
      title: "Cryptography, IoT and Ethical computing",
      topics: [
        "Sensor networks and IoT hardware",
        "Adversarial attacks and defences",
        "Privacy-enhancing technologies for IoT devices",
        "Blockchain and distributed ledger technologies",
        "Healthcare and wearable technologies",
        "Secure hardware design and tamper-resistant devices",
        "Trust management and reputation systems in decentralized environments"
      ]
    },
    {
      title: "Cloud and Distributed Computing Paradigms",
      topics: [
        "Serverless computing and function-as-a-service",
        "Edge computing architectures and edge AI",
        "Distributed storage systems and data management",
        "Fault-tolerant distributed computing frameworks",
        "Edge-to-cloud orchestration and coordination",
        "Energy-efficient computing in distributed systems",
        "Scalability challenges and solutions in cloud-native applications"
      ]
    },
    {
      title: "Frontiers in Natural language Processing",
      topics: [
        "Multimodal language understanding (combining text, images, and audio)",
        "Knowledge-aware NLP models and knowledge graphs",
        "Summarization and document understanding",
        "Cross-lingual and zero-shot learning in NLP",
        "Contextual word embeddings and contextualized representations",
        "Sentiment Analysis and Opinion Mining",
        "NLP applications in healthcare, finance, and legal domains"
      ]
    },
    {
      title: "HCI and Quantum Computing",
      topics: [
        "Quantum-inspired algorithms for HCI problems",
        "Design principles for quantum user interfaces",
        "Visualization techniques for quantum computing concepts",
        "Quantum-enhanced optimization for HCI tasks",
        "Human-Computer Interaction Techniques and Applications",
        "Augmented reality and virtual reality interfaces"
      ]
    },
    {
      title: "Explainable and Responsible AI solutions for interdisciplinary applications",
      topics: [
        "Interpretability and Explainability Techniques",
        "Ethical AI and Bias Mitigation",
        "Socio-Economic Impacts and Responsible Innovation",
        "Transparent Decision-Making Processes",
        "Responsible Data Management Practices",
        "Societal Impact Assessments"
      ]
    }
  ];
  
  // Instructions for authors
  const authorInstructions = [
    "Use only IEEE standard two column conference paper template (https://www.ieee.org/conferences/publishing/templates.html)",
    "The maximum length of the paper for review is 6 pages including references. The maximum File Size allowed is 10 MB in PDF format without encryption and/or passwords",
    "Papers having poor quality and/or high similarity index will be desk rejected (without review).",
    "The presented papers will be published in IEEE Xplore if they meet the IEEE standards and pass the quality check."
  ];

  return (
    <div className="min-h-screen">
      {/* Custom Header with Gradient */}
      <header className="relative w-full h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary/70 to-primary z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-20 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              For Authors
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Technical tracks, submission guidelines, and important information for paper authors
            </motion.p>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className=''>
        {/* Technical Tracks Section */}
        <motion.section 
          ref={tracksRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{once:true}} 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Technical Tracks
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-center text-foreground mb-12 max-w-4xl mx-auto"
            >
              Technical papers are solicited on the topics pertaining to the scope of the Conference will include, but are not limited to:
            </motion.p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalTracks.map((track, trackIndex) => (
                <motion.div 
                  key={trackIndex}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: trackIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-muted/50"
                >
                  <h3 className="text-xl text-primary font-semibold mb-4">{track.title}</h3>
                  <ul className="space-y-2">
                    {track.topics.map((topic, topicIndex) => (
                      <motion.li 
                        key={topicIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + topicIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="inline-block w-4 h-4 mt-1 mr-2 bg-secondary/20 rounded-full flex-shrink-0"></span>
                        <span className="text-foreground">{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        
        {/* Instructions for Authors Section */}
        <motion.section 
          ref={instructionsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              viewport={{once:true}} 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Instructions to Authors
            </motion.h2>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-lg p-8 shadow-sm border border-muted/50"
            >
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>
              
              <ol className="space-y-6">
                {authorInstructions.map((instruction, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0 mr-4">
                      {index + 1}
                    </span>
                    <div className="text-foreground">
                      {instruction.includes("https://") ? (
                        <p>
                          Use only IEEE standard two column conference paper template (
                          <a 
                            href="https://www.ieee.org/conferences/publishing/templates.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://www.ieee.org/conferences/publishing/templates.html
                          </a>
                          )
                        </p>
                      ) : (
                        <p>{instruction}</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
            
            {/* IEEE Template Preview Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-lg shadow-md overflow-hidden border border-muted"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="h-48 w-full md:w-64 bg-white flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">IEEE Conference Template</div>
                  <h3 className="mt-1 text-xl font-medium text-foreground">Format Your Paper for Submission</h3>
                  <p className="mt-2 text-muted-foreground">
                    All papers must follow the IEEE two-column conference format. Use the template link provided 
                    above to ensure your submission meets all formatting requirements.
                  </p>
                  <div className="mt-4 flex space-x-4 justify-center">
                    <motion.a 
                      href="https://www.ieee.org/conferences/publishing/templates.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Download Template
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      Submit Paper
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        
        {/* Publication Benefits Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              viewport={{once:true}} 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-primary font-bold text-center mb-12"
            >
              Publication Benefits
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6 border border-muted hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-3">Global Visibility</h3>
                <p className="text-muted-foreground text-center">
                  Accepted papers will be published in IEEE Xplore Digital Library, accessible by researchers worldwide.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6 border border-muted hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground text-center">
                  All papers undergo a rigorous peer-review process by experts in the field to ensure high standards.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6 border border-muted hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-3">Networking Opportunities</h3>
                <p className="text-muted-foreground text-center">
                  Present your work to peers and experts, creating valuable connections and collaboration opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Final Call to Action
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              viewport={{once:true}} 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-primary font-bold mb-6"
            >
              Ready to Submit Your Research?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-foreground mb-8 max-w-3xl mx-auto"
            >
              Share your innovative work with the global research community at ICIIT 2026. Submit your paper before the deadline to be part of this prestigious conference.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Paper
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Conference Timeline
              </motion.button>
            </motion.div>
          </div>
        </motion.section> */}
      </main>
    </div>
  );
}