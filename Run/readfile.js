var fs = require('fs');
const { resolve } = require('path');
module.exports = {
    arrayreadfile: async () => {
        let promise = new Promise(async(resolve) => {
            await fs.readFile('writer.txt', 'utf8', function (err, data) {
                resolve(data.split(","));
           });
        })
        return promise.then((resolve) => {
    
            return resolve;
        })
    }
};