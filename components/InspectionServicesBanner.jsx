"use client";

import Link from "next/link";
import { ShieldCheck, Wrench, FileSearch, CheckCircle2, MessageSquare, Clock, Sparkles } from "lucide-react";

export default function InspectionServicesBanner() {
  const whatsappMsg = encodeURIComponent(
    "السلام عليكم، ارغب في الاستفسار عن خدمة الفحص الفني المعتمد والتسجيل المسبق في سودان زون للسيارات."
  );

  return (
    <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-[#003366] to-[#004d99] text-white p-6 sm:p-8 shadow-xl border border-sky-800/40 relative">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-right">
        
        {/* Left/Main Column: Title & Features */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black shadow-sm">
            <Clock size={14} className="text-amber-400 animate-spin" />
            <span>خدمة الفحص الفني المعتمد من سودان زون • قريباً ⏳</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
            تطلق المنصة قريباً خدمة الفحص الفني الشامل <br className="hidden sm:inline" />
            <span className="text-amber-300">واضمن سلامة الشاسيه والماكينة والجمارك قبل الشراء</span>
          </h2>

          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
            نعمل حالياً على تجهيز مراكز ومهندسين معتمدين للفحص الميداني الاحترافي للسيارات في بورتسودان، الخرطوم، وعطبرة، مع إصدار تقرير فحص تفصيلي بالصور والفيديو على هاتفك مباشرة.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
              <span>فحص الهيكل والشاسيه والتأكد من خلو الصدمات والدهان</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
              <span>فحص المحرك وناقل الحركة وكمبيوتر السيارة OBD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
              <span>مطابقة أرقام اللوحات والتأكد من الوضع الجمركي</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
              <span>تقرير معتمد ومصور يصلك على الواتساب فور الفحص</span>
            </div>
          </div>
        </div>

        {/* Right Action Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center space-y-3 w-full sm:w-80 flex-shrink-0">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow">
            تدشين الخدمة قريباً جداً
          </div>
          <div className="text-xs text-sky-200 font-bold">كن أول المستفيدين عند إطلاق الخدمة</div>
          <p className="text-[11px] text-sky-100">سجل اهتمامك الآن عبر الواتساب وسنتواصل معك فور الإطلاق</p>

          <div className="space-y-2 pt-1">
            <a
              href={`https://wa.me/24907620105?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>استفسار أو حجز مسبق (24907620105)</span>
            </a>

            <div className="text-[11px] text-sky-200/80 font-medium">
              الرقم المعتمد: <span dir="ltr" className="font-bold text-white">+249 076 20105</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
