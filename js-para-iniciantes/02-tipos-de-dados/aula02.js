var nome = 'André'
var idade = 28
var time
var vazio = null

console.log(nome)
console.log(typeof idade) // Typeof pega qual é o tipo primitivo daquela variável
console.log(typeof time)
console.log(typeof null)  //Bug do JF que null retorna objeto

//String

// Concatetanção de String

var nome = 'André'
var sobrenome = 'Rafael'
var nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

// Sempre que somar String + number o resultado é uma STRING

var ano = '2018'
var mes = 8
console.log(ano + mes)

// Aspas Duplas, SImples e Template String

// Pode-se ter aspas simples dentro de aspas duplas ou o inverso. O que nãoo podde é ter do mesmo tipo dentro que o de fora.

// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil"; a \ antes do caractere fala pro programa não fazer a função do caractere especial, não usa
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

var frase1 =  'Esse é o "melhor" jogo'
var frase2 =  "Esse é o 'melhor' jogo"

console.log(frase1)
console.log(frase2)

var frase3 =  "Esse é o \"melhor\" jogo"
console.log(frase3)

// Template String

var gols = 1000;
var frase4 = 'Romário fez ' + gols + ' gols';
var frase5 = `Romário fez ${gols} gols`; // É a expressão acima mas utilizando Template String

console.log(frase5)


// EXERCÍCIOS

// Declare uma variável contendo uma string

var name2 = 'Julio'
console.log(typeof name2)


// Declare uma variável contendo um número dentro de uma string

var phrase = '31'

// Declare uma variável com a sua idade

var idade1 = 31

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var name1  = 'Julio'
var nickname = 'Diulius'

var nameFull = `${name2} ${nickname}`
console.log(nameFull)

// OU

console.log(`${name2} ${nickname}`)

// Coloque a seguinte frase em uma variável: It's time

var teste = "It's time"
console.log(teste)

// Verifique o tipo da variável que contém o seu nome

console.log(typeof name2)

