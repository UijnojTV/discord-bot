const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member, true)
            .setColor('#ff0000')
            .setImage(member.user.displayAvatarURL()))
    },
    name: 'avatar',
    guildOnly: true,
    help: {
        description: 'Donne l\'avatar du membre.'
    }
}