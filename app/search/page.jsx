"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, 
  SlidersHorizontal, 
  Search, 
  Car, 
  Sparkles, 
  Compass,
  ChevronDown,
  Check
} from "lucide-react";
import CarCard from "../../components/CarCard";

const SUDAN_STATES = [
  "كل الولايات",
  "ولاية البحر الأحمر (بورتسودان)",
  "ولاية الخرطوم",
  "ولاية نهر النيل (عطبرة - شندي)",
  "ولاية الجزيرة (مدني)",
  "ولاية كسلا",
  "ولاية القضارف",
  "الولاية الشمالية (دنقلا - مروي)",
  "ولاية شمال كردفان (الأبيض)",
];

const BRANDS = [
  "كل الماركات",
  "تويوتا (Toyota)",
  "هيونداي (Hyundai)",
  "كيا (Kia)",
  "نيسان (Nissan)",
  "ميتسوبيشي (Mitsubishi)",
  "مرسيدس (Mercedes)",
  "سوزوكي (Suzuki)",
  "إيسوزو (Isuzu)",
];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("كل الولايات");
  const [selectedBrand, setSelectedBrand] = useState("كل الماركات");
  const [priceMax, setPriceMax] = useState(120000000);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSearchSubmit = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedBrand !== "كل الماركات") {
      const cleanBrand = selectedBrand.split(" ")[0];
      params.set("brand", cleanBrand);
    }
    if (selectedState !== "كل الولايات") {
      if (selectedState.includes("بورتسودان")) params.set("city", "بورتسودان");
      else if (selectedState.includes("الخرطوم")) params.set("city", "الخرطوم");
      else if (selectedState.includes("عطبرة")) params.set("city", "عطبرة");
      else if (selectedState.includes("مدني")) params.set("city", "ود مدني");
      else if (selectedState.includes("كسلا")) params.set("city", "كسلا");
    }
    router.push(`/cars?${params.toString()}`);
  };

  const categories = [
    { id: "used", label: "سيارات مستعملة", icon: Car },
    { id: "new", label: "سيارات جديدة", icon: Sparkles },
    { id: "suv", label: "دفع رباعي", icon: Compass },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* 1. Header (Matching Screen 3 of mobile UI) */}
      <div className="bg-[#0f3360] text-white rounded-2xl p-4 flex items-center justify-between shadow-md">
        <Link href="/" className="p-1.5 rounded-lg hover:bg-white/10 transition">
          <ArrowRight size={22} />
        </Link>
        <h1 className="text-lg font-black tracking-tight">البحث المتقدم</h1>
        <div className="p-1.5 text-amber-400">
          <SlidersHorizontal size={20} />
        </div>
      </div>

      {/* 2. Main Search Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-5 shadow-sm">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن سيارة..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0066cc] focus:outline-none transition"
          />
          <Search className="absolute right-4 top-3.5 text-slate-400" size={18} />
        </div>

        {/* Dropdowns row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Brand Dropdown */}
          <div className="relative">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-700 appearance-none focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            >
              {BRANDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={14} />
          </div>

          {/* State Dropdown */}
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-700 appearance-none focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            >
              {SUDAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={14} />
          </div>
        </div>

        {/* Price Range Section (Matching Screen 3) */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-black text-slate-800">
            نطاق السعر
          </label>

          {/* Badges */}
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200">
              من 10,000,000 ج.س
            </span>
            <span className="bg-blue-50 text-[#0066cc] px-3 py-1 rounded-lg border border-blue-200">
              إلى {priceMax.toLocaleString()} ج.س
            </span>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min="10000000"
            max="200000000"
            step="5000000"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Quick Type Selection Pills (Matching Screen 3) */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(isSelected ? "all" : cat.id)}
                className={`py-3 px-2 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1.5 active:scale-95 ${
                  isSelected
                    ? "bg-[#e6f0fa] border-[#0066cc] text-[#0066cc] font-extrabold shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-700 font-bold hover:bg-slate-100"
                }`}
              >
                <Icon size={20} />
                <span className="text-[11px]">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Big Blue Search Button */}
        <button
          onClick={handleSearchSubmit}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-black text-sm bg-[#004d99] hover:bg-[#003366] text-white shadow-lg shadow-blue-900/20 transition active:scale-95"
        >
          <Search size={18} />
          <span>تطبيق الفلتر وعرض النتائج</span>
        </button>
      </div>
    </div>
  );
}
