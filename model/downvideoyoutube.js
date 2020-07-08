const fs = require('fs')
const youtubedl = require('youtube-dl');
const videosadd = require('./videos');
const { resolve } = require('path');
const { isNull } = require('util');
module.exports = {
    downvideosbyID: async (id,check)=> {
        
        var entity = {};
        entity.idvideo = id;
        var idInDb;
        const video = await youtubedl('https://www.youtube.com/watch?v=' + id,
            ['--format=18'],
            { cwd: __dirname })
        try {
            video.on('info', function async(info) {
                /*
                var checkdownload = true;
                if (info.size > 50925141) { checkdownload = false }
                var datetemp = getdatenow();
                //console.log(datetemp);
                if (Number(datetemp) === Number(info.upload_date)) {
                    //console.log("video ngày hôm nay !!");
                    checkdownload = true;
                }
                if(check===true) checkdownload=true;
                if (checkdownload) {                   
                    console.log('Download started:');
                    console.log('filename: ' + info._filename.replace("-" + id, ""));
                    console.log("size: ",info.size);
                    //console.log(info.upload_date);
                    console.log("------------------------------------------------");
                    // console.log(Number(info.upload_date));
                    entity.videosname = info._filename.replace("-" + id, "");
                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date + ' ' + time;
                    entity.datevideo = dateTime;
                   // console.log(info);
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
                        sleep(500);
                        return true;
                    });
                } else {
                    //sleep(3000);
                    console.log('video quá nặng');
                    return false;
                }*/
                console.log("ok");
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
function getdatenow() {
    var today = new Date();
   var datetemp;
    //console.log("date",today.getDate());
    if (Number(today.getMonth()) >= 10 && Number(today.getDate()) >= 10)
        datetemp = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
    if (Number(today.getMonth()) < 10 && Number(today.getDate()) > 10)
        datetemp = today.getFullYear() + '0' + (today.getMonth() + 1) + today.getDate();
    if (Number(today.getMonth()) >= 10 && Number(today.getDate()) < 10)
        datetemp = today.getFullYear() + (today.getMonth() + 1) + '0' + today.getDate();
    if (Number(today.getMonth()) < 10 && Number(today.getDate()) < 10)
        datetemp = today.getFullYear() + '0' + (today.getMonth() + 1) + '0' + today.getDate();
        //console.log(datetemp);
    return datetemp;
}



