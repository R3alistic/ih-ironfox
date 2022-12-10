const express = require('express');
const Kitsu = require("kitsu");
const router = express.Router();
const Anime = require('../models/Anime.model');
const Favorite = require('../models/Favorite.model');
const User = require('../models/User.model');
const ApiService = require('../services/api.service');
const apiService = new ApiService();

// router.get('/:username', (req, res) => {
//     try {
//         res.render('/auth/profile');

//     } catch (error) {
//         console.log('error', error);
//         next(error);
//     }
// })

router.post('/anime/:slug/favorite', async (req, res) => {
    try {
        // const {userInfo} = req.session.currentUser;

        const favoriteDetails = await apiService.getAnimeDetails(req.params.slug)

        const {attributes} = favoriteDetails

        const newFavorite = await Favorite.create({
            slug: attributes.slug,
            titles: {en: attributes.titles.en, en_jp: attributes.titles.en_jp },
        })

        console.log(newFavorite)
        
        
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $push: {
                favorites: newFavorite._id
            }
        }, {new: true})
        console.log(updatedUser)
    } catch (error) {
        console.log('error', error);
        next(error);
    }
})

module.exports = router