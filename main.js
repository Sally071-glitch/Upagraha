// Nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.status === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
