/* ==============================
   MAIN.JS - Mumbi Digital Solutions
   Author: Sharon Mumbi
   Purpose: Handles interactivity across all pages
============================== */

/* ===== DOMContentLoaded Wrapper ===== */
document.addEventListener('DOMContentLoaded', () => {

/* ===============================
   TESTIMONIAL SLIDER
================================ */
const slider = document.querySelector('.testimonial-slider');

if (slider) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let index = 0;
  const totalSlides = slides.length;
  const slideInterval = 4000; // 4 seconds
  let autoSlide;

  function showSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  }

  // Button controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Auto sliding
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Start slider
  startAutoSlide();
}

  /* ==============================
     2. SMOOTH SCROLLING FOR ANCHORS
  =============================== */
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ==============================
     3. CONTACT FORM VALIDATION (Optional)
  =============================== */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
      // Optionally: add email format validation here
    });
  }

  /* ==============================
     4. FUTURE INTERACTIVE FEATURES
     - Sticky navbar
     - Mobile menu toggle
     - Scroll animations
     - Modal popups
  ============================== */

});
const modal = document.getElementById('videoModal');
const btn = document.getElementById('openVideo');
const span = document.getElementsByClassName('close')[0];

btn.onclick = () => modal.style.display = 'block';
span.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }
