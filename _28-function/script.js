// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const caracteresParagrafos = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(caracteresParagrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;

  return elemento;
}

console.log(criarElemento('div', 'ativo', 'Aqui vai o conteúdo!!!'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const tituloh1 = criarElemento.bind(null, 'h1', 'titulo');

const tituloCurso = tituloh1('Titulo do Curso');
const tituloAula = tituloh1('Titulo da aula');

console.log(tituloCurso);
console.log(tituloAula);