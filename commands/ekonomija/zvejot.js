const economy = require('../../ekonomija')
const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
function dzest(msg) {
  if (msg.channel.id == '867284532906426368' || msg.channel.id == '869164189619474453'){
    console.log('bruh')
    return
  } else {
  return msg.delete({timeout:"30000"})
}
}

module.exports = {
  commands: ['zvejot'],
  cooldown: 2*60*60,
  formats: "stundu",
  callback: async (message, arguments) => {
    const { member, channel, content, mentions, guild } = message
    const role = guild.roles.cache.get("858053247176802344")

const logo = 'https://media.discordapp.net/attachments/850459163855028274/868576417561059388/20210724_223220.jpg?width=324&height=422'
    if (!member.roles.cache.has(role.id)) {
      message.reply(new Discord.MessageEmbed()
      .setTitle('Zvejošana')
      .setThumbnail(logo)
      .setDescription('Tikai Dīvainās zivis var zvejot.')
      .setFooter(ulmanversija)
      .setColor('#00sAAFF')).then(msg=>dzest(msg))
       return
    }


    const guildId = message.guild.id

    const userId = member.id
    const newCoins = await economy.addCoins(guildId, userId, 10)


    message.reply(new Discord.MessageEmbed()
    .setTitle('Zvejošana')
    .setThumbnail(logo)
    .setDescription('Tu nozvejoji dīvaino zivi un pārdevi viņu, ieguvi 10 Latus')
    .setFooter(ulmanversija)
    .setColor('#00sAAFF')).then(msg=>dzest(msg))
  },
}
