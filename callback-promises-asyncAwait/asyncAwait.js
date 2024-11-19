// Forma mais bonita de ver uma promisse
// callback -> caracteristica do js de colocar as operações que demoram muito, para que chamem uma função
// quando aquilo acontecer. Ex: ao ler um arquivo, ele chama de volta ao arquivo ser lido.

// Promisse -> é uma maneira de ver isso do callback de uma forma diferente

// Uma função async é uma promisse

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

const init = async () => {
  try {
    const contents = await readFile('./in1.txt')
    const contents2 = await readFile('./in2.txt')
    console.log(String(contents))
    console.log(String(contents2))
  } catch (err){
    console.log('erro: ', err)
  }
}
init()
console.log(2)
console.log(3)