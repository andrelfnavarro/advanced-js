// Map
const nums = [1, 2, 3, 4, 5];
const dobro = (n, i, arr) => n * 2 + i + arr.length;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
  { id: 'Caneta', qtde: 10, preco: 7.99 },
  { id: 'Impressora', qtde: 0, preco: 649.5 },
  { id: 'Caderno', qtde: 4, preco: 27.1 },
  { id: 'Lapis', qtde: 3, preco: 5.82 },
  { id: 'Tesoura', qtde: 1, preco: 19.2 },
];

const getId = (obj) => obj.id;
const getTotal = (obj) => obj.qtde * obj.preco;

Array.prototype.meuMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

const ids = carrinho.meuMap(getId);
const totais = carrinho.meuMap(getTotal);

console.log(ids, totais);
