const economy = require('../../ekonomija')

module.exports = {
  commands: ['pievienotnaudu', 'pievnaud'],
  minArgs: 2,
  maxArgs: 2,
  cooldown: 0*60,
  formats: "minūšu",
  expectedArgs: "<Lietotāja @> <daudzums>",
  permissionError: 'Tev vajag administratoru lai palaistu komandu',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {

    const mention = message.mentions.users.first()
    const guildId = message.guild.id
    const userId = mention.id
    const { guild, member } = message
    const coins = arguments[1]
    if(coins>20){
      message.reply('Nevajag jau mums te inflāciju nekādu, dod mazāk.')
     // return
    }
    if(coins<=0){
      message.reply(`Nepareizs naudas daudzums dauni`)
      return
    }

    if (member.id == userId)
    {
      message.reply('Pats sev nevarēsi naudu iedot')
      //return
    }

    if (!mention) {
      message.reply('Tu aizmirsi ievadīt lietotāju kuram maksāt')
      return
    }

    if (isNaN(coins)) {
      message.reply('Tas nav skaitlis')
      return
    }



    const newCoins = await economy.addCoins(guildId, userId, coins)


    message.reply(
      `Tu iedevi <@${userId}> ${coins} Latus. Kopsumma ${(Math.round(newCoins * 100) / 100).toFixed(2)} Lati!`
    )
  },
}
