// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var idadeParente = 19;

if (minhaIdade > idadeParente) {
  console.log("Minha idade é maior.");
} else if (minhaIdade === idadeParente) {
  console.log("As idades são iguais");
} else {
  console.log("A idade do parente é maior");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
// 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // True
var idade = 28; // True
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False
console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil é maior que a China");
} else {
  console.log("China é maior que o Brasil");
}

// O que irá aparecer no console? // Falso
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) { // Cão
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
