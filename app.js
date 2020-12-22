const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async( direccion ) => {

    try {

        const coordenadas = await lugar.getLugarLatLng( direccion );
        const temperatura = await clima.getClima( coordenadas.lat, coordenadas.lon );

        return `El clima de ${ coordenadas.ciudad } es de ${ temperatura } ºC.`;

    } catch (e) {

        return `No se pudo determinar el clima de ${ direccion }.`;

    }

};

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );