// OR (||) - nosso boneco só pode sair se não tiver chovendo OU com guarda chuva

let tempo = "sol"
let item = "pá"

let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair ? " + podeSair)