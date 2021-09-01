const economy = require('../../ekonomija')
const {atbilde} = require('../../sarunas/atbilzhandleris.js')
const {pabalstslogo} = require('../../bildes.json')


module.exports = {
  commands: ['pabalsts'],
  cooldown: 24*60*60,
  formats: "stundu",
  requiredRoles: ['bot','draudziņi'],
  callback: async (message, arguments) => {
    const { member, channel, content, mentions, guild } = message
    const nojoindatuma = member.joinedAt*0.00000000001
    const newCoins = await economy.addCoins(guild.id, member.id, nojoindatuma)

atbilde('Pabalsts',pabalstslogo, `Tu saņēmi dižpabalstu ${(Math.round(nojoindatuma * 100) / 100).toFixed(2)} Latu apmērā!`,message,'#22a90d')
  },
}
