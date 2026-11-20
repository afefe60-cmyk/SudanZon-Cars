export const metadata = {
  title: "سياسة الخصوصية | SudanZon Cars",
  description: "سياسة الخصوصية وحماية البيانات في منصة سودان زون للسيارات",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
        <div className="border-b border-slate-200 pb-6 mb-8 text-right">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-[#0066cc] mb-3">
            سودان زون للسيارات
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            سياسة الخصوصية وحماية البيانات
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            تاريخ التحديث الأخير: نوفمبر 2026
          </p>
        </div>

        <div className="space-y-8 text-right text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]"></span>
              1. مقدمة والتزام الخصوصية
            </h2>
            <p>
              نحن في <strong>منصة سودان زون للسيارات (SudanZon Cars)</strong> نولي سرية وخصوصية بياناتكم أقصى درجات العناية والاهتمام. توضح هذه الوثيقة نوعية المعلومات والبيانات التي نجمعها من الزوار والمعلنين والمعارض، وكيفية استخدامها لحماية حقوق المستخدمين وتقديم تجربة بيع وشراء آمنة وموثوقة للمركبات في كافة ولايات السودان.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span>
              2. البيانات التي نقوم بجمعها
            </h2>
            <ul className="list-disc list-inside space-y-2 pr-2 text-slate-600">
              <li><strong>بيانات الحساب:</strong> الاسم الكامل، رقم الهاتف الأساسي، البريد الإلكتروني، والمدينة/الولاية.</li>
              <li><strong>بيانات إعلانات السيارات:</strong> ماركة السيارة، الموديل، سنة الصنع، الممشى، الحالة، السعر بالجنيه السوداني (ج.س)، صور المركبة، والمواصفات الفنية.</li>
              <li><strong>بيانات التواصل:</strong> أرقام الاتصال والواتساب التي يحددها المعلن لتلقي استفسارات المشترين، والرسائل المتبادلة عبر المحادثة الداخلية.</li>
              <li><strong>البيانات التقنية:</strong> عنوان IP، نوع المتصفح والجهاز، وبيانات التصفح لتحسين أداء المنصة والحماية من الاحتيال.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              3. كيف نستخدم معلوماتك
            </h2>
            <p>
              تُستخدم بياناتك للأغراض التالية فقط:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pr-2 mt-2 text-slate-600">
              <li>نشر وعرض إعلانات سياراتك أمام آلاف المشترين في السودان وخارجه.</li>
              <li>تمكين المشترين من التواصل معك مباشرة عبر الاتصال، الواتساب، أو المحادثات المباشرة.</li>
              <li>التحقق من صحة الإعلانات وتوثيق حسابات المعارض والتجار المعتمدين.</li>
              <li>إرسال الإشعارات والتنبيهات المتعلقة بحسابك أو إعلاناتك.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              4. حماية البيانات وعدم المشاركة
            </h2>
            <p>
              تلتزم سودان زون بعدم بيع أو تأجير أو مشاركة بيانات مستخدميها الشخصية مع أي طرف ثالث لأغراض تسويقية. يتم تشفير البيانات والاتصالات بواسطة بروتوكولات الأمان القياسية (SSL/TLS).
            </p>
          </section>

          <section className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <h3 className="font-black text-slate-900 mb-2">تواصل مع مسؤول الخصوصية</h3>
            <p className="text-xs text-slate-600">
              إذا كانت لديك أي استفسارات أو طلبات لحذف أو تعديل بياناتك الشخصية، يرجى مراسلتنا عبر البريد: <strong>privacy@sudanzon.com</strong> أو هاتف خدمة العملاء: <strong>+249 99 999 9999</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
