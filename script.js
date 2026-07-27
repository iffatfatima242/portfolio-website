// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll reveal for cards / projects / skill blocks =====
const revealTargets = document.querySelectorAll('.card, .project, .skill-block');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ===== Contact form (front-end only demo) =====
// NOTE: This form currently has no backend. To actually receive messages,
// connect it to a service like Formspree (formspree.io) or EmailJS —
// just replace the code below with their submit handler.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  formNote.textContent = `Thanks${name ? ', ' + name : ''} — this form isn't wired to a backend yet. Email fatimaiffat211@gmail.com directly for now.`;
  contactForm.reset();
});