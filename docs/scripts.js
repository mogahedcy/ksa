// === قائمة التنقل المتجاوبة ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // تغيير شكل زر القائمة
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// أضف سلوك التمرير للقائمة العلوية
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// === إضافة سلوك السلايدر الرئيسي ===
const slides = document.querySelectorAll('.slide');
const dots = document.querySelector('.dots-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

// إنشاء نقاط التنقل للسلايدر
function createDots() {
    if (dots) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.slide = index;
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetTimer();
            });
            dots.appendChild(dot);
        });
    }
}

// الانتقال إلى شريحة محددة
function goToSlide(index) {
    // إخفاء الشرائح السابقة
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // إظهار الشريحة الحالية
    slides[index].classList.remove('active');
    slides[index].offsetWidth; // إعادة التدفق
    slides[index].classList.add('active');
    
    // تحديث نقاط التنقل
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
    
    currentSlide = index;
}

// الانتقال إلى الشريحة التالية
function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

// الانتقال إلى الشريحة السابقة
function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
}

// إعادة ضبط المؤقت
function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// إضافة المستمعين
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });
}

// بدء السلايدر
function startSlider() {
    if (slides.length > 0) {
        createDots();
        resetTimer();
    }
}

startSlider();

// === تصفية المشاريع ===
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع الأزرار
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // إضافة الفئة النشطة للزر المحدد
            btn.classList.add('active');
            
            // الحصول على فئة التصفية
            const filterValue = btn.dataset.filter;
            
            // تصفية المشاريع
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// === زر العودة إلى الأعلى ===
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === التنقل السلس ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // إغلاق القائمة المتجاوبة إذا كانت مفتوحة
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // إعادة زر القائمة إلى شكله الطبيعي
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // التمرير إلى العنصر
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === نموذج الاتصال ===
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // الحصول على قيم النموذج
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
          // إنشاء نص الرسالة
          const whatsappMessage = `
          الاسم: ${name}%0A
          رقم الجوال: ${phone}%0A
          البريد الإلكتروني: ${email}%0A
          الخدمة المطلوبة: ${service}%0A
          الرسالة: ${message}
      `;

      // رقم واتساب الهدف (استبدله برقمك)
      const whatsappNumber = "+966553719009"; // رقم واتساب بدون رمز الدولة (+)

      // إنشاء رابط واتساب
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // فتح الرابط في نافذة جديدة
      window.open(whatsappUrl, '_blank');
  
        // يمكن هنا إضافة التحقق من صحة الإدخال
        
        // يمكن إرسال البيانات إلى الخادم باستخدام Fetch API
        // هذا هو مثال فقط، يجب استبداله بالرمز الفعلي لإرسال البيانات
        
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                service,
                message
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.');
                contactForm.reset();
            } else {
                alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
        });
        */
        
        // للأغراض التجريبية، سنعرض رسالة نجاح فقط
        alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.');
        contactForm.reset();
    });
}

// === تحميل الصفحة ===
window.addEventListener('load', () => {
    // إخفاء شاشة التحميل إذا كانت موجودة
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// === زر التمرير إلى الأعلى ===
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
}

document.getElementById('scrollToTopBtn').onclick = function() {
    document.body.scrollTop = 0; // لمتصفحات Safari
    document.documentElement.scrollTop = 0; // لمتصفحات Chrome, Firefox, IE, Opera
};