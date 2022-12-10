const axios = require('axios');
const { off } = require('../models/Anime.model');


class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL:'https://kitsu.io/api/edge',
            headers: { "Accept-Encoding": "*" } 
        });
    }
    getTop50 = async () => {
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
    getAnimeDetails = async (slug) => {
        const response =  await this.api.get(`/anime?filter[slug]=${slug}`);
        return response.data.data[0]
    }
    // addFavorite = async () => {
    //     const allFavorites = [];
    //     const response = await this.api.get()
    // }
}

module.exports = ApiService;