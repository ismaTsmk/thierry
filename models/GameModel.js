const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  editor: String,
  platforms: [String],
  quantity: Number,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
