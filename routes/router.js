const express = require('express');
const router = express.Router();
const hp = require('../controller/Hpcontroller')

router.get('/', hp.nom)
module.exports = router;