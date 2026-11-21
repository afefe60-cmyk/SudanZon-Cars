"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2400);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div 
      onClick={() => router.push("/")}
      className="fixed inset-0 z-50 bg-[#4a96e6] flex flex-col justify-center items-center select-none overflow-hidden cursor-pointer"
    >
      <div className="relative w-full h-full max-w-lg flex items-center justify-center">
        <Image
          src="/splash-bg.jpg"
          alt="SudanZon Cars Splash"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 512px"
          className="object-cover sm:object-contain object-center"
        />

        {/* Animated Loader Indicator matching Native Android Splash */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center space-y-2.5 z-10 pointer-events-none">
          <div className="w-8 h-8 rounded-full border-3 border-white/30 border-t-white animate-spin"></div>
          <span className="text-white text-xs font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            جاري التحميل ...
          </span>
        </div>
      </div>
    </div>
  );
}
