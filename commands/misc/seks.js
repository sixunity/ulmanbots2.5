const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
const economy = require('../../ekonomija')
module.exports = {
  commands: ['seks',`seggs`],
  minArgs: 0,
  maxArgs: 1,
  callback: async(message, arguments, text) => {
    var zaglanauda = await economy.getCoins(message.guild.id, message.member.id)
    const target = message.mentions.users.first()

    message.reply(new Discord.MessageEmbed()
.setTitle('Seks')
.setThumbnail("https://i.pinimg.com/originals/ec/b0/7f/ecb07f912670b91bbf714bb6d8053f8e.jpg")
.setDescription(`${message.author.tag} bija seggs ar ${target.tag}, viņš nozaga tev mazliet naudu`)
.setFooter(ulmanversija)
.setColor('#00sAAFF'))
var nauda = zaglanauda/10
var izlaupitais1 = await economy.addCoins(message.guild.id, message.member.id, -nauda)
var izlaupitais2 = await economy.addCoins(message.guild.id, target.id, nauda)
  },
}
