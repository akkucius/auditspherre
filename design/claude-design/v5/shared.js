/* === Auditspherre — Shared Scripts === */

// Navbar scroll
const navbar = document.getElementById('navbar');
function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

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

// Active nav link
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('#')[0];
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
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
