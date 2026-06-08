/* === Auditspherre — Shared Scripts === */

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active nav link (supports /v3, /v3/services, and *.html paths)
(function () {
  const parts = window.location.pathname.split('/').filter(Boolean);
  let page = parts[parts.length - 1] || '';

  if (!page || /^v[1-3]$/.test(page)) {
    page = '';
  }

  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href').split('#')[0].replace(/\/$/, '');
    const hrefPage = href.split('/').filter(Boolean).pop() || '';
    const currentPage = page;
    if (hrefPage === currentPage || (!hrefPage && !currentPage)) {
      a.classList.add('active');
    }
  });
})();

// Count-up animation
function countUp(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix || '';
  const prefix   = el.dataset.prefix || '';
  const duration = 2200;
  const t0       = Date.now();
  function tick() {
    const p = Math.min((Date.now() - t0) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3); // cubic ease-out
    el.textContent = prefix + Math.floor(e * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(countUp);
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll('.stats-band').forEach(el => statsObs.observe(el));
