const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10: 
    case 9:
      console.log('Quadro de honra')
      break//serve para sair do switch sem executar os outros cases
    case 8: case 7: //formas de agrupar
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota inválida')
  }
}
imprimirResultado(10)
imprimirResultado(10.9) //arredonda por causa do Math.floor(nota)
imprimirResultado(8.9)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)
