const { getCatImage } = require('./getPhoto');

async function buildCatEmbed() {
    const catImageUrl = await getCatImage();

    if (!catImageUrl) {
        return null;
    }

    const embed = {
        title: `gato! 🐱`,
        description: 'veja esta imagem adorável de um gato!',
        color: 0xFFA500,
        image: {
            url: catImageUrl
        },
        author: {
            name: `farm's cats`,
            icon_url: 'https://media.discordapp.net/attachments/1225634636756025385/1230644025552404521/Design_sem_nome.png?ex=669edb0f&is=669d898f&hm=34170e8fb3a5b043fc293dcf945b3671deb584d2d7b7261e0cd4eee1d414bbf0&=&format=webp&quality=lossless'
        },
        footer: {
            text: '© 2024 PRICE'    
        }
    };

    return embed;
}

module.exports = {
    buildCatEmbed: buildCatEmbed
};
