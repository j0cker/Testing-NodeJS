/*
setTimeout(() => {
    console.log("Hola Mundo");
}, 3000)
*/

let getUsuarioView = (err, usuario) => {

    if (err) {
        console.log(err);
    } else {

        console.log("ID: " + usuario.id);
        console.log("Nuestro usuario: " + usuario.nombre);
    }


};


let getUsuarioById = (id, callback) => {

    //simulación llamada a DB

    let usuario = {
        nombre: "Fernando",
        id: id
    }

    if (id == 20) {
        console.log("ID : " + id + " Error no Existe el usuario");
    } else {
        callback(null, usuario);
    }

}

//lamamos a la función
getUsuarioById(10, (err, usuario) => {

    getUsuarioView(err, usuario);

});

//lamamos a la función
getUsuarioById(20, (err, usuario) => {

    getUsuarioView(err, usuario);

});