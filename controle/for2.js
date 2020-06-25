const notas = [2.5, 7.5, 3.6, 8.4, 9]

//'for in' traz os indeces do array
for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana', 
  sobrenome: 'Oliveira',
  idade: 22,
  peso: 56.5
}

for (let atributo in pessoa) { //interessante usar essa forma para objetos
  console.log(`${atributo} = ${pessoa[atributo]}`)
}