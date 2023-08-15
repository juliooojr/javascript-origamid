// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return valor
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    var peri = lado *4
    return peri
}

// ou 

function perimetroQuadrado2(lado) {
    return lado * 4
}

perimetroQuadrado(10)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('marcos', 'paulo'))

// Crie uma função que verifica se um número é par

function ePar(numero) {
    if (numero % 2 === 0) {
        console.log('É par!')
    } else {
        console.log('É ímpar!')
    }
}

// feito pelo Prof. sem dar Undefined

function isEven(number) {
    var modulo = number % 2
    if (modulo === 0 ) {
        return true
    } else {
        return false
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
    return typeof dado
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('scroll', function() {
    console.log('Julio Junior')
})

// Corrija o erro abaixo
var totalPaises = 193;

 function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }

  precisoVisitar(20);
  jaVisitei(20);