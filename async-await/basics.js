//È só uma forma diferente de escrever promises
const { error } = require('console');
const{
    promises:{
        readFile,
        writeFile
    }
} = require('fs');
const {join} = require('path')

const packageJsonPath = join(__dirname, '..', 'package.json')
const destPath = join(__dirname, 'package.copy.json')

const copyFile = async (source, dest) => {
    const data = await readFile(source)
    await writeFile(dest, data)
}

copyFile(packageJsonPath + 'jhfkufyuy', destPath)

.catch(console.error("Peguei no catch", error))
.finally(() => {console.log("Finalizei")})

//só podemos usar o waite em um escopo com o async