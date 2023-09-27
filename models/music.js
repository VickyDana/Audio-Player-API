const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    title: { type: String },
    artist: { type: String },
    duration: { type: String },
    uploaded: { type: String},
    address: { type: String},
    song:{type: String},
    

  });

module.exports = mongoose.model('Music', musicSchema);