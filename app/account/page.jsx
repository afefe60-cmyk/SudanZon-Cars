"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BrandLogo from "../../components/BrandLogo";
import { 
  ArrowRight, 
  Settings, 
  Camera, 
  CheckCircle2, 
  Car, 
  Heart, 
  MessageSquare, 
  ListChecks, 
  Bell, 
  HelpCircle, 
  Info, 
  LogOut,
  ChevronLeft
} from "lucide-react";

export default function AccountPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({
    name: "محمد أحمد علي",
    type: "عضو موثق",
    phone: "0912345678",
    adsCount: 5,
    favoritesCount: 12,
    chatsCount: 8,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sudanzon_user");
      const token = localStorage.getItem("sudanzon_token");
      if (stored) {
        const u = JSON.parse(stored);
        setCurrentUser(prev => ({
          ...prev,
          name: u.name || prev.name,
          phone: u.phone || prev.phone,
          role: u.role || prev.role
        }));
        setIsLoggedIn(true);
      } else if (!token) {
        setIsLoggedIn(false);
      }
    } catch (e) {}
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sudanzon_token");
    localStorage.removeItem("sudanzon_user");
    alert("تم تسجيل الخروج بنجاح");
    router.push("/auth/login");
  };

  const menuItems = [
    { label: "إعلاناتي", href: "/account/my-ads", icon: ListChecks, badge: null },
    { label: "المحادثات", href: "/messages", icon: MessageSquare, badge: "3" },
    { label: "المفضلة", href: "/account/favorites", icon: Heart, badge: null },
    { label: "الإشعارات", href: "/notifications", icon: Bell, badge: "5" },
    { label: "سياسة الخصوصية", href: "/privacy", icon: Info, badge: null },
    { label: "الشروط والأحكام", href: "/terms", icon: HelpCircle, badge: null },
  ];

  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* 1. Top Header Bar (Matching Screen 8) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <Link href="/" className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <ArrowRight size={22} />
        </Link>
        <span className="text-base font-black text-slate-900">الملف الشخصي</span>
        <button className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <Settings size={20} />
        </button>
      </div>

      {/* 2. User Avatar & Info Card (Matching Screen 8 & 5) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
        {/* Avatar with Camera icon */}
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-full bg-[#0066cc] text-white flex items-center justify-center border-4 border-slate-50 shadow-md">
            <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <button className="absolute bottom-0 right-0 p-2 rounded-full bg-slate-900 text-white shadow hover:bg-slate-800 transition">
            <Camera size={14} />
          </button>
        </div>

        {/* User Name & Verification Badge */}
        <h2 className="text-xl font-black text-slate-900">{currentUser.name}</h2>
        <div className="flex items-center gap-1.5 text-xs font-black text-[#16a34a] mt-1">
          <CheckCircle2 size={15} className="text-[#16a34a]" />
          <span>{isLoggedIn ? `${currentUser.type} (${currentUser.phone})` : "زائر"}</span>
        </div>

        {/* 3. Stats Row (Matching Screen 8: إعلاناتي 5, المفضلة 12, المحادثات 8) */}
        <div className="grid grid-cols-3 gap-3 w-full mt-6 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 border border-slate-100">
            <Car size={18} className="text-[#0066cc]" />
            <span className="text-lg font-black text-slate-900">{currentUser.adsCount}</span>
            <span className="text-[10px] text-slate-400 font-bold">إعلاناتي</span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 border border-slate-100">
            <Heart size={18} className="text-[#0066cc]" />
            <span className="text-lg font-black text-slate-900">{currentUser.favoritesCount}</span>
            <span className="text-[10px] text-slate-400 font-bold">المفضلة</span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 border border-slate-100">
            <MessageSquare size={18} className="text-[#0066cc]" />
            <span className="text-lg font-black text-slate-900">{currentUser.chatsCount}</span>
            <span className="text-[10px] text-slate-400 font-bold">المحادثات</span>
          </div>
        </div>

        {/* Admin Dashboard Access for Admin */}
        {(currentUser.role === "ADMIN" || currentUser.phone === "9999999999") && (
          <Link
            href="/admin"
            className="w-full mt-4 py-3 px-4 rounded-2xl font-black text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition flex items-center justify-center gap-2"
          >
            <Settings size={15} />
            <span>الدخول إلى لوحة إدارة سيارات سودان زون ⚙</span>
          </Link>
        )}

        {/* Green Manage Account Button */}
        {isLoggedIn ? (
          <button 
            onClick={() => alert("بيانات الحساب محدثة وجاهزة")}
            className="w-full mt-5 py-3.5 px-6 rounded-2xl font-black text-sm bg-[#16a34a] hover:bg-[#15803d] text-white shadow-lg shadow-emerald-600/25 transition active:scale-95"
          >
            إدارة حسابي
          </button>
        ) : (
          <Link
            href="/auth/login"
            className="w-full mt-5 py-3.5 px-6 rounded-2xl font-black text-sm bg-[#0066cc] hover:bg-[#004d99] text-white shadow-lg shadow-blue-500/25 transition active:scale-95 text-center block"
          >
            تسجيل الدخول / فتح حساب
          </Link>
        )}
      </div>

      {/* 4. Menu List (Matching Screen 5) */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-black text-slate-800">{item.label}</span>
              </div>

              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-500 text-white shadow-sm">
                    {item.badge}
                  </span>
                )}
                <ChevronLeft size={16} className="text-slate-400" />
              </div>
            </Link>
          );
        })}

        {/* Log Out Button */}
        <div className="p-4">
          <button 
            onClick={isLoggedIn ? handleLogout : () => router.push("/auth/login")}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-[#0066cc] text-[#0066cc] font-black text-xs hover:bg-blue-50 transition active:scale-95"
          >
            <LogOut size={16} />
            <span>{isLoggedIn ? "تسجيل الخروج" : "تسجيل الدخول"}</span>
          </button>
        </div>
      </div>

      {/* 5. Brand Logo & Khartoum Skyline Footer (Matching Screen 8 & 5) */}
      <div className="text-center pt-2 space-y-2">
        <BrandLogo size="default" />
        {/* Silhouette Vector */}
        <div 
          className="h-14 opacity-25 bg-repeat-x bg-bottom"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%230066cc' d='M0,120 L0,90 L30,90 L30,60 L50,60 L50,90 L80,90 L80,40 L100,20 L120,40 L120,90 L160,90 L160,50 L190,50 L190,90 L240,90 L240,30 L270,30 L270,90 L320,90 L320,70 L350,70 L350,90 L400,90 L420,10 L440,90 L480,90 L480,45 L510,45 L510,90 L560,90 L560,65 L600,65 L600,90 L650,90 L650,35 L680,35 L680,90 L730,90 L730,55 L770,55 L770,90 L820,90 L850,15 L880,90 L920,90 L920,60 L960,60 L960,90 L1010,90 L1010,40 L1050,40 L1050,90 L1100,90 L1100,70 L1150,70 L1150,90 L1200,90 L1200,120 Z'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 40px"
          }}
        ></div>
      </div>
    </div>
  );
}
