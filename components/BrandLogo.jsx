import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ size = "default", className = "" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  const width = isLarge ? 240 : isSmall ? 130 : 180;
  const height = isLarge ? 54 : isSmall ? 30 : 40;

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center select-none group transition-transform hover:scale-[1.02] active:scale-95 ${className}`}
    >
      <div className="relative" style={{ width, height }}>
        <Image
          src="/logo.png"
          alt="SudanZon CARS"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
