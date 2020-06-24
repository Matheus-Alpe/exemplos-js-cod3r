
const [a] = [10]
console.log(a)

//destruturando array e pulando casas
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//destruturando array multidimensional
const [, [, nota]] =  [[, 8, 8], [9, 6, 8]] //exemplo, mais complexo
console.log(nota)

console.log('------');

//destructuring array 
const [m, n, ...rest] = [1, 2, 3, 4, 5, 6]
console.log(m)
console.log(n)
console.log(rest)