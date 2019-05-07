const request = require('request');
const url = "https://9rpv5x926a.execute-api.us-east-1.amazonaws.com/dev/quote/compacto?from=2019-08-01&to=2019-08-03";
module.exports = (cartype, pickup, dropoff) => {
    return new Promise((resolve, reject) => {
        request.get(`https://9rpv5x926a.execute-api.us-east-1.amazonaws.com/dev/quote/${cartype}?from=${pickup}&to=${dropoff}`, {}, (error, response, body) => {
            if (error) reject(error);
            
            console.log(body);
            resolve(body);
        });
    }); 
}