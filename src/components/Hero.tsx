import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Factory, PhoneCall, CheckCircle, Truck, RefreshCw } from 'lucide-react';
import { heroBanner } from '../assets/images';
import { COMPANY_INFO } from '../config/siteContent';

interface HeroProps {
  onExploreCatalog: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onContactClick }) => {
  return (
    <section id="home" className="relative bg-[#0A192F] bg-graph-paper-dark text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Easy English Content for Bangladesh Buyers */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1.5 rounded-md">
              <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
              <span>M/S OSMAN TRADING · DIRECT FACTORY WHOLESALE</span>
            </div>

            {/* Clear, punchy headline in simple English */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Opex Electrical, Lighting &amp; Cables in Bangladesh
            </h1>

            {/* Simple Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-orange-200">
              Direct Factory Wholesale Rate for Shop Owners, Electricians &amp; Contractors
            </p>

            {/* 3 Main Categories */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-md text-xs font-semibold text-slate-200">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                Opex LED Lighting
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-md text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Pure Copper Cables
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-md text-xs font-semibold text-slate-200">
                <Factory className="w-3.5 h-3.5 text-sky-400" />
                Fans, Stoves &amp; Doors
              </span>
            </div>

            {/* Clear explanation in easy English */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              We manufacture and supply authentic Opex products directly from our factory. 
              Get genuine LED bulbs with 1-year replacement guarantee, 99.99% pure copper cables, 
              solar rechargeable fans, and luxury carved security doors. Fast delivery to all 64 districts 
              via Sundarban, SA Paribahan, and Karatoa courier.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#EA580C] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-orange-600/20 whitespace-nowrap active:scale-[0.98]"
              >
                <span>View All 17 Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/8801602783636?text=Hello%20M/S%20Osman%20Trading,%20I%20am%20a%20shopkeeper/buyer.%20Please%20send%20me%20your%20full%20wholesale%20price%20list."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors whitespace-nowrap shadow-md"
              >
                <span>Get Wholesale Rate on WhatsApp</span>
              </a>
            </div>

            {/* Bangladesh Market Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-lg">
                  <Truck className="w-4 h-4 text-orange-400" />
                  <span>64 Districts</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Courier Delivery Across Bangladesh</div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-lg">
                  <RefreshCw className="w-4 h-4 text-emerald-400" />
                  <span>1 Year</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Quick Replacement Guarantee</div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-lg">
                  <Factory className="w-4 h-4 text-amber-400" />
                  <span>Wholesale</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Direct Factory Price for Dealers</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src={heroBanner}
                alt="Opex Lighting, Cables and Electrical Products Showcase"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <div className="inline-block bg-orange-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-2 w-fit">
                  M/S Osman Trading (Opex)
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Original Factory Catalogue Items
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Nawabpur &amp; Kaptan Bazar Wholesale Hub · Fotullah Narayanganj Factory
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Wholesale Stocks Ready
                  </span>
                  <span className="text-xs font-semibold text-orange-300">
                    Call: 01602-783636
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
