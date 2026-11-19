"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Share2, 
  Heart, 
  Star, 
  Calendar, 
  Gauge, 
  Settings, 
  Cpu, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function CarDetailClient({ id }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
  ];

  const car = {
    title: "تويوتا لاندكروزر 2022",
    rating: "4.8",
    reviewsCount: 124,
    priceSdg: 125000000,
    priceUsd: 55000,
    year: "2022",
    mileage: "50,000 كم",
    transmission: "أوتوماتيك",
    engine: "V8 المحرك",
    city: "بورتسودان",
    description: "سيارة بحالة ممتازة، صيانة دورية بالوكالة، مواصفات خليجية عالية، خالية من الصدمات والرش، فتحة سقف، جلد طبيعي، حساسات وكاميرات 360 درجة، فحص ساري وجمارك مدفوعة بالكامل.",
    seller: {
      name: "معرض النخبة للسيارات",
      type: "عضو موثق",
      phone: "+249912345678",
      whatsapp: "249912345678",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
  };

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: car.title,
        text: `شاهد سيارة ${car.title} على منصة SudanZon Cars بسعر ${car.priceSdg.toLocaleString()} ج.س`,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      alert("تم نسخ رابط الإعلان بنجاح!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-28 sm:pb-16 bg-slate-50 min-h-screen">
      {/* 1. Top Image Carousel with Floating Actions */}
      <div className="relative aspect-[16/11] sm:aspect-[16/9] w-full bg-slate-900">
        <Image
          src={images[currentImageIndex]}
          alt={car.title}
          fill
          priority
          className="object-cover"
        />

        {/* Top Control Bar (Matching Screen 4) */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-slate-800 shadow-md transition active:scale-95"
            aria-label="رجوع"
          >
            <ArrowRight size={20} />
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-slate-800 shadow-md transition active:scale-95"
              aria-label="مشاركة"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition active:scale-95 ${
                isFavorite
                  ? "bg-rose-500 text-white"
                  : "bg-white/80 hover:bg-white text-slate-800"
              }`}
              aria-label="المفضلة"
            >
              <Heart size={18} className={isFavorite ? "fill-white" : ""} />
            </button>
          </div>
        </div>

        {/* Indicator Badge (e.g. 1/6) */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-black bg-black/60 text-white backdrop-blur-md">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* 2. Main Details Content */}
      <div className="p-4 sm:p-6 space-y-5 bg-white rounded-t-3xl -mt-4 relative z-10 shadow-sm">
        {/* Title & Rating */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {car.title}
            </h1>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span>{car.rating}</span>
              <span className="text-slate-400 text-[10px]">({car.reviewsCount} تقييم)</span>
            </div>
          </div>

          {/* Price (In Green ج.س matching Screen 4) */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-[#16a34a]">
              {car.priceSdg.toLocaleString()}
            </span>
            <span className="text-sm font-bold text-[#16a34a]">ج.س</span>
          </div>
        </div>

        {/* 3. Four Spec Badges (Matching Screen 4) */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Calendar size={18} className="text-[#0066cc]" />
            <span className="text-xs font-black text-slate-800">{car.year}</span>
            <span className="text-[10px] text-slate-400 font-medium">سنة الصنع</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Gauge size={18} className="text-[#0066cc]" />
            <span className="text-xs font-black text-slate-800">{car.mileage}</span>
            <span className="text-[10px] text-slate-400 font-medium">كم</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Settings size={18} className="text-[#0066cc]" />
            <span className="text-xs font-black text-slate-800">{car.transmission}</span>
            <span className="text-[10px] text-slate-400 font-medium">الجير</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Cpu size={18} className="text-[#0066cc]" />
            <span className="text-xs font-black text-slate-800">{car.engine}</span>
            <span className="text-[10px] text-slate-400 font-medium">المحرك</span>
          </div>
        </div>

        {/* 4. Description */}
        <div className="space-y-1.5 pt-2">
          <h2 className="text-sm font-black text-slate-900">الوصف</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            {car.description}
          </p>
        </div>

        {/* 5. Seller Card (Matching Screen 4) */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-sky-200 border-2 border-white shadow">
              <Image src={car.seller.avatar} alt={car.seller.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900">{car.seller.name}</h3>
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#16a34a] mt-0.5">
                <CheckCircle2 size={13} className="text-[#16a34a]" />
                <span>{car.seller.type}</span>
              </div>
            </div>
          </div>

          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
            <MapPin size={13} className="text-amber-500" />
            <span>{car.city}</span>
          </span>
        </div>
      </div>

      {/* 6. Fixed Bottom Action Bar (Matching Screen 4: Call blue button & WhatsApp green button) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          {/* WhatsApp Button (Green) */}
          <a
            href={`https://wa.me/${car.seller.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسار عن سيارة ${car.title} عبر منصة SudanZon Cars`)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-black text-sm text-white bg-[#16a34a] hover:bg-[#15803d] shadow-lg shadow-emerald-600/25 transition active:scale-95"
          >
            <MessageCircle size={18} />
            <span>واتساب</span>
          </a>

          {/* Call Button (Blue) */}
          <a
            href={`tel:${car.seller.phone}`}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-black text-sm text-white bg-[#0066cc] hover:bg-[#004d99] shadow-lg shadow-blue-600/25 transition active:scale-95"
          >
            <Phone size={18} />
            <span>اتصال</span>
          </a>
        </div>
      </div>
    </div>
  );
}
