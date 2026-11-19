import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
          <AlertCircle size={36} />
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2">404 - الصفحة غير موجودة</h1>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          عذراً، الصفحة أو الإعلان الذي تبحث عنه غير متوفر أو تم نقله.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-600/20 transition-all active:scale-[0.98]"
        >
          <span>العودة للرئيسية</span>
          <ArrowRight size={18} className="rotate-180" />
        </Link>
      </div>
    </div>
  );
}
