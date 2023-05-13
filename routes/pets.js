const express = require('express');
const Routes = require('./paths');
const Controller = require('../controller/pets');

const router = express.Router();

router.get(Routes.home, async (req, res) => {
  await Controller.getPets(req, res);
});

router.post(Routes.home, async (req, res) => {
  await Controller.createPet(req, res);
});

router.put(Routes.home, async (req, res) => {
  await Controller.updatePet(req, res);
});

router.delete(Routes.home, async (req, res) => {
  await Controller.deletePet(req, res);
});

module.exports = router;
