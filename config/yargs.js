const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion Tarea'
};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Estado Completado/Incompleto'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado', {
        descripcion,
        completado
    })
    .command('borrar', 'Que elemento borrar', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}