"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BrandLogo from "../../../components/BrandLogo";
import { UserPlus, User, Phone, Lock, MapPin, Loader2 } from "lucide-react";
import { API_BASE_URL } from "../../../lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("الخرطوم");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !phone || !password) {
      setErrorMsg("يرجى ملء الاسم ورقم الهاتف وكلمة المرور");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register/customer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city, password }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("sudanzon_token", data.token);
        localStorage.setItem("sudanzon_user", JSON.stringify(data.user || { name, phone, city }));
        alert(`أهلاً بك يا ${name}! تم إنشاء حسابك بنجاح 🚀`);
        router.push("/account");
      } else {
        setErrorMsg(data.message || "تعذر إنشاء الحساب. تحقق من البيانات وحاول مرة أخرى.");
      }
    } catch (err) {
      setErrorMsg("تعذر الاتصال بالخادم. تحقق من اتصالك وحاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <BrandLogo size="large" />
        <h1 className="text-xl font-black text-slate-900 pt-3">إنشاء حساب جديد</h1>
        <p className="text-xs text-slate-500">انضم إلى مجتمع سيارات سودان زون للبيع والشراء المباشر</p>
      </div>

      <form onSubmit={handleRegister} className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-bold text-center">
            {errorMsg}
          </div>
        )}

        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">الاسم الكامل</label>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: محمد أحمد علي"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <User className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">رقم الهاتف للتواصل</label>
          <div className="relative">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0912345678"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <Phone className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">المدينة / الولاية</label>
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="بورتسودان، الخرطوم، عطبرة..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <MapPin className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">كلمة المرور</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <Lock className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-2xl font-black text-sm bg-[#16a34a] hover:bg-[#15803d] text-white shadow-lg shadow-emerald-600/25 transition active:scale-95 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>جاري إنشاء الحساب ...</span>
            </>
          ) : (
            <span>إنشاء الحساب</span>
          )}
        </button>

        <div className="text-center text-xs text-slate-500 pt-2">
          <span>لديك حساب بالفعل؟ </span>
          <Link href="/auth/login" className="font-bold text-[#0066cc] hover:underline">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
}
