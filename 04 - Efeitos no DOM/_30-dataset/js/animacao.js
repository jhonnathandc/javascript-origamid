function initTabMenu() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabMenu();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");

    function activeAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function scrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // FORMA ALTERNATIVA
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
scrollSuave();

function initAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowHeight = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHeight < 0;

        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimation();