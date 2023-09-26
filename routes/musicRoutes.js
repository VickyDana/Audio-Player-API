const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicControllers');


router.post('/create', musicController.createMusic);