/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
function qtdParesImpares(vetor) {
  let pares = 0, impares = 0;
  for (let i in vetor) {
    if (vetor[i] % 2 == 0) {
      pares++
    } else {
      impares++
    }
  }
  return `Qtd Pares: ${pares} \nQtd Impares: ${impares}`
}

let numeros = () => {
  let valores = []
  for (let i = 0; i < 10; i++) {
    let valor = Math.random() * (100 - 1) + 1
    valores.push(Math.floor(valor))
  }
  console.log(valores)
  return valores
}

console.log(qtdParesImpares(numeros()))