const { Schema, model } = require('mongoose');


const favoriteSchema = new Schema({
    slug: String,
    titles: {
        en: String,
        en_jp: String,
    },
    posterImage: {
        tiny: String,
        small: String,
        medium: String,
        large: String,
        original: String,
        meta: {
            dimensions: {}
        }
    },
    coverImage: {
        tiny: String,
        small: String,
        large: String,
        original: String,
        mest: {
            dimensions: {},
        }
    },
    nsfw: Boolean,

},


    { timestamps: true },

);



const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;

/* Api link is here: https://kitsu.docs.apiary.io/#introduction/questions? */