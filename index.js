const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true,
        partials: ['MESSAGE', 'REACTION']
    }),
    config = require('./config.json'),
    fs = require('fs'),
    humanizeDuration = require('humanize-duration'),
    cooldown = new Set()

client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = require('./db.json')

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    if (message.guild) {
        if (!message.member.hasPermission('MANAGE_CHANNELS') && client.db.lockedChannels.includes(message.channel.id)) return message.delete()

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            const duration = config.cooldown[message.channel.id]
            if (duration) {
                const id = `${message.channel.id}_${message.author.id}`
            if (cooldown.has(id)) {
                message.delete()
                return message.channel.send(`ce salon est soumis à un cooldown de ${ humanizeDuration(duration, {language: 'fr'})}`).then(sent => sent.delete({timeout: 5e3}))
            }
            cooldown.add(id)
            setTimeout(() => cooldown.delete(id), duration)
            }
        }
    }

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member}`, new Discord.MessageEmbed()
        .setDescription(`${member} a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 🎉 `)
        .setColor('#00ff00'))
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member.user.tag} a quitté le serveur... rip 😢`)
        .setColor('#ff0000'))
})

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('ready', () => {
    client.user.setActivity('UijnojCity', {type: 'PLAYING'})
})

client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
})

client.on('message', message => {
    if (message.content === 'slt') {
        message.channel.send('yo b(l)g')
       }
  })

client.on('message', message => {
    if (message.content === 'slt') {
        message.react('😀')
       }
})

client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '.join') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join()
        message.channel.send('Je suis connecté au salon vocal !');
      } else {
        message.reply('Tu dois d\'abord rejoindr eun salon vocale.');
      }
    }
});

client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '.leave') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave()
        message.channel.send('Je suis deconnecté au salon vocal.');
      }
    }
  });

client.on('message', message => {
    if (message.content === 'tg') {
        message.reply('<@!692345513793683526>');
    }
});