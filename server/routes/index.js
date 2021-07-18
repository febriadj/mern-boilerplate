const router = require('express').Router();
const { getData } = require('../controllers/getData');

router.get('/data', getData);

module.exports = router;
