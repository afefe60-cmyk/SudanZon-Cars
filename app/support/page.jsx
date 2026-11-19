import { Headphones, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
      <div className="bg-gradient-to-r from-[#0066cc] to-[#0f3360] text-white rounded-3xl p-8 text-center space-y-3 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-amber-400">
          <Headphones size={28} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">الدعم والمساعدة الفورية</h1>
        <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
          فريق خدمة عملاء سودان زون للسيارات متواجد على مدار الساعة لمساعدتك في نشر إعلاناتك أو فحص سيارتك.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp direct card */}
        <a
          href="https://wa.me/249912345678"
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:border-emerald-500 shadow-sm transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#16a34a] flex items-center justify-center shrink-0">
            <MessageCircle size={24} />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900">محادثة واتساب مباشرة</h3>
            <span className="text-xs text-[#16a34a] font-bold">رد فوري خلال دقائق</span>
          </div>
        </a>

        {/* Direct Call card */}
        <a
          href="tel:+249912345678"
          className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:border-blue-500 shadow-sm transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900">اتصال هاتفي مباشر</h3>
            <span className="text-xs text-slate-500 font-bold" dir="ltr">+249 912 345 678</span>
          </div>
        </a>
      </div>
    </div>
  );
}
