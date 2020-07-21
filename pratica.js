class Carro {
  constructor(modelo){
    this.modelo = modelo
  }

  getModelo() {
    return this.modelo
  }
}

class Picape extends Carro {
  constructor(modelo, velocidadeMax = 100){
    super(modelo)
    this.velMax = velocidadeMax
  }

  info() {
    return `Modelo: ${super.getModelo()} | Velocidade Maxima: ${this.velMax}`
  }
}

const ford = new Picape('Ford', 200)
console.log(ford.info())