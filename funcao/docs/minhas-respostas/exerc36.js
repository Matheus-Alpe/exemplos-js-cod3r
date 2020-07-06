/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicaValoresVetor(vetor, valor) {
  let resultado = []
  vetor.forEach(e => {
    resultado.push(e * valor)
  });
  return resultado
}
console.log(multiplicaValoresVetor([2, 3, 6], 2))


function multiplicaValoresVetorCondicao(vetor, valor) {
  let resultado = []
  vetor.forEach(e => {
    if (e > 5) {
      resultado.push(e * valor)
    } else {
      resultado.push(e)
    }
  });
  return resultado
}
console.log(multiplicaValoresVetorCondicao([2, 3, 6], 2))