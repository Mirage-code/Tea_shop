


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize fade-in animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== BUTTON CLICK HANDLERS =====
document.querySelectorAll('.btn-primary, .cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            menuSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const findUsBtn = document.querySelector('.btn-secondary');
if (findUsBtn) {
    findUsBtn.addEventListener('click', () => {
        const locationsSection = document.querySelector('#locations');
        if (locationsSection) {
            locationsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// ===== SOCIAL ICONS INTERACTION =====
document.querySelectorAll('.social-icon').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const socialLinks = [
            'https://instagram.com/zenteahouse',
            'https://tiktok.com/@zenteahouse',
            'https://facebook.com/zenteahouse',
            'https://twitter.com/zenteahouse'
        ];

        icon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 150);

        console.log('Social link:', socialLinks[index]);
    });
});

// ===== MENU CARDS HOVER EFFECT =====
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function () {
        this.style.zIndex = '1';
    });
});

console.log('%c🍵 ZenTea House - Coming Soon to Denver! 🍵', 'font-size: 20px; color: #88b04b; font-weight: bold;');