let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 0
console.log(!!isAtivo); //duas negações !! retorna o valor original boolean


console.log('os verdadeiros...');
console.log(!!3);// = true
console.log(!!-1);// = true
console.log(!!' ');//espaço vazio = true
console.log(!!'texto');//preenchido = true
console.log(!![]);//array = true
console.log(!!{});//objeto literal = true
console.log(!!Infinity);//infinito = true
console.log(!!(isAtivo = true));//se atribuição for true, retorna = true

console.log('os falsos...');
console.log(!!0);// = false
console.log(!!'');//string vazia = false
console.log(!!null);// null = false
console.log(!!NaN);//not a number = false
console.log(!!undefined);//undefined = false
console.log(!!(isAtivo = false));//se atribuição for false, retorna = false

console.log('fins de testes...');
console.log(!!('' || null || 0 || ' '), "Resultado do OU");// = true | pois um deles é verdadeiro
console.log(('' || null || 0 || 'epa' || 123));// sem !! ele retorna a primeira verdadeira
console.log(!!('' && null && 0 && ' '), "Resultado do &&");// = false | todos precisam ser do msm tipo


let nome = ''
console.log(nome || 'Desconhecido'); 
//como nome esta vazio e indica falso
//desconhecido é imprimido por ser true
