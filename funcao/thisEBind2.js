function Pessoa() {
  this.idade = 0

  const self = this //ta amarrando o this do objeto Pessoa, ao self para poder chamar dentro da função abaixo
  setInterval(function(){ //dispara outra função a partir do intervalor
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000) //1000 milisegundos = 1 seg -- bind(this) aponta para pessoa agora
}

new Pessoa