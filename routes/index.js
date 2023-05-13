const express = require('express');
const router = express.Router();
const Routes = require('./paths');

router.get(Routes.home, (req, res) => {
  res.send('AdoTI up and running');
});

router.post(Routes.home, (req, res) => {
  res.send('Got a POST request');
});

module.exports = router;
