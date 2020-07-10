
var downvideo = require('../model/downvideoyoutube');
var downvideo = require('../model/downvideoyoutube');
var inforOfaChannel = require('../model/getIDvideoOfChannel');
var checkeiststsvideo = require('../controller/videos.ctl');
const moment = require("moment");
var mail = require("../model/sendmail");
const DownLoadVideos = {
    executechannel: async function () {
        console.log("EXECUTE channel");
        let xxxa = null;
        var checlist = null
        //for (const k in config.idchannelnews)

        let promise = new Promise(async (resolve, reject) => {
            try {
                //xxxa = await inforOfaChannel.getinVideoOfChannel("édsf");
               xxxa = await inforOfaChannel.getIDVideoLastestOfchannel();
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

                    await downvideo.downvideosbyID(xxxa[i], true);

                    await sleep(30000);
                }
                if (checlist[i] === true) console.log("video exists nha");

            }
            var date = new Date();
            var tempdate = moment(date, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
            await mail.sendEmailwithContent('huuhao1999@gmail.com', 'Đã cập nhật xong vào lúc: '+tempdate);
            return 1;
        })
    },


}
module.exports = DownLoadVideos;
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}