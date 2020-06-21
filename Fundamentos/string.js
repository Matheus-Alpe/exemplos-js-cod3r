var nome= "   Matheus Alves Pereira"
console.log(nome.trim())// tira os espaço desnecessários
nome="Matheus Alves Pereira"
console.log(nome.charAt(2))//t
console.log(nome.charCodeAt(0))//77
console.log(nome.concat("!"))//Matheus Alves!
console.log(nome.indexOf('e'))//4
console.log(nome.substring(0, nome.indexOf(' ')));//Matheus
console.log(nome.substring(nome.indexOf(' ') +1));//Alves Pereira
console.log(nome.substring((nome.lastIndexOf(' ') +1)));//Pereira
console.log(nome.replace(' ', '_'))//Matheus_Alves Pereira
console.log(nome.split(' ').join('_'));//Matheus_Alves_Pereira
console.log(nome.replace(/ /g, '_'));//Matheus_Alves_Pereira MAIS RAPIDO - estudar RegEx
console.log(nome.split('e'))// [ 'Math', 'us Alv', 's P', 'r', 'ira' ]
console.log(nome.split(' '))// [ 'Matheus', 'Alves', 'Pereira' ]
console.log(nome.match('Alves'))//[ 'Alves', index: 8, input: 'Matheus Alves', groups: undefined ]

console.log("Nome: ".concat(nome).concat("."));
console.log("Nome e Sobrenome: " +nome + ".");
console.log("Ana,Matheus,Marcos,Thiago".split(','));
