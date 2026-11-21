"use client";

import { useState } from "react";
import Image from "next/image";

const POPULAR_BRANDS = [
  { id: "all", name: "كل الماركات", count: "120+", icon: "🚗" },
  { id: "toyota", name: "تويوتا", enName: "Toyota", count: "48 سيارة", icon: "⭐" },
  { id: "hyundai", name: "هيونداي", enName: "Hyundai", count: "32 سيارة", icon: "⚡" },
  { id: "nissan", name: "نيسان", enName: "Nissan", count: "19 سيارة", icon: "✨" },
  { id: "kia", name: "كيا", enName: "Kia", count: "14 سيارة", icon: "🔥" },
  { id: "mitsubishi", name: "ميتسوبيشي", enName: "Mitsubishi", count: "11 سيارة", icon: "💎" },
  { id: "mercedes", name: "مرسيدس", enName: "Mercedes", count: "8 سيارات", icon: "👑" },
  { id: "suzuki", name: "سوزوكي", enName: "Suzuki", count: "12 سيارة", icon: "🚙" },
];

export default function BrandStrip({ activeBrand = "all", onSelectBrand }) {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-5 bg-[#004d99] rounded-full inline-block"></span>
          <h3 className="font-black text-slate-900 text-sm sm:text-base">تصفح حسب الماركات الأكثر طلباً بالسودان</h3>
        </div>
        <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">اختر الماركة لتصفية السيارات مباشرة</span>
      </div>

      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {POPULAR_BRANDS.map((brand) => {
          const isSelected = activeBrand === brand.id || (activeBrand === "" && brand.id === "all");
          return (
            <button
              key={brand.id}
              onClick={() => onSelectBrand?.(brand.id === "all" ? "" : brand.name)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                isSelected
                  ? "bg-[#004d99] text-white border-[#004d99] shadow-md shadow-blue-900/10 scale-[1.02]"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              <span className="text-base">{brand.icon}</span>
              <div className="text-right">
                <div className={`font-black ${isSelected ? "text-white" : "text-slate-900"}`}>{brand.name}</div>
                <div className={`text-[10px] ${isSelected ? "text-amber-300" : "text-slate-400"}`}>{brand.count}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
