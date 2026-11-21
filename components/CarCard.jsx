"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  MapPin, 
  Gauge, 
  Fuel, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Star, 
  Camera, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { readFavorites, toggleFavorite, FAVORITES_CHANGED_EVENT } from "../lib/favorites";

export default function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!car?.id) {
      setIsFavorite(false);
      return;
    }
    const syncFavorite = () => {
      setIsFavorite(readFavorites().some((favorite) => favorite.id === car.id));
    };
    syncFavorite();
    window.addEventListener(FAVORITES_CHANGED_EVENT, syncFavorite);
    window.addEventListener("storage", syncFavorite);
    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, syncFavorite);
      window.removeEventListener("storage", syncFavorite);
    };
  }, [car?.id]);

  if (!car) return null;

  const {
    id = "1",
    title = "تويوتا لاندكروزر 2022",
    brand = "تويوتا",
    model = "لاندكروزر",
    year = 2022,
    priceUsd = 45000,
    priceSdg = 125000000,
    mileage = 45000,
    transmission = "أوتوماتيك",
    engine = "4 سلندر",
    drivetrain = "4x4",
    fuelType = "بنزين",
    city = "الخرطوم",
    featured = true,
    images = [],
    sellerName = "معرض النخبة للسيارات",
    sellerPhone = "+249912345678",
    sellerWhatsapp = "249912345678",
    isShowroom = false,
    condition = "مستعمل بحالة ممتازة",
    customsStatus = "مجمرك بالكامل"
  } = car;

  const displayImage = images && images.length > 0 
    ? images[0] 
    : "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=85";

  const imagesCount = images ? images.length : 1;

  // Format currency
  const formattedSdg = Number(priceSdg || 0).toLocaleString("en-US") + " ج.س";
  const formattedUsd = priceUsd ? `≈ $${Number(priceUsd).toLocaleString("en-US")}` : "";

  // WhatsApp prefilled message
  const whatsappMsg = encodeURIComponent(
    `السلام عليكم، استفسر بخصوص إعلان ${title} المعروض في سودان زون للسيارات بسعر ${formattedSdg}. هل السيارة ما زالت متوفرة؟`
  );
  const cleanWhatsapp = sellerWhatsapp || (sellerPhone ? sellerPhone.replace(/\+/g, "") : "249912345678");

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id,
      title,
      priceSdg,
      priceUsd,
      city,
      image: displayImage,
      year
    });
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#004d99]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* 1. Thumbnail Container */}
      <Link href={`/cars/${id}`} className="block relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        <Image
          src={displayImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            {featured && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-amber-400 text-slate-950 shadow flex items-center gap-1">
                <Star size={11} fill="currentColor" />
                <span>مميز VIP</span>
              </span>
            )}
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/75 text-white backdrop-blur-sm shadow">
              {customsStatus}
            </span>
          </div>

          {/* Favorite Toggle Button */}
          <button
            type="button"
            onClick={handleFavoriteClick}
            className={`pointer-events-auto w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md ${
              isFavorite
                ? "bg-rose-500 text-white"
                : "bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500"
            }`}
            title="حفظ في المفضلة"
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Bottom Image Info Badge (Photos Count & Condition) */}
        <div className="absolute bottom-2.5 right-2.5 left-2.5 flex items-center justify-between text-[10px] text-white pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-sm font-semibold flex items-center gap-1">
            <Camera size={11} />
            <span>{imagesCount} صور</span>
          </span>

          <span className="px-2 py-0.5 rounded-md bg-emerald-600/90 backdrop-blur-sm font-bold">
            {condition}
          </span>
        </div>
      </Link>

      {/* 2. Content Body */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3 text-right">
        
        {/* Title & Specs */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <Link href={`/cars/${id}`} className="hover:text-[#004d99] transition">
              <h3 className="font-black text-sm sm:text-base text-slate-900 line-clamp-1">
                {title}
              </h3>
            </Link>
          </div>

          {/* City & Seller info */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-slate-400" />
              <span>{city}</span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
              <span>{sellerName}</span>
              {isShowroom ? (
                <span className="px-1 py-0.2 rounded bg-purple-100 text-purple-700 text-[9px]">معرض</span>
              ) : (
                <CheckCircle2 size={12} className="text-blue-600" />
              )}
            </div>
          </div>

          {/* Key Specs Pills (Transmission, Drivetrain/Engine, Fuel) */}
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-600 pt-1 border-t border-slate-100">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
              سنة {year}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
              {transmission}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
              {drivetrain || engine}
            </span>
            {mileage > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
                {Number(mileage).toLocaleString()} كم
              </span>
            )}
          </div>
        </div>

        {/* Price & Direct Contact Actions */}
        <div className="pt-2 border-t border-slate-100 space-y-2.5">
          
          {/* Price SDG & USD */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-base sm:text-lg font-black text-emerald-700 tracking-tight">
                {formattedSdg}
              </span>
            </div>
            {formattedUsd && (
              <span className="text-[11px] font-bold text-slate-400">
                {formattedUsd}
              </span>
            )}
          </div>

          {/* Action Buttons: WhatsApp + Call + View Details */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm hover:shadow"
              title="مراسلة فورية عبر الواتساب"
            >
              <MessageSquare size={14} />
              <span>واتساب</span>
            </a>

            <a
              href={`tel:${sellerPhone}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#004d99] hover:bg-[#003366] text-white font-bold text-xs transition shadow-sm hover:shadow"
              title="اتصال هاتفي مباشر"
            >
              <Phone size={14} />
              <span>اتصال</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
