const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/client', clientController.getClient);
router.post('/client',  clientController.createClient);

module.exports = router;