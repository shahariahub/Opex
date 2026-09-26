import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Truck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black italic font-serif text-white tracking-tight">
                Opex
              </span>
              <span className="text-[10px] uppercase font-bold text-orange-400 border border-orange-500/40 px-1 py-0.5 rounded">
                TM
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-200">
              M/S OSMAN TRADING · Opex Lighting, Cables &amp; Doors Factory
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Direct factory manufacturer in Bangladesh. We produce energy-saving LED Ween and Bullet bulbs, 
              100% pure copper building cables, rechargeable solar fans, kitchen electronics, and luxury security doors. 
              Wholesale delivery across all 64 districts in Bangladesh.
            </p>
            <div className="text-xs text-slate-300 font-medium">
              Proprietor: <span className="text-white font-semibold">Mohammed Osman Goni</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-orange-400 transition-colors"
                >
                  All 17 Products (Photo Cuts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-orange-400 transition-colors"
                >
                  About Osman Trading
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('branches')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Showrooms &amp; Factory Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Wholesale Price &amp; Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts & Factory Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Showrooms &amp; Factory Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">Showroom (Dhaka):</strong> 238, Kaptan Bazar (Bhaban-2), Nawabpur, Dhaka.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">Factory:</strong> 29, Shohid Nagar, Fotullah, Narayanganj.
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:01602783636"
                  className="hover:text-white font-semibold text-slate-200"
                >
                  01602-783636
                </a>
                <span>·</span>
                <a
                  href="tel:01939322132"
                  className="hover:text-white font-semibold text-slate-200"
                >
                  01939-322132
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="mailto:opexlighting1@gmail.com"
                  className="hover:text-white"
                >
                  opexlighting1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <Truck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Courier delivery to all 64 districts in Bangladesh</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} M/S OSMAN TRADING (OPEX). All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/8801602783636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/20 border border-[#25D366]/40 rounded-lg text-emerald-400 text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp: 01602-783636</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
