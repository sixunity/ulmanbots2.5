const redis = require('../redis')
const command = require('../command')

module.exports = (client) => {
  const redisKeyPrefix = 'aizsardziba-'

  redis.expire((message) => {
    if (message.startsWith(redisKeyPrefix)) {
      const split = message.split('-')

      const memberId = split[1]
      const guildId = split[2]

      const guild = client.guilds.cache.get(guildId)
      const member = guild.members.cache.get(memberId)

      const role = getRole(guild)

      member.roles.remove(role)
    }
  })

  const getRole = (guild) => {
    return guild.roles.cache.find((role) => role.name === 'Aizsargāts')
  }

  const giveRole = (member) => {
    const role = getRole(member.guild)
    if (role) {
      member.roles.add(role)
      console.log('aizvērts ' + member.id)
    }
  }

  const onJoin = async (member) => {
    const { id, guild } = member

    const redisClient = await redis()
    try {
      redisClient.get(`${redisKeyPrefix}${id}-${guild.id}`, (err, result) => {
        if (err) {
          console.error('Redis GET kluda:', err)
        } else if (result) {
          giveRole(member)
        } else {
          console.log('civēks netika atbrīvots')
        }
      })
    } finally {
      redisClient.quit()
    }
  }

  command(client, 'simjoin', (message) => {
    onJoin(message.member)
  })

  client.on('guildMemberAdd', (member) => {
    onJoin(member)
  })

  command(client, 'aizsardziba', async (message) => {
    // !mute @ duration duration_type

    const syntax = 'upsis dupsis ulmanis nepareizu komandu ievadīja'

    const { member, channel, content, mentions, guild } = message
    const role = guild.roles.cache.get("842856307097731093")
    const role1 = guild.roles.cache.get("797589274437353512")
  const role2 = guild.roles.cache.get("862419538331303937")


    /*if (!member.roles.cache.has(role.id) && !member.roles.cache.has(role1.id) && !member.roles.cache.has(role2.id)) {
      channel.send('Tev nav administratora atļauju idiot.')
      return
    }*/

    const split = content.trim().split(' ')

    if (split.length !== 4) {
      channel.send('Tu nopietni?' + syntax)
      return
    }

    const duration = split[2]
    const durationType = split[3]

    if (isNaN(duration)) {
      channel.send('Tu nezini kas ir skaitlis?' + syntax)
      return
    }

    const durations = {
      m: 60,
      h: 60 * 60,
      d: 60 * 60 * 24,
      mūžība: -1,
    }

    if (!durations[durationType]) {
      channel.send('Draugs tu rakstīt nemāki?' + syntax)
      return
    }

    const seconds = duration * durations[durationType]

    const target = mentions.users.first()

    if (!target) {
      channel.send('nē')
      return
    }

    const { id } = target

    console.log('ID:', id)

    const targetMember = guild.members.cache.get(id)
    giveRole(targetMember)
    channel.send(`${targetMember} Ieguva policijas aizsardzību`)

    const redisClient = await redis()
    try {
      const redisKey = `${redisKeyPrefix}${id}-${guild.id}`

      if (seconds > 0) {
        redisClient.set(redisKey, 'true', 'EX', seconds)
      } else {
        redisClient.set(redisKey, 'true')
      }
    } finally {
      redisClient.quit()
    }
  })
}
