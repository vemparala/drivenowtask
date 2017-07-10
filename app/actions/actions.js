var Axios = require('axios');

export function getData() {

    return Axios
        .get('/app/data/data.json')
        .then(response => {
            return response;
        })
  
}