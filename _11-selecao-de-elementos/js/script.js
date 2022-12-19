// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll("img[src^='./img/imagem']");
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("a[href^='#'");
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primerioH2 = document.querySelector('.animals-description h2');
console.log(primerioH2);

// Selecione o último p do site
const paragrafo = document.querySelectorAll('p');
const ultimoP = paragrafo[paragrafo.length - 1];
console.log(ultimoP);