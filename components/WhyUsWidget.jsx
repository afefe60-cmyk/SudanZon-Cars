import { ShieldCheck, Headphones, Users } from "lucide-react";

export default function WhyUsWidget() {
  const points = [
    { title: "ثقة وأمان في التعامل", icon: ShieldCheck, color: "text-[#16a34a]" },
    { title: "إعلانات مضمونة ومراجعة", icon: ShieldCheck, color: "text-[#16a34a]" },
    { title: "دعم فني وخدمة عملاء مميزة", icon: Headphones, color: "text-sky-600" },
    { title: "وصول أكبر لمشترين حقيقيين", icon: Users, color: "text-[#16a34a]" },
  ];

  return (
    <>
    <div className="home-why-reference hidden lg:block">
      <img src="/homepage-why-reference.jpg" alt="لماذا السودان زون للسيارات؟ ثقة وأمان وإعلانات مراجعة ودعم فني ووصول للمشترين" />
    </div>
    <div className="home-why-original home-why-card bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between space-y-6 lg:hidden">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-6 bg-[#0066cc] rounded-full"></span>
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            لماذا السودان زون للسيارات؟
          </h3>
        </div>

        <div className="space-y-4">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  <Icon size={16} className={pt.color} />
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-800">
                  {pt.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Car Vector with Slogan */}
      <div className="pt-4 border-t border-slate-100 text-center space-y-2">
        <svg className="w-36 h-12 mx-auto text-[#0066cc]" viewBox="0 0 200 60" fill="none">
          <path
            d="M 15 42 C 35 42, 50 24, 75 20 L 125 20 C 145 20, 160 32, 185 42 Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="52" cy="42" r="8.5" stroke="currentColor" strokeWidth="3" />
          <circle cx="148" cy="42" r="8.5" stroke="currentColor" strokeWidth="3" />
        </svg>
        <p className="text-xs font-black text-[#0066cc]">
          مع السودان زون .. بيع واشتري بسهولة
        </p>
      </div>
    </div>
    </>
  );
}
