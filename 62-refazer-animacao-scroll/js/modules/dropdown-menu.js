import clickOutside from "./clickoutside.js";

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    clickOutside(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
