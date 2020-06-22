const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {//função anônima - funcs.push() é pra adicionar ao array
    console.log(i)
  })
}

funcs[2]() //executando função dentro do array no indice 2
funcs[9]()
