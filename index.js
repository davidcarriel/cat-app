const schedule = require('node-schedule');
const sendData = require('./data.js');

schedule.scheduleJob('30 8 * * *', function() {
    console.log('Executando sendData às 8:30 AM...');
    sendData();
});