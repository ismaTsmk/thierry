const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter  = require('./routes/user');


const app = express();
const port = process.env.PORT || 3000;

// Middleware pour l'analyse des données JSON
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/local')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB: ', err);
  });

// Utilisation des routes utilisateur
app.use('/api/users', usersRouter);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Foundssss' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
