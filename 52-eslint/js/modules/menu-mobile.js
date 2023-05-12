import clickOutside from "./clickoutside.js";

export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    buttonMenu.classList.add("active");
    menuList.classList.add("active");
    clickOutside(menuList, eventos, () => {
      buttonMenu.classList.remove("active");
      menuList.classList.remove("active");
    });
  }
  if (buttonMenu) {
    eventos.forEach((evento) => {
      buttonMenu.addEventListener(evento, openMenu);
    });
  }
}
