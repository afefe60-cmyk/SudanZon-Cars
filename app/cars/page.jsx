"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import CarCard from "../../components/CarCard";
import { 
  ArrowRight, 
  Filter, 
  Sparkles, 
  ChevronDown, 
  Search, 
  Car, 
  MapPin, 
  Tag, 
  SlidersHorizontal,
  RefreshCw,
  LayoutGrid,
  ListFilter
} from "lucide-react";
import { API_BASE_URL } from "../../lib/api";

const INITIAL_CARS = [
  {
    id: "1",
    title: "نيسان سنترا 2019",
    brand: "نيسان",
    model: "سنترا",
    year: 2019,
    priceUsd: 18500,
    priceSdg: 52000000,
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
    images: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"],
    bodyType: "sedan"
  },
  {
    id: "2",
    title: "هيونداي توسان 2021",
    brand: "هيونداي",
    model: "توسان",
    year: 2021,
    priceUsd: 26800,
    priceSdg: 75000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "4x2",
    city: "بورتسودان",
    featured: true,
    sellerName: "معرض البرنس للسيارات",
    sellerPhone: "+249912998877",
    sellerWhatsapp: "249912998877",
    condition: "مستعمل خالي دهان",
    customsStatus: "مجمرك ترخيص ساري",
    images: ["https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"],
    bodyType: "suv"
  },
  {
    id: "3",
    title: "تويوتا كامري 2020",
    brand: "تويوتا",
    model: "كامري",
    year: 2020,
    priceUsd: 30350,
    priceSdg: 85000000,
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
    images: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"],
    bodyType: "sedan"
  },
  {
    id: "4",
    title: "تويوتا برادو TXL 2021",
    brand: "تويوتا",
    model: "برادو TXL",
    year: 2021,
    priceUsd: 44600,
    priceSdg: 125000000,
    transmission: "أوتوماتيك",
    engine: "V6",
    drivetrain: "4x4",
    city: "بورتسودان",
    featured: true,
    sellerName: "معرض النخبة للسيارات",
    sellerPhone: "+249912345678",
    sellerWhatsapp: "249912345678",
    condition: "بحالة الوكالة",
    customsStatus: "مجمرك بالكامل",
    images: ["https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80"],
    bodyType: "suv"
  },
  {
    id: "5",
    title: "كيا سبورتاج 2023 فل أوبشن",
    brand: "كيا",
    model: "سبورتاج",
    year: 2023,
    priceUsd: 39300,
    priceSdg: 110000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "دفع رباعي",
    city: "الخرطوم",
    featured: true,
    sellerName: "أوتوزون السودان",
    sellerPhone: "+249912001122",
    sellerWhatsapp: "249912001122",
    condition: "زيرو وكالة",
    customsStatus: "مجمرك جديد",
    images: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"],
    bodyType: "suv"
  },
  {
    id: "6",
    title: "ميتسوبيشي L200 دبل كابينة 2022",
    brand: "ميتسوبيشي",
    model: "L200",
    year: 2022,
    priceUsd: 33900,
    priceSdg: 95000000,
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
    images: ["https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80"],
    bodyType: "truck"
  }
];

export default function CarsDirectoryPage() {
  const [cars, setCars] = useState(INITIAL_CARS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [selectedBodyType, setSelectedBodyType] = useState("ALL");
  const [selectedPriceRange, setSelectedPriceRange] = useState("ALL");
  const [sortBy, setSortBy] = useState("LATEST");

  useEffect(() => {
    async function loadLiveCars() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cars?limit=100`);
        if (!res.ok) return;
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          const mapped = json.data.map(c => ({
            id: c.id,
            title: c.title,
            brand: c.brand,
            model: c.model,
            year: c.year,
            priceUsd: c.priceUsd || Math.round(c.priceSdg / 2800),
            priceSdg: c.priceSdg,
            transmission: c.transmission || "أوتوماتيك",
            engine: c.engineSize || "4 سلندر",
            drivetrain: c.engineSize || "4x4",
            city: c.city,
            featured: c.isFeatured,
            sellerName: c.sellerName || "معلن موثق",
            sellerPhone: c.sellerPhone || "+249912345678",
            sellerWhatsapp: c.sellerWhatsapp || "249912345678",
            condition: c.condition || "بحالة ممتازة",
            customsStatus: c.customsStatus || "مجمرك بالكامل",
            images: Array.isArray(c.images) ? c.images : [c.mainImage],
            bodyType: c.bodyType ? c.bodyType.toLowerCase() : "sedan"
          }));
          setCars(mapped);
        }
      } catch (e) {}
    }
    loadLiveCars();
  }, []);

  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      // Search text
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = car.title?.toLowerCase().includes(q);
        const matchesBrand = car.brand?.toLowerCase().includes(q);
        const matchesCity = car.city?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesCity) return false;
      }
      // Brand
      if (selectedBrand !== "ALL" && car.brand !== selectedBrand) {
        return false;
      }
      // City
      if (selectedCity !== "ALL" && car.city !== selectedCity) {
        return false;
      }
      // Body Type
      if (selectedBodyType !== "ALL" && car.bodyType !== selectedBodyType) {
        return false;
      }
      // Price
      if (selectedPriceRange === "UNDER_40" && car.priceSdg >= 40000000) return false;
      if (selectedPriceRange === "40_80" && (car.priceSdg < 40000000 || car.priceSdg > 80000000)) return false;
      if (selectedPriceRange === "ABOVE_80" && car.priceSdg <= 80000000) return false;

      return true;
    });

    // Sorting
    if (sortBy === "PRICE_ASC") {
      result.sort((a, b) => a.priceSdg - b.priceSdg);
    } else if (sortBy === "PRICE_DESC") {
      result.sort((a, b) => b.priceSdg - a.priceSdg);
    } else if (sortBy === "FEATURED") {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [cars, searchQuery, selectedBrand, selectedCity, selectedBodyType, selectedPriceRange, sortBy]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedBrand("ALL");
    setSelectedCity("ALL");
    setSelectedBodyType("ALL");
    setSelectedPriceRange("ALL");
    setSortBy("LATEST");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6" dir="rtl">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-[#004d99] to-slate-900 text-white p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs">
              سوق السيارات المفتوح
            </span>
            <span className="text-xs text-sky-200">الأسعار معتمدة بالجنيه السوداني</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">جميع السيارات المعروضة للبيع بالسودان</h1>
          <p className="text-xs sm:text-sm text-sky-100 mt-1">
            تصفح مئات السيارات من الأفراد والمعارض في بورتسودان، الخرطوم، وعطبرة وتواصل فوراً مع البائع
          </p>
        </div>

        <Link
          href="/add-car"
          className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shrink-0"
        >
          + أضف سيارتك للبيع مجاناً
        </Link>
      </div>

      {/* Main Layout: Filters Sidebar + Cars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Right Filter Sidebar (1 col) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-5 sticky top-20">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-[#004d99]" />
              <h3 className="font-black text-sm text-slate-900">تصفية النتائج</h3>
            </div>
            <button
              onClick={handleReset}
              className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <RefreshCw size={11} />
              <span>إعادة ضبط</span>
            </button>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">بحث بالاسم أو الموديل</label>
            <div className="relative">
              <input
                type="text"
                placeholder="مثال: لاندكروزر، كامري، توسان..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-8 pl-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50"
              />
              <Search size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">ماركة السيارة</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full p-2.5 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50"
            >
              <option value="ALL">كل الماركات</option>
              <option value="تويوتا">تويوتا (Toyota)</option>
              <option value="هيونداي">هيونداي (Hyundai)</option>
              <option value="نيسان">نيسان (Nissan)</option>
              <option value="كيا">كيا (Kia)</option>
              <option value="ميتسوبيشي">ميتسوبيشي (Mitsubishi)</option>
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">المدينة والولاية</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2.5 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50"
            >
              <option value="ALL">كل المدن</option>
              <option value="بورتسودان">بورتسودان</option>
              <option value="الخرطوم">الخرطوم</option>
              <option value="عطبرة">عطبرة</option>
              <option value="ود مدني">ود مدني</option>
              <option value="كسلا">كسلا</option>
            </select>
          </div>

          {/* Body Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">نوع الهيكل</label>
            <select
              value={selectedBodyType}
              onChange={(e) => setSelectedBodyType(e.target.value)}
              className="w-full p-2.5 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50"
            >
              <option value="ALL">كل الفئات</option>
              <option value="sedan">سيدان (صالون)</option>
              <option value="suv">دفع رباعي (SUV)</option>
              <option value="truck">بيك آب وشاحنات</option>
            </select>
          </div>

          {/* Price Range SDG */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">نطاق السعر بالجنيه</label>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full p-2.5 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50"
            >
              <option value="ALL">كافة الأسعار (ج.س)</option>
              <option value="UNDER_40">أقل من 40 مليون ج.س</option>
              <option value="40_80">من 40 إلى 80 مليون ج.س</option>
              <option value="ABOVE_80">أكثر من 80 مليون ج.س</option>
            </select>
          </div>

        </div>

        {/* Cars Grid Container (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Top Sort & Count Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs font-bold text-slate-700">
              تم العثور على <span className="text-[#004d99] font-black">{filteredCars.length}</span> سيارة متاحة للبيع
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-bold">ترتيب حسب:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-bold py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none"
              >
                <option value="LATEST">الأحدث إضافة</option>
                <option value="FEATURED">السيارات المميزة VIP أولاً</option>
                <option value="PRICE_ASC">السعر: من الأقل للأعلى</option>
                <option value="PRICE_DESC">السعر: من الأعلى للأقل</option>
              </select>
            </div>
          </div>

          {/* Cars List / Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Car size={26} />
              </div>
              <h4 className="font-bold text-slate-800 text-base">لا توجد سيارات مطابقة لبحثك</h4>
              <p className="text-xs text-slate-500">جرب تغيير معايير البحث أو تصفير الفلاتر</p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-[#004d99] text-white rounded-xl text-xs font-bold shadow"
              >
                إعادة ضبط البحث
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
