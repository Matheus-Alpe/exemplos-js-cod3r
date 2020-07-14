const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //convertendo para objeto
console.log(JSON.parse('{"a":1.5,"b":"string","c":true, "d":{}, "e":[1,2,3, "string"]}')) //convertendo para objeto