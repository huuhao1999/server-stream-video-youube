const fs = require('fs');
const ytdl = require('ytdl-core');


module.exports = {
    downvideodemo: async (id) => {

        console.log("dowm thanhf coong");
        console.log(ytdl('http://www.youtube.com/watch?v=' + id)
            .pipe(fs.createWriteStream("./video1/" + id + '.mp4')));
    },
    infovideo: async (id) => {
        let info = await ytdl.getInfo(id);
        let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        console.log('Formats with only audio: ' + audioFormats.length);
        fs.writeFile('writer.txt', info, 'utf8', function (err) {
            //Kiểm tra nếu có lỗi thì xuất ra lỗi
            if (err)
                throw err;
            else //nếu không thì hiển thị nội dung ghi file thành công
                console.log('Ghi file thanh cong!');
        });
    }
}

