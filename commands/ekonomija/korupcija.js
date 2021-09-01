const economy = require('../../ekonomija')
const {atbilde} = require('../../sarunas/atbilzhandleris.js')
const {korupcijalogo} = require('../../bildes.json')
module.exports = {
  commands: ['korupcija'],
  cooldown: 24*60*60,
  formats: "stundu",
  requiredRoles: ['draudziņi'],
  callback: async (message, arguments) => {
const { member, channel, content, mentions, guild } = message
const newBalance = await economy.addCoins(guild.id, member.id, 120)

atbilde('"Algas Pielikums"',korupcijalogo, "Lūdzu pieņemiet šo 120 Latu bonusu", message,'#f40c0c')
}
}
