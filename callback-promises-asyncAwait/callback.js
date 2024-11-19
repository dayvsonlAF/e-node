// callback > promise > async/await

// callback -> é uma função passada como argumento para outra função, que será executada posteriormente, 
// geralmente após um certo evento ou processo ser concluído.

// Por que usar callbacks?
// Eles são uma forma de lidar com operações assíncronas, como leitura de arquivos, requisições a APIs ou temporizadores.

// Exemplo:

// Função que simula fazer algo e depois chama o callback
// function saudacao(nome, callback) {
//   console.log("Olá, " + nome + "!");
//   callback(); // Chama a função passada como argumento
// }

// // Função que será usada como callback
// function mostrarMensagem() {
//   console.log("Bem-vindo(a)!");
// }

// // Chamando a função com um callback
// saudacao("João", mostrarMensagem);

const fs = require('fs');

/*

function callback(err, contents) {
  console.log(err, String(contents))
}

console.log(1)

fs.readFile('./in1.txt', callback)

console.log(2)
console.log(3)

// Com esse código acima, ao executar o callback, só é exibido ao final
// pois não parou a execução do código. Resultando nessa saída:

*/

// 1
// 2
// 3
// null 4
// 5
// 6
// 7
// 8
// 9
// 10






// Outra forma de callback

console.log(1)

fs.readFile('./in1.txt', (err, contents) => {
  fs.readFile('./in2.txt', (err2, contents2) => {
    console.log(err, String(contents))
    console.log(err2, String(contents2))
  })
})

console.log(2)
console.log(3)

// Usar o callback dessa forma, faz o código crescer para frente, o que não é ideal.