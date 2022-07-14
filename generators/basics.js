// generation function 
function* example(arg) {
    const incremented = arg + 1
    console.log(`me invocou com ${arg}`)
    yield arg
  
    console.log('estava "suspeded" mas agora estou "resumed"')
    console.log(`ainda tenho o contexto da função: arg=${arg}, incremented=${incremented}`)
    const resumedArg = yield incremented
  
    console.log(`fui "resumed" recebendo o valor ${resumedArg}`)
    yield resumedArg + 3
  
    console.log('"resumed" novamente, mas agora é a última')
    return 42
    // lembrando que não retornar nada === return === return undefined
  }
/*
console.log(example);
const generator = example(1)
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next(5));
console.log(generator.next());

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/
function* naturals() {
  let n = 0
  while(true) {
    yield n++
  }
}
//não vai travar, só cria o generation
const N = naturals()
const take = (limit, gen) => {
  const acc = []
  for (let i = 0; i < limit; i++) {
    const {value, done} = gen.next()
    if(done) {
      if(value !== undefined) {
        acc.push(value)
      }
      break
    }
    acc.push(value)
  }
  return acc
}

//console.log(take(10, N))

function* hello() {
  yield "hello"
  yield "world"
  yield '!'
}

for (const message of hello()) {
  console.log(message)
}

//Objetos infinitos ficarão em loop usando o for, travando o sistema
//Para objetos infinitos, faça:
/*for(const n of naturals()){
  if(n >= 20) break
  console.log(n)
}*/

//iterator protocol
//iterator = {next () => {value: N, done: boolean} }
const zeroToNIterator = (n) => ({
  counter: 0,
  next() {
    const done = this.counter > n 
    return {
      done,
      value: done ? undefined: this.counter++
    }
  }
});

//iterable protocol
//iterable = {[Symbol.iterator]: () => iterator}
const zeroToN = (n) => ({
  [Symbol.iterator]() {
    return zeroToNIterator(n)
  }
})

for(const n of zeroToN(5)){
  console.log(n)
}

const alternatingMessages = (n) =>({
  messages:["hello", "bye"],
  *[Symbol.iterator]() {
    for(let i = 0; i < n; i++) {
      const message = i % 2 == 0 ? this.messages[0] : this.messages[1]
      yield message
    }
  }
})

for (const msg of alternatingMessages(6)) {
  console.log(msg)
}