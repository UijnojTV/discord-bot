const Discord = require('discord.js')

module.exports = {
    run: message => {
        if (message.guild) return message.channel.send('envoie le en privé')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('U SUS IMPOSTER')
            .setDescription('Bro ? Are u kinda sus ? AMOGUS <:cmonBruhThink:746298116541775993>')
            .addField('New sus ?', message.author.username, true)
            .setColor('#ff0000'))
    },
    name: 'amogus',
}