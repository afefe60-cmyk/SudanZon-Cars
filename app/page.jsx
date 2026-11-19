"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import CategoryStrip from "../components/CategoryStrip";
import CarCard from "../components/CarCard";
import WhyUsWidget from "../components/WhyUsWidget";
import BottomBanner from "../components/BottomBanner";
import { ArrowLeft, Sparkles } from "lucide-react";
import { API_BASE_URL } from "../lib/api";

// Mock realistic car listings matching the exact 4 cars in the screenshot
const CARS_DATA = [
  {
    id: "1",
    title: "نيسان سنترا 2019",
    brand: "Nissan",
    model: "Sentra",
    year: 2019,
    priceSdg: 52000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "4 سلندر",
    city: "عطبرة",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "sedan",
  },
  {
    id: "2",
    title: "هيونداي توسان 2021",
    brand: "Hyundai",
    model: "Tucson",
    year: 2021,
    priceSdg: 75000000,
    transmission: "أوتوماتيك",
    engine: "4x2",
    drivetrain: "4x2",
    city: "بورتسودان",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "suv",
  },
  {
    id: "3",
    title: "تويوتا كامري 2020",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    priceSdg: 85000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "4 سلندر",
    city: "الخرطوم",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "sedan",
  },
  {
    id: "4",
    title: "تويوتا برادو 2021",
    brand: "Toyota",
    model: "Prado TXL",
    year: 2021,
    priceSdg: 125000000,
    transmission: "أوتوماتيك",
    engine: "4x4",
    drivetrain: "4x4",
    city: "بورتسودان",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=85",
    ],
    bodyType: "suv",
  },
];

export default function HomePage() {
  const [cars, setCars] = useState(CARS_DATA);
  const [activeBodyType, setActiveBodyType] = useState("all");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchLiveCars() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cars`);
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
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
            images: typeof c.images === "string" ? JSON.parse(c.images || "[]") : (c.images || [c.mainImage]),
            bodyType: (c.bodyType || "sedan").toLowerCase()
          }));
          setCars(mapped);
        }
      } catch (e) {
        // Fallback to initial CARS_DATA
      }
    }
    fetchLiveCars();
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (activeBodyType !== "all" && car.bodyType !== activeBodyType) {
        return false;
      }
      if (filters.type && car.bodyType !== filters.type) {
        return false;
      }
      if (filters.brand && car.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }
      if (filters.priceFrom && car.priceSdg < Number(filters.priceFrom)) {
        return false;
      }
      if (filters.priceTo && car.priceSdg > Number(filters.priceTo)) {
        return false;
      }
      return true;
    });
  }, [cars, activeBodyType, filters]);

  return (
    <div className="home-shell mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 pb-20">
      {/* 1. Hero Banner with Quick Filters */}
      <HeroBanner onSearch={(f) => setFilters(f)} />

      {/* 2. Body-Type & Quick Services Categories */}
      <CategoryStrip
        activeType={activeBodyType}
        onSelectType={(type) => setActiveBodyType(type)}
      />

      {/* 3. Main Listings Grid & Sidebar Section (Matching the exact screenshot layout) */}
      <section className="home-listings space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Listings Grid (8 cols in RTL - sits on the left of WhyUsWidget) */}
          <div className="home-car-listings lg:col-span-8 order-1 lg:order-1 space-y-3">
            {/* Header with 'عرض الكل ➔' on right */}
            <div className="flex items-center justify-between">
              <Link
                href="/cars"
                className="flex items-center gap-1 text-xs sm:text-sm font-black text-[#0066cc] hover:text-[#004d99] transition"
              >
                <span>عرض الكل</span>
                <ArrowLeft size={16} />
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">
                  {filteredCars.length} سيارات مميزة
                </span>
              </div>
            </div>

            {/* 4 Car Cards in 2x2 or 4x1 grid */}
            {filteredCars.length > 0 ? (
              <div className="home-car-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
                <p className="font-bold text-slate-700">لا توجد إعلانات مطابقة للتصفية الحالية</p>
                <button
                  onClick={() => {
                    setActiveBodyType("all");
                    setFilters({});
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0066cc]"
                >
                  إعادة ضبط الكل
                </button>
              </div>
            )}
          </div>

          {/* Right Column in RTL: 'لماذا السودان زون للسيارات؟' (4 cols) */}
          <div className="home-why lg:col-span-4 order-2 lg:order-2 sticky top-24">
            <WhyUsWidget />
          </div>
        </div>
      </section>

      {/* 4. Bottom Call-to-Action Banner */}
      <BottomBanner />
    </div>
  );
}
