/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/
function conceitoNotas(vetor){
  let conceito = []
  vetor.forEach(nota => {
    if(nota >= 0 && nota <= 4.9){
      conceito.push(`${nota} D`)
    } else if (nota >= 5 && nota <= 6.9){
      conceito.push(`${nota} C`)
    } else if (nota >= 7 && nota <= 8.9){
      conceito.push(`${nota} B`)
    } else if (nota >= 9 && nota <= 10){
      conceito.push(`${nota} A`)
    } else {
      conceito.push(`${nota} Nota Inválida`)
    }
  });
  return conceito
}

let notas = [2, 6.8, 8.5, 9.5, 11]
let vConceito = conceitoNotas(notas)
console.log(vConceito)