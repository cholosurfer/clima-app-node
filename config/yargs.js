const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener predicción de clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
};