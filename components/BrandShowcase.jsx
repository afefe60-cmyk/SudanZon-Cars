"use client";

import Link from "next/link";

const BRANDS = [
  { name: "تويوتا", en: "Toyota", icon: "🚗", count: "140+ سيارة", popular: "لاندكروزر، برادو، كورولا، هايلوكس" },
  { name: "هيونداي", en: "Hyundai", icon: "🚙", count: "95+ سيارة", popular: "آكسنت، توسان، سنتافي، كليك" },
  { name: "كيا", en: "Kia", icon: "🏎️", count: "60+ سيارة", popular: "سبورتاج، سيراتو، بيغاس، ريو" },
  { name: "ميتسوبيشي", en: "Mitsubishi", icon: "🚐", count: "45+ سيارة", popular: "باجيرو، لانسر، L200" },
  { name: "نيسان", en: "Nissan", icon: "🛻", count: "38+ سيارة", popular: "باترول، صني، إكستريل، نافارا" },
  { name: "مرسيدس", en: "Mercedes", icon: "✨", count: "25+ سيارة", popular: "C-Class, E-Class, G-Wagon" },
  { name: "سوزوكي", en: "Suzuki", icon: "🚕", count: "30+ سيارة", popular: "سويفت، ديزاير، فيتارا" },
  { name: "إيسوزو", en: "Isuzu", icon: "🚚", count: "50+ سيارة", popular: "D-Max، دينا، شاحنات جامبو" },
];

export default function BrandShowcase({ activeBrand, onSelectBrand }) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <span>الماركات الأكثر طلباً بالسودان</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
              معتمدة
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            اختر الماركة لتصفية السيارات مباشرة بأفضل الأسعار المتاحة
          </p>
        </div>
        <button
          onClick={() => onSelectBrand?.("")}
          className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
            !activeBrand 
              ? "bg-slate-900 text-white" 
              : "text-slate-600 bg-slate-100 hover:bg-slate-200"
          }`}
        >
          عرض الكل
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {BRANDS.map((b) => {
          const isSelected = activeBrand === b.en || activeBrand === b.name;
          return (
            <button
              key={b.en}
              onClick={() => onSelectBrand?.(isSelected ? "" : b.en)}
              className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 active:scale-95 ${
                isSelected
                  ? "bg-sky-50 border-sky-500 shadow-md ring-2 ring-sky-400/30"
                  : "bg-white border-slate-200/80 hover:border-sky-300 hover:shadow-md"
              }`}
            >
              <span className="text-2xl mb-0.5">{b.icon}</span>
              <span className="text-sm font-bold text-slate-900">{b.name}</span>
              <span className="text-[10px] text-slate-400 font-medium">{b.en}</span>
              <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1">
                {b.count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
