/*
38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimirImparesEntre(inicio = 0, fim = 100) {
  if (inicio > fim) {
    inicio = fim + inicio
    fim = inicio - fim
    inicio = inicio - fim
  }
  for (let x = inicio; x <= fim; x++) {
    if (x % 2 != 0) {
      console.log(x, 'é impar.')
    }
  }
}

imprimirImparesEntre(90)
console.log('--------------------')
imprimirImparesEntre(90, 150)
console.log('--------------------')
imprimirImparesEntre(40, 5)