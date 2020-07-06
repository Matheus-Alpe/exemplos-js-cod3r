/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
function entregaCedula(valor) {
  let cem = 0, cinquenta = 0, dez = 0, cinco = 0, um = 0, valorOriginal = valor;
  
  while (valor != 0) {
    if (valor >= 100) {
      cem++
      valor -= 100
    } else if (valor >= 50) {
      cinquenta++
      valor -= 50
    } else if (valor >= 10) {
      dez++
      valor -= 10
    } else if (valor >= 5) {
      cinco++
      valor -= 5
    } else if (valor >= 1) {
      um++
      valor -= 1
    }
  }

  let frase = ""
  if(cem != 0){ frase += `${cem} nota(s) de R$100. `}
  if(cinquenta != 0){ frase += `${cinquenta} nota(s) de R$50. `}
  if(dez != 0){ frase += `${dez} nota(s) de R$10. `}
  if(cinco != 0){ frase += `${cinco} nota(s) de R$5. `}
  if(um != 0){ frase += `${um} nota(s) de R$1. `}
  return frase + `= ${valorOriginal}`
}

console.log(entregaCedula(20))
console.log(entregaCedula(22))
console.log(entregaCedula(25))
console.log(entregaCedula(122))
console.log(entregaCedula(222))
console.log(entregaCedula(600))
console.log(entregaCedula(777))
console.log(entregaCedula(66))
console.log(entregaCedula(153))