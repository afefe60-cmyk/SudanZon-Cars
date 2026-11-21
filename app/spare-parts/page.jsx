"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Search, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Tag, 
  MapPin, 
  Sparkles,
  Filter,
  CheckCircle2
} from "lucide-react";

const SPARE_PARTS_DATA = [
  {
    id: "sp-1",
    title: "مكينة تويوتا هايلوكس 2KD ديزل ياباني أصلي",
    category: "محركات وماكينات",
    carCompatibility: "تويوتا هايلوكس، فورشنر (2006 - 2015)",
    priceSdg: 14500000,
    priceUsd: 5180,
    condition: "مستورد فحص ستاندر",
    city: "بورتسودان",
    seller: "مؤسسة الرواد لقطع الغيار",
    phone: "+249912111222",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    verified: true
  },
  {
    id: "sp-2",
    title: "طقم مساعدات هيدروليك أمامي وخلفي لاندكروزر V8",
    category: "عفشة ومساعدات",
    carCompatibility: "تويوتا لاندكروزر (2008 - 2021)",
    priceSdg: 3200000,
    priceUsd: 1140,
    condition: "جديد أصلي بالكرتونة",
    city: "عطبرة",
    seller: "المهندس لقطع الغيار الأصلية",
    phone: "+249912222333",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    verified: true
  },
  {
    id: "sp-3",
    title: "جيربوكس هيونداي آكسنت أوتوماتيك 6 سرعات",
    category: "جيربوكس ومحاور",
    carCompatibility: "هيونداي آكسنت، إلنترا (2012 - 2018)",
    priceSdg: 4800000,
    priceUsd: 1710,
    condition: "استيراد كوريا - فحص كمبيوتر",
    city: "بورتسودان",
    seller: "مركز دبي لقطع غيار هيونداي",
    phone: "+249912333444",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    verified: true
  },
  {
    id: "sp-4",
    title: "طقم إطارات يوكوهاما ياباني مقاس 265/65R17 (4 حبات)",
    category: "إطارات وجنوط",
    carCompatibility: "برادو، باجيرو، هايلوكس، فورتشنر",
    priceSdg: 3900000,
    priceUsd: 1390,
    condition: "جديد إنتاج حديث",
    city: "كسلا",
    seller: "معرض السلام للإطارات والبطاريات",
    phone: "+249912444555",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
    verified: true
  },
  {
    id: "sp-5",
    title: "دينمو كهرباء وشاحن أصلي تويوتا كامري وكورولا",
    category: "كهرباء وبطاريات",
    carCompatibility: "تويوتا كورولا، كامري، يارس (2015 - 2022)",
    priceSdg: 1850000,
    priceUsd: 660,
    condition: "مستورد ياباني أصلي",
    city: "الخرطوم",
    seller: "أوتو باور لقطع الغيار",
    phone: "+249912555666",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    verified: true
  },
  {
    id: "sp-6",
    title: "كمبروسر مكيف أصلي دنسو (Denso) لاندكروزر وبرادو",
    category: "تكييف وتبريد",
    carCompatibility: "تويوتا لاندكروزر، برادو، هايلوكس",
    priceSdg: 2400000,
    priceUsd: 855,
    condition: "جديد ياباني مع الضمان",
    city: "بورتسودان",
    seller: "شركة التبريد الحديث",
    phone: "+249912666777",
    whatsapp: "24907620105",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    verified: true
  }
];

export default function SparePartsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [selectedCity, setSelectedCity] = useState("ALL");

  const categories = [
    { label: "كافة القطع", value: "ALL" },
    { label: "محركات وماكينات", value: "محركات وماكينات" },
    { label: "جيربوكس ومحاور", value: "جيربوكس ومحاور" },
    { label: "عفشة ومساعدات", value: "عفشة ومساعدات" },
    { label: "إطارات وجنوط", value: "إطارات وجنوط" },
    { label: "كهرباء وبطاريات", value: "كهرباء وبطاريات" },
    { label: "تكييف وتبريد", value: "تكييف وتبريد" },
  ];

  const filtered = useMemo(() => {
    return SPARE_PARTS_DATA.filter((item) => {
      if (selectedCat !== "ALL" && item.category !== selectedCat) return false;
      if (selectedCity !== "ALL" && item.city !== selectedCity) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.carCompatibility.toLowerCase().includes(q) ||
          item.city.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCat, selectedCity, searchQuery]);

  const formatSdg = (num) => Number(num || 0).toLocaleString("en-US") + " ج.س";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-24" dir="rtl">
      
      {/* Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Tag size={14} />
            <span>سوق قطع الغيار الأصلية والمستوردة 🇸🇩</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black leading-snug">
            قطع غيار سيارات أصلية بالجنيه السوداني
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            ماكينات، جيربوكس، إطارات، ومساعدات لسيارات تويوتا، هيونداي، ميتسوبيشي، ونيسان. مع فحص ومطابقة وتوصيل لكافة الولايات. تواصل معنا للطلب الفوري عبر الواتساب: <span dir="ltr" className="font-bold text-amber-300">+249 076 20105</span>.
          </p>
        </div>

        <a
          href="https://wa.me/24907620105?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A7%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%D8%A9%20%D8%BA%D9%8A%D8%A7%D8%B1%20%D9%81%D9%8A%20%D8%B3%D9%88%D8%AF%D8%A7%D9%86%20%D8%B2%D9%88%D9%86."
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm transition shadow-lg shrink-0 flex items-center gap-2"
        >
          <MessageSquare size={16} />
          <span>اطلب قطعة غيارك الآن (24907620105)</span>
        </a>
      </div>

      {/* Filter and Categories Bar */}
      <div className="space-y-3">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setSelectedCat(c.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCat === c.value
                  ? "bg-[#004d99] text-white shadow"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search & City Filter */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="relative w-full md:w-96">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ابحث برقم القطعة، الاسم، أو الموديل (هايلوكس، آكسنت...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-9 pl-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-slate-500 font-bold">المدينة:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none"
            >
              <option value="ALL">كافة المدن</option>
              <option value="بورتسودان">بورتسودان</option>
              <option value="الخرطوم">الخرطوم</option>
              <option value="عطبرة">عطبرة</option>
              <option value="كسلا">كسلا</option>
            </select>
          </div>
        </div>
      </div>

      {/* Parts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right space-y-4"
          >
            <div>
              {/* Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow">
                  {item.condition}
                </span>
              </div>

              {/* Title & Price */}
              <div className="space-y-1 mb-2">
                <h3 className="font-black text-sm text-slate-900 line-clamp-2">{item.title}</h3>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin size={12} className="text-slate-400" />
                  <span>{item.city} • {item.seller}</span>
                </div>
              </div>

              {/* Compatibility Box */}
              <div className="bg-slate-50 rounded-xl p-2.5 text-xs text-slate-600 space-y-0.5">
                <span className="font-bold text-slate-800 block text-[11px]">متوافق مع:</span>
                <p className="text-[11px] text-slate-500">{item.carCompatibility}</p>
              </div>

              {/* Price */}
              <div className="pt-3 flex items-baseline justify-between">
                <span className="text-base font-black text-emerald-700">{formatSdg(item.priceSdg)}</span>
                <span className="text-[11px] font-bold text-slate-400">≈ ${item.priceUsd}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(`السلام عليكم، استفسر بخصوص شراء قطعة الغيار: (${item.title}) بسعر ${formatSdg(item.priceSdg)} المعروضة في سودان زون للسيارات.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                <span>طلب القطعة عبر الواتساب</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
