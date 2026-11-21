"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Plus, Heart, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "بحث", href: "/search", icon: Search },
    { label: "إضافة إعلان", href: "/add-car", icon: Plus, isCta: true },
    { label: "المفضلة", href: "/favorites", icon: Heart },
    { label: "حسابي", href: "/account", icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-slate-200/90 px-3 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isCta) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-6 group"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#16a34a] text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 border-[3px] border-white group-active:scale-95 transition-transform p-3">
                  <Plus size={26} strokeWidth={3} />
                </div>
                <span className="text-[10px] font-bold text-slate-700 mt-0.5">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-1 px-3 rounded-xl transition ${
                isActive
                  ? "text-[#0066cc] font-extrabold"
                  : "text-slate-400 hover:text-slate-700 font-medium"
              }`}
            >
              <Icon size={21} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
