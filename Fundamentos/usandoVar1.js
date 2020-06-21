{
  {
    {
      {
        var sera = 'Será??'
      }
    }
  }
}
console.log(sera) //consegue acessar a variavel em qualquer escopo, fora de uma função

function teste() {
  var local  = 123
  console.log(local);
}

teste()
//console.log(local); //não consegue acessar variavel fora do escopo da função
