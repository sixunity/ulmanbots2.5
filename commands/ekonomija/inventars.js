const redis = require('../../redis.js')
const economy = require('../../ekonomija')
const tests = ['aizsardziba-','juridiskapersona-']
const {atbilde} = require(`../../sarunas/atbilzhandleris.js`)
const {korupcijalogo} = require('../../bildes.json')
const vaipieder = require('../../veikals/vaipieder.js')
const Discord = require('discord.js')
let inventaars = 'Tavā inventārā ir '


module.exports = {
  commands: ['inventārs','e',`inventars`],
  callback: async (message, arguments) => {
    
/*
const { member, channel, content, mentions, guild } = message
//šite kautkāds lielais smieklīgais notiek
for(const test of tests)
    { 
      if (vaipieder(test, member, guild)){
        inventaars += test
        message.reply(`${test} : ${vaipieder(test, member, guild)}`)
      }
     


}
atbilde('Inventārs',korupcijalogo,`${inventaars}`, message,'#00000')*/

}
}
