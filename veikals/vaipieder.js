const redis = require('../redis.js')
//šī funkcija pārbauda vai kontam pieder kāda lieta
module.exports = async(lieta, member, guild,) => {
    const redisClient = await redis()
    redisClient.get(`${lieta}${member.id}-${guild.id}`, (err, result) => {
      if (err) {
        console.error('Redis GET kluda:', err)
      } else if (result) {
        return true
      } else {
      }
    })
    redisClient.quit()
  }
  