// CLASSLIST

//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

// menu.className; // string
// console.log(menu.classList); // lista de classes
// menu.classList.add('ativo'); // Adiciona uma classe
// menu.classList.remove('ativo');// Remove classe
// menu.classList.add('ativo', 'mobile'); // Adddd duas classes
// menu.classList.toggle('teste'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false

menu.classList.add('azul')
menu.classList.toggle('azul')

if (menu.classList.contains('azul')) {
  menu.classList.add('posssui-azul')
} else {
  menu.classList.add('nao-possui-azul')
}

console.log(menu.classList); // lista de classes

menu.classList.replace('azul', 'inativo');


// Attributes
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

console.log(animais.attributes[1])

// GETATTRIBUTE E SETATTRIBUTE
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

console.log(img.getAttribute('src')); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
console.log(img.getAttribute('alt'))
img.hasAttribute('id'); // true / false
console.log(img.hasAttribute('id'))
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo


// Propriedaddes READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only



// EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imgsAlt = document.querySelectorAll('img')

imgsAlt.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(possuiAtributo, img)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://google.com')

console.log(link)


