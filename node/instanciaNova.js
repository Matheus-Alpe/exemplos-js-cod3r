// uma factory retorna um novo objeto
module.exports = () => { // criando uma factory
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}