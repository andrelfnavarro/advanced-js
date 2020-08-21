// arrow function
const felizNatal = () => console.log('Feliz Natal!');
felizNatal();

const saudacao = (nome) => `Fala ${nome}, blz?`;
console.log(saudacao('Maria'));

// ... é o rest parameter, responsavel por pegar todos os parametros
// e atribuilos a um array
const somar = (...numeros) => {
  console.log(Array.isArray(numeros));
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Dessa maneira, podemos reescrever a funcao da aula anterior de tal forma
const potencia = (base) => (exp) => Math.pow(base, exp);

// this -> mais relacionado com OO, mas fica de curiosidade
Array.prototype.log = function () {
  console.log(this);
};

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};

// o primeiro retorna undefined, pois 'this' não suporta uso de arrow functions em casos assim
Array.prototype.primeiro = () => {
  console.log(this[this.length - 1]);
};

const numeros = [1, 2, 3];
numeros.log();
numeros.ultimo();
numeros.primeiro();
