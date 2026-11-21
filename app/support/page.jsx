"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Headphones, 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  Send,
  Sparkles
} from "lucide-react";

export default function SupportPage() {
  const WHATSAPP_NUM = "24907620105";

  // Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Quick message box state
  const [clientName, setClientName] = useState("");
  const [clientSubject, setClientSubject] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const faqs = [
    {
      q: "كيف أقوم بإضافة إعلان سيارتي في سودان زون للسيارات؟",
      a: "يمكنك الضغط على زر (+ أضف إعلان سيارتك) الموجود في أعلى الموقع أو أسفل شريط التطبيق، ثم تعبئة بيانات السيارة (الماركة، الموديل، سنة الصنع، السعر بالجنيه السوداني، والمدينة) ورفع الصور ورقم الواتساب الخاص بك ليتم نشره فوراً."
    },
    {
      q: "هل نشر إعلانات السيارات مجاني في المنصة؟",
      a: "نعم! نشر إعلانات الأفراد في سودان زون للسيارات مجاني 100% دون أي رسوم أو عمولات خفية بين البائع والمشتري."
    },
    {
      q: "كيف تعمل خدمة الفحص الفني المعتمد (قريباً)؟",
      a: "تقوم المنصة قريباً بتوفير مهندسين فنيين معتمدين لمعاينة وفحص الشاسيه والماكينة والجيربوكس ميدانياً في الخرطوم وبورتسودان وعطبرة، وإرسال تقرير فحص تفصيلي بالصور والفيديو على هاتفك قبل تحويل المبلغ للبائع."
    },
    {
      q: "كيف أوثق معرض أو وكالة سيارات في المنصة؟",
      a: "يمكن لأصحاب المعارض والوكالات التواصل مع فريق الإدارة عبر الواتساب على الرقم 24907620105 لتزويدنا ببيانات السجل التجاري والموقع ليتم توثيق المعرض ومنحه شارة (معرض موثق) وحساب مخصص لإدارة الأسطول."
    },
    {
      q: "ما هي العملات المعتمدة لتسعير السيارات في الموقع؟",
      a: "العملة الأساسية المعتمدة هي الجنيه السوداني (ج.س) بما يتوافق مع الواقع التجاري في السودان، مع عرض قيمة تقريبية بالدولار الأمريكي كمرجع إضافي."
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!clientMessage) return;

    const fullMsg = encodeURIComponent(
      `السلام عليكم، رسالة دعم فني عبر سودان زون للسيارات:\nالاسم: ${clientName || "عميل المنصة"}\nالموضوع: ${clientSubject || "استفسار عام"}\nالرسالة: ${clientMessage}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${fullMsg}`, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-24" dir="rtl">
      
      {/* Hero Header */}
      <div className="rounded-3xl bg-gradient-to-r from-[#003366] via-[#004d99] to-slate-900 text-white p-6 sm:p-10 shadow-lg text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-md">
          <Headphones size={32} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold border border-white/20">
          <Clock size={13} className="text-amber-400" />
          <span>خدمة عملاء متواجدة على مدار الساعة 24/7</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white">
          مركز الدعم الفني وخدمة العملاء
        </h1>

        <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto leading-relaxed">
          فريق سودان زون للسيارات متواجد دائماً لمساعدتك في نشر إعلاناتك، توثيق معرضك، أو الإجابة على أي استفسارات تتعلق بالبيع والشراء في السودان.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* WhatsApp Card */}
        <a
          href={`https://wa.me/${WHATSAPP_NUM}`}
          target="_blank"
          rel="noreferrer"
          className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 p-5 shadow-sm hover:shadow-md transition text-right flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
            <MessageSquare size={24} />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-bold">المحادثة السريعة</div>
            <h3 className="text-sm font-black text-slate-900">واتساب خدمة العملاء</h3>
            <span className="text-xs font-bold text-emerald-600 font-mono" dir="ltr">+{WHATSAPP_NUM}</span>
          </div>
        </a>

        {/* Direct Call Card */}
        <a
          href={`tel:+${WHATSAPP_NUM}`}
          className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-5 shadow-sm hover:shadow-md transition text-right flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
            <Phone size={24} />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-bold">الاتصال الهاتفي</div>
            <h3 className="text-sm font-black text-slate-900">هاتف الإدارة والدعم</h3>
            <span className="text-xs font-bold text-blue-600 font-mono" dir="ltr">+{WHATSAPP_NUM}</span>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:cars@sudanzon.com"
          className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-5 shadow-sm hover:shadow-md transition text-right flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
            <Mail size={24} />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-bold">البريد الإلكتروني</div>
            <h3 className="text-sm font-black text-slate-900">المراسلات الرسمية</h3>
            <span className="text-xs font-bold text-amber-600 font-mono">cars@sudanzon.com</span>
          </div>
        </a>

      </div>

      {/* Main Support Grid: FAQ Accordion + Quick Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* FAQs Accordion (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 text-right">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <HelpCircle size={20} className="text-[#004d99]" />
            <h2 className="text-base sm:text-lg font-black text-slate-900">الأسئلة الشائعة والأكثر تكراراً</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 flex items-center justify-between gap-3 text-right font-bold text-xs sm:text-sm text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Message Form (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 text-right">
          <div className="pb-3 border-b border-slate-100">
            <h3 className="font-black text-slate-900 text-base">إرسال استفسار مباشر</h3>
            <p className="text-xs text-slate-500 mt-0.5">سيتم تحويل رسالتك مباشرة لفريق الدعم عبر الواتساب</p>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">الاسم الكريم</label>
              <input
                type="text"
                placeholder="اسمك الكامل"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">موضوع الاستفسار</label>
              <select
                value={clientSubject}
                onChange={(e) => setClientSubject(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-blue-600 font-medium"
              >
                <option value="استفسار عن سيارة">استفسار بخصوص سيارة معروضة</option>
                <option value="توثيق معرض">توثيق معرض أو وكالة سيارات</option>
                <option value="خدمة الفحص الفني">خدمة الفحص الفني المعتمد</option>
                <option value="مساعدة في نشر إعلان">مساعدة في إضافة إعلان</option>
                <option value="اقتراح أو شكوى">اقتراح أو شكوى للإدارة</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">تفاصيل الرسالة *</label>
              <textarea
                required
                rows={4}
                placeholder="اكتب استفسارك بالتفصيل..."
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-blue-600 font-medium"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow flex items-center justify-center gap-2"
            >
              <Send size={14} />
              <span>إرسال الرسالة عبر الواتساب</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
