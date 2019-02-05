const { crearArchivo } = require('./multiplicar/multiplicar');

/*
sistema operativo, info del usuario, etc. Dentro de la variables predefinida de nodejs llamada process

console.log(process);

process.argv -> ubicación node y carpeta del archivo ejecutado

*/

console.log(process.argv);

/*
recibir parametros
node app x=5
*/
let argv = process.argv;
let parametro = argv[2]; //x=5
let base = parametro.split('=')[1]; //5

console.log(base);

crearArchivo()
    .then(resolve => {
        console.log(resolve)
    })
    .catch(reject => {
        console.log(reject);
    })