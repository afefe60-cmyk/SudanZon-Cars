"use client";

import Link from "next/link";
import { 
  LayoutGrid, 
  Crown, 
  Car, 
  Truck, 
  Bus, 
  Bike,
  Sparkles,
  ShoppingBag,
  Building2,
  Users2,
  BadgePercent,
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

// Mobile quick 6 service grid (Matching Screen 2 of image 1)
export const MOBILE_SERVICES = [
  { id: "used", label: "سيارات مستعملة", icon: Car, href: "/search?type=used", color: "text-[#0066cc] bg-blue-50" },
  { id: "new", label: "سيارات جديدة", icon: Sparkles, href: "/search?type=new", color: "text-amber-600 bg-amber-50" },
  { id: "parts", label: "قطع غيار وإكسسوارات", icon: ShoppingBag, href: "/spare-parts", color: "text-emerald-600 bg-emerald-50" },
  { id: "showrooms", label: "معارض السيارات", icon: Building2, href: "/showrooms", color: "text-indigo-600 bg-indigo-50" },
  { id: "dealers", label: "الموردين والتجار", icon: Users2, href: "/showrooms", color: "text-sky-600 bg-sky-50" },
  { id: "offers", label: "عروض خاصة", icon: BadgePercent, href: "/search?filter=offers", color: "text-rose-600 bg-rose-50" },
];

export default function CategoryStrip({ activeType = "all", onSelectType }) {
  return (
    <div className="space-y-6">
      {/* 1. Mobile 6-Grid Services (Visible on Mobile only - Matching Screen 2) */}
      <div className="lg:hidden">
        <div className="grid grid-cols-3 gap-2.5">
          {MOBILE_SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-2xl border border-slate-200/90 p-3 flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition-transform"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-1.5 ${item.color}`}>
                  <Icon size={22} />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Desktop Body-Type Strip (Visible on Desktop - Matching image 2) */}
      <div className="home-category-strip hidden lg:block">
        <div className="grid grid-cols-8 gap-3">
          {DESKTOP_BODY_TYPES.map((cat) => {
            const Icon = cat.icon;
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
