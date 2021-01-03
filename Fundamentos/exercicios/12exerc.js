function removePropriedade(objeto, propriedade) {
    let obj = { ...objeto}
    delete obj[propriedade];
    return obj;
}

const pessoa = {
    nome: "Matheus",
    idade: 24
}

console.log(Object.is(removePropriedade(pessoa, "idade"), pessoa));