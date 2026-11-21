"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Car, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  PlusCircle,
  SlidersHorizontal,
  Flame,
  ArrowRight
} from "lucide-react";

export default function HeroBanner({ onSearch }) {
  // Search parameters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearchSubmit = (e) => {
    e?.preventDefault();

    let priceFrom = "";
    let priceTo = "";

    if (priceRange === "under_40") {
      priceTo = "40000000";
    } else if (priceRange === "40_80") {
      priceFrom = "40000000";
      priceTo = "80000000";
    } else if (priceRange === "above_80") {
      priceFrom = "80000000";
    }

    onSearch?.({
      brand: selectedBrand,
      city: selectedCity,
      type: selectedType,
      priceFrom,
      priceTo
    });
  };

  const handleQuickTagClick = (tagBrand, tagType, tagCity, tagPrice) => {
    setSelectedBrand(tagBrand || "");
    setSelectedCity(tagCity || "");
    setSelectedType(tagType || "");
    setPriceRange(tagPrice || "");

    let priceFrom = "";
    let priceTo = "";
    if (tagPrice === "under_50") {
      priceTo = "50000000";
    }

    onSearch?.({
      brand: tagBrand || "",
      city: tagCity || "",
      type: tagType || "",
      priceFrom,
      priceTo
    });
  };

  return (
    <div className="w-full space-y-4">
      {/* 1. Main Visual Hero Container with Deep Navy & Gold Accent */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#003366] via-[#004d99] to-[#002244] text-white shadow-xl border border-sky-800/40 p-6 sm:p-8 lg:p-10">
        
        {/* Subtle Decorative Geometric Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-black shadow-sm">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>سوق ومعارض السيارات الأول في السودان 🇸🇩</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            اعثر على سيارتك القادمة بأفضل سعر <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
              بالجنيه السوداني مباشرة من البائع
            </span>
          </h1>

          <p className="text-xs sm:text-base text-sky-100 max-w-2xl mx-auto font-medium leading-relaxed">
            مئات الإعلانات اليومية للسيارات المستعملة والزيرو في الخرطوم، بورتسودان، عطبرة ومدني، مع خدمة الفحص الفني وتواصل فوري عبر الواتساب.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/add-car"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-400/20 transition-all hover:scale-105"
            >
              <PlusCircle size={16} />
              <span>أضف إعلان سيارتك مجاناً</span>
            </Link>

            <Link
              href="/showrooms"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition"
            >
              <span>تصفح المعارض المعتمدة</span>
              <ArrowRight size={14} className="rotate-180" />
            </Link>
          </div>

          {/* 2. Interactive Search Box with 4 Criteria */}
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/40 text-slate-800 text-right mt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              
              {/* Field 1: Brand */}
              <div className="relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 px-1">ماركة السيارة</label>
                <div className="relative">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full pr-8 pl-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 appearance-none"
                  >
                    <option value="">كل الماركات (تويوتا، هيونداي...)</option>
                    <option value="تويوتا">تويوتا (Toyota)</option>
                    <option value="هيونداي">هيونداي (Hyundai)</option>
                    <option value="نيسان">نيسان (Nissan)</option>
                    <option value="كيا">كيا (Kia)</option>
                    <option value="ميتسوبيشي">ميتسوبيشي (Mitsubishi)</option>
                    <option value="مرسيدس">مرسيدس بنز (Mercedes)</option>
                    <option value="سوزوكي">سوزوكي (Suzuki)</option>
                  </select>
                  <Car size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: City */}
              <div className="relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 px-1">المدينة والولاية</label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pr-8 pl-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 appearance-none"
                  >
                    <option value="">كل المدن السودانية</option>
                    <option value="بورتسودان">بورتسودان (البحر الأحمر)</option>
                    <option value="الخرطوم">الخرطوم / أم درمان / بحري</option>
                    <option value="عطبرة">عطبرة / الدامر (نهر النيل)</option>
                    <option value="ود مدني">ود مدني (الجزيرة)</option>
                    <option value="كسلا">كسلا</option>
                    <option value="القضارف">القضارف</option>
                  </select>
                  <MapPin size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Body Type */}
              <div className="relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 px-1">نوع الهيكل / الفئة</label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full pr-8 pl-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 appearance-none"
                  >
                    <option value="">كل الفئات</option>
                    <option value="sedan">سيدان (صالون)</option>
                    <option value="suv">دفع رباعي (SUV / جيب)</option>
                    <option value="truck">بيك آب وشاحنات (Pickup)</option>
                    <option value="bus">حافلات وفانات (Van / Bus)</option>
                  </select>
                  <SlidersHorizontal size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 4: Price in SDG */}
              <div className="relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 px-1">السعر بالجنيه السوداني</label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full pr-8 pl-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600 appearance-none"
                  >
                    <option value="">كافة الأسعار (ج.س)</option>
                    <option value="under_40">أقل من 40 مليون ج.س</option>
                    <option value="40_80">من 40 إلى 80 مليون ج.س</option>
                    <option value="above_80">أكثر من 80 مليون ج.س</option>
                  </select>
                  <Tag size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Submit & Filter Reset */}
            <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-100">
              <div className="text-[11px] text-slate-400 font-bold hidden sm:block">
                تصفية فورية دقيقة بدون إعادة تحميل الصفحة
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {(selectedBrand || selectedCity || selectedType || priceRange) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBrand("");
                      setSelectedCity("");
                      setSelectedType("");
                      setPriceRange("");
                      onSearch?.({});
                    }}
                    className="px-3 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
                  >
                    إعادة ضبط
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#004d99] hover:bg-[#003366] text-white font-black text-xs sm:text-sm shadow-md transition"
                >
                  <Search size={15} />
                  <span>بحث في السيارات</span>
                </button>
              </div>
            </div>
          </form>

          {/* 3. Trending Tags Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            <span className="text-[11px] text-sky-200 font-bold flex items-center gap-1">
              <Flame size={13} className="text-amber-400" />
              <span>الأكثر بحثاً:</span>
            </span>

            <button
              onClick={() => handleQuickTagClick("تويوتا", "suv", "", "")}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] transition border border-white/10"
            >
              لاندكروزر V8
            </button>

            <button
              onClick={() => handleQuickTagClick("تويوتا", "sedan", "", "")}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] transition border border-white/10"
            >
              كامري وارد الخليج
            </button>

            <button
              onClick={() => handleQuickTagClick("هيونداي", "", "بورتسودان", "")}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] transition border border-white/10"
            >
              هيونداي بورتسودان
            </button>

            <button
              onClick={() => handleQuickTagClick("", "", "", "under_50")}
              className="px-2.5 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold text-[11px] transition border border-amber-400/30"
            >
              أقل من 50 مليون ج.س
            </button>
          </div>

        </div>
      </div>

      {/* Trust & Guarantee Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div className="font-black text-slate-800">تواصل مباشر بدون وسيط</div>
            <div className="text-[10px] text-slate-500">مراسلة واتساب ومكالمة فورية مع صاحب السيارة</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="font-black text-slate-800">أسعار صريحة بالجنيه السوداني</div>
            <div className="text-[10px] text-slate-500">تسعير واقعي محدث مع معادلة الدولار التقديرية</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 font-bold">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div className="font-black text-slate-800">خدمة الفحص والجمارك المعتمدة</div>
            <div className="text-[10px] text-slate-500">فحص شاسيه وماكينة وتخليص في بورتسودان والخرطوم</div>
          </div>
        </div>
      </div>
    </div>
  );
}
