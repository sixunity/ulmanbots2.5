const economy = require('../../ekonomija')
const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
const preces = new Map()
const pievienotpreci = require('../../veikals/preces.js')
const vaipieder = require(`../../veikals/vaipieder.js`)
module.exports = {
  commands: ['pirkt', 'veikals'],
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: "<Prece>",
  callback: async (message, arguments) => {
    const { guild, member, mentions } = message
    const nauda = await economy.getCoins(guild.id, member.id)
    preces.set('1', 500)
    preces.set('2', 300)
const guildId = message.guild.id
const userId = mentions.id

    const embedveikals = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Veikals')
    .setFooter(ulmanversija)
    .addFields(
      { name: `1: Juridiska persona`, value: `Cena : 500 Lati`, inline: true},
      { name: `2: Aizsardzība`, value: `Cena : 300 Lati`, inline: true},
    )
    .setFooter(ulmanversija)
    .setDescription('Lai pirktu ievadiet ".pirkt 1" 1 vietā preces ciparu')
    if (!arguments[0]){
      message.reply(embedveikals)
      return
    }
if(arguments[0])
{
  if(!preces.get(arguments[0])){
    message.reply('prece nav atrasta')
    return
  }
  if (nauda < preces.get(arguments[0])) {
    message.reply(`Tev nesanāk.`)
    return
  }
await economy.addCoins(guild.id, member.id, -preces.get(arguments[0]))
await economy.addCoins(guild.id, '862358305947385856', preces.get(arguments[0]))
message.channel.send(arguments[0])
if (vaipieder(arguments[0],member,guild)){
  message.reply('jau pieder')
  return
}

switch(parseInt(arguments[0]))
{
  case 1: pievienotpreci(member, guild, "juridiskapersona-", 10000);break;
    case 2: pievienotpreci(member, guild, "aizsardziba-", 10000);break;
}

}








  },
}
