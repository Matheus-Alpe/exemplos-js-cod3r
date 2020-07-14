function nome(x) {
  const nome = []

  const valor = x

  for (let i = 0; i < valor.length; i++) {
    nome[i] = valor.charAt(i)
  }

  function rand(max) {
    let valor = Math.random() * max
    return Math.floor(valor)
  }

  function geraNomes() {
    let n = ""
    let i = []

    for (let x in nome) {
      let numero = rand(valor.length)
      n += nome[numero]
    }

    return n
  }

  for (let x in nome) {
    console.log(geraNomes())
  }
}

nome('Thiago')