import fs from 'fs'


fs.writeFile('output.txt', 'writing file', (err) => {
    if (err) console.log('Error Found!');
    else console.log('File Written')
})


console.log("hello World");