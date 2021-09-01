const {ulmanversija} = require('../config.json')
const Discord = require('discord.js')
module.exports.abzp = (message,a1,a2) => {
  var a1true = false
  var a2true = false
  if (typeof a2 === 'undefined'){
    a2 = ''
    a2true = true
  }
    if (message.author.bot)
    {
      return
    }    
    for(var i = 0; i < a1.length; i++)
    {
      if (message.content.toLowerCase().includes(a1[i]))
      {
        a1true = true;
      }   
    }
    for(var i = 0; i < a2.length; i++)
    {
      if (message.content.toLowerCase().includes(a2[i]))
      {
        a2true = true;
      } 
    }
    if (a1true == true && a2true == true){
      a1true = false
      a2true = false
      return true
	}  
}

function dzest(msg){
  if (msg.channel.id == '867284532906426368' || msg.channel.id == '869164189619474453'){
    return
  } else {
  return msg.delete({timeout:"30000"})
}
}

module.exports.atbilde = (title,logo, teksts, message,color) => {
  return message.reply(new Discord.MessageEmbed()
 .setTitle(title)
 .setThumbnail(logo)
 .setDescription(teksts)
 .setFooter(ulmanversija)
 .setColor(color)).then(msg=>dzest(msg))
 }


 module.exports.randoms = (arajs1) => {
  return arajs1[Math.floor((Math.random() * arajs1.length) + 0)]

 }
 module.exports.getRole = (guild,rolename) => {
  return guild.roles.cache.find((role) => role.name == rolename)
  
}

module.exports.vaipieder = (lieta, member, guild,) => {
  redisClient.get(`${lieta}${member.id}-${guild.id}`, (err, result) => {
    if (err) {
      console.error('Redis GET kluda:', err)
    } else if (result) {
      return result
    } else {
      console.log('civēks netika atbrīvots')
    }
  })
}

