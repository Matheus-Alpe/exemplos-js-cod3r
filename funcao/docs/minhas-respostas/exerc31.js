/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function acharNegativos(vetor){
  let qtNegativo = 0
  for(let i in vetor) {
    if(vetor[i] < 0){
      qtNegativo++
    } 
  }
  console.log(`Valores do vetor: ${vetor}\nQtd negativos: ${qtNegativo}`)
}

acharNegativos([ 7, 8, -29, 10, 11, -1, 12, 16, 17, 18, -19, 20, 21])