"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, CheckCheck, Search } from "lucide-react";

export default function MessagesPage() {
  const chats = [
    {
      id: "1",
      name: "معرض النخبة للسيارات",
      car: "تويوتا لاندكروزر 2022",
      lastMessage: "نعم متوفرة في صالة بورتسودان، جاهزة للفحص والمعاينة في أي وقت.",
      time: "منذ 10 د",
      unread: 2,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "2",
      name: "محمد عثمان (مالك مباشر)",
      car: "هيونداي آكسنت 2019",
      lastMessage: "تم الاتفاق، موعدنا غداً أمام بنك الخرطوم فرع عطبرة.",
      time: "1:30 م",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "3",
      name: "معرض الأمانة الدولي",
      car: "كيا سبورتاج 2021",
      lastMessage: "الشهادة الجمركية وارد دبي جاهزة ومصدقة.",
      time: "أمس",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <Link href="/" className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <ArrowRight size={22} />
        </Link>
        <h1 className="text-lg font-black text-slate-900">المحادثات المباشرة</h1>
        <div className="w-8"></div>
      </div>

      {/* Search chats */}
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث في محادثاتك..."
          className="w-full bg-white border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
        />
        <Search className="absolute right-4 top-3.5 text-slate-400" size={17} />
      </div>

      {/* Chat list */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
        {chats.map((c) => (
          <div
            key={c.id}
            className="p-4 flex items-center justify-between gap-3 hover:bg-slate-50 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100">
                <Image src={c.avatar} alt={c.name} fill className="object-cover" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-black text-slate-900">{c.name}</h3>
                  <span className="text-[10px] text-[#0066cc] font-bold">({c.car})</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">{c.lastMessage}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className="text-[10px] text-slate-400 font-semibold">{c.time}</span>
              {c.unread > 0 ? (
                <span className="w-5 h-5 rounded-full bg-[#0066cc] text-white font-black text-[10px] flex items-center justify-center">
                  {c.unread}
                </span>
              ) : (
                <CheckCheck size={14} className="text-[#16a34a]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
