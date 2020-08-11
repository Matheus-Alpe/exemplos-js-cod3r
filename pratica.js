const pessoa = {
  * definirNome(nome) {
    yield nome;
    yield nome + ' Alves';
    yield nome + ' Alves' + 123;
  }
}

const gen = pessoa.definirNome('Matheus');
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log('\n\n\n');

let cc = 'Matheus alves';
console.log(cc.slice(-2));
console.log(cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4));


let isLoggedIn = false;
let isPaid = false
// multi ternários
const status = isPaid ? 'is Paid' : isLoggedIn ? 'is Logged' : 'not Logged';
console.log(status);

const items = [
  { name: 'Bike', price: 100, solded: false },
  { name: 'TV', price: 150, solded: true },
  { name: 'Album', price: 130, solded: false },
  { name: 'Phone', price: 110, solded: true },
  { name: 'Computer', price: 50, solded: true },
  { name: 'Keyboard', price: 10, solded: false }
];

const foundItem = items.map(({ name, solded }) => {
  return { name, solded };
});

const filteredItem = items.filter(({ price, solded }) => {
  return price > 100 && solded
})

const sumPriceItem = items.reduce((a, { price }) => {
  return a += price;
}, 0);

console.log({ foundItem });
console.log({ filteredItem });
console.log({ sumPriceItem });

setTimeout(() => {
  console.log('Segundo');
}, 0);

setTimeout(() => {
  console.log('Primeiro');
}, 0)

console.log('Terceiro')