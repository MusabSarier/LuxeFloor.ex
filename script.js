/* ===================================
   OPTIMIZED & ENHANCED JAVASCRIPT
   LuxeFloor Premium Flooring Website

   BThis project belongs to Levickrr_ and all rights are reserved.
   © 2026 Levickrr_
   =================================== */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
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

// ============================================
// NAVBAR SCROLL EFFECT (Debounced)
// ============================================
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// ============================================
// CONTACT FORM HANDLER
// ============================================
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Show success message
        alert('✅ Message sent successfully!\n\nOur sales representative will contact you within 24 hours.');

        // Reset form with smooth animation
        form.reset();

        // Optional: Add visual feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '✓ Sent';
            submitBtn.style.background = '#4caf50';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        }
    });
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

// Open Modal
document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        const desc = btn.getAttribute('data-desc');
        const img = btn.getAttribute('data-img');

        if (modalTitle) modalTitle.innerText = name;
        if (modalPrice) modalPrice.innerText = price;
        if (modalDesc) modalDesc.innerText = desc;
        if (modalImg) modalImg.src = img;

        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close Modal Function
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close button click
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Click outside modal
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for multiple elements
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100); // 100ms delay between each element

            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
});

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// ANIMATE SECTION HEADERS
// ============================================
const sectionHeaders = document.querySelectorAll('.section-header');

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, {
    threshold: 0.2
});

sectionHeaders.forEach(header => headerObserver.observe(header));

// ============================================
// PARALLAX EFFECT FOR HERO (Optional Enhancement)
// ============================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const parallaxSpeed = 0.5;

                if (scrolled < hero.offsetHeight) {
                    hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// PERFORMANCE: Lazy Load Images (if needed)
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c🏠 LuxeFloor Premium Flooring', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cWebsite optimized and ready!', 'color: #4a3b32; font-size: 14px;');
