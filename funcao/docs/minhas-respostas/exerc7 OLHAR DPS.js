const resolveBask = (a, b, c) => {
  let x1 = -b - (Math.sqrt(Math.pow(b, 2) + 4 * a * c )) 
  let x2 = -b + (Math.sqrt(Math.pow(b, 2) + 4 * a * c)) 
  let valorA = 2 * a
  
  x1 = Math.abs(x1) / valorA
  x2 = Math.abs(x2) / valorA


  let delta = Math.pow(a, 2) - 4 * b * c
  if(delta <= 0){
    return "Delta é negativo!"
  }

  let vetorResultado = [x1, x2]
  return vetorResultado
}

console.log(resolveBask(3, -5, 12))
console.log(resolveBask(3, 5, 12))

