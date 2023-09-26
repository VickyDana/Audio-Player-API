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
});

res.status(200).json(result);
}
