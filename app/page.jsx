"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import BrandStrip from "../components/BrandStrip";
import CategoryStrip from "../components/CategoryStrip";
import CarCard from "../components/CarCard";
import WhyUsWidget from "../components/WhyUsWidget";
import VerifiedShowroomsSection from "../components/VerifiedShowroomsSection";
import InspectionServicesBanner from "../components/InspectionServicesBanner";
import PlatformStats from "../components/PlatformStats";
import BottomBanner from "../components/BottomBanner";
import { ArrowLeft, Sparkles, Star, Car, Filter, RefreshCw } from "lucide-react";
import { API_BASE_URL } from "../lib/api";

const CARS_DATA = [
  {
    id: "1",
    title: "نيسان سنترا 2019",
    brand: "نيسان",
    model: "سنترا",
    year: 2019,
    priceSdg: 52000000,
    priceUsd: 18500,
    mileage: 65000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "أمامي",
    city: "عطبرة",
    featured: false,
    sellerName: "أحمد الفاتح",
    sellerPhone: "+249123456789",
    sellerWhatsapp: "249123456789",
    condition: "مستعمل بحالة ممتازة",
    customsStatus: "مجمرك بالكامل",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "sedan",
    isShowroom: false
  },
  {
    id: "2",
    title: "هيونداي توسان 2021",
    brand: "هيونداي",
    model: "توسان",
    year: 2021,
    priceSdg: 75000000,
    priceUsd: 26800,
    mileage: 38000,
    transmission: "أوتوماتيك",
    engine: "4x2",
    drivetrain: "4x2",
    city: "بورتسودان",
    featured: true,
    sellerName: "معرض البرنس للسيارات",
    sellerPhone: "+249912998877",
    sellerWhatsapp: "249912998877",
    condition: "مستعمل خالي دهان",
    customsStatus: "مجمرك ترخيص ساري",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "suv",
    isShowroom: true
  },
  {
    id: "3",
    title: "تويوتا كامري 2020",
    brand: "تويوتا",
    model: "كامري",
    year: 2020,
    priceSdg: 85000000,
    priceUsd: 30350,
    mileage: 42000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "أمامي",
    city: "الخرطوم",
    featured: true,
    sellerName: "محمد عثمان",
    sellerPhone: "+249922234567",
    sellerWhatsapp: "249922234567",
    condition: "مستعمل - وارد الخليج",
    customsStatus: "مجمرك بالكامل",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "sedan",
    isShowroom: false
  },
  {
    id: "4",
    title: "تويوتا برادو TXL 2021",
    brand: "تويوتا",
    model: "برادو TXL",
    year: 2021,
    priceSdg: 125000000,
    priceUsd: 44600,
    mileage: 50000,
    transmission: "أوتوماتيك",
    engine: "4x4",
    drivetrain: "4x4",
    city: "بورتسودان",
    featured: true,
    sellerName: "معرض النخبة للسيارات",
    sellerPhone: "+249912345678",
    sellerWhatsapp: "249912345678",
    condition: "بحالة الوكالة",
    customsStatus: "مجمرك بالكامل",
    images: [
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "suv",
    isShowroom: true
  },
  {
    id: "5",
    title: "كيا سبورتاج 2023 فل أوبشن",
    brand: "كيا",
    model: "سبورتاج",
    year: 2023,
    priceSdg: 110000000,
    priceUsd: 39300,
    mileage: 5000,
    transmission: "أوتوماتيك",
    engine: "4x4",
    drivetrain: "دفع رباعي",
    city: "الخرطوم",
    featured: true,
    sellerName: "أوتوزون السودان",
    sellerPhone: "+249912001122",
    sellerWhatsapp: "249912001122",
    condition: "زيرو وكالة",
    customsStatus: "مجمرك جديد",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "suv",
    isShowroom: true
  },
  {
    id: "6",
    title: "ميتسوبيشي L200 دبل كابينة 2022",
    brand: "ميتسوبيشي",
    model: "L200",
    year: 2022,
    priceSdg: 95000000,
    priceUsd: 33900,
    mileage: 28000,
    transmission: "عادي / مانيوال",
    engine: "ديزل تيربو",
    drivetrain: "4x4",
    city: "عطبرة",
    featured: false,
    sellerName: "وكالة النيل للسيارات",
    sellerPhone: "+249912554433",
    sellerWhatsapp: "249912554433",
    condition: "مستعمل نظيف جداً",
    customsStatus: "مجمرك ترخيص ساري",
    images: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "truck",
    isShowroom: true
  }
];

const normalizeBodyType = (value) => {
  const type = String(value || "sedan").toLowerCase();
  if (["motorcycle", "motorbike", "bike"].includes(type)) return "moto";
  if (["pickup", "pick-up", "lorry"].includes(type)) return "truck";
  if (["minibus", "van"].includes(type)) return "bus";
  return type;
};

const normalizeImages = (images, mainImage) => {
  if (Array.isArray(images)) return images.filter(Boolean);
  if (typeof images === "string") {
    try {
      const parsed = JSON.parse(images);
      if (Array.isArray(parsed)) return parsed.filter(Boolean);
    } catch {
      return mainImage ? [mainImage] : [];
    }
  }
  return mainImage ? [mainImage] : [];
};

export default function HomePage() {
  const [cars, setCars] = useState(CARS_DATA);
  const [activeBodyType, setActiveBodyType] = useState("all");
  const [activeBrandFilter, setActiveBrandFilter] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchLiveCars() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cars`);
        if (!res.ok) return;
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          const mapped = json.data.map(c => ({
            id: c.id,
            title: c.title,
            brand: c.brand,
            model: c.model,
            year: c.year,
            priceUsd: c.priceUsd || null,
            priceSdg: c.priceSdg,
            mileage: c.mileage || 0,
            transmission: c.transmission || "أوتوماتيك",
            engine: c.engineSize || "4 سلندر",
            drivetrain: c.engineSize || "4x4",
            city: c.city,
            featured: c.isFeatured,
            sellerName: c.sellerName || "معلن موثق",
            sellerPhone: c.sellerPhone || "+249912000000",
            sellerWhatsapp: c.sellerWhatsapp || "249912000000",
            condition: c.condition || "بحالة ممتازة",
            customsStatus: c.customsStatus || "مجمرك بالكامل",
            images: normalizeImages(c.images, c.mainImage),
            bodyType: normalizeBodyType(c.bodyType),
            isShowroom: c.isShowroom || false
          }));
          setCars(mapped);
        }
      } catch (e) {
        // Fallback to local rich CARS_DATA
      }
    }
    fetchLiveCars();
  }, []);

  // Filtered cars logic
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Body type filter
      if (activeBodyType !== "all" && car.bodyType !== activeBodyType) {
        return false;
      }
      if (filters.type && car.bodyType !== filters.type) {
        return false;
      }
      // Brand filter (from BrandStrip or Hero)
      const brandToMatch = activeBrandFilter || filters.brand;
      if (brandToMatch) {
        const cBrand = String(car.brand || "").toLowerCase();
        const fBrand = String(brandToMatch).toLowerCase();
        if (!cBrand.includes(fBrand) && !fBrand.includes(cBrand)) {
          return false;
        }
      }
      // City filter
      if (filters.city && car.city !== filters.city) {
        return false;
      }
      // Price filters
      if (filters.priceFrom && car.priceSdg < Number(filters.priceFrom)) {
        return false;
      }
      if (filters.priceTo && car.priceSdg > Number(filters.priceTo)) {
        return false;
      }
      return true;
    });
  }, [cars, activeBodyType, activeBrandFilter, filters]);

  // Featured Cars (VIP)
  const featuredCars = useMemo(() => {
    return cars.filter(c => c.featured);
  }, [cars]);

  const handleResetFilters = () => {
    setActiveBodyType("all");
    setActiveBrandFilter("");
    setFilters({});
  };

  return (
    <div className="home-shell mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-8 pb-20" dir="rtl">
      
      {/* 1. Hero Banner with 4-Criteria Search Bar */}
      <HeroBanner onSearch={(f) => { setFilters(f); if (f.brand) setActiveBrandFilter(f.brand); }} />

      {/* 2. Brand Strip for Instant Brand Filtering */}
      <BrandStrip
        activeBrand={activeBrandFilter}
        onSelectBrand={(brandName) => setActiveBrandFilter(brandName)}
      />

      {/* 3. Featured VIP Cars Section (⭐ سيارات مميزة VIP) */}
      {featuredCars.length > 0 && !activeBrandFilter && Object.keys(filters).length === 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <h2 className="font-black text-slate-900 text-base sm:text-lg">سيارات مميزة VIP</h2>
                <p className="text-xs text-slate-500">إعلانات مختارة بعناية مفحوصة وموثقة بالكامل</p>
              </div>
            </div>

            <Link
              href="/cars"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#004d99] hover:text-blue-800 transition"
            >
              <span>عرض كل المميز</span>
              <ArrowLeft size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCars.slice(0, 4).map((car) => (
              <CarCard key={`featured-${car.id}`} car={car} />
            ))}
          </div>
        </section>
      )}

      {/* 4. Body-Type Filter Strip (سيدان، SUV، بيك آب...) */}
      <CategoryStrip
        activeType={activeBodyType}
        onSelectType={(type) => setActiveBodyType(type)}
      />

      {/* 5. Main Listings Grid & Sidebar Section */}
      <section className="space-y-4">
        
        {/* Active Filter Notice if filtered */}
        {(activeBrandFilter || activeBodyType !== "all" || Object.keys(filters).length > 0) && (
          <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-950">
              <Filter size={15} className="text-sky-700" />
              <span>
                عرض نتائج التصفية: {activeBrandFilter && `[${activeBrandFilter}]`} {activeBodyType !== "all" && `[${activeBodyType}]`} {filters.city && `[مدينة ${filters.city}]`} ({filteredCars.length} سيارات مطابقة)
              </span>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-3 py-1 bg-white hover:bg-slate-100 border border-sky-300 text-sky-900 rounded-lg text-xs font-bold transition flex items-center gap-1"
            >
              <RefreshCw size={12} />
              <span>إلغاء التصفية</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Listings Grid (8 cols in RTL) */}
          <div className="lg:col-span-8 order-1 lg:order-1 space-y-4">
            
            {/* Header with Title and 'عرض الكل' */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <Car className="text-[#004d99]" size={20} />
                <h3 className="font-black text-slate-900 text-base sm:text-lg">
                  {activeBrandFilter ? `سيارات ${activeBrandFilter} في السودان` : "أحدث السيارات المعروضة للبيع"}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                  {filteredCars.length} إعلانات متاحة
                </span>
                <Link
                  href="/cars"
                  className="flex items-center gap-1 text-xs sm:text-sm font-black text-[#004d99] hover:text-[#003366] transition"
                >
                  <span>عرض الكل</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>

            {/* Grid of Car Cards */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Car size={28} />
                </div>
                <h4 className="font-black text-slate-800 text-base">لا توجد إعلانات مطابقة لمعايير البحث الحالية</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  جرب تغيير خيارات السعر أو المدينة، أو قم بإعادة ضبط خيارات البحث.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#004d99] hover:bg-[#003366] transition shadow"
                >
                  إعادة ضبط خيارات البحث
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Why Us Widget (4 cols in RTL) */}
          <div className="lg:col-span-4 order-2 lg:order-2 sticky top-24">
            <WhyUsWidget />
          </div>

        </div>
      </section>

      {/* 6. Verified Dealerships & Showrooms Hub */}
      <VerifiedShowroomsSection />

      {/* 7. Technical Inspection & Customs Assistance Banner */}
      <InspectionServicesBanner />

      {/* 8. Platform Numbers & Trust Metrics */}
      <PlatformStats />

      {/* 9. Bottom Call-to-Action & Android App Download */}
      <BottomBanner />

    </div>
  );
}
