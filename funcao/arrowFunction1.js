let dobro = function (a) {
  return 2 * a
}
console.log(dobro(2))

dobro = (a) => {
  return 2 * a
}
console.log(dobro(3))

dobro = a => 2 * a // return implícito
console.log(dobro(4))

console.log(dobro(Math.PI))

let ola = function (){
  return 'Olá 1'
}
console.log(ola())

ola = () => 'Olá 2'
console.log(ola())

ola = _ => 'Olá 3' // _ -> possui um parâmetro
console.log(ola())
