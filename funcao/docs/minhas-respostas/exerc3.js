const expo = (base, expoente = 2) => Math.pow(base, expoente)
const expo2= (base, expoente = 2) => base ** expoente //mesma coisa, so que sem o Math.pow()

console.log(expo(5))
console.log(expo(5, 3))
console.log(expo(5, 5))

console.log(expo2(6));
console.log(expo2(6, 3));
