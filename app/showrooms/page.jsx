"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Car, 
  Award, 
  Star, 
  Search, 
  PlusCircle,
  ExternalLink
} from "lucide-react";

const SHOWROOMS_DATA = [
  {
    id: "showroom-1",
    name: "معرض النخبة للسيارات الحديثة",
    city: "بورتسودان",
    location: "طريق المطار - جوار بنك الخرطوم",
    carsCount: 38,
    phone: "+249912345678",
    whatsapp: "249912345678",
    rating: 4.9,
    badge: "معرض بلاتيني معتمد",
    specialty: "تويوتا لاندكروزر، برادو، هايلوكس أصفار ومستعمل نظيف",
    verified: true,
    image: "https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "showroom-2",
    name: "معرض الأمانة الدولي للسيارات",
    city: "بورتسودان",
    location: "سوق السيارات المركزي - ديم سلك",
    carsCount: 24,
    phone: "+249912998877",
    whatsapp: "249912998877",
    rating: 4.8,
    badge: "توثيق رسمي",
    specialty: "هيونداي، كيا، ميتسوبيشي - استيراد مباشر من الإمارات والسعودية",
    verified: true,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "showroom-3",
    name: "معرض النيلين للمركبات",
    city: "عطبرة",
    location: "شارع التحدي - مدخل المدينة",
    carsCount: 19,
    phone: "+249912554433",
    whatsapp: "249912554433",
    rating: 4.7,
    badge: "معرض ذهبي",
    specialty: "سيارات صالون واقتصادية وبكاسي تجارية",
    verified: true,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "showroom-4",
    name: "معرض العاصمة الدولي",
    city: "الخرطوم",
    location: "شارع الستين - تقاطع أوماك",
    carsCount: 42,
    phone: "+249912001122",
    whatsapp: "249912001122",
    rating: 4.9,
    badge: "معرض بلاتيني",
    specialty: "مرسيدس، نيسان باترول، لاندكروزر، هيونداي توسان",
    verified: true,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "showroom-5",
    name: "معرض الشرق لتجارة السيارات",
    city: "كسلا",
    location: "السوق الشعبي - قرب البنك الأهلي",
    carsCount: 15,
    phone: "+249912778899",
    whatsapp: "249912778899",
    rating: 4.6,
    badge: "موثق رسمي",
    specialty: "بكاسي دبل كابين، لاندكروزر شاص، تريلات وشاحنات إيسوزو",
    verified: true,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "showroom-6",
    name: "معرض الجزيرة للمركبات",
    city: "ود مدني",
    location: "طريق سنار - جوار المحطة الوسطى",
    carsCount: 14,
    phone: "+249912443322",
    whatsapp: "249912443322",
    rating: 4.7,
    badge: "موثق رسمي",
    specialty: "سيارات عائلية، ميتسوبيشي لانسر، هيونداي كليك وآكسنت",
    verified: true,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ShowroomsPage() {
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShowrooms = useMemo(() => {
    return SHOWROOMS_DATA.filter((s) => {
      if (selectedCity !== "ALL" && s.city !== selectedCity) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.specialty.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-24" dir="rtl">
      
      {/* Page Header */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-[#004d99] to-slate-900 text-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
            <Building2 size={14} />
            <span>معارض ووكالات سودان زون المعتمدة 🇸🇩</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black leading-snug">
            دليل معارض وتوكيلات السيارات في السودان
          </h1>

          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
            تصفح أكبر معارض وتجار السيارات المعتمدين في بورتسودان، الخرطوم، عطبرة ومدني. سيارات مفحوصة، إمكانية المعاينة الميدانية، وتواصل مباشر عبر الواتساب.
          </p>
        </div>

        <a
          href="https://wa.me/24907620105?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A7%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AA%D9%88%D8%AB%D9%8A%D9%82%20%D9%85%D8%B9%D8%B1%D8%B6%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%B3%D9%88%D8%AF%D8%A7%D9%86%20%D8%B2%D9%88%D9%86."
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shrink-0 flex items-center gap-2"
        >
          <PlusCircle size={16} />
          <span>وثق معرضك في المنصة مجاناً</span>
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* City Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          {[
            { label: "كافة المعارض", value: "ALL" },
            { label: "بورتسودان", value: "بورتسودان" },
            { label: "الخرطوم", value: "الخرطوم" },
            { label: "عطبرة", value: "عطبرة" },
            { label: "ود مدني", value: "ود مدني" },
            { label: "كسلا", value: "كسلا" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedCity(item.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCity === item.value
                  ? "bg-[#004d99] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="بحث باسم المعرض أو التخصص..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-9 pl-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600"
          />
        </div>
      </div>

      {/* Showrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShowrooms.map((s) => (
          <div
            key={s.id}
            className="group bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right space-y-4"
          >
            <div>
              {/* Showroom Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg text-[10px] font-black bg-blue-600 text-white shadow flex items-center gap-1">
                  <ShieldCheck size={12} />
                  <span>{s.badge}</span>
                </span>
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/75 text-white backdrop-blur-sm">
                  {s.carsCount} سيارة متوفرة
                </span>
              </div>

              {/* Title & Rating */}
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-black text-slate-900 text-base">{s.name}</h3>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                  <Star size={13} fill="currentColor" />
                  <span>{s.rating}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                <MapPin size={13} className="text-[#004d99] shrink-0" />
                <span>{s.city} • {s.location}</span>
              </div>

              {/* Specialty Box */}
              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 space-y-1">
                <strong className="text-slate-900 block font-bold">التخصص والأسطول:</strong>
                <p className="text-[11px] text-slate-500 leading-relaxed">{s.specialty}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${s.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص سيارات ${s.name} عبر منصة SudanZon Cars`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition"
              >
                <MessageSquare size={14} />
                <span>واتساب المعرض</span>
              </a>

              <a
                href={`tel:${s.phone}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#004d99] hover:bg-[#003366] text-white shadow-sm transition"
              >
                <Phone size={14} />
                <span>اتصال هاتفي</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Join as Showroom Callout */}
      <div className="bg-gradient-to-r from-slate-900 to-[#003366] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 text-right">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base sm:text-lg font-black text-amber-300">هل تمتلك معرض سيارات أو وكالة في السودان؟</h4>
          <p className="text-xs text-slate-300">
            انضم إلى شبكة سودان زون للسيارات واعرض أسطول سياراتك أمام آلاف المشترين يومياً مع شارة التوثيق ودعم فني مخصص.
          </p>
        </div>

        <a
          href="https://wa.me/24907620105?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A7%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D9%85%D8%B9%D8%B1%D8%B6%D9%8A%20%D8%A5%D9%84%D9%89%20%D8%B3%D9%88%D8%AF%D8%A7%D9%86%20%D8%B2%D9%88%D9%86%20%D9%84%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA."
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shrink-0 transition shadow flex items-center gap-1.5"
        >
          <MessageSquare size={15} />
          <span>انضم الآن عبر الواتساب (24907620105)</span>
        </a>
      </div>

    </div>
  );
}
