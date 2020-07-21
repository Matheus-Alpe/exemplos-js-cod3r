const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vestappen') //adiciona novo elemento no final
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona novo elemento no começo
console.log(pilotos)

// splice pode adicionar e remover elementos
// -> adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// -> remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //pega apartir de um indice e retona como novo array. slice() != splice()
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)