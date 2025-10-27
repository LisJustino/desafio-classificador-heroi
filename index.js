//Classificação do herói baseado na experiência atual
let heroi = "Seraphine";
let xpAtual = 4751;
let nivel = " ";

//Estrutura condicional para determinar o nível do herói (XP)
if (xpAtual <= 1000) {
  nivel = "Ferro";
} else if (xpAtual > 1001 && xpAtual <= 2000) {
    nivel = "Bronze";
} else if (xpAtual > 2001 && xpAtual <= 5000) {
    nivel = "Prata";
} else if (xpAtual > 5001 && xpAtual <= 7000) {
    nivel = "Ouro";
} else if (xpAtual > 7001 && xpAtual <= 8000) {
    nivel = "Platina";
} else if (xpAtual > 8001 && xpAtual <= 9000) {
    nivel = "Ascendente";
} else if (xpAtual > 9001 && xpAtual <= 10000) {
    nivel = "Imortal";
} else if (xpAtual > 10000) {
    nivel = "Radiante";
}

//Exibição do resultado no console
console.log("O herói: " + heroi + " possui " + xpAtual + " de XP e está classificado no nível: " + nivel);