//TRASVERSING e Manipulação

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')

h1.innerHTML = '<p> Novo Texto </p>'
animaisLista.innerHTML

//TRASVERSING

//Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

//ELEMENT VS NODE

//Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// EXERCÍCIOS

// Duplique o menu e adicione ele em copy

const menuExer = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenuExer = menuExer.cloneNode(true)
copy.appendChild(cloneMenuExer)

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const proximoDd = primeiroDt.nextElementSibling


// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML