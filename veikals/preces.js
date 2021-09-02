const redis = require('../redis.js')
const client = require('../index.js')
//šī funkcijfa laikam pievieno kādu lietu klāt kontam
const redisKeyPrefix = 'default-'
module.exports = async(target, guild, prefikss, seconds) => {
const redisKeyPrefix = prefikss
    const { id } = target
    const targetMember = guild.members.cache.get(id)

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
    return
  }


