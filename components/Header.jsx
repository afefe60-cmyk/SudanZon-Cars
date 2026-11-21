"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { 
  Home, 
  Car, 
  Building2, 
  Tag, 
  Wrench, 
  Headphones, 
  User, 
  LogIn, 
  UserPlus, 
  Bell, 
  Menu, 
  X,
  PlusCircle,
  ArrowLeft,
  LogOut,
  ShieldAlert,
  Settings,
  MessageSquare,
  Heart
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sudanzon_user");
      const token = localStorage.getItem("sudanzon_token");
      if (stored && token) {
        setCurrentUser(JSON.parse(stored));
      } else {
        setCurrentUser(null);
      }
    } catch (e) {
      setCurrentUser(null);
    }
  }, [pathname]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("sudanzon_user");
      localStorage.removeItem("sudanzon_token");
      setCurrentUser(null);
      window.location.href = "/";
    } catch (e) {}
  };

  const navLinks = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "جميع السيارات", href: "/cars", icon: Car },
    { label: "المعارض", href: "/showrooms", icon: Building2 },
    { label: "قطع الغيار", href: "/spare-parts", icon: Tag },
    { label: "الخدمات", href: "/services", icon: Wrench },
    { label: "الدعم والمساعدة", href: "/support", icon: Headphones },
  ];

  const isAdmin = currentUser?.role === "ADMIN";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-none border-0">
      {/* 1. Desktop Top Bar (Navy Blue #004d99) */}
      <div className="hidden lg:block bg-[#004d99] text-white text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Right: Welcome Greeting & User Status */}
          <div className="flex items-center gap-2 font-bold">
            <User size={14} className="text-amber-400" />
            {currentUser ? (
              <div className="flex items-center gap-2">
                <span>مرحباً بك،</span>
                <span className="text-amber-300 font-black">{currentUser.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-600/80 text-white font-bold">
                  {isAdmin ? "إدارة المنصة" : "عضو موثق"}
                </span>
              </div>
            ) : (
              <span>مرحباً بك في السودان زون للسيارات</span>
            )}
          </div>

          {/* Left: Dynamic Auth Links */}
          <div className="flex items-center gap-4 font-bold">
            <Link href="/favorites" className="flex items-center gap-1.5 hover:text-amber-300 transition">
              <Heart size={14} />
              <span>المفضلة</span>
            </Link>
            <span className="text-sky-300/40">|</span>
            {currentUser ? (
              <>
                {isAdmin && (
                  <>
                    <Link
                      href="/admin"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400 text-slate-900 hover:bg-amber-300 font-black shadow-sm transition"
                    >
                      <Settings size={13} />
                      <span>لوحة إدارة السيارات</span>
                    </Link>
                    <span className="text-sky-300/40">|</span>
                  </>
                )}

                <Link 
                  href="/account" 
                  className="flex items-center gap-1.5 hover:text-amber-300 transition"
                >
                  <User size={13} />
                  <span>حسابي</span>
                </Link>

                <span className="text-sky-300/40">|</span>

                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 transition"
                >
                  <LogOut size={13} />
                  <span>تسجيل الخروج</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/auth/login" 
                  className="flex items-center gap-1.5 hover:text-amber-300 transition"
                >
                  <LogIn size={13} />
                  <span>تسجيل الدخول</span>
                </Link>
                <span className="text-sky-300/40">|</span>
                <Link 
                  href="/auth/register" 
                  className="flex items-center gap-1.5 hover:text-amber-300 transition"
                >
                  <UserPlus size={13} />
                  <span>إنشاء حساب جديد</span>
                  <ArrowLeft size={12} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 2. Desktop Main Navigation Bar */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Right: Official Logo from the folder */}
          <BrandLogo size="default" className="home-desktop-logo" />

          {/* Left: Nav Tabs */}
          <nav className="home-nav-standard" aria-label="التنقل الرئيسي">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`home-nav-item flex flex-col items-center justify-center gap-1.5 font-black transition relative ${
                    isActive
                      ? "is-active"
                      : ""
                  }`}
                >
                  <Icon size={22} strokeWidth={2.7} aria-hidden="true" />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="home-nav-underline absolute -bottom-1 inset-x-3 h-[3px] bg-[#0066cc] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 3. Mobile Header */}
      <div className="home-mobile-header lg:hidden px-4 py-2.5 flex items-center justify-between">
        <Link 
          href="/notifications" 
          className="relative p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition active:scale-95"
          aria-label="الإشعارات"
        >
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </Link>

        {/* Center Logo */}
        <BrandLogo size="small" className="home-mobile-logo" />

        {/* Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition active:scale-95"
          aria-label="القائمة"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
            {currentUser ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">مرحباً،</span>
                  <span className="text-slate-900 font-black">{currentUser.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">
                    حسابي
                  </Link>
                  <span>•</span>
                  <button onClick={handleLogout} className="text-rose-500">
                    خروج
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="text-slate-500">حسابك في سودان زون</span>
                <div className="flex items-center gap-2">
                  <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)} className="text-[#0066cc]">تسجيل الدخول</Link>
                  <span>•</span>
                  <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)} className="text-emerald-600">حساب جديد</Link>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col space-y-1 font-bold text-sm text-slate-700">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <Icon size={18} className="text-[#0066cc]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Link
              href="/messages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition"
            >
              <MessageSquare size={18} className="text-[#0066cc]" />
              <span>المحادثات</span>
            </Link>
            <Link
              href="/add-car"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow"
            >
              <PlusCircle size={18} />
              <span>+ أضف إعلانك الآن</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
