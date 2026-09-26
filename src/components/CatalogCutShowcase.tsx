import React, { useState } from 'react';
import {
  MessageCircle,
  Eye,
  Phone,
  ZoomIn,
  X,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Clock,
  PackageCheck,
  CreditCard,
  MapPin,
} from 'lucide-react';

import { CATALOG_PRODUCTS, ProductItem, COMPANY_INFO } from '../config/siteContent';

export const CatalogCutShowcase: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  const divisions = [
    { label: 'All 17 Items', value: 'All' },
    { label: 'Lighting (01-06)', value: 'Lighting' },
    { label: 'Fans (07)', value: 'Fans' },
    { label: 'Accessories (08-11)', value: 'Accessories' },
    { label: 'Cables & Heavy (12-17)', value: 'Cables & Heavy' },
  ];

  const filteredCuts = CATALOG_PRODUCTS.filter(
    (item) => selectedDivision === 'All' || item.division === selectedDivision
  );

  return (
    <section id="products" className="py-16 md:py-24 bg-graph-paper text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
              <span>Official Opex Catalogue · Items 01 to 17</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Opex Product Catalogue (Real Photo Cuts)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Real photos cut directly from our factory catalogue. Every item is available in wholesale 
              quantities with official factory guarantee and courier delivery across all 64 districts in Bangladesh.
            </p>
          </div>

          {/* Quick Wholesale WhatsApp Hotline */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/8801602783636?text=Hello%20M/S%20Osman%20Trading,%20I%20am%20viewing%20the%20Opex%2017-item%20catalogue.%20Please%20send%20me%20the%20wholesale%20price%20sheet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Wholesale Rate on WhatsApp</span>
            </a>
            <a
              href="tel:01602783636"
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-bold text-[#0A192F] bg-white hover:bg-slate-50 active:scale-95 rounded-lg border border-slate-300 shadow-sm transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>01602-783636</span>
            </a>
          </div>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {divisions.map((div) => {
            const isActive = selectedDivision === div.value;
            const count =
              div.value === 'All'
                ? CATALOG_PRODUCTS.length
                : CATALOG_PRODUCTS.filter((c) => c.division === div.value).length;

            return (
              <button
                key={div.value}
                onClick={() => setSelectedDivision(div.value)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{div.label}</span>
                <span
                  className={`text-[10px] tabular-nums font-bold px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 17 INDIVIDUAL PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCuts.map((item) => {
            const whatsappText = encodeURIComponent(
              `Hello M/S Osman Trading,\n\nI want to order from your catalogue:\n- Item: ${item.title}\n- Code: Item #${item.code}\n- Specs: ${item.wattageSpecs}\n- Guarantee: ${item.badge}\n\nPlease send wholesale price quote & delivery timeline.`
            );

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Real Catalog Cut Photo Frame */}
                <div className="relative aspect-[16/10] bg-[#52B3DA] overflow-hidden border-b border-slate-200 flex items-center justify-center p-1.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Item Number Badge */}
                  <div className="absolute top-3 left-3 bg-[#0A192F]/90 text-white text-[11px] font-black px-2.5 py-0.5 rounded shadow-md backdrop-blur-sm flex items-center gap-1">
                    <span>Item #{item.code}</span>
                  </div>

                  {/* Guarantee/Warranty Badge */}
                  <div
                    className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md border ${
                      item.badgeType === 'guarantee-1yr'
                        ? 'bg-blue-800 border-blue-400'
                        : item.badgeType === 'warranty'
                        ? 'bg-emerald-700 border-emerald-400'
                        : 'bg-blue-700 border-blue-400'
                    }`}
                  >
                    {item.badge}
                  </div>

                  {/* Zoom Overlay on Hover */}
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]"
                  >
                    <ZoomIn className="w-5 h-5 text-orange-400" />
                    <span>Click to Zoom Photo</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Title */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold text-[#0A192F] group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.division}
                      </span>
                    </div>

                    {/* Available Watts/Sizes */}
                    <div className="mt-2 text-xs font-bold text-orange-950 bg-orange-50 border border-orange-200/80 px-2.5 py-1.5 rounded-lg flex items-center justify-between">
                      <span className="truncate">{item.wattageSpecs}</span>
                      <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 ml-1" />
                    </div>

                    {/* Simple English description */}
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Best for use */}
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-start gap-1.5">
                      <span className="font-semibold text-slate-700">Best for:</span>
                      <span className="truncate">{item.bestFor}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Photo</span>
                    </button>

                    <a
                      href={`https://wa.me/8801602783636?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors whitespace-nowrap shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BANGLADESH BUYER & WHOLESALE DELIVERY GUIDE */}
        <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Bangladesh Wholesale &amp; Courier Service
              </span>
              <h3 className="text-2xl font-extrabold text-[#0A192F] mt-1">
                How to Order in Wholesale from Anywhere in Bangladesh
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                We deliver wholesale cartons directly to all 64 districts in Bangladesh within 24 to 48 hours.
              </p>
            </div>

            <a
              href="https://wa.me/8801602783636?text=Hello%20M/S%20Osman%20Trading,%20I%20want%20to%20become%20a%20dealer/retailer%20for%20Opex%20products.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0A192F] hover:bg-slate-800 rounded-xl transition-all whitespace-nowrap shadow-sm"
            >
              <span>Apply for Dealership</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Pick Your Items</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose any item numbers from 01 to 17 (Bulbs, Tubes, Fans, Cables, Stoves, Doors).
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Send List on WhatsApp</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send your list to <span className="font-semibold text-slate-900">01602-783636</span>. Our sales team will send the wholesale discount price quote immediately.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Easy Payment Methods</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pay conveniently via bKash, Nagad, Bank Transfer, or Cash on Delivery (Courier Condition).
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">All-District Courier</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parcels dispatched daily through Sundarban Courier, SA Paribahan, and Karatoa Courier Service.
              </p>
            </div>
          </div>

          {/* Quick Courier Banner */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-orange-600" />
              <span>Supported Couriers: <strong>Sundarban Courier</strong>, <strong>SA Paribahan</strong>, <strong>Karatoa Courier</strong>, <strong>Janani Express</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Or pick up directly from <strong>Kaptan Bazar / Nawabpur Hub, Dhaka</strong></span>
            </div>
          </div>
        </div>

      </div>

      {/* FULL RESOLUTION LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0A192F] text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold bg-orange-600 text-white px-2.5 py-0.5 rounded">
                  Item #{activeModalItem.code}
                </span>
                <h3 className="text-base font-bold text-white">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-100 flex flex-col items-center">
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-300 bg-white">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              {/* Specs & Ordering Details */}
              <div className="w-full bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {activeModalItem.badge}
                  </div>
                  <div className="text-sm font-extrabold text-[#0A192F] mt-0.5">
                    Specs: {activeModalItem.wattageSpecs}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {activeModalItem.description}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <span className="font-semibold text-slate-700">Best for: </span>
                    {activeModalItem.bestFor}
                  </p>
                </div>

                <a
                  href={`https://wa.me/8801602783636?text=${encodeURIComponent(
                    `Hello M/S Osman Trading,\n\nI want to order:\n- Item: ${activeModalItem.title}\n- Code: Item #${activeModalItem.code}\n- Specs: ${activeModalItem.wattageSpecs}\n- Guarantee: ${activeModalItem.badge}\n\nPlease share price quote & wholesale delivery timeline.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-colors shadow-sm whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
