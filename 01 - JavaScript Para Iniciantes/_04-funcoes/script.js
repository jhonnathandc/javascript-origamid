// Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
  return !!valor;
}
console.log(verificar(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}
console.log(perimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  nome = "Jhonnathan";
  sobrenome = "Dias Cora";
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto());

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  result = numero % 2;
  if (result === 0) {
    return "É par";
  } else {
    return "É ímpar";
  }
}
console.log(numeroPar(20));

// Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado("Oi"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.function nomeScroll() {
addEventListener("scroll", function () {
  console.log("Jhonnathan Dias Cora");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
