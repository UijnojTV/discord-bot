const config = require('../config.json'),
    fs = require('fs'),
    Discord = require('discord.js')

module.exports = {
    run: async (message, args, client) => {
        if (Object.values(client.db.voice).some(voice => voice.author === message.author.id)) return message.channel.send('Vous avez déjà un vocal d\'ouvert.')
        const channel = await message.guild.channels.create(`Voice ${message.author.username}`, {
            type: 'voice',
            parent: config.voice.category,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'CONNECT'
            }, {
                id: message.author.id,
                allow: 'CONNECT'
            }, ...config.voice.roles.map(id => ({
                id,
                allow: 'CONNECT'
            }))]
        })
        client.db.voice[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(`Votre vocal ${channel} a été créé.`)
    },
    name: 'createmyvoice',
    guildOnly: true,
    help: {
        description: 'Créé un vocal personnel.'
    }
}