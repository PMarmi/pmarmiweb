// ============================================
// PAUMARMI — main.js
// ============================================

// --- Theme toggle ---
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');

// Default: dark (already set in HTML attribute)
// Check localStorage
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// --- Mobile nav ---
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

function closeMobile() {
  mobileNav.classList.remove('open');
}

// --- Navbar scroll shadow ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 2px 20px rgba(0,0,0,0.2)'
    : 'none';
}, { passive: true });

// --- Scroll reveal ---
const revealEls = document.querySelectorAll(
  '.tl-card, .project-card, .skill-group, .about-grid, .contact-wrap'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 60 * i);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// --- Active nav link highlight ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));
