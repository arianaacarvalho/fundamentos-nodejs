//Importando funcionalidades de leitura e cópia 
const {
    readFileSync, 
    writeFileSync,
} = require('fs'); //File System

//Importando funcionalidade para achar o caminho do arquivo
const{
    join, //Faz a distinsão de sistemas operacionais
} = require('path');

//função copia e escrita
const copyFileBloking = (source, dest) => {
    console.log('Lendo Bloking conteúdo');
    const content = readFileSync(source);
    console.log('Escrevendo Bloking conteúdo');
    writeFileSync(dest, content);
};

const sourcePath = join(__dirname, 'files', 'exemplo.txt');
const destPath = join(__dirname, 'files', 'exemple.copy.bloking.txt');

copyFileBloking(sourcePath, destPath);