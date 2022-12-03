const kitsu = require('kitsu');

class ApiService {
    constructor() {
        this.api = kitsu.create({
            baseURL:'https://kitsu.io/api/edge'
        });
    }
}

module.exports = ApiService;