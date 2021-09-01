const economy = require('../../ekonomija')
const Discord = require('discord.js')
const {ulmanversija} = require('../../config.json')
const logo = 'https://thumbs.dreamstime.com/z/paying-2121321.jpg'

module.exports = {
  commands: ['izkaktot'],
  minArgs: 1,
  maxArgs: 1,
  cooldown: 10,
  formats: "sekunžu",
  expectedArgs: "<Ko vēlies izvilkt no kakta?>",
  callback: async (message, arguments, text) => {
    const { member, channel, content, mentions, guild } = message


    const role = guild.roles.cache.get("842856307097731093")
    const role1 = guild.roles.cache.get("797589274437353512")
  const role2 = guild.roles.cache.get("862419538331303937")
  const rolezilitis = guild.roles.cache.get("798149915057717269")


    if (!member.roles.cache.has(role.id) && !member.roles.cache.has(role1.id) && !member.roles.cache.has(role2.id)) {
      message.reply('Tev nav administratora atļauju idiot.')
      return
    }
    if (!message.mentions.users.first()){
      message.reply('Tev vajag ierakstīt cilvēku')
      return
    }
    const getRole = member.roles.cache.has(rolezilitis.id)
    let id = ''
    const target = message.mentions.users.first()

    const target2 = guild.members.cache.get(target.id).roles.cache.has(rolezilitis.id)
if(target2){
    const guildmember = guild.members.cache.get(target.id)
    guildmember.roles.remove(rolezilitis.id)
    message.reply('Viņš tika izkaktots')
  } else {
    message.reply('Viņš nav kaktā.')
  }




}}
