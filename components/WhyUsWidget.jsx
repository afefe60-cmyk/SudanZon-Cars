"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Headphones, 
  Users, 
  Sparkles, 
  PlusCircle, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function WhyUsWidget() {
  const whatsappHelp = encodeURIComponent(
    "السلام عليكم، أحتاج مساعدة أو استفسار بخصوص سودان زون للسيارات."
  );

  const features = [
    {
      title: "ثقة وأمان في التعامل",
      desc: "بيانات معلنين موثقة وخيارات فحص فني ميداني معتمد للسيارة",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "إعلانات مضمونة ومراجعة",
      desc: "تدقيق يدوي للأسعار والمواصفات وخلو الشاسيه من الصدمات",
      icon: CheckCircle2,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "دعم فني وخدمة عملاء مميزة",
      desc: "فريق دعم واستشارات متواجد عبر الواتساب على مدار الساعة",
      icon: Headphones,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "وصول أكبر لمشترين حقيقيين",
      desc: "آلاف المشاهدات اليومية من كافة ولايات السودان والمغتربين",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-right">
      
      {/* 1. Card Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#004d99] rounded-full inline-block"></span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              لماذا سودان زون للسيارات؟
            </h3>
          </div>

          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-[#004d99] border border-blue-100 flex items-center gap-1">
            <Sparkles size={11} className="text-amber-500" />
            <span>الخيار الأول 🇸🇩</span>
          </span>
        </div>

        <p className="text-xs text-slate-500 font-medium leading-relaxed pr-3.5 mb-4">
          المنصة الوطنية المتخصصة التي تجمع المشترين والمعارض والبائعين مباشرة بدون عمولات خفية.
        </p>

        {/* 2. Features List with Vector Icons */}
        <div className="space-y-3.5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group p-3 rounded-2xl bg-slate-50/70 hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all flex items-start gap-3"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Action CTAs (Add Car + WhatsApp Support) */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <Link
          href="/add-car"
          className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition shadow flex items-center justify-center gap-2 hover:scale-[1.01]"
        >
          <PlusCircle size={15} />
          <span>أضف سيارتك للبيع مجاناً الآن</span>
        </Link>

        <a
          href={`https://wa.me/24907620105?text=${whatsappHelp}`}
          target="_blank"
          rel="noreferrer"
          className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs transition border border-slate-200/80 flex items-center justify-center gap-2"
        >
          <MessageSquare size={14} className="text-emerald-600" />
          <span>استفسار أو مساعدة عبر الواتساب (24907620105)</span>
        </a>
      </div>

      {/* 4. Elegant High-Precision Vector Car Contour + Slogan */}
      <div className="pt-2 border-t border-slate-100 text-center space-y-2">
        <div className="w-full flex justify-center items-center py-1">
          <svg 
            className="w-48 h-12 text-[#004d99]" 
            viewBox="0 0 240 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Aerodynamic sports roof & hood contour */}
            <path 
              d="M 12 46 C 30 46, 50 38, 70 28 C 95 16, 140 16, 175 28 C 195 35, 215 44, 230 46" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
            />
            {/* Front windshield accent */}
            <path 
              d="M 85 26 C 110 18, 145 18, 165 26" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              opacity="0.6"
            />
            {/* Dynamic speed underline */}
            <path 
              d="M 28 52 L 212 52" 
              stroke="url(#car-speed-grad)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            {/* Rear wheel arch */}
            <circle cx="58" cy="46" r="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="58" cy="46" r="3.5" fill="#004d99" />
            {/* Front wheel arch */}
            <circle cx="182" cy="46" r="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="182" cy="46" r="3.5" fill="#004d99" />

            <defs>
              <linearGradient id="car-speed-grad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#004d99" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#004d99" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="text-xs font-black text-[#004d99] tracking-wide">
          مع سودان زون .. بيع واشتري بسهولة وأمان
        </p>
        <p className="text-[10px] text-slate-400 font-medium">
          SudanZon Cars • سوق السيارات الموثوق
        </p>
      </div>

    </div>
  );
}
