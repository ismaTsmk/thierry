const Customer = require('../models/CustomerModel');

// Récupérer la liste de tous les comptes clients
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des comptes clients.' });
  }
};

// Récupérer un compte client spécifique en fonction de son ID
const getCustomerById = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Compte client non trouvé' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du compte client.' });
  }
};

// Ajouter un nouveau compte client
const addCustomer = async (req, res) => {
  const { name, firstName, dateOfBirth, address, phoneNumber, points } = req.body;
  try {
    const newCustomer = new Customer({ name, firstName, dateOfBirth, address, phoneNumber, points });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du compte client.' });
  }
};

// Mettre à jour les informations d'un compte client en fonction de son ID
const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const { name, firstName, dateOfBirth, address, phoneNumber, points } = req.body;
  try {
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { name, firstName, dateOfBirth, address, phoneNumber, points },
      { new: true }
    );
    if (!customer) {
      return res.status(404).json({ message: 'Compte client non trouvé' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du compte client.' });
  }
};

// Supprimer un compte client en fonction de son ID
const deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findByIdAndRemove(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Compte client non trouvé' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du compte client.' });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
