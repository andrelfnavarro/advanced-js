/// mecanismo de callback está relacionado à reatividade do codigo de acordo com eventor que ocorrem
const exec = (fn, a, b) => fn(a, b);

const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);
const subtrair = (w, z) => w - z;

exec(somarNoTerminal, 58, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 50, 25);
console.log(r);

const fn = () => console.log('Exec...');
setInterval(fn, 1000);
