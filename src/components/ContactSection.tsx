import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  Building2,
  Factory,
  CreditCard,
  Truck,
} from 'lucide-react';
import { BRANCHES } from '../config/siteContent';

export const ContactSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    branch: 'Dhaka Branch (Kaptan Bazar)',
    productInterest: 'LED Bulbs & Lighting',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setFormSubmitted(true);
    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `Hello M/S Osman Trading,\n\nNew Wholesale Inquiry from Website:\n- Name/Shop: ${formData.name}\n- Mobile: ${formData.phone}\n- District/Thana: ${formData.district || 'Bangladesh'}\n- Nearest Hub: ${formData.branch}\n- Products: ${formData.productInterest}\n- Message: ${formData.message || 'Please send complete wholesale price list and carton packing details.'}`
    );

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/8801602783636?text=${waText}`, '_blank');
    }, 300);
  };

  return (
    <section id="branches" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            <span>Factory &amp; Wholesale Showrooms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Our Branches &amp; Factory Contact Information
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Visit our wholesale showrooms in Dhaka and Chittagong, or contact our Narayanganj factory directly for dealer orders and bulk rates.
          </p>
        </div>

        {/* 4 Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BRANCHES.map((branch) => {
            const isFactory = branch.id === 'factory';
            const isHQ = branch.id === 'head-office';

            return (
              <div
                key={branch.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isFactory
                    ? 'bg-slate-900 text-white border-slate-800 shadow-md ring-1 ring-orange-500/30'
                    : isHQ
                    ? 'bg-orange-50/40 border-orange-200/80 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isFactory
                          ? 'bg-orange-600 text-white'
                          : isHQ
                          ? 'bg-orange-200 text-orange-900'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {branch.badge}
                    </span>
                    {isFactory ? (
                      <Factory className="w-4 h-4 text-orange-400" />
                    ) : (
                      <Building2 className="w-4 h-4 text-slate-400" />
                    )}
                  </div>

                  {/* Branch Name */}
                  <h3
                    className={`text-base font-bold mb-1 ${
                      isFactory ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {branch.name}
                  </h3>
                  <div
                    className={`text-xs mb-3 font-medium ${
                      isFactory ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {branch.type}
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-xs mb-4">
                    <MapPin
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isFactory ? 'text-orange-400' : 'text-orange-600'
                      }`}
                    />
                    <span
                      className={`leading-relaxed ${
                        isFactory ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {branch.address}
                    </span>
                  </div>
                </div>

                {/* Contacts Box */}
                <div
                  className={`pt-3 border-t text-xs space-y-2 ${
                    isFactory ? 'border-slate-800' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-1.5">
                    {branch.contacts.map((ph, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <a
                          href={`tel:${ph.replace(/-/g, '')}`}
                          className={`font-bold hover:underline ${
                            isFactory ? 'text-orange-300' : 'text-slate-800'
                          }`}
                        >
                          {ph}
                        </a>
                        <button
                          onClick={() => handleCopy(ph, `${branch.id}-${ph}`)}
                          className={`p-1 rounded transition-colors ${
                            isFactory
                              ? 'text-slate-400 hover:text-white'
                              : 'text-slate-400 hover:text-slate-700'
                          }`}
                          title="Copy phone"
                        >
                          {copiedText === `${branch.id}-${ph}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  {branch.emails[0] && (
                    <div
                      className={`text-[11px] truncate pt-1 ${
                        isFactory ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <a href={`mailto:${branch.emails[0]}`} className="hover:underline">
                        {branch.emails[0]}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment & Direct Wholesale Inquiry */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone & bKash Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0A192F] text-white border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Payment &amp; bKash Number</h3>
                  <p className="text-xs text-slate-300">Official M/S Osman Trading Numbers</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-orange-400">Main Hotline &amp; bKash</div>
                    <div className="text-sm font-bold text-white tracking-wide mt-0.5">
                      01602-783636
                    </div>
                    <div className="text-[11px] text-slate-400">Mohammed Osman Goni (Proprietor)</div>
                  </div>
                  <button
                    onClick={() => handleCopy('01602783636', 'bkash1')}
                    className="p-2 rounded-lg bg-slate-700 text-slate-200 hover:text-white transition-colors"
                  >
                    {copiedText === 'bkash1' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-orange-400">Second Hotline &amp; WhatsApp</div>
                    <div className="text-sm font-bold text-white tracking-wide mt-0.5">
                      01939-322132
                    </div>
                    <div className="text-[11px] text-slate-400">Sales &amp; Dealer Inquiries</div>
                  </div>
                  <button
                    onClick={() => handleCopy('01939322132', 'bkash2')}
                    className="p-2 rounded-lg bg-slate-700 text-slate-200 hover:text-white transition-colors"
                  >
                    {copiedText === 'bkash2' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Emails */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="mailto:opexlighting1@gmail.com" className="hover:text-white">
                    opexlighting1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="mailto:gunniosman62@gmail.com" className="hover:text-white">
                    gunniosman62@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <a
                href="https://wa.me/8801602783636?text=Hello%20M/S%20Osman%20Trading,%20I%20want%20to%20place%20a%20wholesale%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Call or Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Wholesale Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A192F] mb-1">
              Request Wholesale Rate Sheet
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Shop owners, electrical contractors, and dealers get direct factory wholesale pricing.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold">Inquiry Sent to WhatsApp!</h4>
                <p className="text-xs text-emerald-700">
                  Opening WhatsApp chat with M/S Osman Trading. You can also call 01602-783636 directly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-semibold underline text-emerald-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name / Shop Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Amin Electric / Shop Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 01711-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your District / Thana *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bogura / Cumilla / Sylhet"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Product Interested In
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800"
                    >
                      <option>Item 01-06: LED Bulbs &amp; Tubes</option>
                      <option>Item 07: Solar Rechargeable &amp; Fans</option>
                      <option>Item 08-11: Multiplug, Switch &amp; Ceiling Rose</option>
                      <option>Item 12-13: Pure Copper Cables &amp; Coils</option>
                      <option>Item 14-15: Kitchen Appliances &amp; Gas Stoves</option>
                      <option>Item 16: Wi-Fi Routers &amp; CCTV Cameras</option>
                      <option>Item 17: Opex Security Doors</option>
                      <option>Full Catalog (All 17 Items)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Requirements / Quantity / Order Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="List required watts, number of cartons, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#c2410c] active:scale-95 rounded-lg transition-all shadow-md whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to WhatsApp (01602-783636)</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
