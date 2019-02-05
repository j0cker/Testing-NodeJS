//librería que alguien ya hizo previamente ya sea node, express o quien sea
const fs = require('fs');
//librerías propias
//const fs = require('./fs');



let crearArchivo = () => {
    return new Promise((resolve, reject) => {

        let tabla = '';

        for (var i = 0; i <= 5; i++) {
            tabla = '' + tabla + "\nFor: " + i;
        }


        //'message.txt' puede recibir una variable para generar varios archivos
        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile('msg/message.txt', data, (err) => {
            //if (err) throw err;

            if (err)
                reject(err)
            else
                resolve('msg/message.txt')
        });

    })
}


//module variable global donde se pueden incorporar diferentes tipos de cosas

module.exports = {
    crearArchivo
}