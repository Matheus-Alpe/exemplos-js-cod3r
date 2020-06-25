const pessoa = {
  saudacao: 'Bom dia!',
  falar(){ //outra forma de criar funcão dentro de objeto <- recurso novo
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflieto entre paradigmas: funcional e Orientado objetos

const falarDePessoa = pessoa.falar.bind(pessoa)//bind() amarra objeto a função 'aponta para pessoa'
falarDePessoa()