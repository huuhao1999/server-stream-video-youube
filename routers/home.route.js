const express = require("express");
const router = express.Router();
var downvideo = require('../model/downvideoyoutube');

var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
var mvideo=require('../model/videos')
var controllervideo=require('../controller/videos.ctl');
var moment = require('moment');
router.get("/video", async (req, res, next) => {
    //req.setTimeout(300000);
    // downvideo.downvideosbyID("lT6VukNseJs");
    // downvideo.downvideosbyID("RlFM8jydcKQ");
    // downvideo.downvideosbyID("EyO5hrUeNp8"); 
 // var x=await mvideo.getdetailByDateNow();
 controllervideo.play(req,res);
});
module.exports = router;