const {ulmanversija} = require('../config.json')
const Discord = require('discord.js')
module.exports = {
  commands: ['help', 'palidziba','palīdzība'],
  expectedArgs: '<lapas.nr>',
  minArgs: 0,
  maxArgs: 1,
  callback: (message, arguments, text, client) => {
    const lapa = arguments[0]
    const logo = ("https://lv.wikipedia.org/wiki/Att%C4%93ls:Coat_of_arms_of_Latvia.svg")




    message.reply(new Discord.MessageEmbed()
.setTitle('Palīdzība')
//.setAuthor(message.author.tag)
//.setImage(logo)
//.setThumbnail(logo)
.setFooter(ulmanversija)
.setColor('#00sAAFF')
.addFields({
  name: '**.help**',
  value: 'Parāda pieejamās komandas'
},
{
  name: '**.zagt [Servera dalībnieks]**',
  value: 'Apzagt kādu'
},
{
  name: '**.maks**',
  value: 'paskatīties makā'
},
{
  name: '**.maksāt**',
  value: 'maksāt kādam'
},
{
  name: '**.kakts**',
  value: 'Ielikt kādu kaktā (moderātoriem)'
},
{
  name: '**.izslegtulmani**',
  value: 'izslēgt pašdari (moderātoriem)'
},
{
  name: '**.pirkt**',
  value: 'Atvērt padomju laiku veikalu kurā atrodas tikai viena lieta'
},
{
  name: '**.ubagot**',
  value: 'ubagot'
},
{
  name: '**.pievnaud**',
  value: 'Pievienot naudu (moderātoriem)'
},
{
  name: '**.pabalsts**',
  value: 'Pabalsts dižlatviešiem un servera atbalstītājiem'
},
{
  name: '**.vai [Jautājums]**',
  value: 'Aptauja'
},
{
  name: '**.seks [Servera dalībnieks]**',
  value: 'Noseggso kādu servera dalībnieku, bet pazaudē daļu no savas naudas'
},
{
  name: '**.zvejot**',
  value: 'Zvejošana dīvainajām zivīm'
},
)
  )
  },
}
