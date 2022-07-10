//CallBack é simplismente uma função para fazer processos
//Non Bloking rodarem da ordem que escrevemos
const { error } = require('console');
const{
    readFile,
    writeFile,
} = require('fs');
const {join} = require('path');

const packageJsonPath = join(__dirname, '..', 'package.json');
const destPath = join(__dirname, 'package.copy.json');

//Sem tratamento de error 
readFile(packageJsonPath, (errorRead, data) => {
    console.log("> Terminei de ler");
    
    writeFile(destPath, data, (errorWrite) => {
        console.log(">> Terminei de copiar");
    })
})

const noExistPath = join(__dirname, 'nao-existe');

//Com tratamento de error
readFile(noExistPath, (errorRead, data) => {
    if(!errorRead){
        console.log("> Terminei de ler");
        writeFile(destPath, (errorWrite) => {
            if (!errorWrite){
                console.log('>> Terminei de copiar');
            }
        })
    }
})

//Com tratamento de error: logar + early return
readFile(noExistPath, (errorRead, data) => {
    if(errorRead){
        console.log("> Erro de leitura ", errorRead);
        return
    }

    console.log("> Terminei de ler")

    writeFile(destPath, data, (errorWrite) => {
        if(errorWrite){
            console.log(">> Erro ao copiar ", errorWrite);
            return
        }

        console.log(">> Terminei de copiar");
    })
})