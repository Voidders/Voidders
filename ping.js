const dc = require('discord.js')

module.exports.run = async (client, message, args) => {

let p = new dc.MessageEmbed()
.setTitle(`Your PING! 📡`)
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`:ping_pong: **Ping! Pong! :** ${client.ws.ping} ms`)
.setColor('RANDOM')

message.channel.send(p)
}
module.exports.config = {
  name: 'ping',
  aliases: ['p']
    
  }