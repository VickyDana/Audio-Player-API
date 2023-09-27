const express = require("express");
const path = require("path");
const multer = require("multer");

const fileStorage = multer.diskStorage({
    destination : 
    (req, file, cb) => {
        cb(null, "/uploads");
    },
    filename:
    (req, file, cb) => {
        let fileExt = path.extname(file.originalname)
        cb(null, Date.now() + fileExt)
    }
 })

 const upload = multer({
    storage: fileStorage,
    fileFilter:function(req, file, callback){
        if(
            file.mimetype == "song/mp3" || file.mimetype == "song/mp4"
        ){
            callback(null, true)
        }else{
            console.log("Only mp3 and mp4 files supported by the browser");
            callback(null, false)
        
    }
} 
    
 })


 module.exports = upload;
 module.exports = express;