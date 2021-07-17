const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Test Embed')
            .setDescription('[Google](https://google.com) <------ klik stp')
            .setColor('#00c0c0')
            .addField('Champ 1', 'Test description champ 1', true)
            .addField('Champ 2', '[UijojTV](https://itanimulli.com)', true)
            .setAuthor('UijnojTV', 'https://images-ext-1.discordapp.net/external/OYqc0cbkW-k2E529uQ8Vfj4q6CJQNgxihi_xAQP8UVE/https/cdn.discordapp.com/icons/731187383898472479/0933bd4f0c97b2c48bc785c69f4af76f.webp?width=93&height=93', 'https://youtube.com/c/UijnojMan')
            .setImage('https://wallup.net/wp-content/uploads/2017/11/22/407975-programming-programming_language-syntax_highlighting-minified-knowledge-coding-code-color_codes-CSS-computer-pixels-Computer_screen-logic-HTML-748x499.jpg')
            .setThumbnail('https://images-ext-2.discordapp.net/external/AUZdbvw2AuNYCknkG3tMGgUWlwQI-7v1Ia6Ip2MrMOE/%3Fsqp%3D-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBdvMt215hUoXXMUT8WMvSc73oZjg/https/i.ytimg.com/vi/HPd2hiYreyc/hq720.jpg?width=576&height=323')
            .setFooter('Mon bot Uijnoj', 'https://media.discordapp.net/attachments/845773408762986547/850787346986958918/2021-06-05_19.24.42.png?width=994&height=559')
            .setTimestamp()
            .setURL('https://aternos.org'))
    },
    name: 'embed',
    help: {
        description: 'Envoie un embed.'
    }
}