
var downvideo = require('../model/downvideoyoutube');
var downvideo = require('../model/downvideoyoutube');
var infoplaylist = require('../model/downvideoplaylist')
var checkeiststsvideo = require('../controller/videos.ctl');
const config = require("../config/default.json");
const DownLoadVideos = {
    executeplaylist: function () {
        let xxxa = null;
        var checlist = null
        let promise = new Promise(async (resolve, reject) => {

            try {

                xxxa = await infoplaylist.infoplaylist(config.idplaylistcorona);
                checlist = await checkeiststsvideo.checktrungvideo(xxxa);
            } catch (error) {
                console.log("ERROR", error);
            }
            resolve(xxxa);
        })
        promise.then(async (xxxa) => {
            //console.log(checlist);
            for (const i in xxxa) {
                if (checlist[i] === false) {

                    console.log(i);
                    await downvideo.downvideosbyID(xxxa[i]);
                    await sleep(1500);
                }
                if (checlist[i] === true) console.log("video exists nha");
            }
            //return res.send("OK")
        })

    }

}
module.exports = DownLoadVideos;
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}