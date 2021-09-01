const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
const economy = require('../../ekonomija')
module.exports = {
  commands: ['seks',`seggs`],
  minArgs: 0,
  maxArgs: 0,
  callback: async(message, arguments, text) => {
    var zaglanauda = await economy.getCoins(message.guild.id, message.member.id)

    message.reply(new Discord.MessageEmbed()
.setTitle('Seks')
.setThumbnail("https://i.pinimg.com/originals/ec/b0/7f/ecb07f912670b91bbf714bb6d8053f8e.jpg")
.setDescription(`${message.author.tag} bija seggs ar konstantīnu, viņš nozaga tev mazliet naudu`)
.setFooter(ulmanversija)
.setColor('#00sAAFF'))
var izlaupitais1 = await economy.addCoins(message.guild.id, message.member.id, -zaglanauda/10)
  },
}
