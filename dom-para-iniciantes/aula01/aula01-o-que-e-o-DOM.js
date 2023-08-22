// Retorne o url da página atual utilizando o objeto window

const hrefPagina = window.location.href
console.log(hrefPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
// O querySelector pega o PRIMEIRO elemento que ele encontra

const elementoAtivo = window.document.querySelector('.ativo')

// Retorne a linguagem do navegador

const linguagem = window.navigator.language
console.log(linguagem)

// Retorne a largura da janela 

const largura = window.innerWidth
console.log(largura)



