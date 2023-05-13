const Pet = require('../model/pets');

const getPets = async (req, res) => {
  const where = req.query || {};
  const pets = await Pet.findAll({ where });
  res.send(pets);
};

const createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.query);
    res.send('New pet created successfully');
  } catch (error) {
    res.send(`Oops, something went wrong: ${error}`);
  }
};

const updatePet = (req, res) => {
  res.send('Got a PUT request at /pets');
};

const deletePet = (req, res) => {
  res.send('Got a DELETE request at /pets');
};

module.exports = {
  createPet,
  getPets,
  updatePet,
  deletePet,
};
