const aprovados = ['Agatha', 'Alda', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
  console.log(`${++indice}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(`${++indice} - ${nome}`))


const exibirAprovados = (nome, indice) => console.log(`${++indice} > ${nome}`)
aprovados.forEach(exibirAprovados) 