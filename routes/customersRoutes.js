const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');

// Récupérer la liste de tous les comptes clients
router.get('/', CustomerController.getAllCustomers);

// Récupérer un compte client spécifique en fonction de son ID
router.get('/:id', CustomerController.getCustomerById);

// Ajouter un nouveau compte client
router.post('/', CustomerController.addCustomer);

// Mettre à jour les informations d'un compte client en fonction de son ID
router.put('/:id', CustomerController.updateCustomer);

// Supprimer un compte client en fonction de son ID
router.delete('/:id', CustomerController.deleteCustomer);

module.exports = router;
