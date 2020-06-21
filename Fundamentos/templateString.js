const nome = "Matheus"
const concatenacao = "Olá "+ nome+ '!'
const template = ` 
  Olá 
      ${nome}!` //  <<---------- crase ` | template string considera espaços e quebra de linha
console.log(concatenacao, template);

console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase() //exemplo de função arrow
console.log(`Ei... ${up('cuidado')}!`);
