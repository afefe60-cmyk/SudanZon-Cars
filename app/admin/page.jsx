"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Car, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Star, 
  AlertTriangle, 
  Eye, 
  Trash2, 
  Edit3, 
  Plus, 
  Search, 
  RefreshCw, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Filter, 
  TrendingUp, 
  Users, 
  Check, 
  X, 
  ShieldAlert, 
  Award, 
  FileText, 
  LogOut,
  SlidersHorizontal,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { API_BASE_URL } from "../../lib/api";

// Default initial state for cars
const INITIAL_CARS = [
  {
    id: "car_1",
    title: "تويوتا لاندكروزر V8 2022",
    brand: "تويوتا",
    model: "لاندكروزر",
    year: 2022,
    condition: "مستعمل بحالة ممتازة",
    bodyType: "SUV",
    priceSdg: 125000000,
    priceUsd: 45000,
    mileage: 50000,
    transmission: "أوتوماتيك",
    city: "الخرطوم",
    sellerName: "معرض النخبة للسيارات",
    sellerPhone: "+249912345678",
    sellerWhatsapp: "249912345678",
    status: "ACTIVE", // ACTIVE, PENDING, SOLD
    isFeatured: true,
    viewsCount: 1420,
    createdAt: "2026-11-15",
    mainImage: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=600&q=80",
    isShowroom: true
  },
  {
    id: "car_2",
    title: "تويوتا كامري 2020",
    brand: "تويوتا",
    model: "كامري",
    year: 2020,
    condition: "مستعمل - وارد الخليج",
    bodyType: "سيدان",
    priceSdg: 85000000,
    priceUsd: 32000,
    mileage: 42000,
    transmission: "أوتوماتيك",
    city: "بورتسودان",
    sellerName: "محمد عثمان",
    sellerPhone: "+249922234567",
    sellerWhatsapp: "249922234567",
    status: "ACTIVE",
    isFeatured: true,
    viewsCount: 980,
    createdAt: "2026-11-16",
    mainImage: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80",
    isShowroom: false
  },
  {
    id: "car_3",
    title: "هيونداي توسان 2021",
    brand: "هيونداي",
    model: "توسان",
    year: 2021,
    condition: "مستعمل خالي دهان",
    bodyType: "SUV",
    priceSdg: 73000000,
    priceUsd: 28000,
    mileage: 38000,
    transmission: "أوتوماتيك",
    city: "بورتسودان",
    sellerName: "معرض البرنس للسيارات",
    sellerPhone: "+249912998877",
    sellerWhatsapp: "249912998877",
    status: "ACTIVE",
    isFeatured: false,
    viewsCount: 650,
    createdAt: "2026-11-17",
    mainImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    isShowroom: true
  },
  {
    id: "car_4",
    title: "نيسان سنترا 2019",
    brand: "نيسان",
    model: "سنترا",
    year: 2019,
    condition: "مستعمل بحالة ممتازة",
    bodyType: "سيدان",
    priceSdg: 52000000,
    priceUsd: 20000,
    mileage: 65000,
    transmission: "أوتوماتيك",
    city: "عطبرة",
    sellerName: "أحمد الفاتح",
    sellerPhone: "+249123456789",
    sellerWhatsapp: "249123456789",
    status: "PENDING", // Pending moderation
    isFeatured: false,
    viewsCount: 140,
    createdAt: "2026-11-19",
    mainImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    isShowroom: false
  },
  {
    id: "car_5",
    title: "كيا سبورتاج 2023 فل أوبشن",
    brand: "كيا",
    model: "سبورتاج",
    year: 2023,
    condition: "زيرو وكالة",
    bodyType: "SUV",
    priceSdg: 110000000,
    priceUsd: 42000,
    mileage: 5000,
    transmission: "أوتوماتيك",
    city: "الخرطوم",
    sellerName: "أوتوزون السودان",
    sellerPhone: "+249912001122",
    sellerWhatsapp: "249912001122",
    status: "PENDING",
    isFeatured: false,
    viewsCount: 88,
    createdAt: "2026-11-20",
    mainImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
    isShowroom: true
  }
];

// Showrooms data
const INITIAL_SHOWROOMS = [
  {
    id: "sh_1",
    name: "معرض النخبة للسيارات",
    city: "الخرطوم",
    address: "شارع المطار - جوار برج الاتصالات",
    phone: "+249912345678",
    whatsapp: "249912345678",
    carsCount: 18,
    isVerified: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sh_2",
    name: "معرض البرنس أوتو",
    city: "بورتسودان",
    address: "طريق الكورنيش - السوق العمومي",
    phone: "+249912998877",
    whatsapp: "249912998877",
    carsCount: 12,
    isVerified: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sh_3",
    name: "وكالة النيل للسيارات",
    city: "عطبرة",
    address: "المنطقة الصناعية - عطبرة",
    phone: "+249912554433",
    whatsapp: "249912554433",
    carsCount: 8,
    isVerified: false,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80"
  }
];

// Car Inspection & Assistance Requests
const INITIAL_REQUESTS = [
  {
    id: "req_101",
    serviceType: "فحص فني شامل للسيارة",
    carTitle: "تويوتا لاندكروزر 2022",
    clientName: "طارق عبد المنعم",
    phone: "+249912111222",
    city: "الخرطوم",
    status: "جديد",
    date: "2026-11-20 06:15"
  },
  {
    id: "req_102",
    serviceType: "استشارة جمركية وتخليص",
    carTitle: "هيونداي توسان 2021",
    clientName: "إبراهيم خليل",
    phone: "+249918776655",
    city: "بورتسودان",
    status: "قيد المتابعة",
    date: "2026-11-19 14:30"
  },
  {
    id: "req_103",
    serviceType: "طلب تقدير ونقل ملكية",
    carTitle: "نيسان سنترا 2019",
    clientName: "صلاح الدين أحمد",
    phone: "+249923445566",
    city: "عطبرة",
    status: "مكتمل",
    date: "2026-11-18 11:20"
  }
];

export default function AdminCarsDashboard() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Dashboard Data States
  const [cars, setCars] = useState(INITIAL_CARS);
  const [showrooms, setShowrooms] = useState(INITIAL_SHOWROOMS);
  const [requests, setRequests] = useState(INITIAL_REQUESTS);

  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState("overview"); // overview, cars, showrooms, users, requests
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [successToast, setSuccessToast] = useState("");

  // Edit Car Modal State
  const [editingCar, setEditingCar] = useState(null);
  const [editPriceSdg, setEditPriceSdg] = useState("");
  const [editStatus, setEditStatus] = useState("ACTIVE");

  // Add Showroom Modal State
  const [showAddShowroomModal, setShowAddShowroomModal] = useState(false);
  const [newShowroom, setNewShowroom] = useState({
    name: "",
    city: "الخرطوم",
    address: "",
    phone: "",
    whatsapp: ""
  });

  // Verify Admin Authentication on Mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sudanzon_user");
      const token = localStorage.getItem("sudanzon_token");
      
      if (!stored) {
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      const parsedUser = JSON.parse(stored);
      setCurrentUser(parsedUser);

      // Check if Admin role or master phone
      if (parsedUser.role === "ADMIN" || parsedUser.phone === "9999999999") {
        setIsAuthorized(true);
        fetchBackendCars();
      } else {
        setIsAuthorized(false);
      }
    } catch (e) {
      setIsAuthorized(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch cars from backend API if available
  const fetchBackendCars = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/cars?limit=50`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          // Merge with initial cars for rich management
          setCars(json.data);
        }
      }
    } catch (e) {
      // Fallback to local memory cars
    }
  };

  const showToast = (msg) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(""), 3500);
  };

  // Actions on Car Listings
  const handleToggleStatus = async (carId, currentStatus) => {
    const nextStatus = currentStatus === "ACTIVE" ? "PENDING" : "ACTIVE";
    try {
      await fetch(`${API_BASE_URL}/api/cars/${carId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus })
      });
    } catch (e) {}

    setCars(prev => prev.map(c => c.id === carId ? { ...c, status: nextStatus } : c));
    showToast(nextStatus === "ACTIVE" ? "تم اعتماد ونشر الإعلان بنجاح" : "تم تحويل الإعلان إلى قيد المراجعة");
  };

  const handleToggleFeatured = async (carId) => {
    try {
      await fetch(`${API_BASE_URL}/api/cars/${carId}/featured`, {
        method: "PATCH"
      });
    } catch (e) {}

    setCars(prev => prev.map(c => {
      if (c.id === carId) {
        const nextState = !c.isFeatured;
        showToast(nextState ? "تم تمييز الإعلان في الواجهة الرئيسية ⭐" : "تم إلغاء تمييز الإعلان");
        return { ...c, isFeatured: nextState };
      }
      return c;
    }));
  };

  const handleDeleteCar = async (carId) => {
    if (!confirm("هل أنت متأكد من حذف هذا الإعلان نهائياً من المنصة؟")) return;

    try {
      await fetch(`${API_BASE_URL}/api/cars/${carId}`, {
        method: "DELETE"
      });
    } catch (e) {}

    setCars(prev => prev.filter(c => c.id !== carId));
    showToast("تم حذف إعلان السيارة بنجاح");
  };

  const handleSaveCarEdit = async () => {
    if (!editingCar) return;
    const parsedPrice = parseFloat(editPriceSdg);
    if (!parsedPrice || parsedPrice <= 0) {
      alert("يرجى إدخال سعر صحيح بالجنيه السوداني");
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/api/cars/${editingCar.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceSdg: parsedPrice,
          priceUsd: Math.round(parsedPrice / 2800),
          status: editStatus
        })
      });
    } catch (e) {}

    setCars(prev => prev.map(c => c.id === editingCar.id ? {
      ...c,
      priceSdg: parsedPrice,
      priceUsd: Math.round(parsedPrice / 2800),
      status: editStatus
    } : c));

    setEditingCar(null);
    showToast("تم تحديث بيانات السيارة بنجاح");
  };

  // Actions on Showrooms
  const handleToggleShowroomVerify = (id) => {
    setShowrooms(prev => prev.map(s => {
      if (s.id === id) {
        const next = !s.isVerified;
        showToast(next ? "تم توثيق المعرض رسمياً ✔" : "تم إلغاء توثيق المعرض");
        return { ...s, isVerified: next };
      }
      return s;
    }));
  };

  const handleAddShowroom = (e) => {
    e.preventDefault();
    if (!newShowroom.name || !newShowroom.phone) {
      alert("يرجى إدخال اسم المعرض ورقم الهاتف");
      return;
    }

    const created = {
      id: "sh_" + Date.now(),
      name: newShowroom.name,
      city: newShowroom.city,
      address: newShowroom.address || newShowroom.city,
      phone: newShowroom.phone,
      whatsapp: newShowroom.whatsapp || newShowroom.phone.replace(/\+/g, ""),
      carsCount: 0,
      isVerified: true,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&w=400&q=80"
    };

    setShowrooms(prev => [created, ...prev]);
    setShowAddShowroomModal(false);
    setNewShowroom({ name: "", city: "الخرطوم", address: "", phone: "", whatsapp: "" });
    showToast("تمت إضافة معرض السيارات الجديد وتوثيقه بنجاح");
  };

  // Requests status change
  const handleUpdateReqStatus = (reqId, newStatus) => {
    setRequests(prev => prev.map(r => r.id === reqId ? { ...r, status: newStatus } : r));
    showToast(`تم تحديث حالة الطلب إلى: ${newStatus}`);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("sudanzon_user");
    localStorage.removeItem("sudanzon_token");
    window.location.href = "/";
  };

  // Format SDG currency
  const formatSdg = (num) => {
    return Number(num || 0).toLocaleString("en-US") + " ج.س";
  };

  // Filtered Cars
  const filteredCars = cars.filter(car => {
    const matchesFilter = 
      filterStatus === "ALL" ? true :
      filterStatus === "FEATURED" ? car.isFeatured :
      car.status === filterStatus;

    const matchesSearch = 
      !searchQuery ||
      car.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.sellerName?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Calculate Metrics
  const totalCarsCount = cars.length;
  const pendingCarsCount = cars.filter(c => c.status === "PENDING").length;
  const activeCarsCount = cars.filter(c => c.status === "ACTIVE").length;
  const featuredCarsCount = cars.filter(c => c.isFeatured).length;
  const totalMarketValueSdg = cars.reduce((sum, c) => sum + (c.priceSdg || 0), 0);
  const totalShowroomsCount = showrooms.length;
  const totalRequestsCount = requests.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <RefreshCw className="w-10 h-10 text-emerald-600 animate-spin mb-3" />
        <h2 className="text-xl font-bold text-slate-800">جاري التحقق من صلاحيات الإدارة...</h2>
        <p className="text-sm text-slate-500 mt-1">سودان زون للسيارات</p>
      </div>
    );
  }

  // Access Denied Screen if not ADMIN
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4" dir="rtl">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert size={36} />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">منطقة مخصصة للإدارة فقط</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            عذراً، يتطلب الوصول إلى لوحة تحكم سودان زون للسيارات تسجيل الدخول بحساب مسؤول (Admin).
          </p>
          <div className="space-y-3">
            <Link
              href="/auth/login"
              className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow-md"
            >
              تسجيل الدخول كمسؤول
            </Link>
            <Link
              href="/"
              className="block w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800" dir="rtl">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} className="text-emerald-300" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="bg-[#004d99] text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Right: Branding & Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow">
                <Car size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black tracking-wide">إدارة سودان زون للسيارات</h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] bg-amber-400 text-slate-950 font-black">
                    Cars Admin Pro
                  </span>
                </div>
                <p className="text-[11px] text-sky-200">التحكم في إعلانات ومعارض وخدمات سوق السيارات</p>
              </div>
            </div>

            {/* Left: Quick Actions & Profile */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/add-car"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition shadow"
              >
                <Plus size={15} />
                <span>إضافة سيارة للإدارة</span>
              </Link>

              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-950/60 hover:bg-sky-900 text-sky-200 text-xs font-bold transition border border-sky-600/30"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">معاينة الموقع</span>
              </Link>

              <div className="h-6 w-px bg-sky-600/40 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-bold text-white">{currentUser?.name || "Admin SudanZon"}</div>
                  <div className="text-[10px] text-amber-300 font-semibold">مسؤول المنصة</div>
                </div>
                <button
                  onClick={handleLogout}
                  title="تسجيل الخروج"
                  className="p-2 rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white transition"
                >
                  <LogOut size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="bg-[#003870] border-t border-sky-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  activeTab === "overview"
                    ? "bg-amber-400 text-slate-950 shadow font-black"
                    : "text-sky-200 hover:bg-sky-800/60 hover:text-white"
                }`}
              >
                <TrendingUp size={16} />
                <span>لوحة المؤشرات والتقارير</span>
              </button>

              <button
                onClick={() => setActiveTab("cars")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  activeTab === "cars"
                    ? "bg-amber-400 text-slate-950 shadow font-black"
                    : "text-sky-200 hover:bg-sky-800/60 hover:text-white"
                }`}
              >
                <Car size={16} />
                <span>إعلانات السيارات ({totalCarsCount})</span>
                {pendingCarsCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500 text-white font-bold animate-pulse">
                    {pendingCarsCount} معلق
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab("showrooms")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  activeTab === "showrooms"
                    ? "bg-amber-400 text-slate-950 shadow font-black"
                    : "text-sky-200 hover:bg-sky-800/60 hover:text-white"
                }`}
              >
                <Building2 size={16} />
                <span>معارض ووكالات السيارات ({totalShowroomsCount})</span>
              </button>

              <button
                onClick={() => setActiveTab("requests")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  activeTab === "requests"
                    ? "bg-amber-400 text-slate-950 shadow font-black"
                    : "text-sky-200 hover:bg-sky-800/60 hover:text-white"
                }`}
              >
                <FileText size={16} />
                <span>طلبات الفحص والتخليص ({totalRequestsCount})</span>
              </button>

              <button
                onClick={() => setActiveTab("users")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  activeTab === "users"
                    ? "bg-amber-400 text-slate-950 shadow font-black"
                    : "text-sky-200 hover:bg-sky-800/60 hover:text-white"
                }`}
              >
                <Users size={16} />
                <span>المعلنين وتجار السيارات</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ========================================================= */}
        {/* TAB 1: OVERVIEW & KPIS                                    */}
        {/* ========================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Top Alert for Pending Car Approvals */}
            {pendingCarsCount > 0 && (
              <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="text-amber-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-amber-950 text-sm">
                      يوجد {pendingCarsCount} إعلان سيارة جديد بانتظار المراجعة والاعتماد
                    </h3>
                    <p className="text-xs text-amber-800 mt-0.5">
                      قم بفحص بيانات السيارة وسعرها بالجنيه السوداني قبل اعتماد نشرها في المنصة.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => { setActiveTab("cars"); setFilterStatus("PENDING"); }}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-lg transition"
                >
                  مراجعة الآن
                </button>
              </div>
            )}

            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">إجمالي السيارات المعروضة</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{totalCarsCount}</h3>
                  <p className="text-[11px] text-emerald-600 font-bold mt-1">
                    {activeCarsCount} إعلان نشط
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Car size={24} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">القيمة السوقية للمعروض</p>
                  <h3 className="text-lg sm:text-xl font-black text-emerald-700 mt-1">
                    {formatSdg(totalMarketValueSdg)}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">حسب أسعار الجنيه السوداني</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">المعارض والوكالات المعتمدة</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{totalShowroomsCount}</h3>
                  <p className="text-[11px] text-sky-600 font-bold mt-1">في الخرطوم والولايات</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Building2 size={24} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">إعلانات VIP المميزة</p>
                  <h3 className="text-2xl font-black text-amber-600 mt-1">{featuredCarsCount}</h3>
                  <p className="text-[11px] text-amber-700 font-bold mt-1">تتصدر الصفحة الرئيسية</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Star size={24} />
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Cols: Latest Car Listings */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Car className="text-[#004d99]" size={20} />
                    <h3 className="font-bold text-slate-900 text-sm">أحدث إعلانات السيارات المضافة</h3>
                  </div>
                  <button
                    onClick={() => setActiveTab("cars")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                  >
                    <span>عرض كل السيارات</span>
                    <ArrowRight size={14} className="rotate-180" />
                  </button>
                </div>

                <div className="space-y-3">
                  {cars.slice(0, 4).map(car => (
                    <div key={car.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-12 rounded-lg overflow-hidden bg-slate-200 relative flex-shrink-0">
                          <Image src={car.mainImage} alt={car.title} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900">{car.title}</h4>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                            <span>{car.city}</span>
                            <span>•</span>
                            <span>{car.sellerName}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left flex items-center gap-3">
                        <div>
                          <div className="font-black text-xs sm:text-sm text-emerald-700">{formatSdg(car.priceSdg)}</div>
                          <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            car.status === "ACTIVE" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                          }`}>
                            {car.status === "ACTIVE" ? "معتمد" : "قيد المراجعة"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Col: Verified Showrooms Quick List */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="text-[#004d99]" size={20} />
                    <h3 className="font-bold text-slate-900 text-sm">المعارض المعتمدة</h3>
                  </div>
                  <button
                    onClick={() => setActiveTab("showrooms")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                  >
                    إدارة المعارض
                  </button>
                </div>

                <div className="space-y-3">
                  {showrooms.map(sh => (
                    <div key={sh.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-xs text-slate-900">{sh.name}</h4>
                          {sh.isVerified && <CheckCircle2 size={13} className="text-blue-600" />}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{sh.city} • {sh.carsCount} سيارات</p>
                      </div>
                      <a
                        href={`https://wa.me/${sh.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[11px] font-bold transition flex items-center gap-1"
                      >
                        <MessageSquare size={12} />
                        <span>واتساب</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CAR LISTINGS & MODERATION                          */}
        {/* ========================================================= */}
        {activeTab === "cars" && (
          <div className="space-y-4">
            {/* Control Bar: Filters & Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none">
                {[
                  { label: "كل السيارات", value: "ALL", count: totalCarsCount },
                  { label: "بانتظار الاعتماد", value: "PENDING", count: pendingCarsCount },
                  { label: "المعتمدة / النشطة", value: "ACTIVE", count: activeCarsCount },
                  { label: "المميزة VIP ⭐", value: "FEATURED", count: featuredCarsCount },
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => setFilterStatus(item.value)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                      filterStatus === item.value
                        ? "bg-[#004d99] text-white shadow"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 font-black">
                      {item.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="بحث بالموديل، المعلن، أو المدينة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-9 pl-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 font-medium"
                />
              </div>
            </div>

            {/* Car Listings Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">السيارة والموديل</th>
                      <th className="py-3 px-4">السعر (ج.س)</th>
                      <th className="py-3 px-4">المعلن والاتصال</th>
                      <th className="py-3 px-4">المدينة</th>
                      <th className="py-3 px-4">حالة الإعلان</th>
                      <th className="py-3 px-4">المميز ⭐</th>
                      <th className="py-3 px-4 text-center">إجراءات الإدارة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredCars.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-slate-400">
                          لا توجد إعلانات سيارات مطابقة لمعايير البحث
                        </td>
                      </tr>
                    ) : (
                      filteredCars.map(car => (
                        <tr key={car.id} className="hover:bg-slate-50/80 transition">
                          {/* Title & Image */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-200 relative flex-shrink-0">
                                <Image src={car.mainImage} alt={car.title} fill className="object-cover" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900">{car.title}</h4>
                                <p className="text-[10px] text-slate-500">
                                  سنة {car.year} • {car.transmission} • {car.bodyType}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Price SDG */}
                          <td className="py-3 px-4">
                            <div className="font-black text-emerald-700">{formatSdg(car.priceSdg)}</div>
                            <div className="text-[10px] text-slate-400">≈ ${(car.priceUsd || Math.round(car.priceSdg / 2800)).toLocaleString()}</div>
                          </td>

                          {/* Seller & Phone */}
                          <td className="py-3 px-4">
                            <div className="font-bold text-slate-800 flex items-center gap-1">
                              <span>{car.sellerName}</span>
                              {car.isShowroom && (
                                <span className="px-1 py-0.2 rounded bg-purple-100 text-purple-700 text-[9px] font-bold">
                                  معرض
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <a
                                href={`tel:${car.sellerPhone}`}
                                className="text-[11px] text-blue-600 hover:underline flex items-center gap-1"
                              >
                                <Phone size={10} />
                                <span>{car.sellerPhone}</span>
                              </a>
                              <a
                                href={`https://wa.me/${car.sellerWhatsapp || car.sellerPhone?.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-600 hover:text-emerald-700"
                                title="مراسلة واتساب"
                              >
                                <MessageSquare size={13} />
                              </a>
                            </div>
                          </td>

                          {/* City */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1 text-slate-600">
                              <MapPin size={12} className="text-slate-400" />
                              <span>{car.city}</span>
                            </div>
                          </td>

                          {/* Status Badge */}
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleToggleStatus(car.id, car.status)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-black transition flex items-center gap-1 ${
                                car.status === "ACTIVE"
                                  ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                              }`}
                              title="اضغط لتغيير حالة الإعلان"
                            >
                              {car.status === "ACTIVE" ? (
                                <>
                                  <Check size={11} />
                                  <span>معتمد ونشط</span>
                                </>
                              ) : (
                                <>
                                  <Clock size={11} />
                                  <span>قيد المراجعة</span>
                                </>
                              )}
                            </button>
                          </td>

                          {/* Featured Toggle */}
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleToggleFeatured(car.id)}
                              className={`p-1.5 rounded-lg transition ${
                                car.isFeatured
                                  ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                                  : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                              }`}
                              title={car.isFeatured ? "إلغاء التمييز" : "تمييز في الصفحة الرئيسية"}
                            >
                              <Star size={16} fill={car.isFeatured ? "currentColor" : "none"} />
                            </button>
                          </td>

                          {/* Management Actions */}
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Edit Modal Button */}
                              <button
                                onClick={() => {
                                  setEditingCar(car);
                                  setEditPriceSdg(car.priceSdg);
                                  setEditStatus(car.status);
                                }}
                                className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                title="تعديل السعر والبيانات"
                              >
                                <Edit3 size={14} />
                              </button>

                              {/* Direct Detail Link */}
                              <Link
                                href={`/cars/${car.id}`}
                                target="_blank"
                                className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                                title="عرض في الموقع"
                              >
                                <Eye size={14} />
                              </Link>

                              {/* Delete Button */}
                              <button
                                onClick={() => handleDeleteCar(car.id)}
                                className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
                                title="حذف الإعلان"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: SHOWROOMS & DEALERS                                */}
        {/* ========================================================= */}
        {activeTab === "showrooms" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">قائمة معارض ووكالات السيارات المسجلة</h3>
                <p className="text-xs text-slate-500 mt-0.5">توثيق المعارض يمنحها شارة الثقة وحساب مخصص لعرض أسطول سياراتها</p>
              </div>
              <button
                onClick={() => setShowAddShowroomModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition shadow"
              >
                <Plus size={15} />
                <span>إضافة معرض سيارات جديد</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {showrooms.map(sh => (
                <div key={sh.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden relative flex-shrink-0">
                        <Image src={sh.image} alt={sh.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{sh.name}</h4>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                          <MapPin size={11} />
                          <span>{sh.city}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleShowroomVerify(sh.id)}
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition flex items-center gap-1 ${
                        sh.isVerified
                          ? "bg-blue-100 text-blue-800"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                      title="اضغط لتبديل حالة التوثيق"
                    >
                      <ShieldCheck size={12} />
                      <span>{sh.isVerified ? "موثق رسمي" : "غير موثق"}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                    {sh.address}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                    <div className="text-slate-600 font-bold">
                      السيارات المعروضة: <span className="text-blue-700">{sh.carsCount}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${sh.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition"
                        title="واتساب المعرض"
                      >
                        <MessageSquare size={14} />
                      </a>
                      <a
                        href={`tel:${sh.phone}`}
                        className="p-1.5 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
                        title="اتصال هاتفي"
                      >
                        <Phone size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: INSPECTIONS & SERVICE REQUESTS                     */}
        {/* ========================================================= */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm">طلبات فحص السيارات والخدمات الواردة</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                طلبات المستخدمين لفحص هياكل السيارات، التأمين، والتخليص الجمركي في بورتسودان والخرطوم
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">رقم الطلب</th>
                      <th className="py-3 px-4">نوع الخدمة</th>
                      <th className="py-3 px-4">السيارة المعنية</th>
                      <th className="py-3 px-4">العميل ورقم الهاتف</th>
                      <th className="py-3 px-4">المدينة</th>
                      <th className="py-3 px-4">تاريخ الطلب</th>
                      <th className="py-3 px-4">حالة الطلب</th>
                      <th className="py-3 px-4 text-center">التواصل</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {requests.map(req => (
                      <tr key={req.id} className="hover:bg-slate-50/80 transition">
                        <td className="py-3 px-4 font-mono font-bold text-slate-500">{req.id}</td>
                        <td className="py-3 px-4 font-bold text-[#004d99]">{req.serviceType}</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">{req.carTitle}</td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-900">{req.clientName}</div>
                          <div className="text-[11px] text-slate-500">{req.phone}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{req.city}</td>
                        <td className="py-3 px-4 text-slate-500">{req.date}</td>
                        <td className="py-3 px-4">
                          <select
                            value={req.status}
                            onChange={(e) => handleUpdateReqStatus(req.id, e.target.value)}
                            className="text-xs font-bold py-1 px-2 rounded-lg bg-slate-100 border border-slate-200 focus:outline-none"
                          >
                            <option value="جديد">جديد</option>
                            <option value="قيد المتابعة">قيد المتابعة</option>
                            <option value="مكتمل">مكتمل</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <a
                            href={`https://wa.me/${req.phone.replace(/\+/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold transition"
                          >
                            <MessageSquare size={12} />
                            <span>واتساب</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: CAR USERS & SELLERS                                */}
        {/* ========================================================= */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm">مستخدمو ومعلنو سودان زون للسيارات</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                متابعة الحسابات الفردية والتجارية وتوثيقها أو إيقاف الحسابات المخالفة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "معرض النخبة للسيارات", phone: "+249912345678", role: "معرض سيارات", adsCount: 18, verified: true },
                { name: "محمد عثمان", phone: "+249922234567", role: "معلن فردي", adsCount: 2, verified: true },
                { name: "معرض البرنس للسيارات", phone: "+249912998877", role: "معرض سيارات", adsCount: 12, verified: true },
                { name: "أحمد الفاتح", phone: "+249123456789", role: "معلن فردي", adsCount: 1, verified: false },
                { name: "أوتوزون السودان", phone: "+249912001122", role: "وكالة سيارات", adsCount: 5, verified: true }
              ].map((user, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-slate-900">{user.name}</h4>
                      {user.verified && <CheckCircle2 size={13} className="text-blue-600" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{user.phone} • {user.role}</p>
                    <p className="text-[11px] text-emerald-700 font-bold mt-1">{user.adsCount} إعلانات سيارات</p>
                  </div>
                  <a
                    href={`https://wa.me/${user.phone.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 transition"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ========================================================= */}
      {/* MODAL: EDIT CAR PRICE & STATUS                            */}
      {/* ========================================================= */}
      {editingCar && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-right space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">تعديل إعلان: {editingCar.title}</h3>
              <button
                onClick={() => setEditingCar(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                السعر بالجنيه السوداني (ج.س) *
              </label>
              <input
                type="number"
                value={editPriceSdg}
                onChange={(e) => setEditPriceSdg(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 font-black text-slate-900 text-sm focus:outline-none focus:border-blue-600"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                السعر الحالي المقدر: {formatSdg(editPriceSdg)}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                حالة الإعلان
              </label>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 text-xs focus:outline-none focus:border-blue-600"
              >
                <option value="ACTIVE">معتمد ونشط (ظاهر في الموقع)</option>
                <option value="PENDING">قيد المراجعة والتدقيق</option>
                <option value="SOLD">تم البيع</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={handleSaveCarEdit}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow"
              >
                حفظ التعديلات
              </button>
              <button
                onClick={() => setEditingCar(null)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: ADD SHOWROOM                                       */}
      {/* ========================================================= */}
      {showAddShowroomModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-right space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">إضافة وتوثيق معرض سيارات جديد</h3>
              <button
                onClick={() => setShowAddShowroomModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddShowroom} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم المعرض *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: معرض الوفاق للسيارات"
                  value={newShowroom.name}
                  onChange={(e) => setNewShowroom({ ...newShowroom, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">المدينة *</label>
                  <select
                    value={newShowroom.city}
                    onChange={(e) => setNewShowroom({ ...newShowroom, city: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="الخرطوم">الخرطوم</option>
                    <option value="بورتسودان">بورتسودان</option>
                    <option value="عطبرة">عطبرة</option>
                    <option value="ود مدني">ود مدني</option>
                    <option value="كسلا">كسلا</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+249912000000"
                    value={newShowroom.phone}
                    onChange={(e) => setNewShowroom({ ...newShowroom, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">العنوان بالتفصيل</label>
                <input
                  type="text"
                  placeholder="مثال: شارع الستين - جوار طلمبة النيل"
                  value={newShowroom.address}
                  onChange={(e) => setNewShowroom({ ...newShowroom, address: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow"
                >
                  إضافة المعرض وتوثيقه
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddShowroomModal(false)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
