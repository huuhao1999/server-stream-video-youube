var nodeSchedule = require('node-schedule');
function runJob() {
    console.log("start...");
    nodeSchedule.scheduleJob('*/1 * * * * *', function () { 
        require('./Run_channel');
    });
}
runJob();