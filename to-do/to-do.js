const fs = require('fs'); // archivos file system

let listadoHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoHacer = require('../db/data.json');
    } catch (err) {
        listadoHacer = [];
    }
    //console.log(listadoHacer);
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const getListado = () => {
    cargarDB();

    return listadoHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    listadoHacer = listadoHacer.filter(tarea => tarea.descripcion !== descripcion);

    console.log(listadoHacer);
    guardarDB();
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}