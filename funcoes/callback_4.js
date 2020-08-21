// Filter
const carrinho = [
  { id: 'Caneta', qtde: 10, preco: 7.99 },
  { id: 'Impressora', qtde: 0, preco: 649.5 },
  { id: 'Caderno', qtde: 4, preco: 27.1 },
  { id: 'Lapis', qtde: 3, preco: 5.82 },
  { id: 'Tesoura', qtde: 1, preco: 19.2 },
];

const qtdeMaiorQueZero = (item) => item.qtde > 0;
const getId = (obj) => obj.id;

const nomesItensValidos = carrinho.filter(qtdeMaiorQueZero).map(getId);
console.log(nomesItensValidos);

// criando um filter
Array.prototype.meuFilter = function (fn) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) filtered.push(this[i]);
  }
};

const nomesItensValidos2 = carrinho.meuFilter(qtdeMaiorQueZero);
console.log(nomesItensValidos);
