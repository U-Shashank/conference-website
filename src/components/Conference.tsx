"use client"
import { useState, useEffect } from 'react';

export default function ConferenceHeader() {
  // Animation states
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-16 px-4 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
      {/* Animated gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-700 
        opacity-90 transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-90' : 'opacity-0'}`}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full opacity-10" />
      </div>
      
      {/* Content with staggered animation */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-white font-bold tracking-wider mb-2 md:text-xl">
            <span className="bg-black bg-opacity-30 px-4 py-1 rounded-full">21-22 February 2025</span>
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-white font-extrabold leading-tight tracking-tighter mt-4 mb-4 px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            6th INTERNATIONAL CONFERENCE ON 
            <span className="block">INNOVATIVE TRENDS IN</span>
            <span className="block">INFORMATION TECHNOLOGY</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-white text-lg md:text-xl mb-2">Kottayam, Kerala, India</p>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mt-4 text-white bg-black bg-opacity-20 px-6 py-2 rounded-lg inline-block font-medium text-lg md:text-xl italic">
            Theme: Secure, Trustworthy, and Socially Responsible AI
          </p>
        </div>
      </div>
    </div>
  );
}