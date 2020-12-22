const axios = require('axios');
const api_key = '7f7b81836caac7bccb33bff0bcced82e';

const getClima = async( lat, lon ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ api_key }&units=metric`);
    
    return resp.data.main.temp;

};

module.exports = {
    getClima
};