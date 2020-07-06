const { spawn } = require('child_process');
const schedule = require('node-schedule');

schedule.scheduleJob('*/3 * * * *', function() {
    console.log("running....")
  spawn('node', ['Run_channel.js']),function(err, stdout, stderr) { 
    console.log(stdout); 
    
  }
});