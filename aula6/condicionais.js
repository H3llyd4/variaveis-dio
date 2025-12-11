/*// início do código
let ehLigado = false

if(ehLigado) {
    console.log("executou o comando")
} else {
    console.log("não executou")
}
// fim do código 1  */


/* início do código 2
let possuiOvos = false
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Ovos e Leite"
} else {
    console.log("Passou na seção de congelados:")
    itensComprados = "Lasanha congelada e uma coca-cola"
}

console.log("Itens comprados: " + itensComprados)

fim do código 2 */


// if, else if, else

let nivelDeFome = 1

if((nivelDeFome >= 0) && (nivelDeFome <= 3)) {
    console.log("Avaliando seu nível de fome:")
    console.log("Você está com pouca fome!")
} else if((nivelDeFome >= 4) && (nivelDeFome <= 6)) {
    console.log("Avaliando seu nível de fome:")
    console.log("Você está com muita fome!")
} else {
    console.log("Avaliando seu nível de fome:")
    console.log("Você comeria mais que um leão!")
}