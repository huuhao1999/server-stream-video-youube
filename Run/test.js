const fs = require('fs');
const ytdl = require('ytdl-core');


module.exports = {
    downvideodemo: async (id) => {

        console.log("dowm thanhf coong");
    console.log( ytdl('http://www.youtube.com/watch?v='+id)
            .pipe(fs.createWriteStream("./video1/"+id+'.mp4')));
    }
}

