/*
Async Await

simula un promise
*/

let getNombre = async() => {

    /*para probar catch*/
    //throw new Error('No existe un nombre para ese usuario');

    return "Fernando";


}

getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log("Error de ASYNC", e);
})