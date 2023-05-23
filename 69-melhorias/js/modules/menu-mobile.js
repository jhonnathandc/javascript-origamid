import clickOutside from "./clickoutside.js";

export default class MenuMobile {
  constructor(buttonMenu, menuList, events) {
    this.buttonMenu = document.querySelector(buttonMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.buttonMenu.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    clickOutside(this.menuList, this.events, () => {
      this.buttonMenu.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEventMenuMobile() {
    this.events.forEach(evento => this.buttonMenu.addEventListener(evento, this.openMenu));
  }

  init() {
    this.addEventMenuMobile();
    return this;
  }
}
