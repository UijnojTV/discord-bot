const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member, true)
            .setColor('#ff0000')
            .setFooter(`ID : ${member.id}`))
    },
    name: 'id',
    guildOnly: true,
    help: {
        description: 'Donne l\'id du membre.'
    }
}