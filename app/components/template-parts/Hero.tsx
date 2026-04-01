import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-16 min-h-[85vh] flex items-center border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <p className="text-[#001d6c] text-sm font-semibold uppercase tracking-[0.3em] mb-8">
            Enterprise Solutions
          </p>

          {/* One-line heading: G-SONS (Bold) + IT SOLUTIONS (Medium) */}
          <h1 className="text-[#001d6c] text-[clamp(2.5rem,6vw,5rem)] leading-none mb-10 uppercase whitespace-nowrap">
            <span className="font-bold">G-SONS</span> <br></br>
            <span className="font-medium text-[#0f62fe]">IT SOLUTIONS</span>
          </h1>

          {/* Refined accent bar and description text */}
          <div className="border-l-[1.5px] border-[#0f62fe] pl-10 mb-12">
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-md italic">
              Enhanced Infrastructure. <br />
              Dynamic Cloud Security. <br />
              <span className="font-normal text-[#001d6c] not-italic">Powered by G-SONS.</span>
            </p>
          </div>

          {/* Sharp, Joined CTA Buttons */}
          <div className="flex flex-wrap gap-0">
            <button className="bg-[#0f62fe] text-white py-4 px-10 flex items-center gap-6 hover:bg-[#001d6c] transition-all group">
              <span className="font-semibold uppercase tracking-wider">Explore Now</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
            
            <button className="bg-[#001d6c] text-white py-4 px-10 flex items-center gap-6 hover:bg-black transition-all group border-l border-white/10">
              <span className="font-semibold uppercase tracking-wider">Contact Us</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <div className="relative w-full aspect-square bg-slate-50 border border-slate-100 overflow-hidden shadow-2xl">
          <Image 
            src="/gsons-team.png"
            alt="G-SONS IT Solutions Team"
            fill
            priority
            className="object-cover grayscale-20 contrast-110 opacity-90"
          />
          {/* Subtle bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0f62fe]"></div>
        </div>

      </div>
    </section>
  );
}