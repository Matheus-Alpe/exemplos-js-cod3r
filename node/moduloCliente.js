//sempre que criar com Cliente no nome, é pq onde vai ser utilizado os módulos
const moduloA = require('./moduloA') //'./' pq está na msm pasta
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)