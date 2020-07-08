
const DownLoadVideos = require('./download-video_playlist');


(async () => {
    try {
        await DownLoadVideos.executeplaylist();
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
   
   
})()
