//Trabalhando com várias promises
//Promise.all - se uma falahar todas falham
/*
Promise.all([
    Promise.resolve(1),
    Promise.reject(Error("A segunda falhou")),
    Promise.resolve(3)
])
.then(([r1,r2,r3]) => r1 + r2 + r3)
.then(console.log)
.catch(console.error)
.finally(() => { console.log("Banco de Dados fechado")})

//Promise.allSettled - mostra as que deram certo e as que não
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(Error("A segunda falhou")),
    Promise.resolve(3)
])
//Mostrar só as que deram certo
.then(results =>
    results.filter(r => r.status == 'fulfilled').map(r => r.value)
)
.then(console.log)

//Promise.race - recebe a que retornar mais rápido
const delay =(time) => 
    new Promise((resolve) =>
    setTimeout(resolve, time)
    )

Promise.race([
    delay(1000).then(() => '1s'),
    delay(2000).then(() => '2s')
])
.then(console.log)
*/
//Promise.any - A primeira que der certo desconsiderando erro
Promise.any([
    Promise.reject("Primeiro erro"),
    Promise.resolve("Deu certo"),
    Promise.reject("Segundo erro")
])
.then(console.log)
.catch(err => console.error("Não devo ser chamado", err));