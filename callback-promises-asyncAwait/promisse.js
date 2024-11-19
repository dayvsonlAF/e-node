// No callback, a gente chama depois;
// Já na promisse, eu retorno de imediato uma promessa que no futuro, vou trazer um valor para aquele cara

const fs = require('fs');

console.log(1)

// Retorna um valor imediato, e depois posso chamar dois valores (resolver ou rejeitar a promessa) 
const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, contents) => {
    if (err) {
      reject(err)
    } else {
      resolve(contents)
    }
  })
})

readFile('./in1.txt')
  .then(contents => {
    console.log(String(contents))
    return readFile('./in2.txt')
  })
  .then(contents => {
    console.log(String(contents))
  })

console.log(2)
console.log(3)

// Diferente do callback, que o código cresce para a frente, com a promisse começa a crescer para baixo
// o que é melhor e traz uma facilidade de manutenção