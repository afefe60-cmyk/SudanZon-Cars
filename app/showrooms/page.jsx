"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, Phone, MessageCircle, ShieldCheck, Car, Award } from "lucide-react";

const SHOWROOMS = [
  {
    id: "showroom-1",
    name: "معرض النخبة للسيارات الحديثة",
    city: "بورتسودان",
    location: "طريق المطار - جوار بنك الخرطوم",
    carsCount: 38,
    phone: "249911111111",
    whatsapp: "249911111111",
    badge: "معرض بلاتيني معتمد",
    specialty: "تويوتا لاندكروزر، برادو، هايلوكس أصفار ومستعمل نظيف",
    verified: true,
  },
  {
    id: "showroom-2",
    name: "معرض الأمانة الدولي للسيارات",
    city: "بورتسودان",
    location: "سوق السيارات المركزي - ديم سلك",
    carsCount: 24,
    phone: "249922222222",
    whatsapp: "249922222222",
    badge: "توثيق رسمي",
    specialty: "هيونداي، كيا، ميتسوبيشي - استيراد مباشر من الإمارات والسعودية",
    verified: true,
  },
  {
    id: "showroom-3",
    name: "معرض النيلين للمركبات",
    city: "عطبرة",
    location: "شارع التحدي - مدخل المدينة",
    carsCount: 19,
    phone: "249933333333",
    whatsapp: "249933333333",
    badge: "معرض ذهبي",
    specialty: "سيارات صالون واقتصادية وبكاسي تجارية",
    verified: true,
  },
  {
    id: "showroom-4",
    name: "معرض الشرق لتجارة السيارات",
    city: "كسلا",
    location: "السوق الشعبي - قرب البنك الأهلي",
    carsCount: 15,
    phone: "249944444444",
    whatsapp: "249944444444",
    badge: "موثق",
    specialty: "بكاسي دبل كابين، لاندكروزر شاص، تريلات وشاحنات إيسوزو",
    verified: true,
  },
  {
    id: "showroom-5",
    name: "معرض العاصمة الدولي",
    city: "الخرطوم",
    location: "سوق السيارات المركزي - جبرة",
    carsCount: 42,
    phone: "249955555555",
    whatsapp: "249955555555",
    badge: "معرض بلاتيني",
    specialty: "مرسيدس، نيسان باترول، لاندكروزر، هيونداي توسان",
    verified: true,
  },
  {
    id: "showroom-6",
    name: "معرض الجزيرة للمركبات",
    city: "مدني",
    location: "طريق سنار - جوار المحطة الوسطى",
    carsCount: 14,
    phone: "249966666666",
    whatsapp: "249966666666",
    badge: "موثق",
    specialty: "سيارات عائلية، ميتسوبيشي لانسر، هيونداي كليك وآكسنت",
    verified: true,
  },
];

export default function ShowroomsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30">
            <Building2 size={14} />
            <span>معارض ووكالات سودان زون كارس</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">
            دليل معارض السيارات المعتمدة بالسودان
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            تصفح أكبر معارض وتجار السيارات في مختلف الولايات. سيارات مفحوصة، إمكانية المعاينة الميدانية، واستشارات فورية عبر الواتساب والاتصال.
          </p>
        </div>
      </div>

      {/* Showrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHOWROOMS.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Building2 size={24} />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                  <Award size={13} className="text-amber-600" />
                  {s.badge}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-1">
                {s.name}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                <MapPin size={13} className="text-sky-600 shrink-0" />
                <span>{s.city} • {s.location}</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 space-y-1.5 mb-4">
                <div className="flex items-center justify-between font-semibold">
                  <span>السيارات المعروضة:</span>
                  <span className="text-sky-700 font-bold">{s.carsCount} سيارة متوفرة</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  <strong className="text-slate-700">التخصص: </strong>{s.specialty}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${s.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص سيارات ${s.name} عبر منصة SudanZon Cars`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition"
              >
                <MessageCircle size={15} />
                <span>واتساب</span>
              </a>

              <a
                href={`tel:${s.phone}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white border border-sky-200 transition"
              >
                <Phone size={15} />
                <span>اتصال</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
