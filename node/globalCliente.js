require('./global.js') //funciona com objeto global
// Cuidado ao tocar no escopo global
console.log(MinhaApp.saudacao())

/**
 * O padrão é utilizar o sistema de módulos, não essa forma.
 */

 MinhaApp.nome = 'Eita!' //é um problema deixar abertos para mudança
 //não alterar pq o objeto foi congelado (Object.freeze())
 console.log(MinhaApp.nome)