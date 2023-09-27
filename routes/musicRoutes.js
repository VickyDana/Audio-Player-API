const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicControllers');
const upload = require('../middleware/uploads');
const { findById } = require('../models/music');

router.post('/uploadSong', upload('song'), musicController.uploadSong);
router.get('/:id',musicController.getSongByID);



module.exports = router;