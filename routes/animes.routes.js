const express = require('express');
const Kitsu = require("kitsu");
const router = express.Router();
const Anime = require('../models/Anime.model');
const ApiService = require('../services/api.service');
const apiService = new ApiService();

// ----- CRUD - Read ------

// list of all anime
router.get('/anime', async (req, res, next) => {
  try {
    const response = await apiService.getTop50();
    // console.log(response)
    res.render('anime/anime-list', {animes: response});
  } catch (error) {
    console.log('error', error);
    // calling the error middleware
    next(error);
  }
});

router.get(`/anime/:slug`, async (req, res, next) => {
  try {
    const animeInfo = req.params.slug;
    const response = await apiService.getSearchedAnime(animeInfo)
    const {attributes} = response

    res.render('anime/anime-details', attributes);
  } catch (error) {
    console.log('error', error);
    next(error);
  }
});

router.get('/anime-search', async (req, res, next) => {
try{
  console.log(req.query.searchedAnime);
  const response = await apiService.getSearchedAnime(req.query.searchedAnime);
  const { attributes } = response;
  res.render('anime/anime-details', attributes);
} catch(error) {
  console.log('error', error);
  next(error);
}
})

module.exports = router;