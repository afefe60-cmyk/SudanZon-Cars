"use client";

import { useState } from "react";
import { Filter, RotateCcw, Search, ChevronDown, Check } from "lucide-react";

export const CITIES = [
  "جميع الولايات والمدن",
  "بورتسودان",
  "الخرطوم",
  "أم درمان",
  "بحري",
  "عطبرة",
  "شندي",
  "مدني",
  "كسلا",
  "القضارف",
  "دنقلا",
  "مروي",
  "الأبيض",
  "كوستي"
];

export const FUEL_TYPES = [
  "الكل",
  "بنزين",
  "جازولين (ديزل)",
  "هايبرد (هجين)",
  "كهرباء كاملة"
];

export const TRANSMISSIONS = [
  "الكل",
  "أوتوماتيك",
  "عادي (مانيوال)"
];

export const CUSTOMS_STATUSES = [
  "الكل",
  "مجمرك بالكامل",
  "وارد حديث / غير مجمرك",
  "شهادة وارد / معفي",
  "مرخص ساري"
];

export default function CarFilters({ filters, setFilters, onReset }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div id="filters" className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm">
      {/* Top Filter Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Filter size={18} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">البحث والتصفية الدقيقة</h3>
            <span className="text-[11px] text-slate-500">حدد مواصفات السيارة المطلوبة بالسوق السوداني</span>
          </div>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 px-2.5 py-1.5 rounded-lg hover:bg-rose-50 transition"
        >
          <RotateCcw size={13} />
          إعادة ضبط
        </button>
      </div>

      {/* Main Filter Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search keyword */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            كلمة البحث
          </label>
          <div className="relative">
            <input
              type="text"
              value={filters.query || ""}
              onChange={(e) => handleChange("query", e.target.value)}
              placeholder="مثال: لاندكروزر V8، آكسنت دبدوب..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pr-9 pl-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 transition"
            />
            <Search className="absolute right-2.5 top-2.5 text-slate-400" size={15} />
          </div>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            المدينة / الولاية
          </label>
          <select
            value={filters.city || "جميع الولايات والمدن"}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 transition text-slate-800"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            السعر الأقصى (ج.س)
          </label>
          <select
            value={filters.maxPriceSdg || ""}
            onChange={(e) => handleChange("maxPriceSdg", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 transition text-slate-800"
          >
            <option value="">أي سعر</option>
            <option value="10000000">أقل من 10 مليون ج.س</option>
            <option value="20000000">أقل من 20 مليون ج.س</option>
            <option value="35000000">أقل من 35 مليون ج.س</option>
            <option value="50000000">أقل من 50 مليون ج.س</option>
            <option value="100000000">أقل من 100 مليون ج.س</option>
          </select>
        </div>

        {/* Customs Status */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            حالة الجمارك والترخيص
          </label>
          <select
            value={filters.customsStatus || "الكل"}
            onChange={(e) => handleChange("customsStatus", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 transition text-slate-800"
          >
            {CUSTOMS_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Collapse Options */}
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 mt-3 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              سنة الصنع (من)
            </label>
            <input
              type="number"
              value={filters.minYear || ""}
              onChange={(e) => handleChange("minYear", e.target.value)}
              placeholder="مثال: 2015"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              ناقل الحركة (الجير)
            </label>
            <select
              value={filters.transmission || "الكل"}
              onChange={(e) => handleChange("transmission", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 text-slate-800"
            >
              {TRANSMISSIONS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              نوع الوقود
            </label>
            <select
              value={filters.fuelType || "الكل"}
              onChange={(e) => handleChange("fuelType", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 text-slate-800"
            >
              {FUEL_TYPES.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Toggle advanced button */}
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-slate-500 hover:text-sky-600 font-bold flex items-center gap-1 py-1"
        >
          <span>{isExpanded ? "إخفاء الفلاتر الإضافية" : "مزيد من الفلاتر (سنة الصنع، الجير، الوقود)"}</span>
          <ChevronDown size={14} className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}
