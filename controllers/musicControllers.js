const { response } = require('express');
const Music = require('../models/music');


exports.createMusic = async (req, res) => {

const db = getDb();
const collection = db.collection<Song>("song");


if (!req.file?.filename) {
    res.status(400).send("File not uploaded");
    return;
}






const result = await collection.insertOne({
    userId: req.auth.id,
    filename: req.file.filename,
    mimeType: req.file.mimetype,
    title: req.body.title,
    duration: req.body.duration,
    genre: req.body.genre,
    lyrics: req.body.lyrics,
    uploaded: new Date(),
})
res.status(200).json(result);
}

// exports.uploadSong = async (req, res) => {
//     let music = new Music({
//         title : req.body.title,
//         artist : req.body.artist,
//         duration : req.body.duration,
//         uploaded : req.body.uploaded,
//         address : req.body.address,
//     })

//     if(req.body){
//         music.song = req.body.path
    
//     }
//     music.save()
//     .then(response => {
//         console.log(req.body)
//         res.send({
          
//            response
//         })
//     })
//     .catch(error => {

//         console.log(!req.body)
//         res.send({
//             message: error.message
//         })
//     })
// }

exports.uploadSong = function(req, res) {
    const music = new Music({
        title: req.body.title,
        artist: req.body.artist,
        duration: req.body.duration,
        uploaded: req.body.uploaded,
        genre: req.body.genre,
        uploaded: new Date(),
    });
    music
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Uploaded file',
                createdDetail: result,
                
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
};
exports.getSongByID = async function(req, res) {
    const id = req.params.id;

    // Music.findOne({ _id: id })
    //         console.log(res);
    //         if (response) {
    //             console.log(res);
    //         } else {
    //             console.log(res);
    //         }
      
};


