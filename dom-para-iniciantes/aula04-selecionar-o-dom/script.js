/*

// Seleciona pelo ID
const animais = document.getElementById('animais')
console.log(animais)

// Retorna null caso não exista
const naoExiste = document.getElementById('teste')
console.log(naoExiste)

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection)
console.log(gridSection[0])

const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

//SELETOR GERAL ÚNICO
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais1 = document.querySelector('.animais');
const contato1 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl)

const linksInterno = document.querySelector('[href^="#"]')
console.log(linksInterno)

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');


//SELETOR GERAL LISTA
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais)

// Retorna o segundo elemento
console.log(gridSection[1]);

*/


// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgAnimais)

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao')
const animaisH2 = animais.querySelector('h2')
console.log(animaisH2)

//OU

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// Selecione o último p do site

const paragrafo = document.querySelectorAll('p')
console.log(paragrafo[paragrafo.length - 1])

// ou

console.log(paragrafo[--paragrafo.length])


