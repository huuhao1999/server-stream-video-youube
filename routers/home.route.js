const express = require("express");
const router = express.Router();
var downvideo = require('../model/downvideoyoutube');

var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
router.get("/", async (req, res, next) => {
    //req.setTimeout(300000);
    // downvideo.downvideosbyID("lT6VukNseJs");
    // downvideo.downvideosbyID("RlFM8jydcKQ");
    // downvideo.downvideosbyID("EyO5hrUeNp8"); 

  res.send("ok");

});

module.exports = router;