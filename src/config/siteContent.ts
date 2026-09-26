// ==============================================================================
// 🌟 SITE CONTENT CONFIGURATION (সহজে এডিট করার ফাইল)
// ==============================================================================
// আপনি যদি ওয়েবসাইটের কোনো টেক্সট, ফোন নম্বর, ঠিকানা বা প্রডাক্ট এডিট করতে চান,
// তাহলে অন্য কোনো ফাইলে হাত দেওয়ার প্রয়োজন নেই। শুধুমাত্র এই ফাইলের তথ্য পরিবর্তন করুন।
// 
// If you want to change any phone number, address, or product description,
// you ONLY need to edit this file!
// ==============================================================================

import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
} from '../assets/images';

// ------------------------------------------------------------------------------
// 1. COMPANY & CONTACT INFORMATION
// ------------------------------------------------------------------------------
export const COMPANY_INFO = {
  name: 'M/S OSMAN TRADING',
  brandName: 'OPEX',
  proprietor: 'Mohammed Osman Goni',
  tagline: 'Reliable Electrical, Lighting, Cables & Architectural Solutions in Bangladesh',
  
  // Phone numbers (Click to call)
  phone1: '01602-783636',
  phone2: '01939-322132',
  
  // WhatsApp Number for instant wholesale rate & orders
  whatsappNumber: '8801602783636', // International format with 88
  whatsappDisplay: '01602-783636',
  
  // Official Emails
  email1: 'opexlighting1@gmail.com',
  email2: 'gunniosman62@gmail.com',
  
  // bKash / Payment details
  bkashPersonal: '01602-783636',
  bkashAccountHolder: 'Mohammed Osman Goni (Proprietor)',
  
  // Supported Courier Services in Bangladesh
  couriers: ['Sundarban Courier', 'SA Paribahan', 'Karatoa Courier', 'Janani Express'],
  deliveryCoverage: '64 Districts across Bangladesh (24–48 Hours)',
};

// ------------------------------------------------------------------------------
// 2. SHOWROOMS & FACTORY BRANCHES
// ------------------------------------------------------------------------------
export interface Branch {
  id: string;
  name: string;
  address: string;
  type: string;
  badge: string;
  contacts: string[];
  emails: string[];
}

export const BRANCHES: Branch[] = [
  {
    id: 'head-office',
    name: 'Head Office (Dhaka)',
    address: '69, Taheri bagh, 1203, Wari, Nawabpur, Dhaka',
    type: 'Administrative & Wholesale HQ',
    badge: 'Headquarters',
    contacts: ['01602-783636', '01939-322132'],
    emails: ['gunniosman62@gmail.com', 'opexlighting1@gmail.com'],
  },
  {
    id: 'dhaka-branch',
    name: 'Dhaka Branch (Kaptan Bazar Hub)',
    address: '238, Kaptan Bazar (Bhaban-2), Nawabpur, Dhaka',
    type: 'Wholesale & Retail Showroom',
    badge: 'Kaptan Bazar Hub',
    contacts: ['01602-783636', '01939-322132'],
    emails: ['opexlighting1@gmail.com'],
  },
  {
    id: 'ctg-branch',
    name: 'Chittagong Branch',
    address: 'Haji Jalal Mantion, Boktia Road, Anwara, Chittagong',
    type: 'Regional Distribution Center',
    badge: 'South Bengal Hub',
    contacts: ['01602-783636', '01939-322132'],
    emails: ['opexlighting1@gmail.com'],
  },
  {
    id: 'factory',
    name: 'Opex Manufacturing Factory',
    address: '29, Shohid Nagar, Fotullah, Narayanganj',
    type: 'Lighting, Cables & Doors Production Plant',
    badge: 'Industrial Plant',
    contacts: ['01602-783636', '01939-322132'],
    emails: ['gunniosman62@gmail.com', 'opexlighting1@gmail.com'],
  },
];

// ------------------------------------------------------------------------------
// 3. ALL 17 OFFICIAL CATALOGUE PRODUCTS (01 TO 17)
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// Helper: Checks window.OPEX_IMAGES (from index.html) first, then falls back to bundle / public
// ------------------------------------------------------------------------------
export const getOpexImage = (key: string, bundledImg: string, publicPath: string): string => {
  if (typeof window !== 'undefined' && (window as any).OPEX_IMAGES && (window as any).OPEX_IMAGES[key]) {
    return (window as any).OPEX_IMAGES[key];
  }
  return bundledImg || publicPath;
};

export interface ProductItem {
  id: string;
  code: string;
  title: string;
  division: 'Lighting' | 'Fans' | 'Accessories' | 'Cables & Heavy';
  badge: string;
  badgeType: 'guarantee-1yr' | 'guarantee' | 'warranty';
  wattageSpecs: string;
  description: string;
  bestFor: string;
  image: string;
}

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: 'item-01',
    code: '01',
    title: '01 WEEN BULB',
    division: 'Lighting',
    badge: '1 YEARS GUARANTEE',
    badgeType: 'guarantee-1yr',
    wattageSpecs: '5W · 9W · 15W · 18W · 30W',
    description: 'Everyday bright LED bulb with voltage surge protection. Gives clear white light, cuts electric bills, and comes with a direct 1-year replacement guarantee.',
    bestFor: 'Homes, shops, offices, and regular room lighting',
    image: getOpexImage('item1', item1, '/images/item-1.jpg'),
  },
  {
    id: 'item-02',
    code: '02',
    title: '02 ECO BULB',
    division: 'Lighting',
    badge: '1 YEARS GUARANTEE',
    badgeType: 'guarantee-1yr',
    wattageSpecs: '3W · 5W · 9W · 12W · 15W · 18W',
    description: 'Economical energy-saving LED bulb built for long daily use. Low temperature heat sink ensures the bulb does not overheat.',
    bestFor: 'Budget retail shops, bedrooms, kitchens, and corridors',
    image: getOpexImage('item2', item2, '/images/item-2.jpg'),
  },
  {
    id: 'item-03',
    code: '03',
    title: '03 IPS BULB (RECHARGEABLE)',
    division: 'Lighting',
    badge: '1 YEARS GUARANTEE',
    badgeType: 'guarantee-1yr',
    wattageSpecs: '10W · 12W · 15W · 20W',
    description: 'Automatic emergency backup bulb. Recharges itself while electricity is on, and stays ON automatically for 3 to 4 hours during load-shedding.',
    bestFor: 'Load-shedding areas, study tables, grocery shops, and staircases',
    image: getOpexImage('item3', item3, '/images/item-3.jpg'),
  },
  {
    id: 'item-04',
    code: '04',
    title: '04 BULLET BULB (HIGH POWER)',
    division: 'Lighting',
    badge: '1 YEARS GUARANTEE',
    badgeType: 'guarantee-1yr',
    wattageSpecs: '15W · 20W · 30W · 40W · 50W · 80W · 100W',
    description: 'Heavy-duty high-wattage bullet T-bulb with vertical cooling body. Delivers super bright wide illumination for large open spaces.',
    bestFor: 'Factories, godowns/warehouses, big market shops, mosques, and outdoor sheds',
    image: getOpexImage('item4', item4, '/images/item-4.jpg'),
  },
  {
    id: 'item-05',
    code: '05',
    title: '05 TUBE LIGHT (SLIM BATTEN)',
    division: 'Lighting',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: '10W · 20W · 40W · 60W',
    description: 'Complete slim batten LED tube light. Ready to install with simple clip brackets on ceiling or wall. No extra choke or starter needed.',
    bestFor: 'Drawing rooms, garments factories, schools, and shopping centers',
    image: getOpexImage('item5', item5, '/images/item-5.jpg'),
  },
  {
    id: 'item-06',
    code: '06',
    title: '06 NIGHT BULB & RGB FAN',
    division: 'Lighting',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: '1.5W Classic · 1.5W Super · 1.5W Premium · RGB Foldable Fan',
    description: 'Decorative soft-glow 1.5W night bulbs in 6 bright colors (Red, Blue, Green, Pink, Yellow, Orange) plus 3-blade folding RGB decorative fan lamp.',
    bestFor: 'Night sleep light, prayer spaces, decorative corners, and festive lighting',
    image: getOpexImage('item6', item6, '/images/item-6.jpg'),
  },
  {
    id: 'item-07',
    code: '07',
    title: '07 FAN RANGE',
    division: 'Fans',
    badge: 'WARRANTY',
    badgeType: 'warranty',
    wattageSpecs: '16" Solar Rechargeable · High Speed Desk · Net Fans',
    description: '16-inch solar rechargeable table fan with emergency 4-LED reading light and USB mobile charger, high-speed pure copper desk fan, and safety net fan.',
    bestFor: 'Summer cooling, emergency power outages, shops, and rural areas',
    image: getOpexImage('item7', item7, '/images/item-7.jpg'),
  },
  {
    id: 'item-08',
    code: '08',
    title: '08 MULTIPLUG',
    division: 'Accessories',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: '4-Way & 5-Way Individual Switch · Heavy Cord',
    description: 'Heavy-duty multi-plug extension board with separate on/off toggle switch for every single socket. Features thick copper wire cord and surge protection.',
    bestFor: 'Computers, TVs, refrigerators, mobile charging, and office desks',
    image: getOpexImage('item8', item8, '/images/item-8.jpg'),
  },
  {
    id: 'item-09',
    code: '09',
    title: '09 PLUG & ADAPTERS',
    division: 'Accessories',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: 'Universal Multi-Plugs · 3-Pin Fused · 2-Pin Heavy Plugs',
    description: 'Universal converter travel plugs, 3-pin fused UK plugs with solid brass pins, and 2-pin round heavy power plugs.',
    bestFor: 'Connecting laptops, mobile chargers, electric kettles, and appliances',
    image: getOpexImage('item9', item9, '/images/item-9.jpg'),
  },
  {
    id: 'item-10',
    code: '10',
    title: '10 HOLDER & SWITCH',
    division: 'Accessories',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: 'Batten & Angle Holders · Modular Gang Plates · Bell Push',
    description: 'Heat-resistant ceramic and brass bulb holders, and modular piano wall switches with red glow indicators and smooth click buttons.',
    bestFor: 'Building wiring, home renovation, and electric installations',
    image: getOpexImage('item10', item10, '/images/item-10.jpg'),
  },
  {
    id: 'item-11',
    code: '11',
    title: '11 CEILING ROSE',
    division: 'Accessories',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: 'Royal Antique Gold Carved · Square Modern · Round White',
    description: 'Luxury antique golden floral carved ceiling roses for ceiling fans and hanging lights, plus clean modern white flush-mount ceiling roses.',
    bestFor: 'Drawing room ceiling fans, chandelier mounts, and interior decoration',
    image: getOpexImage('item11', item11, '/images/item-11.jpg'),
  },
  {
    id: 'item-12',
    code: '12',
    title: '12 CABLE',
    division: 'Cables & Heavy',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: '1.0mm² · 1.5mm² · 2.5mm² · 4.0mm² · 6.0mm² · 10.0mm²',
    description: '99.99% pure annealed electrolytic copper electric house wiring cables. Safe, fire-retardant virgin PVC coating, compliant with Bangladesh BDS standards.',
    bestFor: 'Residential house wiring, commercial buildings, and industrial power lines',
    image: getOpexImage('item12', item12, '/images/item-12.jpg'),
  },
  {
    id: 'item-13',
    code: '13',
    title: '13 COIL (MAGNET WIRE)',
    division: 'Cables & Heavy',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: 'High Gauge Industrial Annealed Copper Winding Spools',
    description: 'Shiny enameled pure copper winding magnet wire coils. Designed specifically for electricians rewinding ceiling fans, water pumps, and electric motors.',
    bestFor: 'Electrician workshops, fan rewinding, and motor repair shops',
    image: getOpexImage('item13', item13, '/images/item-13.jpg'),
  },
  {
    id: 'item-14',
    code: '14',
    title: '14 ELECTRONICS ITEM',
    division: 'Cables & Heavy',
    badge: 'WARRANTY',
    badgeType: 'warranty',
    wattageSpecs: 'Electric Pressure Cooker · Electric Kettle · Rice Cooker',
    description: 'Energy-saving electric kitchen appliances: fast-boiling stainless steel kettle, automatic electric pressure cooker, and multi-cooker rice cooker.',
    bestFor: 'Modern kitchen cooking, hostel students, tea stalls, and families',
    image: getOpexImage('item14', item14, '/images/item-14.jpg'),
  },
  {
    id: 'item-15',
    code: '15',
    title: '15 GAS STOVE',
    division: 'Cables & Heavy',
    badge: 'WARRANTY',
    badgeType: 'warranty',
    wattageSpecs: 'Single & Double Burner · Auto Piezoelectric Ignition',
    description: 'Heavy-duty stainless steel and toughened black tempered glass gas stoves. Features fuel-saving blue-flame brass burners with auto spark ignition.',
    bestFor: 'LPG cylinder gas and natural line gas domestic cooking',
    image: getOpexImage('item15', item15, '/images/item-15.jpg'),
  },
  {
    id: 'item-16',
    code: '16',
    title: '16 RAUTER & CAMERA',
    division: 'Cables & Heavy',
    badge: 'WARRANTY',
    badgeType: 'warranty',
    wattageSpecs: 'Dual Antenna Wi-Fi Router · Night Vision CCTV Cameras',
    description: 'High-speed long-range Wi-Fi internet router and weatherproof day/night infrared CCTV bullet security cameras with crystal clear video recording.',
    bestFor: 'Home Wi-Fi, shop security, warehouse surveillance, and office networking',
    image: getOpexImage('item16', item16, '/images/item-16.jpg'),
  },
  {
    id: 'item-17',
    code: '17',
    title: '17 DOOR (OPEX SECURITY DOORS)',
    division: 'Cables & Heavy',
    badge: 'GUARANTEE',
    badgeType: 'guarantee',
    wattageSpecs: 'Standard & Custom Sizes · 32" / 34" / 36" / 38" × 84"',
    description: 'Luxury architectural exterior and interior security doors with deep antique golden ornamental carvings. 100% waterproof, termite-proof, and anti-theft.',
    bestFor: 'Main house entrance, apartment flat doors, and luxury bungalows',
    image: getOpexImage('item17', item17, '/images/item-17.jpg'),
  },
];
