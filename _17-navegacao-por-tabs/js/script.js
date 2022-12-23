const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  document.documentElement.className += ' js';
  tabContent[0].classList.add("active");

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabContent[index].classList.add("active");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
