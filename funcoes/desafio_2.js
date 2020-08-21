const carrinho = [
  { id: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { id: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
  { id: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
  { id: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { id: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
];

// 1) fragil true
// 2) qtde * preço
// 3) media dos valores

const isFragile = (obj) => obj.fragil;
const getItemTotal = (item) => item.qtde * item.preco;
const getAvrg = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};

const mediaInicial = { qtde: 0, total: 0, media: 0 };
const media = carrinho
  .filter(isFragile)
  .map(getItemTotal)
  .reduce(getAvrg, mediaInicial).media;

console.log(media);

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc) {
      acc = this[i];
      continue;
    }

    acc = fn(acc, this[i], i, this);
  }

  return acc;
};

const media2 = carrinho
  .filter(isFragile)
  .map(getItemTotal)
  .meuReduce(getAvrg, mediaInicial).media;

console.log(media2);
