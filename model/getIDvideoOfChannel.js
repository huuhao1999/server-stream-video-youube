var ypi = require('youtube-channel-videos');
const config = require("../config/default.json");
var jsonvideolastest = require('./getVideoLastestInChannel');
var mail=require("./sendmail");
var fs = require('fs');
const { resolve } = require('path');
module.exports = {
    getinVideoOfChannel: async (idchannel) => {
        let promise = new Promise(async (resolve, reject) => {
            ypi.channelVideos(config.apikeyyoutube, idchannel, function (channelItems) {
                var arrays = [];
                var x = channelItems;
                for (const i in x) {
                    arrays.push(x[i].id.videoId);
                    // console.log("list video channel",x[i].id.videoId);
                }
                console.log("Mang", arrays);
                fs.writeFile('writer.txt',arrays,'utf8',function (err) {
                    //Kiểm tra nếu có lỗi thì xuất ra lỗi
                    if(err)
                        throw err;
                    else //nếu không thì hiển thị nội dung ghi file thành công
                        console.log('Ghi file thanh cong!');
                });
                resolve(arrays);
            });
        });
        return promise.then((arrays) => {
            return arrays;
        });
    },
    getIDVideoLastestOfchannel: async (idchannel) => {
        var arrays = [];
        let promise = new Promise(async (resolve, reject) => {
            var flatcheck = true;
            var flatchek1=true;
            var keyapi = 0;
            //var check chan
            for (const z in config.idchannelnews) {
                while (flatcheck&&flatchek1) {
                    //  console.log(config.arrayskey.length);
                    var jsondata = await jsonvideolastest.getJsonlastestVideo(config.idchannelnews[z], config.arrayskey[keyapi]);
                    if (jsondata === -1) {
                        console.log("hết hạn key:", keyapi + 1);
                        keyapi++;
                    }
                    else {
                        flatcheck = false;
                        var temp = jsondata.items;
                        // console.log(temp);
                        for (const i in temp) {
                            arrays.push(temp[i].id.videoId);
                        }
                    }
                    if (keyapi === config.arrayskey.length) {
                        flatcheck = false;
                        flatchek1=false;
                        console.log("toàn bộ key hết hạn và đã gửi mail");
                        mail.sendEmailwithContent('huuhao1999@gmail.com');
                    }
                }
                flatcheck=true;
                if(!flatchek1) break;
            }
            //console.log("jsondata",jsondata);
            resolve(arrays);
        })
        return promise.then(async (arrays) => {
            // console.log("jsondata",jsondata.items[1].id.videoId);

            //console.log("aray id",arrays);
            return arrays;
        })

    }
}
