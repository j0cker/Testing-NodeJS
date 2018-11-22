/*
Las promesas tiene dos callbacks

Promise( resolve, reject) => {
    
}

Resolve() just admit one parameter

*/

let empleados = [{
    id: 1,
    nombre: "Fernando"
}, {
    id: 2,
    nombre: "Mario"
}, {
    id: 3,
    nombre: "Luis"
}, {
    id: 4,
    nombre: "Torres"
}, {

}];

let salarios = [{
    id: 1,
    salario: 200
}, {
    id: 2,
    salario: 300
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        //busca en todo el arreglo y regresa el objeto del empleado del id buscado
        let empleadosDB = empleados.find(empleado => {
            return empleado.id === id;
        })

        if (!empleadosDB) {
            reject("No existe un empleado con el id: " + id);
        } else {
            resolve(empleadosDB);
        }

    });


}

getEmpleado(4).then(empleado => {

    console.log("ID: " + empleado.id);
    console.log("Nuestro usuario: " + empleado.nombre);

}, (err) => {
    console.log(err);
});