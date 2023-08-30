//HEIGHT E WIDTH

//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll


const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight

console.log(height)


// OFFSETTOP E OFFSETLEFT

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

const animaisTop = listaAnimais.offsetTop // Nao funcionou
console.log(animaisTop)

const raposaEsquerda = document.querySelector('h2')
const h2ToLeft = raposaEsquerda.offsetLeft

console.log(h2ToLeft)

// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section2 = document.querySelector('h1');

const rect = section2.getBoundingClientRect();
console.log(rect)
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

console.log(
    window.innerHeight,
    window.innerWidth,
)

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// MATCHMEDIA()
//Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

console.log(small)


// EXERCÍCIOS

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img')

const imgTop = img.offsetTop
console.log(imgTop)

// Retorne a soma da largura de todas as imagens
function somaimagens(){

    const imagens = document.querySelectorAll('img')
    let soma = 0
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth
        console.log(imagem.offsetWidth)
    });
    console.log(soma)
}



window.onload = function(){
    somaimagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach ((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight

    if (linkWidth > 48 && linkHeight > 48){
        console.log(link, 'Passou no teste')
    } else {
        console.log(link, 'Não passou no teste')
    }
})

console.log(links)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const brownserSmall = window.matchMedia('(max-width: 720px)').matches

if (brownserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}
