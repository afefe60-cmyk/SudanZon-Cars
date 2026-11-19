"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Car,
  Star,
  DollarSign
} from "lucide-react";

export default function HeroBanner({ onSearch }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quick filter states
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSearchClick = () => {
    onSearch?.({
      brand: selectedBrand,
      priceFrom,
      priceTo,
      type: selectedType,
    });
  };

  return (
    <div className="home-hero space-y-4">
      <div className="home-hero-reference hidden lg:block">
        <Image
          src="/homepage-hero-reference.jpg"
          alt="سودان زون للسيارات: سيارات متعددة وبحث سريع وإعلانات موثوقة"
          width={1536}
          height={264}
          priority
          sizes="100vw"
        />
        <Link className="home-hero-reference-cta" href="/add-car" aria-label="أضف إعلانك الآن" />
      </div>
      {/* 1. Main Hero Banner (Matching the exact look in the screenshot) */}
      <div className="home-hero-panel relative rounded-3xl overflow-hidden bg-gradient-to-l from-[#072548] via-[#0b386e] to-[#144f94] text-white shadow-xl min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        {/* Decorative Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none"></div>

        {/* Content Container (2 columns on desktop) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          {/* Right Column in RTL: Marketing Text & CTA Button */}
          <div className="lg:col-span-6 space-y-4 text-right">
            <div className="space-y-1">
              <h1 dir="ltr" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex items-center gap-2">
                <span>SudanZon</span>
                <span className="text-amber-400">Cars</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-400">
                سيارتك .. على بعد نقرة واحدة
              </p>
              {/* Golden dynamic curve underline under text */}
              <div className="w-56 h-2 bg-gradient-to-l from-amber-400 to-transparent rounded-full mt-1"></div>
            </div>

            {/* Checklist with Yellow Checkmarks */}
            <ul className="space-y-2 text-xs sm:text-sm text-slate-100 font-bold pt-2">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>إعلانات موثوقة</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>بحث سهل وسريع</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>تواصل مباشر مع المالك أو المعرض</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/add-car"
                className="inline-flex items-center gap-2 py-3 px-8 rounded-2xl font-black text-sm sm:text-base bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 shadow-xl shadow-amber-500/30 transition active:scale-95"
              >
                <Plus size={20} strokeWidth={3} />
                <span>أضف إعلانك الآن</span>
              </Link>
            </div>
          </div>

          {/* Left Column in RTL: Cars & Khartoum Skyline Image */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="home-hero-mobile-image relative w-full max-w-lg aspect-[16/9] drop-shadow-2xl">
              <Image
                src="/hero-cars-mobile.jpg"
                alt="سيارات سودان زون"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Carousel side arrows & bottom dots */}
        <div className="relative z-10 flex items-center justify-between pt-4 mt-2">
          {/* Right Arrow (Next in RTL) */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            aria-label="السابق"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-2.5 rounded-full transition-all ${
                  dot === currentSlide
                    ? "w-8 bg-amber-400"
                    : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            aria-label="التالي"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>

      {/* 2. Horizontal Quick Filter Bar (Matching image exactly) */}
      <div className="home-filter hidden lg:block bg-white rounded-2xl border border-slate-200/90 p-3 shadow-sm">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Right-to-left order: body type, make, minimum, maximum, search */}
          <div className="col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0066cc] transition"
            >
              <option value="">نوع الهيكل</option>
              <option value="sedan">سيدان</option>
              <option value="suv">دفع رباعي (SUV)</option>
              <option value="truck">شاحنات وبكاسي</option>
              <option value="hatchback">هاتشباك</option>
              <option value="luxury">سيارات فاخرة</option>
            </select>
          </div>

          <div className="col-span-3">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0066cc] transition"
            >
              <option value="">اختر الماركة</option>
              <option value="Toyota">تويوتا (Toyota)</option>
              <option value="Hyundai">هيونداي (Hyundai)</option>
              <option value="Kia">كيا (Kia)</option>
              <option value="Nissan">نيسان (Nissan)</option>
              <option value="Mitsubishi">ميتسوبيشي (Mitsubishi)</option>
            </select>
          </div>

          <div className="col-span-2">
            <select
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0066cc] transition"
            >
              <option value="">السعر من (ج.س)</option>
              <option value="15000000">15 مليون ج.س</option>
              <option value="30000000">30 مليون ج.س</option>
              <option value="50000000">50 مليون ج.س</option>
              <option value="80000000">80 مليون ج.س</option>
              <option value="120000000">120 مليون ج.س</option>
            </select>
          </div>

          <div className="col-span-2">
            <select
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0066cc] transition"
            >
              <option value="">السعر إلى (ج.س)</option>
              <option value="40000000">40 مليون ج.س</option>
              <option value="70000000">70 مليون ج.س</option>
              <option value="100000000">100 مليون ج.س</option>
              <option value="150000000">150 مليون ج.س</option>
              <option value="250000000">250 مليون ج.س</option>
            </select>
          </div>

          <div className="col-span-2">
            <button
              onClick={handleSearchClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm bg-[#0066cc] hover:bg-[#004d99] text-white shadow-md shadow-blue-500/20 transition active:scale-95"
            >
              <Search size={18} />
              <span>بحث</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
