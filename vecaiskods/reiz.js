const Discord = require('discord.js');
const bot = require('../bot.js')
const arajs1 = [`bija bunkurs trīspadsmit, Kur veči dzīvoja. Kad granātu tur iemeta, Tad sūdi pajuka.`];
              const arajs2 = [`Reiz`,`reiz`];
              var beigparbaude1 = false;
              const client = new Discord.Client();
module.exports = {
	name: 'raiz',
	description: 'Ping!',
	execute(msge, args) {
    for(var i = 0; i < arajs2.length; i++)
    {
      if (msge.content == arajs2[i])
      {
        beigparbaude1 = true;
      }
    }
    if (beigparbaude1 == true){
      msge.channel.send(arajs1[Math.floor((Math.random() * arajs1.length) + 0)]);

      beigparbaude1 = false;
      return;
	}
}};
