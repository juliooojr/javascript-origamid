// Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal, não é vírgula!
var exp = 2e10; // 20000000000 - Exponencial
var exp = 2e-2; // 0.02 - Exponencial

// OPERADORES ARITMÉTICOS

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// OPERADORES ARITMÉTICOS (STRINGS)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number) 
    
    // É possível verificar se uma variável é Nan ou não com a função isNaN()


// EXERCÍCIOS

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //Primeiro multiplica depois divide depois faz soma e subtração

// Crie duas expressões que retornem NaN

var n3 = 'Oi' ** 10
var n4 = 'Oi' - 2

console.log(typeof n3)
console.log(n3)
console.log(n4)


// Somar a string '200' com o número 50 e retornar 250

var n4 = '200'
var n5 = 50
var n6 = +200 + 50
console.log(n6)

// Incremente o número 5 e retorne o seu valor incrementado

var n7 = 5
n7++
console.log(n7)

//OU 
console.log(++n7)


// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
