import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="cars-footer bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative rounded-xl overflow-hidden bg-sky-900 p-1" style={{ width: 40, height: 40 }}>
                <Image src="/icon.jpg" alt="سودان زون للسيارات" width={40} height={40} className="object-cover" />
              </div>
              <div dir="ltr" className="flex items-center text-xl font-black">
                <span className="text-white">Sudan</span>
                <span className="text-amber-400">Zon</span>
                <span className="mr-1.5 px-2 py-0.5 text-xs font-bold rounded bg-sky-500 text-white">
                  CARS
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              سودان زون للسيارات: منصتك الأولى المتخصصة لبيع، شراء، واستيراد وتأجير المركبات في السودان، مع خدمات التحقق والفحص الجمركي والتواصل الفوري مع البائعين والمعارض المعتمدة.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck size={16} />
              منظومة سودان زون الرقمية المعتمدة
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-sky-500 pr-2">
              تصفح السيارات
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/?category=toyota" className="hover:text-amber-400 transition">سيارات تويوتا (Toyota)</Link></li>
              <li><Link href="/?category=hyundai" className="hover:text-amber-400 transition">سيارات هيونداي (Hyundai)</Link></li>
              <li><Link href="/?category=kia" className="hover:text-amber-400 transition">سيارات كيا (Kia)</Link></li>
              <li><Link href="/?category=mitsubishi" className="hover:text-amber-400 transition">سيارات ميتسوبيشي (Mitsubishi)</Link></li>
              <li><Link href="/?category=suv" className="hover:text-amber-400 transition">سيارات دفع رباعي وعائلية (SUV)</Link></li>
              <li><Link href="/?category=commercial" className="hover:text-amber-400 transition">شاحنات وبكاسي تجارية (Pickup)</Link></li>
            </ul>
          </div>

          {/* Services & Showrooms */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-sky-500 pr-2">
              خدمات وتسهيلات
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/showrooms" className="hover:text-amber-400 transition">معارض السيارات بالولايات</Link></li>
              <li><Link href="/spare-parts" className="hover:text-amber-400 transition">سوق قطع الغيار الأصلية</Link></li>
              <li><Link href="/customs" className="hover:text-amber-400 transition">دليل الجمارك والتسجيل</Link></li>
              <li><Link href="/inspection" className="hover:text-amber-400 transition">خدمة الفحص الفني المعتمد</Link></li>
              <li><Link href="/add-car" className="text-sky-400 font-bold hover:underline">أضف سيارتك للبيع مجاناً</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-sky-500 pr-2">
              خدمة العملاء
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-sky-400 shrink-0" />
                <span>السودان: بورتسودان • الخرطوم • عطبرة</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <span dir="ltr">+249 99 999 9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <span dir="ltr">cars@sudanzon.com</span>
              </div>
              <div className="pt-2">
                <a 
                  href="http://localhost:3002"
                  className="inline-block px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
                >
                  الانتقال إلى سوق سودان زون الشامل ➔
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} SudanZon Cars. جميع الحقوق محفوظة لشبكة سودان زون.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition">سياسة الخصوصية</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition">الشروط والأحكام</Link>
            <span>•</span>
            <div className="flex items-center gap-1">
              <span>صُنع في السودان</span>
              <Heart size={12} className="text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
