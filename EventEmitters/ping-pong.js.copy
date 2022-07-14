const {EventEmitter, on} = require('events');
const { resolve } = require('path');
/*
//EventEmitters sincrono 
const e = new EventEmitter()

//Emitindo um evento 
e.emit('message', {text: 'oi'})

//Usando o evento 
e
.on('message', (event) => {
    console.log("De dentro do event listener", event)
})
.on('message', (event) => {
    console.log("Outro listener")
})

//EventEmitters assincrono (retornando promise)
const pinpong = new EventEmitter()

pinpong
    .on('ping', () => {
        console.log("ping!")
        setTimeout(() => {
            pinpong.emit('pong')
        }, 1000)
    })
    .on ('pong', () => {
        console.log("pong!")
        setTimeout(() => {
            pinpong.emit('ping')
        }, 1000)
    })
pinpong.emit('ping')
*/
const pinPongServer = () => {
    const pingpong = new EventEmitter()
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

    pingpong
        .on('ping', async() => {
            console.log('ping')
            await delay(500)
            pingpong.emit('pong')
        })
        .on('pong', async() => {
            console.log('pong')
            await delay(500)
            pingpong.emit('ping')
        })
    pingpong.emit('ping')
}
//pinPongServer()

//Tratamento de erros
const errors = async() => {
    const pingpong = new EventEmitter({
        captureRejections: true, //tranforma a Promise.reject em um evento de erro e não para a função (node 16)
    })
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

    pingpong
        .on('ping', async() => {
            console.log('ping')
            await delay(500)
            pingpong.emit('pong')
        })
        .on('pong', async() => {
            console.log('pong')
            await delay(500)
            pingpong.emit('ping')
        })
        .on('error', (error) => {
            console.error("Eu capiturei o erro emitido: ", error.message)
        })
        .on('forceExplodeAsync', error => Promise.reject(error))
    
        pingpong.emit('ping')
    
    await delay(2000)
    pingpong.emit('error', Error('Deu ruim depois de 2s'))

    await delay(1000)
    pingpong.emit('forceExplodeAsync', Error('Deu ruim depois de 3s'))
}
errors()