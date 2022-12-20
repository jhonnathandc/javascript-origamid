// Adicione a classe ativo a todos os itens do menu
const menuItem = document.querySelectorAll(".menu a");
menuItem.forEach((item) => {
  item.classList.add("ativo");
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItem.forEach((item) => {
  item.classList.remove("ativo");
});

menuItem[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((imagem) => {
  const alt = imagem.hasAttribute('alt');
  console.log(alt);
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector("a[href^='https']");
linkExterno.setAttribute('href', 'https://www.google.com');
console.log(linkExterno);