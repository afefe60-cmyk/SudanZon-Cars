"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Headphones, 
  Users, 
  MessageSquare,
  PlusCircle,
  PhoneCall
} from "lucide-react";

export default function WhyUsWidget() {
  const whatsappHelp = encodeURIComponent(
    "السلام عليكم، أحتاج مساعدة أو استفسار بخصوص منصة سودان زون للسيارات."
  );

  const features = [
    {
      title: "ثقة وأمان في التعامل",
      desc: "بيانات معلنين موثقة وفحص فني للمركبات",
      icon: ShieldCheck,
      iconBg: "bg-emerald-500 text-white",
    },
    {
      title: "إعلانات مضمونة ومراجعة",
      desc: "تدقيق للأسعار والمواصفات وخلو الشاسيه",
      icon: ShieldCheck,
      iconBg: "bg-emerald-500 text-white",
    },
    {
      title: "دعم فني وخدمة عملاء مميزة",
      desc: "فريق دعم فني متواجد لمساعدتك في كل خطوة",
      icon: Headphones,
      iconBg: "bg-emerald-500 text-white",
    },
    {
      title: "وصول أكبر لمشترين حقيقيين",
      desc: "آلاف المشاهدات اليومية في كافة ولايات السودان",
      icon: Users,
      iconBg: "bg-emerald-500 text-white",
    },
  ];

  return (
    <div className="w-full bg-[#f4f7fc] hover:bg-[#edf2fa] rounded-3xl border border-blue-100/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 text-right">
      
      {/* 1. Card Header - Matching Reference Design */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#004d99] rounded-full inline-block"></span>
            <h3 className="text-base sm:text-lg font-black text-[#003b8e] tracking-tight">
              لماذا سودان زون للسيارات؟
            </h3>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            المنصة الأولى 🇸🇩
          </span>
        </div>

        {/* 2. Four Key Advantages with Vibrant Green Icons */}
        <div className="space-y-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-2.5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all flex items-center justify-between gap-3 shadow-xs"
              >
                {/* Title & Desc */}
                <div className="flex-1">
                  <div className="text-xs sm:text-sm font-black text-slate-800">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {item.desc}
                  </div>
                </div>

                {/* Green Verified Icon */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} shadow-sm`}>
                  <Icon size={18} strokeWidth={2.4} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. High-Definition Vector Car Silhouette (Recreating the Reference Graphic Crisp & Scalable) */}
      <div className="pt-2 text-center space-y-2 border-t border-blue-100/60">
        <div className="w-full flex justify-center items-center py-1">
          <svg 
            className="w-56 h-14 text-[#004d99]" 
            viewBox="0 0 340 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Upper aerodynamic coupe silhouette (Roof, Hood, Trunk) */}
            <path 
              d="M 32 68 C 65 65 110 52 145 35 C 180 18 245 16 280 32 C 305 44 325 58 335 62 C 315 60 270 54 225 48 C 175 42 110 46 65 56 C 48 60 38 65 32 68 Z" 
              fill="currentColor" 
            />

            {/* Cabin Window Cutout Accent */}
            <path 
              d="M 175 33 C 205 23 245 22 268 32 C 248 37 212 40 182 39 C 172 38 168 35 175 33 Z" 
              fill="#f4f7fc" 
            />

            {/* Dynamic Lower Body Speed Flow Stroke */}
            <path 
              d="M 45 74 C 110 70 230 70 315 74" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Slogan */}
        <p className="text-xs sm:text-sm font-black text-[#004d99] tracking-tight">
          مع سودان زون .. بيع واشتري بسهولة وأمان
        </p>
      </div>

      {/* 4. Action CTAs (Add Car + Official WhatsApp Support) */}
      <div className="space-y-2 pt-1">
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
          className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow flex items-center justify-center gap-2"
        >
          <MessageSquare size={15} />
          <span>تواصل واتساب مباشر: 24907620105</span>
        </a>
      </div>

    </div>
  );
}
