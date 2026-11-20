"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { Phone, MessageCircle, MessageSquare, CheckCircle2, MapPin, ArrowRight, Star, Share2 } from "lucide-react";
import CarCard from "../../components/CarCard";

function SellerProfileContent() {
  const searchParams = useSearchParams();
  const sellerName = searchParams.get("name") || "معرض النخبة للسيارات";
  const sellerPhone = searchParams.get("phone") || "+249912345678";
  const sellerCity = searchParams.get("city") || "الخرطوم";

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSellerCars() {
      try {
        const res = await fetch("https://api.sudanzon.com/api/cars");
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data)) {
            const filtered = json.data.filter(
              c => c.sellerName === sellerName || c.sellerPhone === sellerPhone
            );
            setCars(filtered.length > 0 ? filtered : json.data.slice(0, 4));
            setLoading(false);
            return;
          }
        }
      } catch (e) {}

      // Fallback sample cars
      setCars([
        {
          id: "c1",
          title: "تويوتا لاندكروزر VXR 2023",
          brand: "TOYOTA",
          model: "LAND_CRUISER",
          year: 2023,
          priceSdg: 145000000,
          currency: "SDG",
          city: "الخرطوم",
          condition: "NEW",
          mileage: 12000,
          transmission: "أوتوماتيك",
          fuelType: "بنزين",
          description: "كاملة المواصفات فل أوبشن، فتحة سقف، جلد أصلي، دفع رباعي.",
          mainImageUrl: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=800&q=80",
          sellerName,
          sellerPhone,
          rating: 4.9,
          reviewsCount: 42,
          isFeatured: true,
          isVerified: true
        },
        {
          id: "c2",
          title: "تويوتا برادو TXL 2022",
          brand: "TOYOTA",
          model: "PRADO",
          year: 2022,
          priceSdg: 115000000,
          currency: "SDG",
          city: "الخرطوم",
          condition: "USED",
          mileage: 34000,
          transmission: "أوتوماتيك",
          fuelType: "بنزين",
          description: "نظيفة جداً صيانة توكيل، بصمة، شاشة، حساسات، كاميرا خلفية.",
          mainImageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
          sellerName,
          sellerPhone,
          rating: 4.8,
          reviewsCount: 19,
          isFeatured: false,
          isVerified: true
        }
      ]);
      setLoading(false);
    }

    fetchSellerCars();
  }, [sellerName, sellerPhone]);

  const cleanWhatsapp = sellerPhone.replace(/\+/g, "").replace(/\s/g, "");

  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            <ArrowRight size={20} />
          </Link>
          <span className="text-base font-black text-slate-900">ملف المعلن والمعرض</span>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: sellerName, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("تم نسخ رابط صفحة المعلن");
              }
            }}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Seller Info Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm text-center">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden bg-sky-100 border-4 border-white shadow-md flex items-center justify-center">
            <span className="text-2xl font-black text-[#0066cc]">
              {sellerName.slice(0, 2)}
            </span>
          </div>

          <h1 className="text-xl font-black text-slate-900 mt-3">{sellerName}</h1>

          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#16a34a] mt-1">
            <CheckCircle2 size={15} />
            <span>عضو موثق • معرض معتمد في سودان زون</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-3">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-amber-500" />
              {sellerCity}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star size={13} className="fill-amber-400" />
              4.9 (42 تقييم)
            </span>
            <span>•</span>
            <span>عضو منذ 2024</span>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto mt-6">
            {/* Call */}
            <a
              href={`tel:${sellerPhone}`}
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#0066cc] hover:bg-[#004d99] shadow-sm transition active:scale-95"
            >
              <Phone size={16} />
              <span>اتصال</span>
            </a>

            {/* In-app Message */}
            <Link
              href={`/messages?seller=${encodeURIComponent(sellerName)}`}
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 shadow-sm transition active:scale-95"
            >
              <MessageSquare size={16} />
              <span>محادثة</span>
            </Link>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(`السلام عليكم ${sellerName}، تواصلت معك عبر منصة SudanZon Cars.`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#16a34a] hover:bg-[#15803d] shadow-sm transition active:scale-95"
            >
              <MessageCircle size={16} />
              <span>واتساب</span>
            </a>
          </div>
        </div>

        {/* Seller Cars List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900">
              جميع إعلانات وسيارات المعلن ({cars.length})
            </h2>
            <span className="text-xs text-slate-500">محدثة ومفحوصة</span>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              جاري تحميل إعلانات المعلن...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SellerPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">جاري التحميل...</div>}>
      <SellerProfileContent />
    </Suspense>
  );
}
