let valor //não inicializada
console.log(valor); //undefined
/*
  Sempre que quiser zerar um valoriavel,
  atribuir o 'null', em vez do 'undefined'
*/
valor = null //ausência de valor, seja ele referência ou primitivo
console.log(valor); 
//console.log(valor.toString()); // Erro! 

const produto = {}
console.log(produto.preco); //undefined
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); //false
//delete produto.preco
console.log(produto); 

produto.preco = null //sem preço, está correto
console.log(!!produto.preco); //false
console.log(produto); // evite atribuir undefined