const imgs = document.querySelectorAll('img')
console.log(imgs)

i = 0
imgs.forEach(function(){
    console.log(i++)
})

//PARÂMETROS DO FOREACH

imgs.forEach(function(item, index, array){
    console.log(item, index, array)
})

//FOREACH E ARRAY
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

//ARROW FUNCTION

const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item) => {
  console.log(item);
});

//PARÂMETROS E PARÊNTESES

const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});


//RETURN
//É possível omitir as chaves {} para uma função que retorna uma linha.

const imgs = document.querySelectorAll('img');

imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));




// EXERCÍCIOS


// Mostre no console cada parágrado do site

const p = document.querySelectorAll('p')

p.forEach(function(item){
    console.log(item)
})

// Mostre o texto dos parágrafos no console

p.forEach(function(item){
    console.log(item.innerHTML)
})

// Como corrigir os erros abaixo:
 const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(
    () => i++);

