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
            //var check chan
            for (const z in config.idchannelnews) {
                while (flatcheck) {
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
                        console.log("toàn bộ key hết hạn");
                    }
                }
                flatcheck=true;
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
