import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const links = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Your Privacy Choices', href: '#' },
    { name: 'Legal', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Corporate Policies', href: '#' },
    { name: 'Product Security', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="w-full bg-white pt-12 pb-8 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        
        {/* G-SONS Logo Section */}
        <div className="mb-5 flex items-center">
          <div className="flex items-center font-sans tracking-tight cursor-default">
            {/* "G-SONS" in the bright green from your image */}
            <span className="text-[#00aa44] text-xl md:text-2xl font-black italic">
              G-SONS
            </span>
            {/* "IT SOLUTIONS" in solid black */}
            <span className="text-black text-xl md:text-2xl font-black ml-1">
              IT SOLUTIONS
            </span>
          </div>
        </div>

        {/* Links Section - NVIDIA Style Blue */}
        <div className="flex flex-wrap items-center text-[13px] leading-relaxed mb-3">
          {links.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link 
                href={link.href} 
                className="text-[#0066cc] hover:text-[#004a99] hover:underline decoration-1 underline-offset-2 transition-colors duration-150"
              >
                {link.name}
              </Link>
              {index < links.length - 1 && (
                <span className="mx-2.5 text-gray-400 font-extralight">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-[11px] text-[#666666] tracking-wide font-normal">
          Copyright © {new Date().getFullYear()} G-SONS IT SOLUTIONS
        </div>
      </div>
    </footer>
  );
};

export default Footer;