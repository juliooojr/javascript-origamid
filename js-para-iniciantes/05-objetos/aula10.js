// OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos respetivamente.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// CRIAR UM OBJETO
// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20


// MÉTODOS
// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


// EXERCÍCIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Julio',
  sobrenome: 'Junior',
  idade: 31,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}

// nomeie 3 propriedades ou métodos de strings
var nome = 'Julio'
nome.slice
nome.length
nome.toUpperCase


// nomeie 5  ou métodos de elepropriedadesmentos do DOM

var tit = document.querySelector('.titulo')
var lista = document.querySelector('.lista')
var rodape = document.querySelector('.rodape')

tit.appendChild
lista.addEventListener
rodape.classList
tit.innerHTML
tit.id

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
