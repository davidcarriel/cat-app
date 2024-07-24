require('dotenv').config();
const axios = require('axios');
const embed = require('./embed');
const url = process.env.DISCORD_WEBHOOK_KEY;

async function generateData() {
    const embedData = await embed.buildCatEmbed();

    if (!embedData) {
        console.error('Não foi possível construir o embed.');
        return null;
    }

    const data = {
        username: "gatitos",
        avatar_url: `https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/17/866513462-gato.jpg`,
        embeds: [embedData]
    };

    return data;
}

async function sendData() {
    try {
        const data = await generateData();

        if (!data) {
            console.error('Dados retornados de data.js são inválidos ou vazios.');
            return;
        }

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Mensagem enviada com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar os dados:', error.response ? error.response.data : error.message);
    }
}

module.exports = sendData;
