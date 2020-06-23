//                                  ? operador ternário
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/*//outra forma
const resultado = nota => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1))
console.log(resultado(6.9))

/*//armazena valores támbem: 
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(status)
*/