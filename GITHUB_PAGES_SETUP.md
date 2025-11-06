# تعليمات إعداد GitHub Pages

## الخطوات المطلوبة لتفعيل النشر على GitHub Pages

بعد دمج هذا الـ Pull Request، اتبع الخطوات التالية لتفعيل GitHub Pages:

### 1. الذهاب إلى إعدادات المستودع

- انتقل إلى صفحة المستودع على GitHub: `https://github.com/mogahedcy/ksa`
- اضغط على تبويب **Settings** (الإعدادات)

### 2. تفعيل GitHub Pages

- في القائمة الجانبية، اضغط على **Pages**
- في قسم **"Build and deployment"**:
  - **Source**: اختر **GitHub Actions**
  
### 3. التحقق من النشر

- بعد تفعيل GitHub Actions، سيتم نشر الموقع تلقائياً
- يمكنك متابعة حالة النشر من تبويب **Actions**
- سيكون الموقع متاحاً على: `https://mogahedcy.github.io/ksa/`

### 4. النطاق المخصص (اختياري)

إذا كنت تريد استخدام نطاق مخصص:
- الملف `CNAME` موجود بالفعل في مجلد `docs` ويحتوي على: `www.aldeyar.me`
- تأكد من إعداد سجلات DNS بشكل صحيح للنطاق
- راجع [وثائق GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) للمزيد من التفاصيل

## ملاحظات إضافية

### البنية الحالية:
- ✅ جميع ملفات الموقع في مجلد `docs/`
- ✅ GitHub Actions workflow جاهز للنشر التلقائي
- ✅ CNAME file موجود للنطاق المخصص
- ✅ SEO files (robots.txt, sitemap.xml) موجودة

### النشر المستقبلي:
- عند كل push لفرع `main`، سيتم النشر تلقائياً
- يمكن أيضاً تشغيل النشر يدوياً من تبويب Actions → Deploy to GitHub Pages → Run workflow

### استكشاف الأخطاء:
إذا واجهت مشاكل:
1. تحقق من تبويب **Actions** لمعرفة حالة سير العمل
2. تأكد من أن Source في إعدادات Pages مضبوط على "GitHub Actions"
3. تحقق من أن المستودع عام (public) أو أن لديك GitHub Pro/Team للمستودعات الخاصة
