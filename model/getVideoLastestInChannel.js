var request = require("request");
const { resolve } = require("path");
const { rejects } = require("assert");
module.exports = {
    
    getJsonlastestVideo: async (idChannel, APIkey) => {
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id&channelId=' + idChannel + '&maxResults=10&order=date&key=' + APIkey;
        //var url = "https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCIW9cGgoRuGJnky3K3tbzNg&maxResults=10&order=date&key=AIzaSyBFPo3Mi6EcBMO9QS4-FY7HPVJzzAoC_vM";
        let promise = new Promise((resolve, rejects) => {
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    
                    resolve(body) // Print the json response
                }
                else
                resolve(-1);
            })
        })
        return promise.then((resolve)=>{
           // console.log(resolve);
                return resolve;
        })

    }
}
