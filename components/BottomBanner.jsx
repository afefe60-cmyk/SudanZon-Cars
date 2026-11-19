import Link from "next/link";
import { Handshake, UserPlus } from "lucide-react";

export default function BottomBanner() {
  return (
    <div className="home-bottom-banner relative rounded-3xl overflow-hidden bg-gradient-to-l from-[#072548] via-[#0b386e] to-[#0066cc] text-white p-6 sm:p-7 shadow-xl">
      {/* Background Skyline Silhouette */}
      <div 
        className="absolute bottom-0 inset-x-0 h-28 opacity-15 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23ffffff' d='M0,120 L0,90 L30,90 L30,60 L50,60 L50,90 L80,90 L80,40 L100,20 L120,40 L120,90 L160,90 L160,50 L190,50 L190,90 L240,90 L240,30 L270,30 L270,90 L320,90 L320,70 L350,70 L350,90 L400,90 L420,10 L440,90 L480,90 L480,45 L510,45 L510,90 L560,90 L560,65 L600,65 L600,90 L650,90 L650,35 L680,35 L680,90 L730,90 L730,55 L770,55 L770,90 L820,90 L850,15 L880,90 L920,90 L920,60 L960,60 L960,90 L1010,90 L1010,40 L1050,40 L1050,90 L1100,90 L1100,70 L1150,70 L1150,90 L1200,90 L1200,120 Z'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 50px"
        }}
      ></div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Right side in RTL: Handshake Icon & Headline */}
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-white p-3">
            <Handshake size={32} />
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              انضم إلى آلاف المستخدمين في السودان زون للسيارات
            </h3>
          </div>
        </div>

        {/* Left side in RTL: Yellow Button */}
        <Link
          href="/auth/register"
          className="inline-flex items-center gap-2 py-3 px-8 rounded-2xl font-black text-slate-900 bg-[#f59e0b] hover:bg-[#d97706] shadow-xl shadow-amber-500/25 transition active:scale-95 shrink-0"
        >
          <UserPlus size={18} />
          <span>سجل الآن</span>
        </Link>
      </div>
    </div>
  );
}
