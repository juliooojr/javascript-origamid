// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade1 = 15
var idade2 = 15

if (idade1 > idade2) {
    console.log('É maior!')
} else if (idade1 === idade2) {
    console.log('É igual')
} else {
    console.log('É menor!')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(5 - ' ')
console.log(expressao)
//&& retorna o último verdadeiro ou o primeiro falso

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //true