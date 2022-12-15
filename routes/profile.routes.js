const express = require('express');
const Kitsu = require("kitsu");
const router = express.Router();
const Anime = require('../models/Anime.model');
const Favorite = require('../models/Favorite.model');
const User = require('../models/User.model');
const ApiService = require('../services/api.service');
const apiService = new ApiService();
const isLoggedIn  = require('../middleware/isLoggedIn.js');
const  isLoggedOut  = require('../middleware/isLoggedOut.js');



router.post('/anime/:slug/favorite', isLoggedIn, async (req, res, next) => {
    try {
        // const {userInfo} = req.session.currentUser;

        const favoriteDetails = await apiService.getAnime(req.params.slug)

        const {attributes} = favoriteDetails

        const newFavorite = await Favorite.create({
            slug: attributes.slug,
            titles: {en: attributes.titles.en, en_jp: attributes.titles.en_jp },
            posterImage: {large: attributes.posterImage.large, medium: attributes.posterImage.medium}
        })        
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $push: {
                favorites: newFavorite._id
            }
        }, {new: true})
        res.redirect('/profile')
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