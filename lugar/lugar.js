const axios = require('axios');
const map_token = 'pk.eyJ1IjoiY2hvbG9zdXJmZXIiLCJhIjoiY2tpemNkYnQ4MnRqcjJzbHJ6ODgwNGpxMyJ9.siMTgT-FQOiVShDiQypsAQ';

const getLugarLatLng = async( direccion ) => {

    let ubicacion = encodeURI(direccion); 

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ ubicacion }.json?access_token=${ map_token }`);

    if( resp.data.features[0] === 0 ) {

        throw new Error(`No hay resultados para ${ direccion }`);

    }

    const data = resp.data.features[0];
    const ciudad = data.place_name;
    const lat = data.center[1];
    const lon = data.center[0];
    
    return {
        ciudad,
        lat,
        lon
    };

};

module.exports = {
    getLugarLatLng
};