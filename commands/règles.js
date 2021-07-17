const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Règles du serveur')
            .setDescription('Hey, voici le règlement\nChaque règle lue devra être respectée sinon vous serez banni.\n\nPas de spam\nPas de pub dans le mauvais salon\nPas d\'insultes\nPas de NSFW\nPas de moqueries\nPas de harcèlement\nPas de racisme\nPas d\'homophobie\nPas d\'abus de pouvoir\nRespecter les salons\n\nDès que vous avez lu, réagissez avec un émoji.\nBonne journée, le staff.')
            .setColor('RANDOM')
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
            .setImage('https://images-ext-1.discordapp.net/external/rkg6Q0IBGA3Zxoq1e5W5N7bColjrH0yqjiReAoYP71Y/%3Fw%3D257%26h%3D180%26c%3D7%26o%3D5%26pid%3D1.7/https/th.bing.com/th/id/OIP.0c9cHMcz2txBNVwxSQLkwwHaE7?width=206&height=144'))
    },
    name: 'règles',
    guildOnly: true,
    help: {
        descrption: 'Envoie les règles pour un sreveur.'
    }
}