const Discord = require('discord.js')
const anime = require('anime-actions');
module.exports.run = async (client, message, args) => {

  const p = new Discord.MessageEmbed()
    .setImage(await anime.cry())

  message.channel.send(p)
}
module.exports.config = {
  name: 'cry',
  aliases: ['c']

}