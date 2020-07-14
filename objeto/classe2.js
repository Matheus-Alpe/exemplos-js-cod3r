class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor(sobrenome, profissao, nome) {
    super(sobrenome, profissao)
    this.nome = nome
    // super('Silva') // pega o default de profissao que é 'Professor'
    // super('Silva', 'Programador')
  }
}

const filho = new Filho('Alves', 'Programador', 'Matheus')
console.log(filho)