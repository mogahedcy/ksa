
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// الحصول على مسار المجلد الحالي في ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// خدمة الملفات الثابتة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// جسم الطلب JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// نقطة وصول API لاستلام رسائل الاتصال (نموذجية فقط)
app.post('/api/contact', (req, res) => {
  const { name, phone, email, service, message } = req.body;
  
  // في البيئة الحقيقية، يمكن إضافة كود لحفظ البيانات في قاعدة بيانات
  // أو إرسال رسالة بريد إلكتروني
  
  console.log('تم استلام رسالة جديدة:');
  console.log({ name, phone, email, service, message });
  
  // إرسال استجابة نجاح
  res.status(200).json({ 
    success: true, 
    message: 'تم استلام رسالتك بنجاح وسنتواصل معك قريباً.' 
  });
});

// توجيه جميع الطلبات المتبقية إلى الصفحة الرئيسية
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل الخادم
app.listen(PORT, '0.0.0.0', () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
