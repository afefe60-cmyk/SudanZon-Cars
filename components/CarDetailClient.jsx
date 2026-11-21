"use client";

import { useState, useEffect } from "react";
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
  MessageSquare, 
  MapPin, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { API_BASE_URL } from "../lib/api";

const CARS_DATABASE = {
  "1": {
    id: "1",
    title: "نيسان سنترا 2019",
    rating: "4.7",
    reviewsCount: 88,
    priceSdg: 52000000,
    priceUsd: 18500,
    year: "2019",
    mileage: "65,000 كم",
    transmission: "أوتوماتيك",
    engine: "4 سلندر 1.6L",
    city: "عطبرة",
    description: "سيارة نيسان سنترا بحالة ممتازة، استخدام شخصي نظيف جداً، تكييف ممتاز، تحكم مقود، شاشة وكاميرا خلفية، فحص ساري وجمارك كاملة ترخيص ولاية نهر النيل.",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "أحمد الفاتح",
      type: "معلن موثق",
      phone: "+249123456789",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    }
  },
  "2": {
    id: "2",
    title: "هيونداي توسان 2021",
    rating: "4.8",
    reviewsCount: 110,
    priceSdg: 75000000,
    priceUsd: 26800,
    year: "2021",
    mileage: "38,000 كم",
    transmission: "أوتوماتيك",
    engine: "2.0L 4 سلندر",
    city: "بورتسودان",
    description: "هيونداي توسان وارد وكالة خالية تماماً من الصدمات والدهان، فل كامل، بانوراما، بصمة تشغيل، شاشة كبيرة، نظام دفع 4x2 اقتصادي وقوي، جاهزة للمعاينة الفورية.",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "معرض البرنس للسيارات",
      type: "معرض معتمد",
      phone: "+249912998877",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=200&q=80",
    }
  },
  "3": {
    id: "3",
    title: "تويوتا كامري 2020",
    rating: "4.9",
    reviewsCount: 145,
    priceSdg: 85000000,
    priceUsd: 30350,
    year: "2020",
    mileage: "42,000 كم",
    transmission: "أوتوماتيك",
    engine: "2.5L 4 سلندر",
    city: "الخرطوم",
    description: "تويوتا كامري وارد الخليج، صيانة دورية، فرش جلد بيج نظيف جداً، فتحة سقف، جنوط أصلية، حساسات أمامية وخلفية، مجمركة بالكامل وجاهزة لنقل الملكية فوراً.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "محمد عثمان",
      type: "معلن موثق",
      phone: "+249922234567",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    }
  },
  "4": {
    id: "4",
    title: "تويوتا برادو TXL 2021",
    rating: "4.9",
    reviewsCount: 160,
    priceSdg: 125000000,
    priceUsd: 44600,
    year: "2021",
    mileage: "50,000 كم",
    transmission: "أوتوماتيك",
    engine: "V6 المحرك 4.0L",
    city: "بورتسودان",
    description: "تويوتا برادو TXL فل أوبشن، فتحة سقف، ثلاجة، بصمة، شاشة، دفع رباعي 4x4، صيانة منتظمة بالوكالة، بحالة الوكالة خالية من الصدمات تماماً.",
    images: [
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "معرض النخبة للسيارات",
      type: "معرض بلاتيني معتمد",
      phone: "+249912345678",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=200&q=80",
    }
  },
  "5": {
    id: "5",
    title: "كيا سبورتاج 2023 فل أوبشن",
    rating: "4.9",
    reviewsCount: 65,
    priceSdg: 110000000,
    priceUsd: 39300,
    year: "2023",
    mileage: "5,000 كم",
    transmission: "أوتوماتيك",
    engine: "4 سلندر دفع رباعي",
    city: "الخرطوم",
    description: "كيا سبورتاج زيرو بحالة الوكالة، عداد 5 آلاف كم فقط، رادار، كاميرات 360 درجة، أوتوهولد، فتحة بانوراما كاملة، بطاقة جمركية جاهزة للترخيص الأول باسم المشتري.",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "أوتوزون السودان",
      type: "وكالة سيارات معتمدة",
      phone: "+249912001122",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    }
  },
  "6": {
    id: "6",
    title: "ميتسوبيشي L200 دبل كابينة 2022",
    rating: "4.8",
    reviewsCount: 74,
    priceSdg: 95000000,
    priceUsd: 33900,
    year: "2022",
    mileage: "28,000 كم",
    transmission: "عادي / مانيوال",
    engine: "ديزل تيربو 4x4",
    city: "عطبرة",
    description: "ميتسوبيشي L200 دبل كابين دبل، ديزل تيربو قوي واقتصادي، دفع رباعي 4WD، حمولة وشياكة، مناسبة للشركات والاستخدام الشاق، مجمركة بالكامل وبحالة ممتازة.",
    images: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
    ],
    seller: {
      name: "وكالة النيل للسيارات",
      type: "معرض ذهبي موثق",
      phone: "+249912554433",
      whatsapp: "24907620105",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    }
  }
};

export default function CarDetailClient({ id }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [car, setCar] = useState(CARS_DATABASE[id] || CARS_DATABASE["1"]);

  useEffect(() => {
    // Attempt live fetch from backend if dynamic
    async function fetchCarDetails() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cars/${id}`);
        if (!res.ok) return;
        const json = await res.json();
        if (json.success && json.data) {
          const d = json.data;
          let parsedImages = [];
          if (Array.isArray(d.images)) parsedImages = d.images;
          else if (typeof d.images === "string") {
            try { parsedImages = JSON.parse(d.images); } catch(e) { parsedImages = [d.mainImage]; }
          } else {
            parsedImages = [d.mainImage];
          }

          setCar({
            id: d.id,
            title: d.title,
            rating: d.rating ? String(d.rating) : "4.8",
            reviewsCount: d.reviewsCount || 45,
            priceSdg: d.priceSdg,
            priceUsd: d.priceUsd || Math.round(d.priceSdg / 2800),
            year: String(d.year || "2022"),
            mileage: d.mileage ? `${Number(d.mileage).toLocaleString()} كم` : "ممشى قليل",
            transmission: d.transmission || "أوتوماتيك",
            engine: d.engineSize || "4 سلندر",
            city: d.city || "الخرطوم",
            description: d.description || "سيارة بحالة ممتازة معروضة في سوق سودان زون للسيارات.",
            images: parsedImages.length > 0 ? parsedImages : [d.mainImage],
            seller: {
              name: d.sellerName || "معلن موثق",
              type: d.isShowroom ? "معرض معتمد" : "عضو موثق",
              phone: d.sellerPhone || "+249912000000",
              whatsapp: d.sellerWhatsapp || "24907620105",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            }
          });
        }
      } catch (e) {
        // Fallback to local CARS_DATABASE
      }
    }

    if (CARS_DATABASE[id]) {
      setCar(CARS_DATABASE[id]);
    }
    fetchCarDetails();
  }, [id]);

  const carImages = car.images && car.images.length > 0 
    ? car.images 
    : ["https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80"];

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

  const formattedSdg = Number(car.priceSdg || 0).toLocaleString("en-US") + " ج.س";

  return (
    <div className="max-w-3xl mx-auto pb-28 sm:pb-16 bg-slate-50 min-h-screen text-right" dir="rtl">
      
      {/* 1. Top Image Carousel with Floating Actions */}
      <div className="relative aspect-[16/11] sm:aspect-[16/9] w-full bg-slate-900 overflow-hidden">
        <Image
          src={carImages[currentImageIndex] || carImages[0]}
          alt={car.title}
          fill
          priority
          className="object-cover"
        />

        {/* Top Control Bar */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <Link
            href="/cars"
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
              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Image Index Indicator */}
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold" dir="ltr">
          {currentImageIndex + 1} / {carImages.length}
        </div>

        {/* Prev / Next Arrows */}
        {carImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex((idx) => (idx + 1) % carImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentImageIndex((idx) => (idx - 1 + carImages.length) % carImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* 2. Main Details Content */}
      <div className="p-4 sm:p-6 space-y-5 bg-white rounded-t-3xl -mt-5 relative z-20 shadow-sm border-t border-slate-200/80">
        
        {/* Title, Rating & Verification */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {car.title}
            </h1>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black shrink-0 flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>إعلان موثق</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="font-bold text-slate-800">{car.rating}</span>
              <span>({car.reviewsCount} تقييم للمعلن)</span>
            </div>

            <div className="flex items-center gap-1 text-slate-600 font-bold">
              <MapPin size={13} className="text-[#004d99]" />
              <span>{car.city}</span>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-400 font-bold mb-0.5">السعر المطلوب بالجنيه:</div>
            <div className="text-2xl font-black text-emerald-700 tracking-tight">
              {formattedSdg}
            </div>
          </div>

          {car.priceUsd && (
            <div className="text-left">
              <div className="text-[11px] text-slate-400 font-bold mb-0.5">المعادل بالدولار:</div>
              <div className="text-base font-black text-slate-600">
                ≈ ${Number(car.priceUsd).toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* 3. Specs Grid (4 boxes) */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Calendar size={18} className="text-[#004d99]" />
            <span className="text-xs font-black text-slate-800">{car.year}</span>
            <span className="text-[10px] text-slate-400 font-medium">الموديل</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Gauge size={18} className="text-[#004d99]" />
            <span className="text-xs font-black text-slate-800">{car.mileage}</span>
            <span className="text-[10px] text-slate-400 font-medium">الممشى</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Settings size={18} className="text-[#004d99]" />
            <span className="text-xs font-black text-slate-800">{car.transmission}</span>
            <span className="text-[10px] text-slate-400 font-medium">ناقل الحركة</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
            <Cpu size={18} className="text-[#004d99]" />
            <span className="text-xs font-black text-slate-800">{car.engine}</span>
            <span className="text-[10px] text-slate-400 font-medium">المحرك</span>
          </div>
        </div>

        {/* 4. Description */}
        <div className="space-y-2 pt-2">
          <h2 className="text-sm font-black text-slate-900">تفاصيل ومواصفات الإعلان</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
            {car.description}
          </p>
        </div>

        {/* 5. Seller Card */}
        <Link 
          href={`/seller?name=${encodeURIComponent(car.seller.name)}&phone=${encodeURIComponent(car.seller.phone)}&city=${encodeURIComponent(car.city)}`}
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between transition group"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-sky-200 border-2 border-white shadow">
              <Image src={car.seller.avatar} alt={car.seller.name} fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-[#004d99] transition">{car.seller.name}</h3>
                <span className="text-[10px] text-[#004d99] font-bold">‹ ملف المعلن</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 mt-0.5">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>{car.seller.type} • انقر لمشاهدة جميع إعلاناته</span>
              </div>
            </div>
          </div>

          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <MapPin size={13} className="text-[#004d99]" />
            <span>{car.city}</span>
          </span>
        </Link>
      </div>

      {/* 6. Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
          {/* Call Button */}
          <a
            href={`tel:${car.seller.phone}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-black text-xs sm:text-sm text-white bg-[#004d99] hover:bg-[#003366] shadow transition active:scale-95"
          >
            <Phone size={16} />
            <span>اتصال</span>
          </a>

          {/* In-App Chat */}
          <Link
            href={`/messages?seller=${encodeURIComponent(car.seller.name)}&car=${encodeURIComponent(car.title)}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-black text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 shadow-sm transition active:scale-95"
          >
            <MessageSquare size={16} />
            <span>محادثة</span>
          </Link>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${car.seller.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسار عن سيارة (${car.title}) المعروضة على SudanZon Cars بسعر ${formattedSdg}`)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-black text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow transition active:scale-95"
          >
            <MessageCircle size={16} />
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}
