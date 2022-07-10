let tenis1 = document.getElementById('tenis-1')
let tenis2 = document.getElementById('tenis-2')

let setaDireita = document.getElementById('direita')
let setaEsquerda = document.getElementById('esquerda')


setaEsquerda.addEventListener('click', () => {
    tenis1.style.left = '650px'
    tenis2.style.left = '-50px'
})
setaDireita.addEventListener('click', () =>{
    tenis1.style.left = '-50px'
    tenis2.style.left = '-650px'

})