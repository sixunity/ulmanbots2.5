const Discord = require('discord.js');
const bot = require('../bot.js')
const arajs1 = [`Nopietni, tev darīt nav ko? Kā tu uzdrošinies traucēt DižLatviešus ar saviem stulbajiem jokiem, Žēl ka es tevi izbanot nevaru jo esmu sūdīgi uztaisīts bots.`];
              const arajs2 = [`@everyone`];
              var beigparbaude1 = false;
              const client = new Discord.Client();
module.exports = {
	name: 'visikomand',
	description: 'Ping!',
	execute(msge, args) {
    for(var i = 0; i < arajs2.length; i++)
    {
      if (msge.content.includes(arajs2[i]))
      {
        beigparbaude1 = true;
      }
    }
    if (beigparbaude1 == true){//
      msge.reply(arajs1[Math.floor((Math.random() * arajs1.length) + 0)]);

      beigparbaude1 = false;
      return;
	}
}};
