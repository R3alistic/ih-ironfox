const axios = require('axios');
const { off } = require('../models/Anime.model');


class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL:'https://kitsu.io/api/edge',
            headers: { "Accept-Encoding": "*" } 
        });
    }
    getTop30 = async () => {
        const number = 5;
        const allData = []
        let res = '';

        for(let i = 0; i < number; i++) {
            if(i === 0) {
                 res = await this.api.get('/anime');
            } else {
                res = await this.api.get(res.data.links.next);
            }
            allData.push(...res.data.data)
        }
    return allData
    }
}

module.exports = ApiService;