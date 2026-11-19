"use client";

import { useState } from "react";
import Link from "next/link";
import CarCard from "../../components/CarCard";
import { ArrowRight, Filter, Sparkles, ChevronDown } from "lucide-react";

const ALL_CARS = [
  {
    id: "1",
    title: "نيسان سنترا 2019",
    brand: "Nissan",
    model: "Sentra",
    year: 2019,
    priceUsd: 20000,
    priceSdg: 52000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "أمامي",
    city: "عطبرة",
    featured: true,
    images: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "2",
    title: "هيونداي توسان 2021",
    brand: "Hyundai",
    model: "Tucson",
    year: 2021,
    priceUsd: 28000,
    priceSdg: 73000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "4x2",
    city: "بورتسودان",
    featured: true,
    images: ["https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "3",
    title: "تويوتا كامري 2020",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    priceUsd: 32000,
    priceSdg: 83000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "أمامي",
    city: "الخرطوم",
    featured: true,
    images: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "4",
    title: "تويوتا برادو 2021",
    brand: "Toyota",
    model: "Prado TXL",
    year: 2021,
    priceUsd: 45000,
    priceSdg: 118000000,
    transmission: "أوتوماتيك",
    engine: "V6",
    drivetrain: "4x4",
    city: "بورتسودان",
    featured: true,
    images: ["https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "5",
    title: "تويوتا لاندكروزر 2022",
    brand: "Toyota",
    model: "Land Cruiser GXR",
    year: 2022,
    priceUsd: 55000,
    priceSdg: 125000000,
    transmission: "أوتوماتيك",
    engine: "V8",
    drivetrain: "4x4",
    city: "بورتسودان",
    featured: true,
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "6",
    title: "كيا سبورتاج بانوراما 2021",
    brand: "Kia",
    model: "Sportage",
    year: 2021,
    priceUsd: 26000,
    priceSdg: 68000000,
    transmission: "أوتوماتيك",
    engine: "4 سلندر",
    drivetrain: "أمامي",
    city: "مدني",
    featured: false,
    images: ["https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"],
  },
];

export default function CarsListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0a2540] to-[#0066cc] text-white rounded-3xl p-6 sm:p-8 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black">جميع السيارات المعروضة للبيع</h1>
          <p className="text-xs sm:text-sm text-sky-200 mt-1">
            تصفح مئات السيارات المفحوصة والمضمونة في مختلف ولايات السودان
          </p>
        </div>
        <Link
          href="/add-car"
          className="hidden sm:inline-flex items-center gap-2 py-3 px-6 rounded-2xl font-black text-slate-900 bg-[#f59e0b] hover:bg-[#d97706] shadow transition"
        >
          <span>أعلن عن سيارتك</span>
        </Link>
      </div>

      {/* Grid of Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {ALL_CARS.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
