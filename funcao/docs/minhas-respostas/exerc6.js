function getJurosSimples(cap, taxa, tempo){
  return cap * (1 + taxa * tempo)
}

function getJurosComposto(cap, taxa, tempo){
  return cap * Math.pow((1 + taxa), tempo)
}
console.log("\nJuros Simples:")
console.log(getJurosSimples(1200, 0.02, 15))
console.log(getJurosSimples(100, 10/100, 2))

console.log("\nJuros Composto:")
console.log(getJurosComposto(1200, 0.02, 15))
console.log(getJurosComposto(100, 10/100, 2))