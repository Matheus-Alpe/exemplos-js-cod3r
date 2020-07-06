function resolveBhask(ax2, bx, c) {
  let delta = (bx ** 2) - (4 * ax2 * c) //(bx ** 2) = Math.pow(bx, 2)
  if(delta < 0){
      return "Delta é negativo"
  } 
  let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
  let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
  
  let resultados = [x1, x2]
  return resultados   
}

console.log(resolveBhask(3, -5, 12))
console.log(resolveBhask(3, 5, 12))

console.log(resolveBhask(1, 3, 2))
console.log(resolveBhask(3, 1, 2))

