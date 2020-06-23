function compras(trabalho1, trabalho2) {
  const compraSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // OU exclusivo  - bitwise xor 
  const comprarTv32 = trabalho1 != trabalho2 // OU exclusivo, outra forma mais simples
  const manterSaudavel = !compraSorvete // operador unário

  /**
   * retornar todas variaveis através de um objeto no return
   */
  return { compraSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


// OU exclusivo, outra forma mais simples
console.log(true != false)
console.log(true != true)
console.log(false != false)