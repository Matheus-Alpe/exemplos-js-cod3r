// novo recurso do ES2015
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

//destructuring
const { nome, idade } = pessoa //assim ele pega os atributos do objeto e transforma em variáveis
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //mesma forma, só alterando o nome de exibição da variável
console.log(n, i)

//                             = true - definido como padrão se não retornar nada
const { sobrenome, bemHumorada: b = true } = pessoa //tentando pegar algo que não existe no objeto
console.log(sobrenome, b) //retorna undefined

//
const { logradouro, numero } = pessoa.endereco
console.log(logradouro, numero)
// ou de outra forma
const { endereco: { logradouro: l, numero: numLocal, cep } } = pessoa
console.log(l, numLocal, cep)

/*const { conta: { ag, num } } = pessoa //da erro, pois ta tentando acessar algo que não existe
console.log(ag, num) */
