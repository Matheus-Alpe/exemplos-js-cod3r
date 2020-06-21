var a = 3 
let b = 4

//repetir a declaração dentro do msm escopo que não da erro "var a = 3" e "var a = 30"
var a = 30 
b = 40
//repetir a declaração dentro do msm escopo da erro "let b = 4" e "let b = 40"
//priorizar utilização do "let" em vez de "var"
console.log(a, b);

a = 300
b = 400

console.log(a, b);

const c = 5 // não da para reatribuir outro valor só usando "c = 50"
// c = 50   da erro
console.log(a, b, c);
