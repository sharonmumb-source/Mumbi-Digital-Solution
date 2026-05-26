/* ==============================
   MAIN.JS - Mumbi Digital Solutions
   Author: Sharon Mumbi
============================== */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     MOBILE HAMBURGER MENU
  ========================================= */

  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if(menuToggle && navbar){

    menuToggle.addEventListener('click', () => {

      navbar.classList.toggle('active');

      /* CHANGE ICON */
      const icon = menuToggle.querySelector('i');

      if(navbar.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }

    });

    /* CLOSE MENU WHEN LINK IS CLICKED */
    const navLinks = navbar.querySelectorAll('a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {

        navbar.classList.remove('active');

        const icon = menuToggle.querySelector('i');

        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');

      });
    });

  }


  /* =========================================
     STICKY HEADER ON SCROLL
  ========================================= */

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

  });


  /* =========================================
     TESTIMONIAL SLIDER
  ========================================= */

  const slider = document.querySelector('.testimonial-slider');

  if(slider){

    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let index = 0;
    const totalSlides = slides.length;
    const slideInterval = 4000;

    let autoSlide;

    function showSlide(i){
      slider.style.transform = `translateX(-${i * 100}%)`;
    }

    function nextSlide(){
      index = (index + 1) % totalSlides;
      showSlide(index);
    }

    function prevSlide(){
      index = (index - 1 + totalSlides) % totalSlides;
      showSlide(index);
    }

    if(nextBtn){
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    if(prevBtn){
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    function startAutoSlide(){
      autoSlide = setInterval(nextSlide, slideInterval);
    }

    function resetAutoSlide(){
      clearInterval(autoSlide);
      startAutoSlide();
    }

    startAutoSlide();

  }


  /* =========================================
     SMOOTH SCROLLING
  ========================================= */

  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {

    link.addEventListener('click', function(e){

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute('href')
      );

      if(target){

        target.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });

      }

    });

  });


  /* =========================================
     CONTACT FORM VALIDATION
  ========================================= */

  const contactForm = document.querySelector('.contact-form');

  if(contactForm){

    contactForm.addEventListener('submit', (e) => {

      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      if(
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
      ){

        e.preventDefault();

        alert('Please fill in all required fields.');

      }

    });

  }


  /* =========================================
     VIDEO MODAL
  ========================================= */

  const modal = document.getElementById('videoModal');
  const btn = document.getElementById('openVideo');
  const span = document.querySelector('.close');

  if(modal && btn && span){

    btn.onclick = () => {
      modal.style.display = 'block';
    };

    span.onclick = () => {
      modal.style.display = 'none';
    };

    window.onclick = (e) => {

      if(e.target == modal){
        modal.style.display = 'none';
      }

    };

  }

});