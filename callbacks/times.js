//Times quando eu quero executar um processo um tempo
//depois de outro processo

//Função a ser executada
const logCalled = () => {
    console.log("> Full chamada");
}

//SetTimeout - um processo depois do outro 
const idTimeout = setTimeout(() => { //primeira função
    logCalled();
    setTimeout(logCalled, 1000); //segunda função
}, 3000);

clearTimeout(idTimeout);

//SetInterval - intervalo de um processo que vai se repetir
const idInterval = setInterval(() => {
    console.log("> chamada no intervalo");
}, 1000);

setTimeout(() => {
    clearInterval(idInterval);
}, 5000);
