require('dotenv').config();
const axios = require('axios');

class Api {
    /**
     *
     * Makes a GET request with the JavaScript Fetch API to OBA Api
     * @param endpoint OBA Api endpoint where to fetch data from
     * @param params URL parameters for GET request
     * @returns {Promise<any>} promise which might contain the response from OBA Api
     */
    async get(endpoint, params) {
        let cors = "https://yacdn.org/proxy/";
        let baseUrl = "https://zoeken.oba.nl/api/v1";
        let authorization = process.env.API_KEY;
        let output = "&output=json";
        try {
            return await axios.get(cors + baseUrl + endpoint + params + authorization + output);
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
    }
}

module.exports = Api;