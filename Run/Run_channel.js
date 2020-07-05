
const DownLoadVideos = require('./download-videolastest');

process.env.UV_THREADPOOL_SIZE = 128;


(async () => {
    await DownLoadVideos.executechannel();
    //await sleep(3600000);
})()
function sleep(time) {
    console.log("bat dau sleep");
    return new Promise((resolve) => setTimeout(resolve, time));
}