const fs = require('fs')

module.exports = {
    run: async (message, args, client) => {
        const channel = message.mentions.channels.first()
        if (!channel) message.channel.send('Veuillez mentionner un vocal à fermer.')
        if (!client.db.voice[channel.id]) return message.channel.send('Ce salon n\'est pas un vocal.')
        if (!message.member.hasPermission('MANAGE_MESSAGES') && client.db.voice[channel.id].author !== message.author.id) return message.channel.send('Vous n\'avez pas la permission de fermer ce vocal.')
        delete client.db.voice[channel.id]
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        await message.channel.send(`Le vocal ${channel.name} a été fermé.`)
        channel.delete()
    },
    name: 'close-voice',
    guildOnly: true,
    help: {
        description: 'Ferme un vocal',
        syntax: '<#vocal>'
    }
}