
const DownLoadVideos = require('./download-videolastest');

process.env.UV_THREADPOOL_SIZE = 128;


(async () => {
    try {
        await DownLoadVideos.executechannel();
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
    
  
    //await sleep(3600000);
})()
function sleep(time) {
    console.log("bat dau sleep");
    return new Promise((resolve) => setTimeout(resolve, time));
}