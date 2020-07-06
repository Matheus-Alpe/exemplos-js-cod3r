/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/
function valorAnuidade(mes, valor){
  if(mes > 0 && mes < 13){
    let atraso = mes - 1
    return (valor * (1 + 0.05) ** atraso).toFixed(2)//5% de juros (sob o regime de juro compostos). 
  } else {
    return 'Insira um Mês válido!'
  }
}

console.log(valorAnuidade(1, 100))
console.log(valorAnuidade(2, 100))
console.log(valorAnuidade(3, 100))
console.log(valorAnuidade(4, 100))