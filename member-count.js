module.exports = (client) => {
  const channelId = '867779325825777744'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Dalībnieki => ${guild.memberCount.toLocaleString()}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('862363469218709544')
  updateMembers(guild)
}
