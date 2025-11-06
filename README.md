# KSA - موقع الديار للمقاولات

موقع ويب لعرض خدمات المقاولات والتنسيق الخارجي.

## نشر الموقع على GitHub Pages

تم إعداد هذا المستودع للنشر التلقائي على GitHub Pages باستخدام GitHub Actions.

### الإعداد المطلوب:

1. **تفعيل GitHub Pages في إعدادات المستودع:**
   - انتقل إلى Settings → Pages
   - في قسم "Build and deployment"
   - اختر Source: **GitHub Actions**

2. **النشر التلقائي:**
   - عند كل دفع (push) إلى فرع `main`، سيتم نشر المحتوى تلقائياً
   - يمكن أيضاً تشغيل النشر يدوياً من تبويب Actions

### هيكل المشروع:

```
ksa/
├── docs/              # محتوى الموقع الثابت (يتم نشره على GitHub Pages)
│   ├── index.html
│   ├── style.css
│   ├── scripts.js
│   ├── images/
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # سير عمل GitHub Actions للنشر
└── server.js          # خادم Express (للتطوير المحلي فقط)
```

### التطوير المحلي:

لتشغيل الموقع محلياً، يمكنك:

1. فتح ملفات HTML مباشرة من مجلد `docs`
2. أو استخدام خادم بسيط مثل:
   ```bash
   cd docs
   python -m http.server 8000
   ```

### الميزات:

- ✅ نشر تلقائي على GitHub Pages
- ✅ دعم النطاق المخصص (CNAME)
- ✅ تحسين محركات البحث (SEO)
- ✅ تصميم متجاوب لجميع الأجهزة