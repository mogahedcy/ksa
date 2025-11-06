
// === الأسئلة الشائعة ===
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // إغلاق جميع العناصر الأخرى
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // تبديل حالة العنصر الحالي
        item.classList.toggle('active');
    });
});

// === إعدادات Lightbox ===
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'صورة %1 من %2',
    'fadeDuration': 300,
    'positionFromTop': 100,
    'maxWidth': 1200,
    'maxHeight': 800
});

// === تهيئة الصفحة ===
document.addEventListener('DOMContentLoaded', function() {
    // تحديد الارتباط النشط في القائمة
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes('services') && linkPath.includes('#services')) {
            link.classList.add('active');
        }
    });
    
    // تهيئة الصور في معرض الصور
    // هذا افتراضي، يجب استبداله بأكواد حقيقية عند إضافة الصور الفعلية
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const link = item.querySelector('a');
        
        if (link) {
            // استخراج عنوان الصورة من نص Alt
            const imgAlt = img.getAttribute('alt');
            link.setAttribute('data-title', imgAlt);
        }
    });
});

// === التنقل السلس ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#') && targetId !== '#') {
            e.preventDefault();
            
            // إذا كان الارتباط يشير إلى عنصر في صفحة أخرى
            if (targetId.includes('#') && !document.querySelector(targetId)) {
                // الانتقال إلى الصفحة مع تمرير المعرف
                if (targetId.startsWith('#')) {
                    window.location.href = '../index.html' + targetId;
                } else {
                    window.location.href = targetId;
                }
            } else {
                // الانتقال في نفس الصفحة
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
});

// === إضافة سمات هيكلية للصور لتحسين SEO ===
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img, .type-image img, .service-image img');
    
    galleryImages.forEach(img => {
        // إضافة سمات لتحسين SEO
        img.setAttribute('loading', 'lazy');
        
        // التأكد من وجود نص بديل
        if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
            const parentHeading = img.closest('.type-card, .gallery-item, .service-content')?.querySelector('h2, h3')?.textContent;
            if (parentHeading) {
                img.setAttribute('alt', parentHeading);
            } else {
                img.setAttribute('alt', 'خدمات مؤسسة الديار العالمية في جدة');
            }
        }
    });
});

// === مشاركة المحتوى ===
// يمكن إضافة أزرار مشاركة للمحتوى على مواقع التواصل الاجتماعي
function createShareLinks() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    if (shareButtons.length > 0) {
        const pageTitle = document.title;
        const pageUrl = window.location.href;
        
        shareButtons.forEach(btn => {
            const platform = btn.dataset.platform;
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)}`;
                    break;
            }
            
            if (shareUrl) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                });
            }
        });
    }
}

// تنفيذ دالة إنشاء روابط المشاركة إذا كانت موجودة
createShareLinks();
