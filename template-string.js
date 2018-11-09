let nombre = "deadpool";
let real = "Wade Winston";

console.log("" + nombre + " " + real);

//aquí se puede ejecutar cualquier sentencia node
console.log(` ${ 1+2 } `);

console.log(` ${ nombre } `);

console.log(` ${ nombre } ${ real } `);

console.log(nombre === nombre);

function getNombre() {
    return `${ nombre } ${ real }`;
}

console.log(`El nombre de: ${ getNombre() }`);