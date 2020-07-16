const express = require("express");
const router = express.Router();
var downvideo = require('../model/downvideoyoutube');
var bodyParser = require('body-parser')
const fs = require('fs')
var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
var mvideo=require('../model/videos')
var controllervideo=require('../controller/videos.ctl');
var moment = require('moment');
var jsonParser = bodyParser.json();
router.get("/video/:id", async (req, res) => {
  const idvideo = parseInt(req.params.id);
  //  console.log(await mvideo.getdetailByDateNow());
   // console.log(rows);
    const path = `./Run/video/${idvideo}.mp4`;
    var stat = fs.statSync(path);
    var total = stat.size;
    if (req.headers.range) {   // meaning client (browser) has moved the forward/back slider                 // which has sent this request back to this server logic ... cool
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];
  
      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total-1;
      var chunksize = (end-start)+1;
     // console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);
  
      var file = fs.createReadStream(path, {start: start, end: end});
      res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
      file.pipe(res);
  
    } else {
  
      console.log('ALL: ' + total);
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
      fs.createReadStream(path).pipe(res);
    }
 //controllervideo.play(req,res);
});
router.get("/getallvideoalltoday", async (req, res) => {
  var rows=await mvideo.getdetailByDateNow();
    res.send(rows.reverse());
});
router.get("/getvideothanhnien", async (req, res) => {
  var rows=await mvideo.getvideoThanhNien();
  res.send(rows.reverse());
});
router.get("/getvideotuoitre", async (req, res) => {
  var rows=await mvideo.getvideoTuoiTre();
  res.send(rows.reverse());
});
router.get("/getnewlastest", async (req, res) => {
  var rows=await mvideo.getvideoNewlastaste();
  res.send(rows.reverse());
});
router.post("/updatelike",jsonParser, async (req, res) => {
  var id=req.body.id;
  var like=req.body.like;
var upd=await mvideo.updatelike(id,like);
console.log(req.body);
res.send('updathanhcong');
});
router.post("/updateview",jsonParser, async (req, res) => {
  var id=req.body.id;
  var view=req.body.view;
 
var upd=await mvideo.updateview(id,view);
  console.log(req.body);
});
module.exports = router;