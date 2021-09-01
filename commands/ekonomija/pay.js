const economy = require('../../ekonomija')
const {atbilde} = require('../../sarunas/atbilzhandleris.js')
const {maksatlogo} = require('../../bildes.json')
const vaipieder = require('../../veikals/vaipieder.js')
module.exports = {
  commands: ['maksāt', 'samaksāt'],
  minArgs: 2,
  maxArgs: 2,
  cooldown: 10,
  formats: "sekunžu",
  expectedArgs: "<Kam vēlies samaksāt> <Cik?>",
  callback: async (message, arguments, text) => {
    const { guild, member } = message
    
    const target = message.mentions.users.first()
    if (!target) {
atbilde('Maksāt',maksatlogo,'Kam tu gribi maksāt?',message,'#d61515')
      return
    }
    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      atbilde('Maksāt',maksatlogo,'Ievadi pareizu skaitli dauni!',message,'#d61515')
      return
    }
    if(coinsToGive<=0)
    {
      atbilde('Maksāt',maksatlogo,'Ko?',message,'#d61515')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      atbilde('Maksāt',maksatlogo,`Tev nav ${(Math.round(coinsToGive * 100) / 100).toFixed(2)} latu`,message,'#d61515')

      return
    }


    var nodokls = 0
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)
    if (vaipieder('juridiskapersona-',member, guild)){
     nodokls = 0
    }
    if (!vaipieder('juridiskapersona-',member, guild)){
     nodokls = coinsToGive/3
    }
    const nodoklmaksatajanauda = await economy.getCoins(guild.id, member.id)
    if (nodoklmaksatajanauda>=nodokls)
    {
      const nodoklis = await economy.addCoins(guild.id, '862358305947385856', nodokls)
      const nodoklisminus = await economy.addCoins(guild.id, member.id, -nodokls)
    } else {
      await economy.addCoins(guild.id, member.id, -nodoklmaksatajanauda)
    }
    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )

    atbilde('Maksāt',maksatlogo,`Tu iedevi <@${target.id}> ${(Math.round(coinsToGive * 100) / 100).toFixed(2)} Latus, tagad viņam ir ${(Math.round(newBalance * 100) / 100).toFixed(2)} Lati un tev ir ${(Math.round(remainingCoins * 100) / 100).toFixed(2)} Lati, un ${nodokls} Latu aizgāja nodokļos`,message,'#60d615')


  },
}
