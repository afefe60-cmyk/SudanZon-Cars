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
  Phone, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from "lucide-react";

export default function ServicesPage() {
  const WHATSAPP_NUM = "24907620105";

  const services = [
    {
      id: "inspection",
      title: "خدمة الفحص الفني المعتمد للمركبات",
      badge: "قريباً ⏳",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
      desc: "فحص ميداني شامل لشاسيه وماكينة وجيربوكس وبودي السيارة، مع تقرير كمبيوتر OBD موثق يصلك بالصور والفيديو.",
      icon: ShieldCheck,
      color: "text-amber-600 bg-amber-50",
      features: [
        "فحص خلو الهيكل والشاسيه من الصدمات والقص",
        "فحص المحرك ونسبة كفاءة الاحتراق والزيوت",
        "فحص الحساسات والكمبيوتر بالأجهزة المعتمدة",
        "تقرير شامل يساعدك في اتخاذ قرار الشراء"
      ],
      ctaText: "سجل اهتمامك واستفسر مسبقاً",
      whatsappMsg: "السلام عليكم، ارغب في الاستفسار عن خدمة الفحص الفني المعتمد في سودان زون والتسجيل المسبق."
    },
    {
      id: "customs",
      title: "استشارات الجمارك والتخليص والترخيص",
      badge: "متاحة الآن ✔",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
      desc: "فحص شهادات الوارد، مطابقة أرقام اللوحات، ورخص القيادة والملكية في بورتسودان والخرطوم والولايات.",
      icon: FileCheck,
      color: "text-emerald-600 bg-emerald-50",
      features: [
        "استعلام سريان الرخصة والوضع الجمركي",
        "المساعدة في استخراج وتجديد اللوحات",
        "التأكد من خلو المركبة من البلاغات والمخالفات",
        "إرشاد المشترين حول رسوم نقل الملكية"
      ],
      ctaText: "استشارة جمركية عبر الواتساب",
      whatsappMsg: "السلام عليكم، ارغب في استشارة جمركية وتخليص سيارة في سودان زون."
    },
    {
      id: "towing",
      title: "شحن ونقل السيارات بين الولايات (سطحات)",
      badge: "متاحة الآن ✔",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "نقل آمن لمركبتك عبر تريلات وسطحات هيدروليكية مغلقة ومفتوحة بين بورتسودان والخرطوم وعطبرة ومدني.",
      icon: Truck,
      color: "text-blue-600 bg-blue-50",
      features: [
        "سطحات هيدروليكية مجهزة لنقل السيارات الصالون والـ 4x4",
        "تأمين شامل على المركبة أثناء عملية النقل",
        "مواعيد شحن منتظمة بين بورتسودان والولايات",
        "تسليم واستلام موثق بتقرير استلام رسمي"
      ],
      ctaText: "طلب سطحة ونقل مركبة",
      whatsappMsg: "السلام عليكم، ارغب في طلب سطحة ونقل سيارة بين الولايات عبر سودان زون."
    },
    {
      id: "warranty",
      title: "صيانة دورية وفحص ميكانيكي بالورش",
      badge: "متاحة الآن ✔",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
      desc: "شبكة ورش ومراكز صيانة شريكة معتمدة لتقديم الصيانة الدورية وتغيير الزيوت وقطع الغيار الأصلية.",
      icon: Wrench,
      color: "text-purple-600 bg-purple-50",
      features: [
        "ورش شريكة في بورتسودان والخرطوم وعطبرة",
        "خصومات خاصة لمستخدمي سودان زون للسيارات",
        "استخدام قطع غيار أصلية ومضمونة",
        "فنيين مدربين على سيارات تويوتا وهيونداي وكيا"
      ],
      ctaText: "تواصل مع قسم الصيانة",
      whatsappMsg: "السلام عليكم، ارغب في الاستفسار عن الورش ومراكز الصيانة المعتمدة في سودان زون."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-24" dir="rtl">
      
      {/* Top Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-[#004d99] to-slate-900 text-white p-6 sm:p-10 shadow-lg text-right relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
            <Sparkles size={14} />
            <span>خدمات سيارات متكاملة للمواطنين والمغتربين</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-snug">
            خدمات وتسهيلات سودان زون للسيارات
          </h1>

          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
            حلول موثوقة تضمن لك الأمان والراحة التامة في فحص وترخيص وشحن ونقل سيارتك في كافة ولايات السودان. تواصل معنا مباشرة عبر الواتساب على الرقم المعتمد: <span dir="ltr" className="font-bold text-amber-300">+249 076 20105</span>.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("السلام عليكم، ارغب في الاستفسار عن خدمات سودان زون للسيارات.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <MessageSquare size={16} />
              <span>محادثة واتساب فورية ({WHATSAPP_NUM})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4 text-right"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-black border ${item.badgeColor}`}>
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
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(item.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#004d99] text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare size={15} className="text-emerald-400" />
                  <span>{item.ctaText}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Callout Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
            <HelpCircle size={22} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">هل تحتاج خدمة مخصصة أو استشارة خاصة؟</h4>
            <p className="text-xs text-slate-500">فريق سودان زون للسيارات جاهز لخدمتك والتنسيق معك خطوة بخطوة</p>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUM}`}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 shadow"
        >
          <MessageSquare size={15} />
          <span>تواصل معنا الآن: {WHATSAPP_NUM}</span>
        </a>
      </div>

    </div>
  );
}
