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

let getEmpleadoView = (err, usuario) => {

    if (err) {
        console.log(err);
    } else {

        console.log("ID: " + usuario.id);
        console.log("Nuestro usuario: " + usuario.nombre);
    }


};

let getSalarioView = (err, empleado) => {

    if (err) {
        console.log(err);
    } else {

        console.log(empleado.id + " " + empleado.salario);
    }


};

let getEmpleado = (id, callback) => {

    //busca en todo el arreglo y regresa el objeto del empleado del id buscado
    let empleadosDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadosDB) {
        callback("No existe un empleado con el id: " + id);
    } else {
        callback(null, empleadosDB);
    }

    console.log(empleadosDB);

}

getEmpleado(4, (err, empleado) => {

    getEmpleadoView(err, empleado);

});

let getSalario = (id, callback) => {

    //busca en todo el arreglo y regresa el objeto del empleado del id buscado
    let salariosDB = salarios.find(salario => {
        return salario.id === id;
    })

    if (!salariosDB) {
        callback("No existe un empleado con el id: " + id);
    } else {
        callback(null, salariosDB);
    }
}

getSalario(2, (err, empleado) => {

    getSalarioView(err, empleado);

});