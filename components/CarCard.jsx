"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Settings, 
  ArrowLeft,
  Sparkles
} from "lucide-react";

export default function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!car) return null;

  const {
    id = "1",
    title = "تويوتا برادو 2021",
    year = 2021,
    priceUsd = 45000,
    priceSdg = 115000000,
    transmission = "أوتوماتيك",
    drivetrain = "4x4",
    city = "بورتسودان",
    featured = true,
    images = [],
  } = car;

  const displayImage = images && images.length > 0 
    ? images[0] 
    : "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80";
  const isHomepageReferencePhoto = displayImage.startsWith("/car-");

  return (
    <div className="home-car-card group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0066cc]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
      {/* 1. Thumbnail + Badges */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        <Image
          src={displayImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className={`absolute top-2.5 inset-x-2.5 flex items-center ${isHomepageReferencePhoto ? "justify-end" : "justify-between"} pointer-events-none`}>
          {!isHomepageReferencePhoto && (featured ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-[#16a34a] text-white shadow-sm pointer-events-auto">
              مميز
            </span>
          ) : <div></div>)}

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className={`pointer-events-auto p-1.5 rounded-full backdrop-blur-md transition-all active:scale-90 ${
              isFavorite
                ? "bg-rose-500 text-white shadow-md"
                : "bg-black/30 text-white hover:bg-black/50"
            }`}
            aria-label="إضافة للمفضلة"
          >
            <Heart size={15} className={isFavorite ? "fill-white" : ""} />
          </button>
        </div>
      </div>

      {/* 2. Body Details (Matching the exact card in the screenshot) */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title */}
          <Link href={`/cars/${id}`} className="hover:text-[#0066cc] transition block text-right">
            <h3 className="font-black text-slate-900 text-base line-clamp-1">
              {title}
            </h3>
          </Link>

          {/* Specs icons row: e.g. ⚙️ أوتوماتيك • ⚙️ 4x4 */}
          <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500 font-bold">
            <div className="flex items-center gap-1">
              <Settings size={14} className="text-slate-400" />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <Settings size={14} className="text-slate-400" />
              <span>{drivetrain}</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: تفاصيل الإعلان (Right) & Price (Left in RTL) */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Action Link Button (Right in RTL) */}
          <Link
            href={`/cars/${id}`}
            className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-xs font-black bg-[#0066cc] text-white hover:bg-[#004d99] shadow-sm transition active:scale-95"
          >
            <span>تفاصيل الإعلان</span>
            <ArrowLeft size={13} />
          </Link>

          {/* Price in SDG (Bold Green matching design) */}
          <span className="text-base sm:text-lg font-black text-[#16a34a] tracking-tight">
            {priceSdg ? priceSdg.toLocaleString() : (priceUsd ? (priceUsd * 2600).toLocaleString() : "")} ج.س
          </span>
        </div>
      </div>
    </div>
  );
}
