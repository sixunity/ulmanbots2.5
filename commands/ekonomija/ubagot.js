const economy = require('../../ekonomija')
const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
function dzest(msg) {
  if (msg.channel.id == '867284532906426368' || msg.channel.id == '869164189619474453'){
    console.log('bruh')
    return
  } else {
  return msg.delete({timeout:"30000"})
}
}
module.exports = {
  commands: ['ubagot', 'ubags'],
  cooldown: 1*60*60,
  formats: "stundu",
  callback: async (message, arguments) => {


    const mention = message.mentions.users.first()
    const guildId = message.guild.id

    const { guild, member } = message
    const userId = member.id



    var bomz = await economy.getCoins(guild.id, member.id)
var randums = between(1,5)
    var cikubag = await economy.addCoins(guild.id, member.id, randums)
    message.reply(new Discord.MessageEmbed()
.setTitle('Ubagošana')
.setThumbnail("https://cdn.valmieraszinas.lv/wp-content/uploads/2015/07/Bomzis__39.jpg")
.addFields(
      { name: `Tu noubagoji`, value: randums, inline: true},
      )
.setFooter(ulmanversija)
.setColor('#00sAAFF')).then(msg=>dzest(msg))

  },
}
