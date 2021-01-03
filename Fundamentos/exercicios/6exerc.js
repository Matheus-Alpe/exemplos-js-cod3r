function inverso(x) {
    if (typeof x === 'number') return -x;
    else if (typeof x === 'boolean') return !x;
    else return "booleano ou número esperados, mas o parâmetro é do tipo string";
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));