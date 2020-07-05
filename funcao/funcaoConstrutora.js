function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  // metodo publico 
  this.acelerar = function () { //this. é reponsável por tornar publico a função 
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
      parar()
    }
  }

  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }

  // metodo privado
  let parar = function () {
    return console.log('Freiando...')
  }
}

const uno = new Carro
uno.acelerar()
console.log("Uno", uno.getVelocidadeAtual())

const marea = new Carro(50, 30)
marea.acelerar()
marea.acelerar()
console.log("Marea", marea.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log("Ferrari", ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
