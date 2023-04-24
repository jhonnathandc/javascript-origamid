import initAnimaNumeros from "./animaNumeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisReponse = await fetch(url);
    const animaisJSON = await animaisReponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
