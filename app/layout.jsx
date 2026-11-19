import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata = {
  metadataBase: new URL("https://cars.sudanzon.com"),
  title: "سودان زون للسيارات | SudanZon Cars - سوق ومعارض السيارات بالسودان",
  description: "المنصة الرائدة لبيع وشراء وتأجير وفحص السيارات والمعارض في السودان (الخرطوم، بورتسودان، عطبرة، مدني وكافة الولايات). تواصل فوري عبر الواتساب والاتصال الهاتفي.",
  keywords: "سيارات السودان, سوق السيارات بالخرطوم, سيارات بورتسودان, تويوتا لاندكروزر, هيونداي آكسنت, اسعار السيارات بالسودان, معارض السيارات",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  openGraph: {
    title: "سودان زون للسيارات | SudanZon Cars",
    description: "تصفح مئات السيارات المعروضة للبيع بأسعار الجنيه والدولار وتواصل مع البائعين والمعارض مباشرة.",
    images: ["/logo.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#0284c7" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900 pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
