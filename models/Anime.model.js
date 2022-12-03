const { Schema, model } = require('mongoose');

const animeSchema = new Schema({
    slug: String,
    synopsis: String,
    titles: {
        en: String,
        en_jp: String,
        ja_jp: String,
    },
    canonicalTitle: String,
    abbreviatedTitles: [],
    averageRating: String,
    userCount: Number,
    favoritesCount: Number,
    startDate: String,
    endDate: String,
    PopularityRank: Number,
    ratingRank: Number,
    ageRating: { "enum": ["G", "PG", "R", "R18"] },
    ageRatingGuide: String,
    subtype: { 'enum': ['ONA', 'OVA', 'TV', 'movie', 'music', 'special'] },
    status: { 'enum': ['current', 'finished', 'tba', 'unreleased', 'upcoming'] },
    tba: String,
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
    episodeCount: Number,
    episodeLength: Number,
    youtubeVideoId: String,
    showtype: { 'enum': ['ONA', 'OVA', 'TV', 'movie', 'music', 'special'] },
    nsfw: Boolean,

},


    { timestamps: true },

);



const Anime = model('Anime', animeSchema);

module.exports = Anime;

/* Api link is here: https://kitsu.docs.apiary.io/#introduction/questions? */