import clickOutside from "./clickoutside.js";

export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ['click', 'touchstart'];
  
  if(buttonMenu) {
    function openMenu(event) {
      buttonMenu.classList.add('active');
      menuList.classList.add('active');
      clickOutside(menuList, eventos, () => {
        buttonMenu.classList.remove('active');
      menuList.classList.remove('active');
      });
    } 
    
    eventos.forEach((evento) => {
      buttonMenu.addEventListener(evento, openMenu);
    });
  }
}