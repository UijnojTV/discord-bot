const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Je ne peut pas le dire']

module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: '8ball',
    help: {
        description: 'Pose une question et le bot répond.',
        syntax: '[question]'
    }
}