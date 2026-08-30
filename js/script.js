/* ==========================================================================
   SCRIPT.JS — shared across every page
   Loading screen (optional), navbar scroll state, mobile menu,
   scroll-reveal animation, and active-nav-link highlighting.
   ========================================================================== */

// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        overlay.classList.add('show');
    });

    window.closeMenu = function() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    };

    overlay.addEventListener('click', closeMenu);
}

// ========== SCROLL REVEAL ==========
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // initial check

// ========== ACTIVE NAV LINK ==========
// Highlights the link that matches the current page in both the
// desktop navbar and the mobile menu.
(function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
})();
