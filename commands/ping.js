module.exports = {
    run: (message, args, client) => {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    },
    name: 'ping',
    help: {
        description: 'Donne le ping du bot.'
    }
}