let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regenración",
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    },
    getApellido() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
}

console.log(deadpool.getNombre() + " " + deadpool.nombre);
console.log(deadpool.getApellido() + " " + deadpool.nombre);

/* ésto es lo mismo que */

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

/* que ésto en una línea*/

let { nombre, apellido: primerApellido, poder } = deadpool;

//console.log("ejemplo1: " + nombre, apellido, poder);
console.log("ejemplo2: " + nombre, primerApellido, poder);