const redis = require('redis')
const redisPath = "//redis-16810.c282.east-us-mz.azure.cloud.redislabs.com:16810?password=GFBveZpqfv0RmsHK0l5Rc9L35RPNuZYQ"
module.exports = async () => {
  return await new Promise((resolve, reject) => {
    const client = redis.createClient({
      url: redisPath,
    })

    client.on('error', (err) => {
      console.error('Redis error:', err)
      client.quit()
      reject(err)
    })

    client.on('ready', () => {
      resolve(client)
    })
  })
}

module.exports.expire = (callback) => {
  const expired = () => {
    const sub = redis.createClient({ url: redisPath })
    sub.subscribe('__keyevent@0__:expired', () => {
      sub.on('message', (channel, message) => {
        callback(message)
      })
    })
  }

  const pub = redis.createClient({ url: redisPath })
  pub.send_command('config', ['set', 'notify-keyspace-events', 'Ex'], expired())
}
