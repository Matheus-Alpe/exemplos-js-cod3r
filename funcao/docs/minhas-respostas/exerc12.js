function fatorial(numero) {
  let f = 1
  for(let i = 1; i <= numero; i++){
    f *= i
  }
  return f
}

console.log(fatorial(3))
console.log(fatorial(6))
console.log(fatorial(7))