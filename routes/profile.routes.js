const express = require('express');
const Kitsu = require("kitsu");
const router = express.Router();
const Anime = require('../models/Anime.model');
const Favorite = require('../models/Favorite.model');
const User = require('../models/User.model');
const ApiService = require('../services/api.service');
const apiService = new ApiService();
const isLoggedIn = require('../middleware/isLoggedIn.js');
const isLoggedOut = require('../middleware/isLoggedOut.js');



router.post('/anime/:slug/favorite', isLoggedIn, async (req, res, next) => {
    try {
        // const {userInfo} = req.session.currentUser;

        const favoriteDetails = await apiService.getAnime(req.params.slug)

        const { attributes } = favoriteDetails

        let favorite = await Favorite.findOne({slug: attributes.slug})

        if(!favorite) {

            favorite = await Favorite.create({
                slug: attributes.slug,
                titles: { en: attributes.titles.en, en_jp: attributes.titles.en_jp },
                canonicalTitle: attributes.canonicalTitle,
                popularityRank: attributes.popularityRank,
                posterImage: { large: attributes.posterImage.large, medium: attributes.posterImage.medium }
            })
        }


        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $push: {
                favorites: favorite._id
            }
        }, { new: true })
        res.redirect('/profile')
    } catch (error) {
        console.log('error', error);
        next(error);
    }
})

router.post('/anime/:slug/favorite/delete', isLoggedIn, async (req, res, next) => {
    try {
const {slug} = req.params     

        const favorite = await Favorite.findOne({slug})

        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                favorites: favorite._id
            }
        }, { new: true })
        res.redirect('/profile');
    } catch (error) {
        console.log('error', error);
        next(error);
    }
})

router.get('/:username', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).populate('favorites')
        console.log(user)

        res.render('auth/profile', user);
    } catch (error) {
        next(error);
    }
});

module.exports = router