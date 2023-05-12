// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultado = document.querySelector(".resultado");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscarCep(cep);
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultado.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcP = document.querySelector(".btcP");

function btcBuy() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btc) => {
      btcP.innerText = ("R$ " + btc.BRL.buy).replace(".", ",");
    });
}

// setInterval(btcBuy, 30000);

btcBuy();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadaP = document.querySelector(".piadaP");
const proximaPiada = document.querySelector(".proximaPiada");

function piadaRandomica() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      piadaP.innerText = piada.value;
    });
}

piadaRandomica();

proximaPiada.addEventListener('click', piadaRandomica);