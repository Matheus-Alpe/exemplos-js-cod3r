let num1 = 1
let num2 = 2

num1++ //pós-fixado
console.log(num1)
--num1 //pré-fixado
console.log(num1)

console.log(++num1 === num2--) //true    - fugir desse tipo
console.log(num1 === num2) //false
console.log(num1++ === num2--) //false   - fugir desse tipo
