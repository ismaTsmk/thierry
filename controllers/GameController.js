const Game = require('../models/GameModel');

// Récupérer la liste de tous les jeux vidéo en stock
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des jeux vidéo.' });
  }
};

// Récupérer un jeu vidéo spécifique en fonction de son ID
const getGameById = async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Jeu vidéo non trouvé' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du jeu vidéo.' });
  }
};

// Ajouter un nouveau jeu vidéo en stock
const addGame = async (req, res) => {
    // console.log('eyeeuheeiei')
    // console.log('eyeeuheeiei')
    // res.status(201).json({ message: 'okeyy okeyy okeyy' });
    // return 'eeee';
  const { title, editor, platforms, quantity } = req.body;
  try {
    const newGame = new Game({ title, editor, platforms, quantity });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du jeu vidéo.' });
  }
};

// Mettre à jour les informations d'un jeu vidéo en fonction de son ID
const updateGame = async (req, res) => {
  const gameId = req.params.id;
  const { title, editor, platforms, quantity } = req.body;
  try {
    const game = await Game.findByIdAndUpdate(gameId, { title, editor, platforms, quantity }, { new: true });
    if (!game) {
      return res.status(404).json({ message: 'Jeu vidéo non trouvé' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du jeu vidéo.' });
  }
};

// Supprimer un jeu vidéo en fonction de son ID
const deleteGame = async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await Game.findByIdAndRemove(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Jeu vidéo non trouvé' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du jeu vidéo.' });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
};
