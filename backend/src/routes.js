const express = require('express');
const ArtistController = require('./controllers/ArtistController');
const SongController = require('./controllers/SongController');

const routes  = express.Router();
require('dotenv').config()
const version = process.env.APP_VERSION

//ARTISTS OK
routes.get(version  + '/artists', ArtistController.index)
routes.post(version + '/artists', ArtistController.store)

//SONGS OK
routes.get(version + '/songs', SongController.index)
routes.get(version + '/songs/:song_id', SongController.show)
routes.post(version + '/artists/:artist_id/song', SongController.store)


module.exports = routes;