/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function calculoConvenio(idade) {
  let precoPadrao = 100
  if (idade > 60 && idade < 150) {
    return `Idade: ${idade} => R$${(precoPadrao + 130).toFixed(2)}`
  } else if (idade > 30 && idade <= 60) {
    return `Idade: ${idade} => R$${(precoPadrao + 95).toFixed(2)}`
  } else if (idade >= 10 && idade <= 30) {
    return `Idade: ${idade} => R$${(precoPadrao + 50).toFixed(2)}`
  } else if (idade >= 1 && idade < 10) {
    return `Idade: ${idade} => R$${(precoPadrao + 80).toFixed(2)}`
  }
  return 'Insira uma idade válida!'
}

console.log(calculoConvenio(10))
console.log(calculoConvenio(80))
console.log(calculoConvenio(50))
console.log(calculoConvenio(25))
console.log(calculoConvenio(250))
console.log(calculoConvenio(0))
console.log(calculoConvenio('Tia'))