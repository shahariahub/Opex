import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../config/siteContent';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top Bar Announcement Bar */}
      <div className="bg-[#EA580C] text-white text-xs font-semibold py-1.5 px-4 text-center tracking-wide flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span className="font-bold tracking-wide">{COMPANY_INFO.name} ({COMPANY_INFO.brandName})</span>
        <span className="hidden sm:inline text-orange-200">|</span>
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          <span>{COMPANY_INFO.phone1} · {COMPANY_INFO.phone2}</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element Brand Wordmark */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight text-white focus:outline-none"
            >
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent italic font-serif">
                Opex
              </span>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-sans font-bold border border-orange-500/40 px-1.5 py-0.5 rounded">
                TM
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === 'home' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === 'about' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('products');
              }}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === 'products' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              All 17 Products
            </a>
            <a
              href="#branches"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('branches');
              }}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === 'branches' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              Branches & Factory
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === 'contact' ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (WhatsApp Call & Phone) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone1.replace(/-/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20${encodeURIComponent(COMPANY_INFO.name)},%20I%20am%20interested%20in%20Opex%20lighting%20and%20electrical%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/8801602783636"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] rounded-lg hover:bg-[#20ba59] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F2238] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 text-slate-200"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 text-slate-200"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 text-slate-200"
            >
              All 17 Products
            </button>
            <button
              onClick={() => handleNavClick('branches')}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 text-slate-200"
            >
              Branches & Factory
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 text-slate-200"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-3 border-t border-slate-700/80 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20${encodeURIComponent(COMPANY_INFO.name)},%20I%20am%20interested%20in%20Opex%20lighting%20and%20electrical%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#25D366] rounded-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: {COMPANY_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone2.replace(/-/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Hotline 2: {COMPANY_INFO.phone2}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
