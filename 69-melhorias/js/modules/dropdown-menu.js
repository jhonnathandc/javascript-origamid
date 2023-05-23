import clickOutside from "./clickoutside.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle("ativo");
    clickOutside(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }

  addEventDropdownMenu() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropdownMenu();
    }
    return this;
  }
}
