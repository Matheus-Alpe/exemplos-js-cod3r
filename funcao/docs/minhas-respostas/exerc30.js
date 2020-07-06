/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor(vetor){
  let maior = vetor[0], menor = vetor[0];
  for(let i in vetor) {
    if(vetor[i] > maior){
      maior = vetor[i]
    } else if(vetor[i] < menor) {
      menor = vetor[i]
    }
  }
  console.log(`Valores do vetor: ${vetor}\nMaior: ${maior} \nMenor: ${menor}`)
}

maiorMenor([ 7, 8, 29, 10, 11, 1, 12, 16, 17, 18, 19, 20, 21])