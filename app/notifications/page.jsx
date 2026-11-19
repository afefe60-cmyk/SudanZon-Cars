"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bell, 
  MessageSquare, 
  Gift, 
  Car, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: "1",
      title: "رسالة جديدة",
      desc: "من معرض النخبة للسيارات",
      time: "منذ 5 دقائق",
      icon: MessageSquare,
      color: "text-[#0066cc] bg-blue-50",
      isUnread: true,
      category: "messages",
    },
    {
      id: "2",
      title: "عرض خاص",
      desc: "خصم مميز على السيارات الواردة",
      time: "منذ ساعة",
      icon: Gift,
      color: "text-amber-500 bg-amber-50",
      isUnread: false,
      category: "system",
    },
    {
      id: "3",
      title: "إعلان جديد",
      desc: "تويوتا كامري 2021 أضيفت حديثاً",
      time: "منذ ساعتين",
      icon: Car,
      color: "text-[#0066cc] bg-blue-50",
      isUnread: false,
      category: "system",
    },
    {
      id: "4",
      title: "تحديث الحساب",
      desc: "تم تفعيل حسابك كعضو موثق بنجاح",
      time: "أمس",
      icon: ShieldCheck,
      color: "text-[#16a34a] bg-emerald-50",
      isUnread: false,
      category: "system",
    },
  ];

  const filtered = notifications.filter((n) => {
    if (activeTab === "all") return true;
    if (activeTab === "messages") return n.category === "messages";
    if (activeTab === "system") return n.category === "system";
    return true;
  });

  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-5 pb-24">
      {/* 1. Header (Matching Screen 7) */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <Link href="/" className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <ArrowRight size={22} />
        </Link>
        <h1 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <span>الإشعارات</span>
        </h1>
        <div className="p-2 text-slate-700">
          <Bell size={20} />
        </div>
      </div>

      {/* 2. Tabs Filter (Matching Screen 7: الكل, الرسائل, النظام) */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
            activeTab === "all"
              ? "bg-[#0066cc] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          الكل
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
            activeTab === "messages"
              ? "bg-[#0066cc] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          الرسائل
        </button>
        <button
          onClick={() => setActiveTab("system")}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
            activeTab === "system"
              ? "bg-[#0066cc] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          النظام
        </button>
      </div>

      {/* 3. Notifications List */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-4 flex items-center justify-between gap-4 transition shadow-sm ${
                item.isUnread ? "border-[#0066cc]/40 bg-blue-50/20" : "border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.isUnread && (
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    )}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>

              <span className="text-[10px] text-slate-400 font-semibold shrink-0">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
