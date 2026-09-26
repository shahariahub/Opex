import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CatalogCutShowcase } from './components/CatalogCutShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhoneCall } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'branches', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-orange-500 selection:text-white">
      {/* Top Header */}
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('products')}
          onContactClick={() => scrollToSection('branches')}
        />

        {/* Product Catalog Cut Photo Sections */}
        <CatalogCutShowcase />

        {/* About Us Section */}
        <About />

        {/* Contact & Branch Network */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Sticky Quick Action: Phone Hotline on Mobile/Desktop */}
      <aside aria-label="Direct quick hotline" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="tel:01602783636"
          className="flex items-center gap-2 p-3 bg-[#0A192F] text-white rounded-full shadow-lg border border-slate-700 hover:scale-105 active:scale-95 transition-all text-xs font-semibold group"
          title="Direct Call Hotline"
        >
          <PhoneCall className="w-5 h-5 text-orange-400 group-hover:animate-bounce" />
          <span className="hidden sm:inline pr-1">01602-783636</span>
        </a>
      </aside>
    </div>
  );
}
