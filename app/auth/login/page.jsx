"use client";

import Link from "next/link";
import BrandLogo from "../../../components/BrandLogo";
import { LogIn, ArrowRight, Phone, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <BrandLogo size="large" />
        <h1 className="text-xl font-black text-slate-900 pt-3">تسجيل الدخول إلى حسابك</h1>
        <p className="text-xs text-slate-500">أدخل رقم هاتفك وكلمة المرور للمتابعة</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">رقم الهاتف</label>
          <div className="relative">
            <input
              type="tel"
              placeholder="0912345678"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <Phone className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-slate-800 mb-1">كلمة المرور</label>
          <div className="relative">
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-10 pl-4 text-xs font-bold focus:bg-white focus:ring-2 focus:ring-[#0066cc]"
            />
            <Lock className="absolute right-3.5 top-3.5 text-slate-400" size={16} />
          </div>
        </div>

        <button
          onClick={() => alert("تم تسجيل الدخول بنجاح!")}
          className="w-full py-3.5 rounded-2xl font-black text-sm bg-[#0066cc] hover:bg-[#004d99] text-white shadow-lg shadow-blue-500/25 transition active:scale-95"
        >
          دخول
        </button>

        <div className="text-center text-xs text-slate-500 pt-2">
          <span>ليس لديك حساب بعد؟ </span>
          <Link href="/auth/register" className="font-bold text-[#0066cc] hover:underline">
            إنشاء حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
}
