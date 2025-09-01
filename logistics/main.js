const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Toggle menu on button click
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent closing immediately
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && 
          !navLinks.contains(e.target) && 
          e.target !== menuToggle) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
      }
    });


     // Accordion behavior
    document.querySelectorAll(".accordion-header").forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");
        content.classList.toggle("open");
      });
    });

     window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
  });


     // Counter animation
    const counters = document.querySelectorAll('.about-stats h3');
    const speed = 200; 

    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCount();
      });
    };

    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.about-stats');
    let started = false;
    window.addEventListener('scroll', () => {
      const sectionTop = statsSection.offsetTop;
      const sectionHeight = statsSection.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;

      if (!started && scrollY > sectionTop + sectionHeight / 4) {
        animateCounters();
        started = true;
      }
    });


    // Basic reveal
  ScrollReveal().reveal('.reveal', {
    duration: 1200,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false // if true, animates every time you scroll back
  });

  // Example: you can target specific sections differently
    ScrollReveal().reveal('.timeline-item', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.service-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-banner', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-form-section', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-result', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-box', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.hero-services', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-banner', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-intro', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.features-grid', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.feature-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-process', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.contact-info', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.contact-form', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.solution-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.footer-column', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.hero-content', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.hero-image', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.about-stats', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.about-content', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.about-image', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.accordion-item', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-industries', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-contact-info', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.footer', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.contact-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.contact-details', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.contact-form-section', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.map-container', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-info', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.tracking-form-container', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.tracking-instructions', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-support', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.service-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.service-intro', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.faq-section', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.services-list', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-details', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-benefits', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-process', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-contact', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.testimonial', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.image-container', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.stats', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.services-container', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.benefit-header', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.benefit-cards', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
     ScrollReveal().reveal('.nav-links', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });

    