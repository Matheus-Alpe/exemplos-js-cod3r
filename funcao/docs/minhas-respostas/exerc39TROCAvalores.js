/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/
function trocaValores(v1, v2){
  if(v1.length == v2.length){
    for(let i in v1){
      v1[i] = v1[i] + v2[i]
      v2[i] = v1[i] - v2[i]
      v1[i] = v1[i] - v2[i]
    }
  } else {
    console.log('Vetor com tamanhos diferentes')
  }
  console.log('Vetor 1:', v1)
  console.log('Vetor 2:', v2)
}

let vetorA = [4, 3, 2]
let vetorB = [12, 6, 4]

trocaValores(vetorA, vetorB)