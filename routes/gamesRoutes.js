const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

// Récupérer la liste de tous les jeux vidéo en stock
router.get('/', GameController.getAllGames);

// Récupérer un jeu vidéo spécifique en fonction de son ID
router.get('/:id', GameController.getGameById);

// Ajouter un nouveau jeu vidéo en stock
router.post('/', GameController.addGame);

// Mettre à jour les informations d'un jeu vidéo en fonction de son ID
router.put('/:id', GameController.updateGame);

// Supprimer un jeu vidéo en fonction de son ID
router.delete('/:id', GameController.deleteGame);

module.exports = router;
