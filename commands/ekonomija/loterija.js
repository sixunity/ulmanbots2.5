const economy = require('../../ekonomija')
const {atbilde} = require('../../sarunas/atbilzhandleris.js')
const {loterija1000, lasis, tukssmaks} = require('../../bildes.json')
function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
module.exports = {
  commands: ['loterija','latloto'],
  cooldown: 0,
  formats: "sekunžu",
  minArgs: 1,
  maxArgs: 1,
  cooldown: 1*60,
  formats: "minūšu",
  expectedArgs: "<Cik naudas gribi iztērēt?>",
  callback: async (message, arguments) => {
    const { member, channel, content, mentions, guild } = message    
    const lol = await economy.getCoins(guild.id, member.id)
    if (arguments[0]<70){
      atbilde('LatLoto',tukssmaks,'Lētākā loterijas biļete maksā 100 Latus', message,'#0c4bf4')
      return
    }
   if (lol < arguments[0]){
atbilde('LatLoto',tukssmaks, 'Tev nepietiek naudas ubag.', message,'#0c4bf4')
return
   } 
   await economy.addCoins(guild.id, member.id,  -70)
const casee = between(1,200)
const mazaislaimests = between(10,99)
const lielaislaimests = arguments[0]*10
if(casee >= 1 && casee <= 49){atbilde("LatLoto",lasis, `Tu vinnēji ${mazaislaimests} Latus`, message,'#01a335');await economy.addCoins(guild.id, member.id, mazaislaimests);return}
if(casee >= 50 && casee <= 170){atbilde('LatLoto',tukssmaks, 'Tu neko nevinnēji', message,'#0c4bf4');return;}
if(casee >= 171 && casee <= 198){ atbilde("LatLoto",tukssmaks, 'Tu nemanot nospēlēji visu savu naudu', message,'#0c4bf4');await economy.addCoins(guild.id, member.id, (await economy.getCoins(guild.id, member.id)));await economy.addCoins(guild.id, member.id, -(await economy.getCoins(guild.id, member.id)));return;}
if(casee >= 199 && casee <= 200){atbilde('LatLoto',loterija1000, `Tu ieguvi lielo laimestu, ${lielaislaimests} Latu`, message,'#00ff51');await economy.addCoins(guild.id, member.id, lielaislaimests);return}   
  },
}
