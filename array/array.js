// array é objeto, é dinâmico, é heterogenea (pode misturar dados, boolean, int, double, string)
// boa pratica: trabalhar com estruturas homogeneas no array 
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma de criar array NÃO recomendada
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos'] //forma correta, usando forma literal -> []
console.log(aprovados[0]) //array com indice
console.log(aprovados[2])
console.log(aprovados[1])
console.log(aprovados[3])//não existe no array, return undefined

aprovados[3] = 'Paulo' //forma tradicional de adicionar novo elemento a um indice
aprovados.push('Matheus') //outra forma de adicionar novo elemento ao array
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

aprovados.sort() //ordena com base na tabela ASCII
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
console.log(aprovados)