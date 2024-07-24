const schedule = require('node-schedule');
const sendData = require('./data.js');

schedule.scheduleJob('0 8 * * *', function() {
    console.log('Executando sendData pela manhã...');
    sendData();
});

schedule.scheduleJob('0 20 * * *', function() {
    console.log('Executando sendData pela noite...');
    sendData();
});

// Caso queira enviar a mensagem sem ser agendada, acresente uma linha de comando chamado a função sendData().