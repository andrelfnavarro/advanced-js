// Reduce
const carrinho = [
  { id: 'Caneta', qtde: 10, preco: 7.99 },
  { id: 'Impressora', qtde: 0, preco: 649.5 },
  { id: 'Caderno', qtde: 4, preco: 27.1 },
  { id: 'Lapis', qtde: 3, preco: 5.82 },
  { id: 'Tesoura', qtde: 1, preco: 19.2 },
];

const getItemTotal = (item) => item.qtde * item.preco;
const getTotal = (total, preco) => total + preco;

const valorTotal = carrinho.map(getItemTotal).reduce(getTotal);
console.log(valorTotal);
