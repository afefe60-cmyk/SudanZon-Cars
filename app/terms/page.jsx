export const metadata = {
  title: "الشروط والأحكام | SudanZon Cars",
  description: "شروط الاستخدام وسياسات نشر الإعلانات في منصة سودان زون للسيارات",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
        <div className="border-b border-slate-200 pb-6 mb-8 text-right">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#16a34a] mb-3">
            سودان زون للسيارات
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            شروط الاستخدام واتفاقية المستخدم
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            آخر تحديث: نوفمبر 2026
          </p>
        </div>

        <div className="space-y-8 text-right text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]"></span>
              1. قبول الشروط
            </h2>
            <p>
              باستخدامك لمنصة أو تطبيق <strong>سودان زون للسيارات (SudanZon Cars)</strong>، فإنك توافق التزاماً كاملاً بهذه الشروط والأحكام وبكافة القوانين واللوائح السارية في جمهورية السودان. إذا كنت لا توافق على أي بند، يرجى التوقف عن استخدام المنصة.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span>
              2. شروط وضوابط نشر إعلانات السيارات
            </h2>
            <ul className="list-disc list-inside space-y-2 pr-2 text-slate-600">
              <li><strong>صحة البيانات:</strong> يتعهد المعلن بأن تكون جميع بيانات المركبة (الماركة، الموديل، سنة الصنع، الممشى، والحالة الفنية) دقيقة وحقيقية تماماً ومطابقة للواقع.</li>
              <li><strong>الصور الحقيقية:</strong> يجب أن تكون الصور المرفقة صوراً حقيقية للمركبة المعروضة وليست صوراً ترويجية مأخوذة من الإنترنت دون إشارة.</li>
              <li><strong>الأسعار:</strong> يجب تحديد السعر بشكل واضح بالجنيه السوداني (ج.س)، ويمنع وضع أسعار وهمية مثل (1 ج.س) لجذب الانتباه.</li>
              <li><strong>الملكية والقانونية:</strong> يقر المعلن بأنه المالك القانوني للمركبة أو وكيلاً مفوضاً ببيعها رسمياً، وخلو المركبة من أي موانع قانونية أو بلاغات حظر.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              3. إخلاء مسؤولية المنصة
            </h2>
            <p>
              تعمل منصة SudanZon Cars كهمزة وصل رقمية بين البائعين والمشترين والمعارض. المنصة ليست طرفاً في أي اتفاق بيع أو شراء ولا تضمن حالة المركبة الفنية أو الإجرائية. نهيب بكافة المشترين إجراء <strong>الفحص الفني المعتمد والتأكد من أوراق الملكية وسجلات الترخيص والجمارك</strong> قبل تسليم أي مبالغ مالية.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              4. السلوكيات المحظورة وحق الإلغاء
            </h2>
            <p>
              تحتفظ إدارة المنصة بالحق الكامل في إيقاف أو حذف أي إعلان أو حظر أي حساب مستخدم في حال:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pr-2 mt-2 text-slate-600">
              <li>نشر إعلانات مضللة أو احتيالية أو غير متوفرة.</li>
              <li>إساءة استخدام قنوات المحادثات أو الاتصال أو إزعاج المستخدمين.</li>
              <li>انتحال صفة معارض أو أفراد آخرين.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
