'use client';

import { useState } from 'react';
import Link from 'next/link';

const megaMenuContent = {
  'IT Services': {
    subCategories: [
      {
        name: 'Managed Services',
        links: [
          { title: '24/7 Helpdesk', desc: 'Remote support for your entire team.' },
          { title: 'Network Monitoring', desc: 'Real-time infrastructure oversight.' },
          { title: 'Backup & Recovery', desc: 'Disaster proofing your business data.' }
        ]
      }
    ]
  },
  'Cybersecurity': {
    subCategories: [
      {
        name: 'Defense & Compliance',
        links: [
          { title: 'Threat Hunting', desc: 'AI-driven proactive analysis.' },
          { title: 'IT Audit', desc: 'Comprehensive security reviews.' },
          { title: 'Endpoint Hardening', desc: 'Securing the edge of your network.' }
        ]
      }
    ]
  },
  'Cloud': {
    subCategories: [
      {
        name: 'Infrastructure',
        links: [
          { title: 'Azure Services', desc: 'Scaling enterprise workloads.' },
          { title: 'Microsoft 365', desc: 'Optimizing productivity.' },
          { title: 'Cloud Management', desc: 'Hybrid & public environments.' }
        ]
      }
    ]
  },
  'CRM & ERP': {
    subCategories: [
      {
        name: 'Business Systems',
        links: [
          { title: 'Digital Transformation', desc: 'Modernizing legacy processes.' },
          { title: 'SharePoint Consulting', desc: 'Custom document management.' },
          { title: 'ERP Integration', desc: 'Streamlining operations.' }
        ]
      }
    ]
  },
  'IT Consulting ': {
    subCategories: [
      {
        name: 'Defense & Compliance',
        links: [
          { title: 'Threat Hunting', desc: 'AI-driven proactive analysis.' },
          { title: 'IT Audit', desc: 'Comprehensive security reviews.' },
          { title: 'Endpoint Hardening', desc: 'Securing the edge of your network.' }
        ]
      }
    ]
  },
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <span className="text-blue-500 font-black text-2xl tracking-tighter">G-SONS</span>
          <span className="text-gray-900 font-bold text-xl uppercase">IT Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 text-[15px] font-medium text-gray-700">
          {Object.keys(megaMenuContent).map((item) => (
            <button
              key={item}
              onMouseEnter={() => setActiveMenu(item)}
              className={`hover:text-[#0f62fe] pb-1 border-b-2 transition-colors ${
                activeMenu === item ? 'border-[#0f62fe] text-[#0f62fe]' : 'border-transparent'
              }`}
            >
              {item}
            </button>
          ))}
          <Link href="/Industries" className="hover:text-[#0f62fe] ">Industries</Link>
        </div>
        <br></br>
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
          <Link href="/About us" className="text-gray-600 hover:text-gray-900">About us</Link>
          <Link href="/Drivers" className="text-gray-600 hover:text-gray-900">Drivers</Link>
          <Link href="/Support" className="text-gray-600 hover:text-gray-900">Support</Link>
          <Link 
            href="/contact" 
            className="bg-[#0f62fe] text-white px-6 py-2.5 rounded hover:bg-[#001d6c] transition-colors"
          >
            BOOK A CALL
          </Link>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {activeMenu && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-10">
            {megaMenuContent[activeMenu as keyof typeof megaMenuContent].subCategories.map((sub) => (
              <div key={sub.name} className="space-y-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{sub.name}</h3>
                <div className="grid gap-4">
                  {sub.links.map((link) => (
                    <Link key={link.title} href="#" className="group block">
                      <div className="text-gray-900 font-bold group-hover:text-[#0f62fe] transition-colors">
                        {link.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">{link.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}