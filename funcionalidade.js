var Leonardo = window.document.getElementById ("Leonardo")
var Samantha = window.document.getElementById ("Samantha")
var Bruna = window.document.getElementById ("Bruna")
var seta_esquerda = window.document.getElementById ("seta_esquerda")
var seta_direita = window.document.getElementById ("seta_direita")

function RolarDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    seta_direita.style = "display: none"
    seta_esquerda.style = "display: flex"
}

function RolarEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    seta_direita.style = "display: flex"
    seta_esquerda.style = "display: none"
}
