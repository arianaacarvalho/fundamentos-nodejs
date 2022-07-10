//Importando funcionalidades de leitura e cópia 
const {
    //Bloking
    readFileSync, 
    writeFileSync,
    //NonBloking
    readFile,
    writeFile,
} = require('fs'); //File System

//Importando funcionalidade para achar o caminho do arquivo
const{
    join, //Faz a distinsão de sistemas operacionais
} = require('path');

//Duração da execução
const logduration = (label, startTime) => {
    console.log(`${label} levou ${Date.now() - startTime}ms`);
}

//função copia e escrita - Bloking
const copyFileBloking = (source, dest) => {
    const startTime = Date.now();
    console.log('Lendo Bloking conteúdo');
    const content = readFileSync(source);
    console.log('Escrevendo Bloking conteúdo');
    writeFileSync(dest, content);
logduration('copyFileBloking', startTime);
};

const sourcePath = join(__dirname, 'files', 'exemplo.txt');
const destPath = join(__dirname, 'files', 'exemple.copy.bloking.txt');

copyFileBloking(sourcePath, destPath);
console.log("Cópia Bloking com sucesso!");

//Separador para as funções
console.log("*".repeat(50));

//função copia e escrita - NonBloking
const copyFileNonBloking = (source, dest) => {
    const startTime = Date.now();
    console.log("Começou a cópia Non-Bloking");
            
        readFile(source, (_err,data) => {
        console.log("Terminou de ler Non-Bloking");
            
            writeFile(dest, data, (_err) => {
            console.log("Terminou de escrever Non-Bloking");
            logduration('copyFileNonBloking', startTime);
            })
        })
    }
    
    const destNonBlokin = join(__dirname, 'files', 'exemple.copy.NonBloking.txt');
    
    copyFileNonBloking(sourcePath, destNonBlokin);

    console.log("Terminou mesmo?");

    console.log(
        "Continuando...",
        1+1,
        Math.PI * Math.E,
    );