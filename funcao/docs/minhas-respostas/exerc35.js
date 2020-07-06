/*
35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
*/

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function addVetor(v1, v2) {
  for(let i in v2) {
    v1.push(v2[i])
  }
  console.log('Vetor adicionado: ' + v2)
  console.log('Vetor resultado: ' + v1)
}

addVetor(vetorPilha, vetorAdiciona)

console.log(vetorPilha)
