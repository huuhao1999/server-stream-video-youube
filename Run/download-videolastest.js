
var downvideo = require('../model/downvideoyoutube');
var downvideo = require('../model/downvideoyoutube');
var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
const config = require("../config/default.json");
const DownLoadVideos = {
    executechannel:async function () {
        console.log("EXECUTE channel");
        let xxxa = null;
        var checlist = null
        //for (const k in config.idchannelnews)
        
        let promise = new Promise(async (resolve, reject) => {
            try {
                //xxxa = await inforOfaChannel.getinVideoOfChannel("édsf");
                xxxa = await inforOfaChannel.getIDVideoLastestOfchannel(config.idchannel);
                console.log(xxxa);
                checlist = await checkeiststsvideo.checktrungvideo(xxxa);
            } catch (error) {
                console.log("ERROR", error);
            }
            resolve(xxxa);
        })
 
        return promise.then(async (xxxa) => {
            for (const i in xxxa) {
                if (checlist[i] === false) {      
                   console.log(i);
                   await downvideo.downvideosbyID(xxxa[i]);
                   await sleep(4000);
                }
                if (checlist[i] === true) console.log("video exists nha");

            }

            return 1;
        })
    },


}
module.exports = DownLoadVideos;
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}