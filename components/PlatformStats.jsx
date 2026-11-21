"use client";

import { Car, Building2, TrendingUp, ShieldCheck, Users, Headphones } from "lucide-react";

export default function PlatformStats() {
  const stats = [
    {
      label: "سيارة معروضة للبيع",
      value: "500+",
      subtext: "مستعملة وزيرو بالجنيه والدولار",
      icon: Car,
      color: "text-blue-600 bg-blue-50"
    },
    {
      label: "معرض وتوكيل معتمد",
      value: "45+",
      subtext: "في الخرطوم والولايات",
      icon: Building2,
      color: "text-purple-600 bg-purple-50"
    },
    {
      label: "صفقة سيارة ناجحة",
      value: "1,200+",
      subtext: "تواصل مباشر بين البائع والمشتري",
      icon: TrendingUp,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      label: "دعم ومساعدة فورية",
      value: "24/7",
      subtext: "فريق دعم متخصص عبر الواتساب",
      icon: Headphones,
      color: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-sm text-right">
      <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
        <h3 className="text-base sm:text-lg font-black text-slate-900">سودان زون للسيارات بالأرقام</h3>
        <p className="text-xs text-slate-500">المنصة الأسرع نمواً لتجارة ومعارض السيارات في السودان</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                <Icon size={20} />
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{item.value}</div>
              <div className="text-xs font-bold text-slate-800">{item.label}</div>
              <div className="text-[10px] text-slate-400">{item.subtext}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
