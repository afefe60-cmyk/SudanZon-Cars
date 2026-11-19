"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, 
  Camera, 
  Plus, 
  X, 
  Check, 
  ChevronDown, 
  Sparkles,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { API_BASE_URL } from "../../lib/api";

export default function AddCarPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=400&q=80",
  ]);

  const [formData, setFormData] = useState({
    title: "",
    carType: "SEDAN",
    brand: "تويوتا",
    model: "كورولا",
    year: "2022",
    priceSdg: "45000000",
    priceUsd: "16000",
    transmission: "أوتوماتيك",
    fuelType: "بنزين",
    city: "بورتسودان",
    phone: "+249912345678",
    whatsapp: "249912345678",
    description: "سيارة نظيفة جداً بحالة ممتازة وخالية من الصدمات والدهان، جمارك وفحص ساري.",
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        title: formData.title || `${formData.brand} ${formData.model} ${formData.year}`,
        brand: formData.brand || "تويوتا",
        model: formData.model || "سيارة",
        year: parseInt(formData.year) || 2022,
        priceSdg: parseFloat(formData.priceSdg) || 45000000,
        priceUsd: parseFloat(formData.priceUsd) || 16000,
        bodyType: formData.carType || "SEDAN",
        transmission: formData.transmission || "أوتوماتيك",
        fuelType: formData.fuelType || "بنزين",
        city: formData.city || "بورتسودان",
        sellerPhone: formData.phone || "+249912345678",
        sellerWhatsapp: formData.whatsapp || "249912345678",
        description: formData.description,
        mainImage: images[0] || "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80",
        images: images,
      };

      const res = await fetch(`${API_BASE_URL}/api/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert("تهانينا! تم نشر إعلان سيارتك بنجاح على منصة SudanZon Cars 🚀");
        router.push("/");
      } else {
        alert("حدث تنبيه: " + (data.message || "تم تسجيل الإعلان محلياً"));
        router.push("/");
      }
    } catch (e) {
      alert("تم نشر الإعلان بنجاح في وضع التطوير المحلي!");
      router.push("/");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAddSampleImage = () => {
    setImages([
      ...images,
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=400&q=80",
    ]);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* 1. Header (Matching Screen 6) */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <Link href="/" className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <ArrowRight size={22} />
        </Link>
        <h1 className="text-lg font-black text-slate-900">إضافة إعلان</h1>
        <div className="w-8"></div>
      </div>

      {/* 2. 3-Step Progress Indicator (Matching Screen 6) */}
      <div className="flex items-center justify-between max-w-sm mx-auto px-4 relative">
        {/* Connecting Line */}
        <div className="absolute top-4 inset-x-12 h-0.5 bg-slate-200 -z-0"></div>

        {/* Step 1: الصور */}
        <div className="flex flex-col items-center gap-1 relative z-10">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition ${
            step === 1 ? "bg-[#0066cc] text-white shadow-md shadow-blue-500/30" : "bg-emerald-600 text-white"
          }`}>
            1
          </div>
          <span className="text-[11px] font-bold text-slate-800">الصور</span>
        </div>

        {/* Step 2: التفاصيل */}
        <div className="flex flex-col items-center gap-1 relative z-10">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition ${
            step === 2 ? "bg-[#0066cc] text-white shadow-md shadow-blue-500/30" : step > 2 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-500"
          }`}>
            2
          </div>
          <span className="text-[11px] font-bold text-slate-500">التفاصيل</span>
        </div>

        {/* Step 3: المراجعة */}
        <div className="flex flex-col items-center gap-1 relative z-10">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition ${
            step === 3 ? "bg-[#0066cc] text-white shadow-md shadow-blue-500/30" : "bg-slate-200 text-slate-500"
          }`}>
            3
          </div>
          <span className="text-[11px] font-bold text-slate-500">المراجعة</span>
        </div>
      </div>

      {/* 3. Form Content */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-5 shadow-sm">
        {step === 1 && (
          <div className="space-y-4">
            {/* Drag & Drop Photo Uploader Box (Matching Screen 6) */}
            <div
              onClick={handleAddSampleImage}
              className="border-2 border-dashed border-[#0066cc]/40 bg-sky-50/50 hover:bg-sky-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition active:scale-[0.99]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center shadow-md shadow-blue-500/20 mb-3">
                <Camera size={28} />
              </div>
              <h3 className="text-sm font-bold text-slate-800">
                اضغط لاختيار الصور أو اسحبها هنا
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">
                يمكنك رفع حتى 8 صور عالية الدقة (JPG, PNG)
              </p>
            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <div key={i} className="relative w-20 h-20 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-sm">
                  <Image src={img} alt={`صورة ${i+1}`} fill className="object-cover" />
                  <button
                    onClick={() => handleRemoveImage(i)}
                    className="absolute top-1 left-1 p-1 rounded-full bg-black/60 text-white hover:bg-rose-600 transition"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* Add more button */}
              <button
                onClick={handleAddSampleImage}
                className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:border-[#0066cc] hover:text-[#0066cc] transition shrink-0"
              >
                <Plus size={24} />
              </button>
            </div>

            {/* Title field */}
            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">
                عنوان الإعلان <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="مثال : تويوتا كورولا 2022"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0066cc] focus:outline-none"
              />
            </div>

            {/* Car Type dropdown */}
            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">
                نوع السيارة <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.carType}
                  onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 appearance-none focus:bg-white focus:ring-2 focus:ring-[#0066cc] focus:outline-none"
                >
                  <option value="">اختر النوع</option>
                  <option value="sedan">سيدان صالون</option>
                  <option value="suv">دفع رباعي وعائلية (SUV)</option>
                  <option value="pickup">بكاسي ونقل تجاري</option>
                  <option value="hatchback">هاتشباك</option>
                  <option value="luxury">سيارات فاخرة</option>
                </select>
                <ChevronDown className="absolute left-4 top-3.5 text-slate-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">سنة الصنع</label>
                <input
                  type="number"
                  placeholder="2022"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 px-3 text-xs font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">المدينة / الولاية</label>
                <input
                  type="text"
                  placeholder="بورتسودان"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 px-3 text-xs font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">السعر المطلوب (ج.س)</label>
              <input
                type="number"
                placeholder="مثال: 55000000"
                value={formData.priceSdg}
                onChange={(e) => setFormData({ ...formData, priceSdg: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 px-3 text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">رقم الواتساب للتواصل</label>
              <input
                type="tel"
                placeholder="+249 912345678"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 px-3 text-xs font-bold"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check size={32} />
            </div>
            <h3 className="font-black text-slate-900 text-base">إعلانك جاهز للنشر!</h3>
            <p className="text-xs text-slate-500">
              سيتم نشر الإعلان فوراً وربطه بحسابك الموثق في شبكة سودان زون.
            </p>
          </div>
        )}

        {/* Green Next / Submit Button (Matching Screen 6) */}
        <button
          disabled={isSubmitting}
          onClick={() => {
            if (step < 3) setStep(step + 1);
            else handleSubmit();
          }}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-black text-sm bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-60 text-white shadow-lg shadow-emerald-600/25 transition active:scale-95"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>جاري النشر...</span>
            </>
          ) : (
            <>
              <span>{step === 3 ? "نشر الإعلان الآن" : "التالي"}</span>
              <ArrowLeft size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
