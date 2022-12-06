const express = require('express');
const Kitsu = require("kitsu");
const router = express.Router();
const Anime = require('../models/Anime.model');
const api = new Kitsu()

// const { isLoggedIn } = require('../middleware/route-guard');

// // ------ CRUD - Create -------
// router.get('/animes/create', isLoggedIn, (req, res, next) => {
//   try {
//     res.render('animes/anime-create');
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/animes/create', isLoggedIn, async (req, res, next) => {
//   try {
//     // console.log(req.body);
//     const { title, author, description, rating } = req.body;
//     const createdAnime = await Anime.create({
//       title,
//       author,
//       description,
//       rating
//     });
//     console.log('A new Anime was created:', createdAnime.title);
//     // after creating the book, we redirect the user to the list
//     res.redirect('/animes');
//   } catch (error) {
//     next(error);
//   }
// });

// ----- CRUD - Read ------

// list of all anime
router.get('/anime', async (req, res, next) => {
  try {
    const response = await api.get('anime', {params: {filter: {status: 'upcoming'}}});
    res.render('anime/anime-list', {animes: response.data});
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

// // ------- CRUD - Update ------

// router.get('/animes/:animeId/edit', async (req, res, next) => {
//   try {
//     const { animeId } = req.params;
//     const anime = await Anime.findById(animeId);
//     res.render('animes/anime-edit', anime);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/animes/:animeId/edit', async (req, res, next) => {
//   try {
//     const { animeId } = req.params;
//     const { title, author, description, rating } = req.body;
//     const updatedAnime = await Anime.findByIdAndUpdate(animeId, {
//       title,
//       author,
//       description,
//       rating
//     });
//     res.redirect(`/animes/${updatedAnime._id}`);
//   } catch (error) {
//     next(error);
//   }
// });

// // CRUD - Delete

// router.post('/animes/:animeId/delete', async (req, res, next) => {
//   try {
//     const { animeId } = req.params;
//     await Anime.findByIdAndDelete(animeId);
//     res.redirect('/animes');
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;