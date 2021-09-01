const economy = require('../../ekonomija')
const {atbilde} = require('../../sarunas/atbilzhandleris.js')
const {makalogo} = require('../../bildes.json')
module.exports = {
  commands: ['maks', 'naudasmaks','makste'],
  maxArgs: 1,
  expectedArgs: "[Lietotāja @]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const coins = await economy.getCoins(message.guild.id, target.id)
    atbilde('Maks',makalogo, `${target.tag} ir ${(Math.round(coins * 100) / 100).toFixed(2)} Lati!`, message,'#37f40c')
  },
}
