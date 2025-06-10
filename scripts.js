// scripts.js

// Highlight nav links on scroll based on section in view
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function activateNavLink() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop - 80 &&
        scrollPos < section.offsetTop + section.offsetHeight - 80
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);

  // Optional: Smooth scroll polyfill for older browsers (fallback)
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
