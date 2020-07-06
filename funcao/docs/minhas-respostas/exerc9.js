function notaAluno(nota) {
  const notaRegra = arredondar(nota)
  if (nota >= 40) {
    return `Aprovado: ${notaRegra}`
  }
  return `Reprovado: ${notaRegra}`
}

function arredondar(nota) {
  if (nota % 5 > 2){
    return nota + (5 - (nota % 5))
  }else{
    return nota
  }
}
console.log(notaAluno(38))
console.log(notaAluno(37))