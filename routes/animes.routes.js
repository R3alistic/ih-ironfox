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
    const response = await apiService.getTop30();
    console.log(response)
    res.render('anime/anime-list', {animes: response});
  } catch (error) {
    console.log('error', error);
    // calling the error middleware
    next(error);
  }
});

router.get(`/anime/:slug`, async (req, res, next) => {
  try {
    // console.log(req.params);
    const slug = req.params.slug;
    const anime = await Anime.findOne({slug});
    res.render('anime/anime-details', anime);
  } catch (error) {
    console.log('error', error);
    next(error);
  }
});

module.exports = router;