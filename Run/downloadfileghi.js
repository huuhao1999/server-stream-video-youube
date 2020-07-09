
var downvideo = require('../model/downvideoyoutube');
var downvideo = require('../model/downvideoyoutube');
var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
const config = require("../config/default.json");
var arrayreadfile=require('./readfile');
var test1=require('./test');
const test = require('./test');
const DownLoadVideos = {
    executechannel:async function () {
        console.log("EXECUTE channel");
        let xxxa = null;
        var checlist = null
        //for (const k in config.idchannelnews)
        
        let promise = new Promise(async (resolve, reject) => {
            try {
                //xxxa = await inforOfaChannel.getinVideoOfChannel("édsf");
                xxxa = await arrayreadfile.arrayreadfile();
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
                   // console.log(i);
                  
                   console.log(i);
                   
                let as=await test1.infovideo(xxxa[i]);
                //console.log(as);
                   await sleep(10000);
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
DownLoadVideos.executechannel();