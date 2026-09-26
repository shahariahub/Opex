# M/S OSMAN TRADING (OPEX)
### Official Electrical, Lighting, Cables & Architectural Doors Catalogue Website (Bangladesh)

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan.svg)](https://tailwindcss.com/)

---

## 📋 প্রজেক্ট পরিচিতি (About the Project)
**M/S OSMAN TRADING** (ব্র্যান্ড: **OPEX**) বাংলাদেশের অন্যতম শীর্ষস্থানীয় ইলেকট্রিক্যাল, লাইটিং, পিওর কপার ক্যাবল এবং সিকিউরিটি ডোর প্রস্তুতকারক ও পাইকারি সরবরাহকারী প্রতিষ্ঠান।
- **প্রোপাইটর:** মোহাম্মদ ওসমান গনি (Mohammed Osman Goni)
- **শোরুম ও পাইকারি হাব:** ২৩৮, কাপ্তান বাজার (ভবন-২), নবাবপুর, ঢাকা।
- **ফ্যাক্টরি:** ২৯, শহীদ নগর, ফতুল্লা, নারায়ণগঞ্জ।
- **হটলাইন / WhatsApp:** 01602-783636 · 01939-322132

এই ওয়েবসাইটটিতে আসল ক্যাটালগ থেকে ক্রপ করা **০১ থেকে ১৭টি প্রোডাক্ট সেকশন**, সরাসরি WhatsApp অর্ডার সিস্টেম, ৬৪ জেলার কুরিয়ার ডেলিভারি গাইড এবং শোরুমের ঠিকানা সুন্দরভাবে সাজানো রয়েছে।

---

## 🚀 লোকাল মেশিনে কীভাবে রান করবেন (How to Run Locally)

### ১. ক্লোন ও ডিপেন্ডেন্সি ইনস্টল করুন:
```bash
git clone <your-github-repo-url>
cd <project-folder>
npm install
```

### ২. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```
ব্রাউজারে ভিজিট করুন: `http://localhost:3000`

### ৩. প্রোডাকশন বিল্ড তৈরি করুন:
```bash
npm run build
```
বিল্ড ফাইলগুলো `dist/` ফোল্ডারে তৈরি হবে।

---

## 🛠️ আপনি কীভাবে টেক্সট, ফটো ও তথ্য সহজে পরিবর্তন করবেন (Easy Customization Guide)

আপনাকে কোনো জটিল কোড বা ডিজাইন ঘাঁটাঘাঁটি করতে হবে না! সব তথ্য সহজ ফাইলে গুছিয়ে রাখা হয়েছে:

### ১. ফোন নম্বর, ঠিকানা ও প্রোডাক্টের লেখা পরিবর্তন করতে:
👉 ওপেন করুন: **`src/config/siteContent.ts`**
- এই একটি ফাইল পরিবর্তন করলেই পুরো ওয়েবসাইটের:
  - কোম্পানি নাম ও প্রোপাইটরের নাম
  - হটলাইন ফোন নম্বর ও WhatsApp নম্বর
  - বিকাশ নম্বর
  - শোরুম ও ফ্যাক্টরির ঠিকানা
  - ০১ থেকে ১৭টি প্রোডাক্টের নাম, ওয়াট (Specs), গ্যারান্টি ও বিবরণ আপডেট হয়ে যাবে!

### ২. নতুন ছবি / ফটো পরিবর্তন করতে:
👉 ছবিগুলো রাখা আছে: **`src/assets/images/`** ফোল্ডারে
- প্রতিটি আইটেমের ছবির নাম সরাসরি রাখা হয়েছে:
  - `item-1.jpg` (01 Ween Bulb)
  - `item-2.jpg` (02 Eco Bulb)
  - `item-3.jpg` (03 IPS Rechargeable Bulb)
  - `item-4.jpg` (04 Bullet Bulb)
  - `item-5.jpg` (05 Tube Light)
  - `item-6.jpg` (06 Night Bulb & RGB Fan)
  - `item-7.jpg` (07 Fans)
  - `item-8.jpg` (08 Multiplug)
  - `item-9.jpg` (09 Plug & Adapters)
  - `item-10.jpg` (10 Holder & Switch)
  - `item-11.jpg` (11 Ceiling Rose)
  - `item-12.jpg` (12 Cables)
  - `item-13.jpg` (13 Magnet Coil)
  - `item-14.jpg` (14 Electronics Item)
  - `item-15.jpg` (15 Gas Stove)
  - `item-16.jpg` (16 Router & CCTV Camera)
  - `item-17.jpg` (17 Opex Security Doors)
- আপনি যেকোনো ছবি পরিবর্তন করতে চাইলে শুধু আপনার নতুন ছবিটির নাম `item-1.jpg` বা `item-2.jpg` ইত্যাদি রেখে এই ফোল্ডারে রিপ্লেস করে দিলেই ওয়েবসাইটে সাথে সাথে নতুন ছবি চলে আসবে!

### ৩. টাইটেল ও মেটা ট্যাগ পরিবর্তন করতে:
👉 ওপেন করুন: **`index.html`**
- `<title>` এবং `<meta name="description">` পরিবর্তন করতে পারবেন।

---

## 📂 ফাইল স্ট্রাকচার (Project Structure)

```text
├── index.html                  # মূল HTML এন্ট্রি পয়েন্ট (Title, SEO Meta)
├── package.json                # ডিপেন্ডেন্সি ও স্ক্রিপ্টসমূহ
├── README.md                   # এই নির্দেশিকা ফাইল
├── src/
│   ├── config/
│   │   └── siteContent.ts      # 🌟 সব লেখা, নম্বর ও প্রডাক্ট এডিট করার প্রধান ফাইল
│   ├── assets/
│   │   └── images/
│   │       ├── index.ts        # 🌟 সব ছবির রেজিস্ট্রি (ছবি পাল্টানোর সহজ ফাইল)
│   │       ├── hero-banner.jpg # হিরো ব্যানার
│   │       └── item-1.jpg ~ item-17.jpg # ০১ থেকে ১৭টি ক্যাটালগ ফটো
│   ├── components/
│   │   ├── Header.tsx          # টপ বার ও নেভিগেশন মেনু
│   │   ├── Hero.tsx            # হিরো ব্যানার ও বাংলাদেশ মার্কেট হাইলাইটস
│   │   ├── CatalogCutShowcase.tsx # ০১ থেকে ১৭টি আসল ক্যাটালগ ফটো কাট ও লাইটবক্স জুম
│   │   ├── About.tsx           # ওসমান ট্রেডিং ও ৩টি ফ্যাক্টরি ডিভিশন
│   │   ├── ContactSection.tsx  # ৪টি ব্রাঞ্চ, বিকাশ নম্বর ও WhatsApp অর্ডার ফর্ম
│   │   └── Footer.tsx          # কুইক লিংক ও কুরিয়ার ইনফো
│   ├── App.tsx                 # রুট পেজ
│   ├── main.tsx                # রিঅ্যাক্ট রেন্ডার
│   └── index.css               # Tailwind CSS স্টাইলিং
```

---

## 🌐 গিটহাবে পুশ ও ফ্রি হোস্টিংয়ে ডিপ্লয় করার নিয়ম (GitHub & Deployment)

### গিটহাবে আপলোড করতে:
```bash
git init
git add .
git commit -m "Initial commit: Opex Factory Bangladesh Website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### ফ্রিতে লাইভ করতে (Vercel / Netlify):
1. **[Vercel.com](https://vercel.com)**-এ লগইন করুন।
2. "Add New Project" ক্লিক করে আপনার GitHub রিপোজিটরি সিলেক্ট করুন।
3. Framework Preset: **Vite** সিলেক্ট রেখে **Deploy** চাপুন।
4. ১ মিনিটের মধ্যে আপনার ওয়েবসাইট বিশ্বব্যাপী লাইভ হয়ে যাবে!

---

&copy; M/S OSMAN TRADING (OPEX) · All Rights Reserved.
Hotline: 01602-783636 · 01939-322132
