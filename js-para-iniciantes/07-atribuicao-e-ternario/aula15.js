// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// var nome = 'André';


// OPERADORES DE ATRIBUIÇÃO

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


// OPERADOR TERNÁRIO

// Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber
// condição ? true : false


// EXERCÍCIOS

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500

console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Pode dar crédito' : 'Não pode dar crédito'
console.log(darCredito)

// ou

var darCredito2 = (possuiCarro && possuiCasa)
console.log(darCredito2)

