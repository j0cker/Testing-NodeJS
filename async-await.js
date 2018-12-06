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

/* para evitar toda la definicion anterior usamos await */

let saludo = async() => {

    /* si async nunca retornara ningún valor, await se quedaría escuchando para la eternidad*/

    let nombre = await getNombre();

    return "Hola " + nombre;

}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log("Error de ASYNC", e);
})