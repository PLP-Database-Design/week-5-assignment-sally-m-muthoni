const express = require('express')
const app = express()


// Question 1 goes here

// Import necessary modules
const express = require('express');
const { Patient } = require('./models'); // Assuming Patient model is defined
const app = express();

// GET all patients
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.findAll({
      attributes: ['patient_id', 'first_name', 'last_name', 'date_of_birth']
    });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving patients' });
  }
});

// Question 2 goes here

// Assuming Provider model is defined
const { Provider } = require('./models');

// GET all providers
app.get('/providers', async (req, res) => {
  try {
    const providers = await Provider.findAll({
      attributes: ['first_name', 'last_name', 'provider_specialty']
    });
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving providers' });
  }
});

// Question 3 goes here

// GET patients filtered by first name
app.get('/patients/firstname', async (req, res) => {
    const { first_name } = req.query;
    try {
      const patients = await Patient.findAll({
        where: { first_name },
        attributes: ['patient_id', 'first_name', 'last_name', 'date_of_birth']
      });
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving patients by first name' });
    }
  });
  
// Question 4 goes here


// GET providers filtered by specialty
app.get('/providers/specialty', async (req, res) => {
    const { specialty } = req.query;
    try {
      const providers = await Provider.findAll({
        where: { provider_specialty: specialty },
        attributes: ['first_name', 'last_name', 'provider_specialty']
      });
      res.json(providers);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving providers by specialty' });
    }
  });
  
// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})