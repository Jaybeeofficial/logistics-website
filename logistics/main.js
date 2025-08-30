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