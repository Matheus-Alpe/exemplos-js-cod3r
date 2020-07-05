const dividindo = (dividendo, divisor) => {
  return `${dividendo} / ${divisor} = ${dividendo/divisor}\nResto da divisão = ${dividendo%divisor}`
}

console.log(dividindo(5, 2))
console.log(dividindo(5, 3))
console.log(dividindo(20, 4))