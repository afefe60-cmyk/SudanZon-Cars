"use client";

import { 
  LayoutGrid, 
  Crown, 
  Car, 
  Truck, 
  Bus, 
  Bike,
  Compass
} from "lucide-react";

// Desktop body-type categories (Matching image 2)
export const DESKTOP_BODY_TYPES = [
  { id: "all", label: "جميع الأقسام", icon: LayoutGrid, image: "/category-all.jpg", count: "500+" },
  { id: "luxury", label: "سيارات فاخرة", icon: Crown, image: "/category-luxury.jpg", count: "45+" },
  { id: "hatchback", label: "سيارات هاتشباك", icon: Car, image: "/category-hatchback.jpg", count: "60+" },
  { id: "sedan", label: "سيارات سيدان", icon: Car, image: "/category-sedan.jpg", count: "180+" },
  { id: "suv", label: "دفع رباعي", icon: Compass, image: "/category-suv.jpg", count: "140+" },
  { id: "truck", label: "شاحنات", icon: Truck, image: "/category-truck.jpg", count: "55+" },
  { id: "bus", label: "باصات", icon: Bus, image: "/category-bus.jpg", count: "30+" },
  { id: "moto", label: "دراجات نارية", icon: Bike, image: "/category-motorcycle.jpg", count: "25+" },
];

export default function CategoryStrip({ activeType = "all", onSelectType }) {
  return (
    <div>
      <nav className="home-mobile-categories lg:hidden" aria-label="فئات السيارات">
        {DESKTOP_BODY_TYPES.map((cat) => {
          const Icon = cat.icon;
          const selected = activeType === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectType?.(cat.id)}
              aria-pressed={selected}
              className={`home-mobile-category ${selected ? "is-selected" : ""}`}
            >
              <span className="home-mobile-category-image">
                <img src={cat.image} alt="" aria-hidden="true" />
              </span>
              <span>{cat.id === "all" ? "الكل" : cat.label.replace("سيارات ", "")}</span>
            </button>
          );
        })}
      </nav>

      {/* 2. Desktop Body-Type Strip (Visible on Desktop - Matching image 2) */}
      <div className="home-category-strip hidden lg:block">
        <div className="grid grid-cols-8 gap-3">
          {DESKTOP_BODY_TYPES.map((cat) => {
            const isSelected = activeType === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectType?.(cat.id)}
                className={`py-3.5 px-2 rounded-2xl border transition-all flex flex-col items-center justify-center gap-2 group ${
                  isSelected
                    ? "bg-[#e6f0fa] border-[#0066cc] text-[#0066cc] shadow-sm font-extrabold"
                    : "bg-white border-slate-200 hover:border-[#0066cc]/40 text-slate-700 font-bold hover:shadow-sm"
                }`}
              >
                <div className={`home-category-image ${isSelected ? "is-selected" : ""}`}>
                  <img src={cat.image} alt="" />
                </div>
                <span className="text-xs text-center leading-none">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
