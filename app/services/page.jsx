import Link from "next/link";
import { ShieldCheck, FileCheck, Wrench, Truck, ArrowLeft } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "خدمة الفحص الفني المعتمد",
      desc: "فحص شامل للمحرك والجيربوكس والشاسيه والطلاء بتقرير معتمد قبل إتمام الشراء.",
      icon: ShieldCheck,
      color: "text-[#0066cc] bg-blue-50",
    },
    {
      title: "خدمات الجمارك والترخيص",
      desc: "مساعدتك في فحص شهادات الوارد، تخليص أوراق الجمارك، ورخص القيادة والملكية.",
      icon: FileCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "شحن ونقل السيارات بين الولايات",
      desc: "نقل آمن لمركبتك عبر سطحات وتريلات مجهزة بين بورتسودان والخرطوم وكافة المدن.",
      icon: Truck,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "صيانة وضمان المعارض",
      desc: "خدمات ما بعد البيع عبر شبكة ورش ووكالات معتمدة في كافة أرجاء السودان.",
      icon: Wrench,
      color: "text-rose-600 bg-rose-50",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 pb-24">
      <div className="bg-gradient-to-r from-[#0a2540] to-[#0f3360] text-white rounded-3xl p-8 shadow-sm text-center sm:text-right">
        <h1 className="text-2xl sm:text-3xl font-black">خدمات وتسهيلات سودان زون للسيارات</h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
          حلول متكاملة تضمن لك الأمان والراحة التامة في بيع، شراء، فحص، وترخيص المركبات في السودان.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.color}`}>
                <Icon size={24} />
              </div>
              <h3 className="text-base font-black text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
