import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    // CHANGE 1: Switched to a dark background with deep gray padding
    <section className="bg-black text-white py-20 px-4 md:px-12">
      
      {/* Container - Added tight 2-column grid and vertical alignment */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          {/* Subheading (e.g., "IT Services") */}
          <span className="text-gray-400 text-base font-semibold tracking-wider cursor-default">
            GSONS Solutions
          </span>
          
          {/* Main Heading: Matches large scale and color */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Excellence in IT Services & Solutions
          </h1>
          
          {/* Paragraph: Muted text color for hierarchy */}
          <div className="text-lg md:text-xl text-gray-300 font-light space-y-2 max-w-xl">
            <p>Trusted partner for enterprise-grade IT support.</p>
            <p>Cloud solutions and digital transformation.</p>
            <p>Powered by innovation.</p>
          </div>
          
          {/* CHANGE 3: The NVIDIA Green Button Style */}
          <button className="bg-[#76b900] text-black text-[15px] font-bold px-7 py-3 rounded-sm hover:bg-[#6ca800] transition-colors uppercase tracking-tight cursor-pointer">
            Out Now
          </button>
        </div>

        {/* Right Column: Dynamic Team/Solutions Image */}
        <div className="flex items-center justify-center md:justify-end">
          {/* Placeholder div - I've matched the alignment but kept your placeholder style */}
          <div className="relative group overflow-hidden bg-gray-900 border border-gray-800 aspect-video rounded-md w-full max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <span className="text-gray-500 font-mono">[Team/Solutions Image]</span>
            </div>
            {/* Gradient Accent like the green lines in the reference */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#76b900] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}