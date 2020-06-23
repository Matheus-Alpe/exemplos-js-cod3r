// Armazenando uma função em uma variável 
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b
}

console.log(soma(5, 2));

// Recurso da função arrow - retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const resultado = nota => nota >= 7 //como só tem um parâmetro 'nota', não precisa de áspas
console.log(resultado(7))

const imprimir2 = a => console.log(a)
imprimir2('Javascript é show de bola!')

//outro exemplo - arrow function
let a = 2
let b = 5
const mult = () => a * b
console.log(mult());
