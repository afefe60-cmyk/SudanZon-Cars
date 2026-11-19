"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrench, Search, Phone, MessageCircle, ShieldCheck, Tag } from "lucide-react";

const SPARE_PARTS = [
  {
    id: "sp-1",
    title: "مكينة تويوتا هايلوكس 2KD ديزل ياباني أصلي",
    category: "محركات وماكينات",
    carCompatibility: "تويوتا هايلوكس، فورشنر (2006 - 2015)",
    priceSdg: 14500000,
    priceUsd: 5700,
    condition: "مستورد فحص ستاندر",
    city: "بورتسودان",
    seller: "مؤسسة الرواد لقطع الغيار",
    phone: "249911112222",
    whatsapp: "249911112222",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sp-2",
    title: "طقم مساعدات هيدروليك أمامي وخلفي لاندكروزر V8",
    category: "عفشة ومساعدات",
    carCompatibility: "تويوتا لاندكروزر (2008 - 2021)",
    priceSdg: 3200000,
    priceUsd: 1250,
    condition: "جديد أصلي بالكرتونة",
    city: "عطبرة",
    seller: "المهندس لقطع الغيار الأصلية",
    phone: "249922223333",
    whatsapp: "249922223333",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sp-3",
    title: "جيربوكس هيونداي آكسنت أوتوماتيك 6 سرعات",
    category: "جيربوكس وناقل حركة",
    carCompatibility: "هيونداي آكسنت، إلنترا (2012 - 2018)",
    priceSdg: 4800000,
    priceUsd: 1900,
    condition: "استيراد كوريا - فحص كمبيوتر",
    city: "بورتسودان",
    seller: "مركز دبي لقطع غيار هيونداي",
    phone: "249933334444",
    whatsapp: "249933334444",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sp-4",
    title: "طقم إطارات يوكوهاما ياباني مقاس 265/65R17 (4 حبات)",
    category: "إطارات وجنوط",
    carCompatibility: "برادو، باجيرو، هايلوكس، فورتشنر",
    priceSdg: 3900000,
    priceUsd: 1500,
    condition: "جديد إنتاج حديث",
    city: "كسلا",
    seller: "معرض السلام للإطارات والبطاريات",
    phone: "249944445555",
    whatsapp: "249944445555",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SparePartsPage() {
  const [query, setQuery] = useState("");

  const filtered = SPARE_PARTS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.carCompatibility.toLowerCase().includes(query.toLowerCase()) ||
      item.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#1e3a2b] via-emerald-950 to-slate-900 text-white rounded-3xl p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Wrench size={14} />
            <span>سوق قطع الغيار وملحقات السيارات</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">
            قطع غيار سيارات أصلية واستيراد مباشر بالسودان
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            محركات، جيربوكسات، فلاتر، إطارات، وبطاريات مع إمكانية الشحن الداخلي والتوصيل لكافة الولايات السودانية.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن قطعة غيار (مكينة، مساعدات، جير، فحمات، إطارات...)"
          className="w-full bg-white border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
        <Search className="absolute right-4 top-3.5 text-slate-400" size={18} />
      </div>

      {/* Spare Parts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500">
                  <strong className="text-slate-700">التوافق: </strong>{item.carCompatibility}
                </p>
                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="font-extrabold text-emerald-600 text-base">
                    {item.priceSdg.toLocaleString()} ج.س
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>الحالة: {item.condition}</span>
                  <span className="text-sky-600 font-semibold">{item.city}</span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 mt-2">
              <a
                href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسار عن قطعة الغيار: ${item.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition"
              >
                <MessageCircle size={14} />
                <span>واتساب</span>
              </a>
              <a
                href={`tel:${item.phone}`}
                className="flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition"
              >
                <Phone size={14} />
                <span>اتصال</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
