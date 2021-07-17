const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Un nouveau suspect 😳', member, true)
            .setImage(member.user.displayAvatarURL()))
    },
    name: 'sus',
    guildOnly: true,
    help: {
        description: 'La personne mentionnée est suspect 😳',
        syntax: '<@membre>'
    }
}