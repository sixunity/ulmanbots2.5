module.exports = {
    commands: ['aptauja','vai'],
    cooldown: 2*60,
    formats: "minūšu",
    callback: (message, arguments, text) => {
        message.react('👍')

        setTimeout(() => {
          message.react('👎')
        }, 750)
      
    },
  }
  