const axios = require('axios');


class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://kitsu.io/api/edge',
            headers: { "Accept-Encoding": "*" }
        });
    }
    getTop50 = async () => {

        const allData = []

        const res1 = await this.api.get('/anime?sort=popularityRank&page[limit]=20');
        allData.push(...res1.data.data)
        const res2 = await this.api.get('/anime?sort=popularityRank&page[limit]=20&page[offset]=20');
        allData.push(...res2.data.data)
        const res3 = await this.api.get('/anime?sort=popularityRank&page[limit]=10&page[offset]=40');
        allData.push(...res3.data.data)

        return allData
    }
    get50 = async () => {
        const number = 5;
        const allData = []
        let res = '';

        for (let i = 0; i < number; i++) {
            if (i === 0) {
                res = await this.api.get('/anime');
            } else {
                res = await this.api.get(res.data.links.next);
            }
            allData.push(...res.data.data)
        }
        return allData
    }
    searchAnime = async (searchedAnime) => {
        const response = await this.api.get(`/anime?filter[text]=${searchedAnime}&page[limit]=10`);
        console.log(response.data.data);
        return response.data.data
    }
    getAnime = async (animeSlug) => {
        const response = await this.api.get(`/anime?filter[text]=${animeSlug}`);
        // console.log(response.data.data);
        return response.data.data[0]
    }
}

module.exports = ApiService;