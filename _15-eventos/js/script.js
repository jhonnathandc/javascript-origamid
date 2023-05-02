// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInternos = document.querySelectorAll("a[href^='#']");
function ativo(event) {
  event.preventDefault();
  linkInternos.forEach((link) => {
    link.classList.remove('ativo');
  })

  event.currentTarget.classList.add('ativo');
}

linkInternos.forEach((link) => {
  link.addEventListener('click', ativo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function ondeClicou(event) {
  itemClicado = event.currentTarget;
  console.log(itemClicado);
}

todosElementos.forEach((item) => {
  item.addEventListener('click', ondeClicou);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos2 = document.querySelectorAll('body *');

function ondeClicou2(event) {
  // itemClicado = event.target.remove();
}

todosElementos2.forEach((item) => {
  item.addEventListener('click', ondeClicou2);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const aumentarTexto = document.querySelector('body');

function textoMaior(event) {
  if (event.key === 't') {
    aumentarTexto.classList.add("textoMaior");
  }
}

aumentarTexto.addEventListener('keydown', textoMaior);