//somar(3)(4)(5)
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(somar(3)(4)(5));

//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3)(7)(fn)

function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

console.log(calcular(3)(7)(subtrair));
