const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require('colors');


console.clear();
console.log(argv);


crearArchivo( argv.b , argv.l , argv.h )
    .then( ( archivoCreado ) => console.log(archivoCreado.rainbow, 'a sido creada') )
    .catch( err => console.log(err) );