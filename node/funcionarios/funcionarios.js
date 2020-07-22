const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)
  

  //Desafio -> trazer o menor salário de uma mulher chinesa
  const generoF = f => f.genero == 'F'
  const chineses = f => f.pais == 'China'
  const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
  } 
  
  const func = funcionarios
    .filter(generoF)
    .filter(chineses)
    .reduce(menorSalario)
  
  console.log(func)
})