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
    

const { member, channel, content, mentions, guild } = message
//šite kautkāds lielais smieklīgais notiek
const redisClient = await redis()

for(const test of tests)
    {
    redisClient.get(`${test}${member.id}-${guild.id}`, (err, result) => {
      if (err) {
        console.error('Redis GET kluda:', err)
      } else if (result) {
        message.reply(`${test}: ${result}`)
      } else {
      }
    })
    redisClient.quit()
  }
  
      
     

  atbilde('Inventārs bļāviens ejat dirst inventārs nestrādā pašlaik',korupcijalogo,`${inventaars}`, message,'#00000')

}

}

