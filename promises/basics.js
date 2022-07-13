// Promise foi criado para quando temos muitas tarefas a 
//serem executadas, faz com que a escrita dique mais linear
//com menos identações que nos callbacks.

const { error } = require('console');
const{
    promises: {
        readFile,
        writeFile,
    }
} = require('fs');
const {join, resolve} = require('path');

//Promise: Rejected | fulfild

//.then((data) => {...}):
//Podemos retornar valores puros ou outras promises
//.cat (error) = {...}:
//Nosso tratamento de error
//.finally(() => {...}):
//Finalizar recursos que não usamos mais, dando certo ou errado.

const packageJsonPath = join(__dirname, "..", "package.json");
const destPath = join(__dirname, 'package.copy.promise.json');
const notExistPath = join(__dirname, 'notExist');

readFile(packageJsonPath) //Promise de leitura
    .then((data) => {
        console.log("Terminei de ler");
        return writeFile(destPath, data) //Promise de escrita
    })
    //Resultado da promise de escrita
    .then(() => {
        console.log("Terminei de escrever");
        
    })
    .catch((error) => {
        console.log("Deu erro ", error)
    })
    .finally(() => {
        console.log("Finally");
        console.log("*".repeat(50));
    });

/*
let cacheContent = null;

const readPackageJson = () => 
    console.log("Vou ler o arquivo");
    return readFile(packageJsonPath, {encoding: 'utf8'}).then(data => {
        console.log("Eu li o arquivo")
        cacheContent = data
        return data
    })

const getPackageJasonContent = () => 
    Promise.resolve(
        cacheContent ?? readPackageJson()
    )

getPackageJasonContent()
    .then(data => console.log(data))
    .then(() => getPackageJasonContent())
    .then(data => console.log(data))
*/

//Transformando callback em promise
const bagulhoBaseadoEmCallbacks = (param, callback) => {
    setTimeout(() => {
        //callback(undefined, param)
        callback(Error ("De propósito"))
    }, 1000)
}

//Construindo a promise
const bagulhoBaseadoEmPromises = param => 
    new Promise((resolve, reject) =>{
        bagulhoBaseadoEmCallbacks(param, (error, data) => {

            if (error){
                reject(error)
            } else {
                resolve(data)
            }
        })
    })

bagulhoBaseadoEmPromises('será mesmo?')
    .then((data) => console.log(`${data} é mesmo hein...`))
    .catch((error) => console.error(`${error.message}\n mas mesmo assim ainda é Promise`))
    console.log("*".repeat(50));