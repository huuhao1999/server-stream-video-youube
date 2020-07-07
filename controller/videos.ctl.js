
var fs = require('fs');
var mvideo = require('../model/videos')
var path = "./239.mp4";
module.exports = {
    checktrungvideo: async (xxxa) => {

        var checklist = [];
        var rows = await mvideo.allvideo();
        let promise = new Promise(async (resolve, reject) => {

            try {
            } catch (error) {
                console.log("ERROR", error);

            }
            resolve(xxxa);
        })

        return promise.then(async (xxxa) => {
            var flat = 1;
            for (const i in xxxa) {
                for (const j in rows) {
                    if (rows[j].idvideo === xxxa[i]) {
                        checklist.push(true);
                        flat = 0;
                    }
                }
                if (flat === 1) checklist.push(false);
                flat = 1;
            }
            //console.log(checklist.lenght);
            return checklist
        })
    },
    getvideobyID: async function (req, res) {
        var stat = fs.statSync(path);
        var total = stat.size;
        if (req.headers.range) {   // meaning client (browser) has moved the forward/back slider                                         // which has sent this request back to this server logic ... cool
            var range = req.headers.range;
            var parts = range.replace(/bytes=/, "").split("-");
            var partialstart = parts[0];
            var partialend = parts[1];

            var start = parseInt(partialstart, 10);
            var end = partialend ? parseInt(partialend, 10) : total - 1;
            var chunksize = (end - start) + 1;
            console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

            var file = fs.createReadStream(path, { start: start, end: end });
            res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
            file.pipe(res);
        } else {

            console.log('ALL: ' + total);
            res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
            fs.createReadStream(path).pipe(res);
        }
    },
    play: function (req,res) {

        fs.readFile('./239.mp4', function (err, data) {
          if (err) throw err;
    
          var range = req.headers.range;
            var total = data.length;
    
            var parts = range.replace(/bytes=/, "").split("-");
            var partialstart = parts[0];
            var partialend = parts[1];
    
            var start = parseInt(partialstart, 10);
            var end = partialend ? parseInt(partialend, 10) : total-1;
    
            var chunksize = (end-start)+1;
    
            res.writeHead(206, { "Content-Range": "bytes " + start + "-" + end + "/" + total, "Accept-Ranges": "bytes", "Content-Length": chunksize, "Content-Type": 'video/mp4' });
            res.end(data);
    
        });
    
      }
}