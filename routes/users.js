const express = require('express');
const Routes = require('./paths');
const Controller = require('../controller/users');

const router = express.Router();

router.get(Routes.home, async (req, res) => {
  await Controller.getUsers(req, res);
});

router.post(Routes.home, async (req, res) => {
  await Controller.createUser(req, res);
});

router.put(Routes.home, async (req, res) => {
  await Controller.updateUser(req, res);
});

router.delete(Routes.home, async (req, res) => {
  await Controller.deleteUser(req, res);
});

module.exports = router;
