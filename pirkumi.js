const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

const pirktsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addCoins = async (guildId, userId, pirkts) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOneAndUpdate()')

      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            pirkts,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      console.log('RESULT:', result)

      pirktsCache[`${guildId}-${userId}`] = result.pirkts

      return result.pirkts
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getPreces = async (guildId, userId) => {
  const cachedValue = pirktsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOne()')

      const result = await profileSchema.findOne({
        guildId,
        userId,
      })

      console.log('RESULT:', result)

      let pirkts = ""
      if (result) {
        pirkts = result.pirkts
      } else {
        console.log('Inserting a document')
        await new profileSchema({
          guildId,
          userId,
          pirkts,
        }).save()
      }

      pirktsCache[`${guildId}-${userId}`] = pirkts

      return pirkts
    } finally {
      mongoose.connection.close()
    }
  })
}
