Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim //this - refere ao Number, quando fizer nota.entre(), nota é o number
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log(nota, 'Quadro de honra!!')
  } else if (nota.entre(7, 8.99)) {
    console.log(nota, 'Aprovado!')
  } else if (nota.entre(4, 6.99)) {
    console.log(nota, 'Recuperação!')
  } else if (nota.entre(0, 3.99)) {
    console.log(nota, 'Reprovado!')
  } else {
    console.log(nota, 'Nota inválida!')
  }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.9)
imprimirResultado(3.9)
imprimirResultado(-1)
imprimirResultado(11)
// imprimirResultado('7') //da erro, por ca