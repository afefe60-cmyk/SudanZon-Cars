"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  FileCheck, 
  Wrench, 
  Truck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  AlertTriangle,
  HelpCircle,
  Building2
} from "lucide-react";

export default function ServicesPage() {
  const WHATSAPP_NUM = "24907620105";

  const services = [
    {
      id: "inspection",
      title: "خدمة الفحص الفني المعتمد للمركبات",
      badge: "قريباً ⏳",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      desc: "فحص ميداني شامل لشاسيه وماكينة وجيربوكس وبودي السيارة، مع تقرير كمبيوتر OBD موثق يصلك بالصور والفيديو.",
      icon: ShieldCheck,
      color: "text-amber-600 bg-amber-50",
      features: [
        "فحص خلو الهيكل والشاسيه من الصدمات والقص",
        "فحص المحرك ونسبة كفاءة الاحتراق والزيوت",
        "فحص الحساسات والكمبيوتر بالأجهزة المعتمدة",
        "تقرير شامل يساعدك في اتخاذ قرار الشراء"
      ],
      ctaText: "سجل اهتمامك واستفسر مسبقاً (قريباً)",
      whatsappMsg: "السلام عليكم، ارغب في التسجيل المسبق والاستفسار عن خدمة الفحص الفني المعتمد عند إطلاقها في سودان زون."
    },
    {
      id: "customs",
      title: "استشارات الجمارك والتخليص والترخيص",
      badge: "قريباً ⏳",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      desc: "فحص شهادات الوارد، مطابقة أرقام اللوحات، ورخص القيادة والملكية في بورتسودان والخرطوم والولايات.",
      icon: FileCheck,
      color: "text-blue-600 bg-blue-50",
      features: [
        "استعلام سريان الرخصة والوضع الجمركي",
        "المساعدة في استخراج وتجديد اللوحات",
        "التأكد من خلو المركبة من البلاغات والمخالفات",
        "إرشاد المشترين حول رسوم نقل الملكية"
      ],
      ctaText: "سجل اهتمامك بخدمة التخليص والجمارك (قريباً)",
      whatsappMsg: "السلام عليكم، ارغب في الاستفسار والتسجيل المسبق لخدمة التخليص الجمركي والترخيص في سودان زون."
    },
    {
      id: "towing",
      title: "شحن ونقل السيارات بين الولايات (سطحات)",
      badge: "قريباً ⏳",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      desc: "نقل آمن لمركبتك عبر تريلات وسطحات هيدروليكية مغلقة ومفتوحة بين بورتسودان والخرطوم وعطبرة ومدني.",
      icon: Truck,
      color: "text-indigo-600 bg-indigo-50",
      features: [
        "سطحات هيدروليكية مجهزة لنقل السيارات الصالون والـ 4x4",
        "تأمين شامل على المركبة أثناء عملية النقل",
        "مواعيد شحن منتظمة بين بورتسودان والولايات",
        "تسليم واستلام موثق بتقرير استلام رسمي"
      ],
      ctaText: "سجل اهتمامك بخدمة الشحن والسطحات (قريباً)",
      whatsappMsg: "السلام عليكم، ارغب في الاستفسار عن خدمة نقل وشحن السيارات بين الولايات عبر سطحات سودان زون."
    },
    {
      id: "warranty",
      title: "صيانة دورية وفحص ميكانيكي بالورش الشريكة",
      badge: "قريباً ⏳",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      desc: "شبكة ورش ومراكز صيانة شريكة معتمدة لتقديم الصيانة الدورية وتغيير الزيوت وقطع الغيار الأصلية.",
      icon: Wrench,
      color: "text-rose-600 bg-rose-50",
      features: [
        "ورش شريكة في بورتسودان والخرطوم وعطبرة",
        "خصومات خاصة لمستخدمي سودان زون للسيارات",
        "استخدام قطع غيار أصلية ومضمونة",
        "فنيين مدربين على سيارات تويوتا وهيونداي وكيا"
      ],
      ctaText: "سجل اهتمامك بشبكة الورش المعتمدة (قريباً)",
      whatsappMsg: "السلام عليكم، ارغب في الاستفسار عن شبكة الورش ومراكز الصيانة الشريكة في سودان زون."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-24" dir="rtl">
      
      {/* Top Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-[#004d99] to-slate-900 text-white p-6 sm:p-10 shadow-lg text-right relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
            <Clock size={14} className="animate-spin" />
            <span>خدمات وتسهيلات سودان زون للسيارات • قريباً ⏳</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-snug">
            خدمات وتسهيلات سودان زون للسيارات
          </h1>

          <p className="text-xs sm:text-base text-sky-100 leading-relaxed font-normal">
            نعمل حالياً على تجهيز باقة متكاملة من الخدمات الميدانية والشراكات الاستراتيجية لخدمة ملاك ومشتري السيارات في السودان. 
            <span className="font-bold text-amber-300 block sm:inline sm:mr-1">هذه الخدمات قيد التجهيز وستكون متاحة قريباً وليست متاحة الآن.</span>
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("السلام عليكم، ارغب في الاستفسار عن موعد إطلاق خدمات وتسهيلات سودان زون للسيارات والتسجيل المسبق.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <MessageSquare size={16} />
              <span>تسجيل اهتمام مسبق عبر الواتساب ({WHATSAPP_NUM})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Prominent Notice Banner (تنبيه هام) */}
      <div className="bg-amber-50/90 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 text-right flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
          <AlertTriangle size={26} />
        </div>
        <div className="space-y-1 flex-1">
          <h3 className="text-sm sm:text-base font-black text-amber-950">
            تنبيه هام للعملاء والزوار الكرام
          </h3>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            جميع الخدمات والتسهيلات المعروضة أدناه (الفحص الفني المعتمد، استشارات التخليص والجمارك، سطحات ونقل السيارات، وشبكة الورش) هي <strong>قيد التجهيز والتطوير المستمر وستكون متاحة قريباً جداً وليست متاحة للطلب المباشر في الوقت الحالي</strong>. يتاح الآن فقط التسجيل المسبق لحجز أسبقية الخدمة عند التدشين.
          </p>
        </div>
      </div>

      {/* Services Grid (4 Cards - All Marked Coming Soon) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-amber-400 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4 text-right relative overflow-hidden"
            >
              {/* Coming Soon top strip */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500"></div>

              <div>
                <div className="flex items-start justify-between gap-3 mb-3 pt-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-black border shadow-xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(item.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#004d99] text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare size={15} className="text-emerald-400" />
                  <span>{item.ctaText}</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 font-medium">
                  الخدمة قيد التدشين • سجل بياناتك للتواصل فور الإطلاق
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partnership & Provider Callout */}
      <div className="bg-gradient-to-l from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#004d99] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
            <Building2 size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-black text-base text-slate-900">
              هل أنت مزود خدمة وترغب في الشراكة مع سودان زون؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نرحب بمراكز الفحص الفني، وشركات السحب والنقل (السطحات)، والمخلصين الجمركيين المعتمدين، والورش المتخصصة للانضمام إلى شبكة مزودي الخدمات الرسمية في منصة سودان زون قبل موعد التدشين الرسمي.
            </p>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("السلام عليكم، ارغب في التقدم كشريك أو مزود خدمة معتمد في منصة سودان زون للسيارات.")}`}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-[#004d99] hover:bg-[#003366] text-white rounded-2xl text-xs sm:text-sm font-black transition flex items-center gap-2 shrink-0 shadow-md hover:scale-[1.02]"
        >
          <MessageSquare size={16} />
          <span>انضم كشريك خدمة ({WHATSAPP_NUM})</span>
        </a>
      </div>

    </div>
  );
}
