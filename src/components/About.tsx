import React from 'react';
import { ShieldCheck, Award, Factory, CheckCircle2, Truck, RefreshCw, Zap, Wrench, DoorOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            <span>About M/S Osman Trading (Opex)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Direct Manufacturer &amp; Wholesale Supplier in Bangladesh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Led by Proprietor <span className="font-semibold text-slate-900">Mohammed Osman Goni</span>, 
            M/S Osman Trading operates from Dhaka’s central wholesale markets in Nawabpur and Kaptan Bazar, 
            with modern manufacturing facilities in Narayanganj. We supply top quality electrical, lighting, 
            cable, and door products to thousands of retailers and contractors across Bangladesh.
          </p>
        </div>

        {/* 2-Column Story & Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Proprietor Quote & Core Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-orange-400 flex items-center justify-center font-black text-xl shadow-md">
                  OG
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A192F]">Mohammed Osman Goni</h3>
                  <p className="text-xs font-semibold text-orange-600">Proprietor, M/S Osman Trading</p>
                </div>
              </div>

              <blockquote className="text-slate-700 italic text-base leading-relaxed border-l-2 border-orange-500 pl-4 my-4">
                "Our business promise to every shopkeeper and buyer is simple: Real quality products at honest factory prices. 
                When you buy Opex, you get genuine pure copper, real wattage, and a straightforward 1-year replacement guarantee 
                you can trust."
              </blockquote>

              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Kaptan Bazar &amp; Nawabpur Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-Year Quick Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>99.99% Pure Copper</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>64 Districts Courier Delivery</span>
                </div>
              </div>
            </div>

            {/* Why Bangladesh Buyers Choose Opex */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Voltage-Protected Drivers</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specially built to withstand sudden high voltage spikes and power dips common across Bangladesh towns and villages.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">100% Pure Copper</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No cheap aluminium mixed in. Pure electrolytic copper ensures low electricity loss, zero sparking, and fire safety.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Dedicated Factory Divisions */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Division 1: Lighting Factory */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F2238] text-white border border-slate-800 shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-400">Division 01</div>
                  <h3 className="text-xl font-bold text-white mt-1">Opex Lighting Factory</h3>
                </div>
                <div className="p-2.5 bg-slate-800 rounded-xl text-orange-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Manufacturing LED Ween Bulbs, Eco Bulbs, high-power Bullet T-Bulbs (up to 100W), 
                smart IPS emergency rechargeable bulbs, slim LED batten tubes, and colorful decorative night bulbs.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-orange-300 font-semibold">
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5" />
                  1-Year Replacement Guarantee
                </span>
                <span>·</span>
                <span>Wholesale Cartons Ready</span>
              </div>
            </div>

            {/* Division 2: Cables Factory */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">Division 02</div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Opex Cables Factory</h3>
                </div>
                <div className="p-2.5 bg-blue-100 rounded-xl text-blue-700">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Producing 99.99% pure copper electrical house wiring cables (1.0mm² to 10.0mm²) 
                with fire-retardant virgin PVC insulation, plus precision copper winding coils for ceiling fans and motors.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-blue-800 font-semibold">
                <span>Tested to Bangladesh BDS Standards</span>
                <span>·</span>
                <span>Red, Blue, Yellow, Green, Black</span>
              </div>
            </div>

            {/* Division 3: Doors Factory */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">Division 03</div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Opex Doors Factory</h3>
                </div>
                <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700">
                  <DoorOpen className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Specialized in luxury carved architectural security doors with antique golden embossed designs. 
                100% termite-proof, waterproof, and equipped with anti-theft heavy steel cores.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-amber-800 font-semibold">
                <span>Standard &amp; Custom Sizes Available</span>
                <span>·</span>
                <span>Guaranteed Termite &amp; Moisture Proof</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
