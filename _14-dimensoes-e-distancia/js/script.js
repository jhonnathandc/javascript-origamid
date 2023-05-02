// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
const topo = imagem.offsetTop;
console.log(topo);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;

  imagens.forEach((item) => {
    soma = soma + item.offsetWidth;
  });
  console.log(soma);
}

window.onload =  function() {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  if (link.clientWidth === 48 && link.clientHeight == 48) {
    console.log('Está correto');
  } else {
    console.log('Está incorreto');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const screen = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector(".menu");

if (screen.matches) {
  menu.classList.add('menu-mobile');
}