import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata = {
  metadataBase: new URL("https://cars.sudanzon.com"),
  title: {
    default: "سودان زون للسيارات | SudanZon Cars - سوق ومعارض السيارات في السودان",
    template: "%s | سودان زون للسيارات"
  },
  description: "المنصة الرائدة لبيع وشراء وتأجير وفحص السيارات والمعارض في السودان (الخرطوم، بورتسودان، عطبرة، مدني وكافة الولايات). أسعار محدثة بالجنيه السوداني وتواصل فوري عبر الواتساب.",
  keywords: [
    "سيارات للبيع في السودان",
    "سوق السيارات السودان",
    "اسعار السيارات في السودان بالجنيه السوداني",
    "سيارات بورتسودان",
    "سيارات الخرطوم",
    "معارض السيارات في السودان",
    "تويوتا لاندكروزر السودان",
    "هيونداي توسان السودان",
    "نيسان كيكس السودان",
    "قطع غيار سيارات السودان",
    "فحص سيارات السودان",
    "جمارك السيارات السودان"
  ],
  authors: [{ name: "SudanZon Cars", url: "https://cars.sudanzon.com" }],
  creator: "SudanZon",
  publisher: "SudanZon Platform",
  alternates: {
    canonical: "https://cars.sudanzon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "ar_SD",
    url: "https://cars.sudanzon.com",
    siteName: "سودان زون للسيارات | SudanZon Cars",
    title: "سودان زون للسيارات | سوق ومعارض السيارات الأول في السودان",
    description: "تصفح مئات إعلانات السيارات المعتمدة بأسعار الجنيه السوداني وتواصل مباشرة مع المعارض والمعلنين عبر الواتساب.",
    images: [
      {
        url: "/brand_suite_thumb.png",
        width: 1200,
        height: 630,
        alt: "سودان زون للسيارات SudanZon Cars"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سودان زون للسيارات | SudanZon Cars",
    description: "أكبر سوق إلكتروني للسيارات والمعارض في السودان بالجنيه السوداني والدولار.",
    images: ["/brand_suite_thumb.png"],
  },
  verification: {
    google: "y-google-verification-code", // Can be overridden via Google Search Console HTML tag
  }
};

export default function RootLayout({ children }) {
  // Structured Data (Schema.org) for Google Rich Snippets
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "سودان زون للسيارات",
    "alternateName": "SudanZon Cars",
    "url": "https://cars.sudanzon.com",
    "inLanguage": "ar-SD",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cars.sudanzon.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "سودان زون للسيارات - SudanZon Cars",
    "url": "https://cars.sudanzon.com",
    "logo": "https://cars.sudanzon.com/logo.jpg",
    "image": "https://cars.sudanzon.com/brand_suite_thumb.png",
    "description": "منصة وسوق معارض السيارات المستعملة والجديدة في السودان بالجنيه السوداني.",
    "currenciesAccepted": "SDG, USD",
    "paymentAccepted": "Cash, Bankak, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SD",
      "addressLocality": "الخرطوم / بورتسودان"
    }
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#004d99" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
