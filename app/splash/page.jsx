"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BrandLogo from "../../components/BrandLogo";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center select-none overflow-hidden">
      <div className="relative w-full h-full max-w-md max-h-[850px] flex items-center justify-center">
        <Image
          src="/splash-bg.jpg"
          alt="SudanZon Cars Splash"
          fill
          priority
          className="object-cover md:object-contain"
        />
      </div>
    </div>
  );
}
