// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado(4) // 16
  areaQuadrado(5) // 25
  areaQuadrado(2) // 4
  
console.log(areaQuadrado(4))

  // Parênteses () executam uma função

  // teste sem ()
console.log(areaQuadrado)


// Parâmetros e Argummentos
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

//peso e altura são os parâmetros
function imc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
console.log(imc(80, 1.80))
imc(60, 1.70) // 60 e 1.70 são os argumentos
console.log(imc(60, 1.70))
console.log(imc(90, 1.75))


function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
  }
  
corFavorita(); // retorna 'Você não gosta de nada'
  


  