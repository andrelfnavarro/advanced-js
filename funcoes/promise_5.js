const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!');
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Ao implementarmos a reject para casos de erro, precisamos fazer o tratamento com o catch
funcionarOuNao('Testando...', 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Erro esp: ${err}`)
  )
  .then(() => console.log('Quase fim!'))
  .catch((err) => console.log(`Erro geral: ${err}`))
  .then(() => console.log('Fim!'));
// Geralmente utilizar o catch em ultima posicao, ja que nao ha mais nada sendo passado (perdemos o valor anterior)
