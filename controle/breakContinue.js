const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in nums) {
  if(i % 2 == 0) {
    continue; //pula o loop
  }
  console.log(`i = ${i}`)
}

for (let s in nums) {
  if(s == 5) {
    break; //interrompe o loop
  }
  console.log(`s = ${s}`)
}

//não usar esse tipo de estrutura, foi só exemplificado
externo: for (let a in nums) { //atribuindo um rotulo e chamando ele de 'externo'
  for(let b in nums) {
    if(a == 2 && b == 3){
      break externo //so funciona se tiver um rótulo, pois ele da break do for primario, não no inteiro
    }
    console.log(`Par = ${a}, ${b}`)
  }
}

console.log('Fim!');
