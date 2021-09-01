const {atbilde, getRole} = require(`../../sarunas/atbilzhandleris`)
const economy = require('../../ekonomija')
const {bagats, zaglis, tukssmaks, cietums} = require(`../../bildes.json`)
const vaipieder = require('../../veikals/vaipieder.js')
function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

module.exports = {
  commands: ['zagt', 'apzagt'],
  minArgs: 1,
  maxArgs: 1,
  cooldown: 0*60,
  formats: "minūšu",
  expectedArgs: "<Ko vēlies apzagt>",
  callback: async (message, arguments, text, client) => {
      const { guild, member } = message


    const target = message.mentions.users.first()
    if (!target) {
      atbilde('Zagšana',zaglis,'Ko tu gribi apzagt?',message,'#d62915')
      return
    }
    if ( await economy.getCoins(guild.id, member.id) <= 50) {
      atbilde(`Zagšana`,zaglis,`Tev nepietiek naudas, vajag vismaz 50 Latus`, message, `#d62915`)
      return
    }
    if ( await economy.getCoins(guild.id, target.id) <= 0)
    {
      atbilde(`Zagšana`,zaglis,`Viņam nav naudas, apenes jau nezagsi`,message,`#d62915`)
      return
    }
    var laupijums = between(1,  await economy.getCoins(guild.id, target.id)/10)
    var zaudejums = between(1, await economy.getCoins(guild.id, member.id)/2)

if (vaipieder('aizsardziba-',member, guild)){
  var cais = between(1,1000)
}else{
  var cais = between(1,400)
}
      if(cais==1){atbilde(`Zagšana`,bagats,`Tu nozagi visu ${target.tag} naudu`);await economy.addCoins(guild.id, member.id, await economy.getCoins(guild.id, target.id));economy.addCoins(guild.id, target.id, -(await economy.getCoins(guild.id, target.id)));return;}
  if(cais >= 2 && cais <= 8){ atbilde(`Zagšana`,tukssmaks,`Tu pazaudēji visu savu naudu`,message,`#d62915`);await economy.addCoins(guild.id, target.id, (await economy.getCoins(guild.id, member.id)));await economy.addCoins(guild.id, member.id, -(await economy.getCoins(guild.id, member.id)));return;}
if(cais >= 9 && cais <= 200){ await economy.addCoins(guild.id, member.id,laupijums);await economy.addCoins(guild.id, target.id,-laupijums);atbilde(`Zagšana`,zaglis,`Tu nozagi ${laupijums} Latu, viņam palika ${(Math.round((await economy.getCoins(guild.id, target.id)) * 100) / 100).toFixed(2)}`,message,'#83f985');return;}
if(cais >= 201 && cais <= 400){await economy.addCoins(guild.id, member.id,-zaudejums);await economy.addCoins(guild.id, target.id,zaudejums);atbilde(`Zagšana`,zaglis,`Tu pazaudēji ${zaudejums} Latu, tev palika ${(Math.round((await economy.getCoins(guild.id, member.id)) * 100) / 100).toFixed(2)}`,message,'#f98383');return;}
if(cais >= 401 && cais <= 1000){ atbilde('Zagšana',cietums,`Tevi noķēra viņa personīgā policija`,message,'#630909');message.channel.send(`.kakts <@${message.member.id}> 15 m`).then(msg=>msg.delete({timeout:"3"}));return;}
  },
}
