"use client";

import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle2, Star, MapPin, ArrowLeft, MessageSquare, Phone } from "lucide-react";

const TOP_SHOWROOMS = [
  {
    id: "sh_1",
    name: "معرض النخبة للسيارات",
    city: "الخرطوم",
    address: "شارع المطار - جوار برج الاتصالات",
    carsCount: 24,
    rating: 4.9,
    reviews: 130,
    phone: "+249912345678",
    whatsapp: "249912345678",
    image: "https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh_2",
    name: "معرض البرنس أوتو",
    city: "بورتسودان",
    address: "طريق الكورنيش - السوق العمومي",
    carsCount: 18,
    rating: 4.8,
    reviews: 95,
    phone: "+249912998877",
    whatsapp: "249912998877",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh_3",
    name: "وكالة النيل للسيارات",
    city: "عطبرة",
    address: "المنطقة الصناعية - طريق التحدي",
    carsCount: 12,
    rating: 4.7,
    reviews: 64,
    phone: "+249912554433",
    whatsapp: "249912554433",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  }
];

export default function VerifiedShowroomsSection() {
  return (
    <section className="w-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-sm space-y-5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
            <Building2 size={20} />
          </div>
          <div>
            <h2 className="font-black text-slate-900 text-base sm:text-lg">معارض ووكالات السيارات المعتمدة</h2>
            <p className="text-xs text-slate-500">معارض موثقة رسمياً تقدم أحدث الموديلات وضمانات فنية</p>
          </div>
        </div>

        <Link
          href="/showrooms"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#004d99] hover:text-blue-800 transition"
        >
          <span>عرض كافة المعارض</span>
          <ArrowLeft size={14} />
        </Link>
      </div>

      {/* Showrooms Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TOP_SHOWROOMS.map((showroom) => (
          <div
            key={showroom.id}
            className="group rounded-2xl border border-slate-200/80 hover:border-purple-300 p-4 transition-all duration-300 hover:shadow-md bg-slate-50/50 hover:bg-white flex flex-col justify-between gap-3 text-right"
          >
            <div>
              {/* Image & Verified Badge */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-200 mb-3">
                <Image
                  src={showroom.image}
                  alt={showroom.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-black bg-blue-600 text-white shadow flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>معرض موثق</span>
                </span>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/70 text-white backdrop-blur-sm">
                  {showroom.carsCount} سيارات معروضة
                </span>
              </div>

              {/* Title & Location */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-slate-900">{showroom.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                    <Star size={12} fill="currentColor" />
                    <span>{showroom.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} className="text-slate-400" />
                  <span>{showroom.city} • {showroom.address}</span>
                </div>
              </div>
            </div>

            {/* Actions: WhatsApp & Call */}
            <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2">
              <a
                href={`https://wa.me/${showroom.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-1"
              >
                <MessageSquare size={13} />
                <span>واتساب المعرض</span>
              </a>

              <Link
                href="/showrooms"
                className="py-1.5 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition"
              >
                السيارات
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
