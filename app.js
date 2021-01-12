//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();

        console.log('============== Data =============='.red);
        for (let v of listado) {
            console.log(v);
        }
        console.log('=================================='.red);
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        //console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');

}