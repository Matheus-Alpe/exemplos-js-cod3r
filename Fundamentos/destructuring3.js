//destruturando dentro de parâmetro de uma função
function rand({ min = 0, max = 1000 }) { // = 0 e = 1000 são valores definidos por padrão, se não tiver
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 })) //objeto passado como paramentro, lembrando q { } representa objeto
console.log(rand({ min: 20, max: 60 }))
console.log(rand({ min: 900 }))
console.log(rand({ max: 100 }))
console.log(rand({ })) //passando objeto vazio, ele retorna o random de padrão
//console.log(rand()) //erro pois tem que passar um objeto


const obj = { min: 1, max: 10 } // objeto
console.log(rand(obj))

const obj2 = { max: 20 } // objeto sem min
console.log(rand(obj2))

const obj3 = { min: 100 } // objeto sem max
console.log(rand(obj3))
