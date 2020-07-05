const fs = require('fs')
const youtubedl = require('youtube-dl');
const videosadd = require('./videos');
const { resolve } = require('path');
const { isNull } = require('util');
module.exports = {
    downvideosbyID: async id => {
        var entity = {};
        entity.idvideo = id;
        var idInDb;
        const video = await youtubedl('https://www.youtube.com/watch?v=' + id,
            ['--format=18'],

            { cwd: __dirname })

        try {

            video.on('info', function async(info) {
                //  console.log("infoooo",info);
                console.log('Download started:');
                console.log('filename: ' + info._filename.replace("-" + id, ""));
                // console.log(info);
                // console.log(Number(info.upload_date));
                if (info.size < 40925141) {
                    entity.videosname = info._filename.replace("-" + id, "");
                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date + ' ' + time;
                    entity.datevideo = dateTime;
                    entity.dateexport = Number(info.upload_date);
                    entity.like = 0;
                    entity.views = 0;
                    entity.idchannel = info.channel_id;
                    let promise = new Promise(async (resolve, reject) => {
                        //console.log(entity);   
                        idInDb = await videosadd.addvideo(entity);
                        resolve(idInDb);
                    })
                    return promise.then(async (idInDb) => {
                        await video.pipe(fs.createWriteStream('./video/' + idInDb + '.mp4'));
                        console.log('tải xong!');
                        //sleep(3000);
                        return true;
                    });
                } else {
                    //sleep(3000);
                    console.log('video quá nặng');
                    return false;
                }
            }
            )
        } catch (error) {
            return false;
        }

    }

}
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}




