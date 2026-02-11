document.addEventListener("DOMContentLoaded", function () {

  const revealElements = document.querySelectorAll(".card, .process-step");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

});



