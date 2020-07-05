const tipoTriangulo = (l1 = 1, l2 = 1, l3 = 1) => {
  if (l1 == l2 && l2 == l3) {
    return `(${l1},${l2},${l3}): Triângulo Equilátero`
  } else if (l1 == l2 || l2 == l3 || l1 == l3) {
    return `(${l1},${l2},${l3}): Triângulo Isósceles`
  } else {
    return `(${l1},${l2},${l3}): Triângulo Escaleno`
  }
}

console.log(tipoTriangulo())
console.log(tipoTriangulo(4, 4, 4))
console.log(tipoTriangulo(2, 3, 2))
console.log(tipoTriangulo(1, 3, 2))