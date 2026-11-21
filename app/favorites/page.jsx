"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search } from "lucide-react";
import CarCard from "../../components/CarCard";
import { FAVORITES_CHANGED_EVENT, readFavorites } from "../../lib/favorites";

export default function FavoritesPage() {
  const [cars, setCars] = useState([]);
  const refresh = useCallback(() => setCars(readFavorites()), []);

  useEffect(() => {
    refresh();
    window.addEventListener(FAVORITES_CHANGED_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return (
    <main className="favorites-page mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
          <Heart size={22} fill="currentColor" />
        </span>
        <div>
          <h1 className="text-xl font-black text-slate-900">سياراتي المفضلة</h1>
          <p className="text-sm text-slate-500">{cars.length} إعلانات محفوظة على هذا الجهاز</p>
        </div>
      </div>

      {cars.length ? (
        <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      ) : (
        <section className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">
          <Heart size={34} className="mx-auto mb-3 text-slate-300" />
          <h2 className="font-black text-slate-800">لم تحفظ أي سيارة بعد</h2>
          <p className="mt-2 text-sm text-slate-500">اضغط على القلب في بطاقة السيارة لإضافتها هنا.</p>
          <Link href="/cars" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0066cc] px-4 py-2.5 text-sm font-bold text-white">
            <Search size={17} />
            تصفح السيارات
          </Link>
        </section>
      )}
    </main>
  );
}
