// Cadeia de protótipo (prototype chain)
Object.prototype.attr0 = '0'//<- não é recomendado fazer isso
const avo = { attr1: 'A' } // avo aponta para Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // filho.attr3 sombreou attr3 de pai 'shadowing'
const filho = { __proto__: pai, attr3: 'C' } 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // herança

//outro exemplo mais complexo para herança utilizando Object.setPrototypeOf(object, prototype)
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing, sombreou o atributo 'velMax' de 'carro'
}

const volvo = {
  modelo: 'V40',
  status() { // shadowing função de 'carro'
    return `${this.modelo}: ${super.status()}` // pega o status de 'carro', método do protótipo
  }
}

Object.setPrototypeOf(ferrari, carro) // definindo herança, estabelencendo relação de objeto e protótipo
Object.setPrototypeOf(volvo, carro) // definindo herança, estabelencendo relação de objeto e protótipo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())