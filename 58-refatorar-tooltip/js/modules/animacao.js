export default function initAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHeight = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHeight < 0;

      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.add("active");
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
