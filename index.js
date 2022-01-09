const EventEmitter = require('events');
const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')

const client = new Discord.Client({intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES, ] })
const ambalis = require('./sarunas/ambaliis.js')
const antispams = require('./antispamscerams.js')
const divainazivs = require('./sarunas/divainazivs.js')
const jautajums = require('./sarunas/jautajums.js')
const lenka = require('./sarunas/lenka.js')
const krilika = require('./sarunas/krilika.js')
const martinsons = require('./sarunas/martinsons.js')
const reiz = require('./sarunas/reiz.js')
const jurid = require('./veikals/juridiskapersona.js')
const aizs = require('./veikals/aizsardziba.js')
const mute = require('./mute.js')
const sisolas = require(`./sarunas/sisolas.js`)
//const memberCount = require(`./member-count.js`)


const poll = require(`./poll.js`)
const mainone = "898550678417457163"

const config = require('./config.json')

client.on('ready', async () => {
  let defaultChannel = "898550678417457163";

  client.channels.cache.get(mainone).send("!d bump") //send it to whatever channel the bot has permissions to send on

  console.log('The client is ready!')
//šitas te sūds atrod visas pieejamās komandas "commands mapē"
  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }
  
  
  mute(client)
  jurid(client)
  aizs(client)
  poll(client)
//memberCount(client)
  antispams(client)
  client.user.setActivity("Iznīcini Okupantus IV", {
  type: "PLAYING",
});

  readCommands('commands')
})
client.on('message', message => {
  if (message.author.bot) return
  jautajums(client,message)
  reiz(client, message)
  divainazivs(client, Discord, message)
  sisolas(client, Discord, message)

krilika(client, message)
martinsons(client, message)

ambalis(client, message)
lenka(client, message)



})


//šis ir svētais kods kas sadala cilvēkus dauņos, un draudziņos
client.on('guildMemberAdd', member => {
  const trols = client.emojis.cache.find(emoji => emoji.name === "Trola_seja");
  const jaaa = client.emojis.cache.find(emoji => emoji.name === "Ja");
  var ulmanloma = Math.round(Math.random());
  switch (ulmanloma){
    case 0: var role = member.guild.roles.cache.find(role => role.name == "dauņi")
    member.roles.add(role);client.channels.cache.get(mainone).send(`Mums ir jauns daunis - @${member.user.tag} ${trols}`);break;
    case 1: var role = member.guild.roles.cache.find(role => role.name == "draudziņi")
    member.roles.add(role);client.channels.cache.get(mainone).send(`Mums ir jauns draudziņš - @${member.user.tag} ${jaaa}`);break;
  }
})

client.guilds.cache.forEach((guild) => { //for each guild the bot is in
  let defaultChannel = "898550678417457163";
  guild.channels.cache.forEach((channel) => {
        if(channel.type == "text" && defaultChannel == "898550678417457163") {
        if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
            defaultChannel = channel;
          }
        }
  })
  setInterval (function () {
    client.channels.cache.get(mainone).send("!d bump") //send it to whatever channel the bot has permissions to send on
  }, 7200000);})







client.login(process.env.TOKEN)

