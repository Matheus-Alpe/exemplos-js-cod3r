function funcaoDaSorte(valor) {
    if(valor <= 0 || valor > 10) return 'Só pode valores entre 1 e 10';
    const resultado = parseInt(Math.random() * 10) + 1;
    return valor == resultado ? `Parabéns! O número sorteado foi o ${resultado}`: `"Que pena! O número sorteado foi o ${resultado}`;
}

for(let i = 0; i <= 100; i++) {
    console.log(funcaoDaSorte(5))
}
console.log(funcaoDaSorte(0))
