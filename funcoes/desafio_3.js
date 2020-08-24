const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const lerArquivo = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (_, content) => resolve(content.toString()));
  });
};

lerArquivo(caminho).then(console.log);
