const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDAdos = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) //necessário para enviar informações para aplicação

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDAdos.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDAdos.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDAdos.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDAdos.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    id: req.params.id
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDAdos.excluirProduto(req.params.id)
  res.send(produto) // JSON
})

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`)
})