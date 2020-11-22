const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Artist = require('../models/Artist');
const Song = require('../models/Song');

const connection = new Sequelize(dbConfig);

Artist.init(connection)
Song.init(connection)

Artist.associate(connection.models)
Song.associate(connection.models)

module.exports = connection;