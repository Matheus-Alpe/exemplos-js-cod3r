/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaAritmetica(vetor) {
  let media = 0
  for(let i in vetor){
    media += vetor[i]
  }
  return (media / vetor.length).toFixed(1)
}



let valores = [10, 10, 10, 10]
console.log(mediaAritmetica(valores))

let valores2 = [6, 7.5, 10, 8]
console.log(mediaAritmetica(valores2))