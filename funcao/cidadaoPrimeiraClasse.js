// função em JS é First-Classe Object (citizens)
// Higher-order function 

//criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {
  correr: function () { return 'Correndo...' },
  digita: function () { console.log('Digitando.') }
}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())
console.log(obj.correr())

//passar função como parâmetro para outra função
function run(fun) {
  fun()
}
run(function () { console.log('Executando!') })
run(obj.digita)

//uma função pode retornar/conter um função 
function soma(a, b){
  return function(c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(5) //(5) é o terceiro parâmetro, (c)
const cincoMais = soma(2, 3)//outra forma
cincoMais(4) // outra forma para -> soma(2, 3)(5)