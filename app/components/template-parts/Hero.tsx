import Image from 'next/image';

export default function Hero() {
  return (
    // Clean white background with a very subtle slate-50 bottom border
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 min-h-[80vh] flex items-center border-b border-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          {/* Accent text in a sophisticated Teal */}
          <p className="text-[#005d5d] text-sm font-semibold uppercase tracking-[0.3em] mb-8">
            Enterprise Solutions
          </p>

          {/* Heading using a mix of weights for a "custom" look */}
          <h1 className="text-slate-900 text-6xl md:text-8xl font-light tracking-tighter leading-[1.05] mb-10 uppercase">
            G-SONS <br />
            <span className="font-bold text-[#005d5d]">IT SOLUTIONS</span>
          </h1>

          {/* Vertical accent bar in Teal */}
          <div className="border-l-[1.5px] border-[#005d5d] pl-10 mb-12">
            <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed max-w-md italic">
              Enhanced Infrastructure. <br />
              Dynamic Cloud Security. <br />
              <span className="font-normal text-slate-900 not-italic">Powered by G-SONS.</span>
            </p>
          </div>

          {/* Unique sharp-edged CTA buttons */}
          <div className="flex flex-wrap gap-0"> {/* Gap-0 creates a "joined" look for a unique feel */}
            <button className="bg-[#005d5d] text-white py-5 px-12 flex items-center gap-6 hover:bg-[#004d4d] transition-all group">
              Explore Now
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
            
            <button className="bg-slate-900 text-white py-5 px-12 flex items-center gap-6 hover:bg-black transition-all group border-l border-white/10">
              Contact Us
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full aspect-square bg-slate-50 border border-slate-100 overflow-hidden shadow-2xl">
          <Image 
            src="/gsons-team.png"
            alt="G-SONS IT Solutions Team"
            fill
            priority
            className="object-cover mix-blend-multiply opacity-90"
          />
          {/* Unique Teal Overlay Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#005d5d]/10 backdrop-blur-3xl -mr-16 -mt-16 rounded-full"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#005d5d]"></div>
        </div>

      </div>
    </section>
  );
}