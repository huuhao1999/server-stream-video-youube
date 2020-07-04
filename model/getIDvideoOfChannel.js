var ypi = require('youtube-channel-videos');
const config = require("../config/default.json");
var jsonvideolastest = require('./getVideoLastestInChannel');
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
            var keyapi = 0;
            while (flatcheck) {
              //  console.log(config.arrayskey.length);
                var jsondata = await jsonvideolastest.getJsonlastestVideo(idchannel, config.arrayskey[keyapi]);
                if (jsondata === -1) {
                    console.log("hết hạn key:",keyapi+1);
                    keyapi++;
                }
                else{
                    flatcheck=false;
                }
                if(keyapi===config.arrayskey.length)
                {
                    flatcheck=false;
                    console.log("toàn bộ key hết hạn");
                }

            }

            //console.log("jsondata",jsondata);
            resolve(jsondata);
        })
        return promise.then(async (jsondata) => {
            // console.log("jsondata",jsondata.items[1].id.videoId);
            var temp = jsondata.items;
            // console.log(temp);
            for (const i in temp) {
                arrays.push(temp[i].id.videoId);
            }
            //console.log("aray id",arrays);
            return arrays;
        })

    }
}
