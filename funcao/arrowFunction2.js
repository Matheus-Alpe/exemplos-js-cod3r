function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++ //this aponta para pessoa pq foi utilizado função arrow, e n precisa usar bind(Pessoa) 'amarrar'
    console.log(this.idade)
  }, 1000)
}

new Pessoa