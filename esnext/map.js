const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // forma errada de pegar o valor
console.log(tecnologias.get('react')) //forma certa
console.log(tecnologias.get('react').framework)


// outra forma de criar Map atribuindo elementos
const chavesVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]) 

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //true
console.log(chavesVariadas.size)
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //vai substituir valor 'a'
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)