const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    duration: { type: String, required: true },
    uploaded: { type: String, required: true },
    address: { type: String, required: true },
    

  });

module.exports = mongoose.model('Music', musicSchema);