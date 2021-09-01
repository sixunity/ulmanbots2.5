const Discord = require('discord.js');
const bot = require('../bot.js')
const arajs1 = [`Es esmu dzimis 1877. gada 4. septembrī.`,`Es biju Latvijas labākais prezidents`];
              const arajs2 = [`faktu`,`faktus`,`Faktu`,`Faktus`];
              //const arajs3 = [`test5`,`test6`];
              var beigparbaude1 = false;
              //var beigparbaude2 = false;
              const client = new Discord.Client();
module.exports = {
	name: 'faktiu',
	description: 'Ping!',
	execute(msge, args) {
    for(var i = 0; i < arajs2.length; i++)
    {
      if (msge.content.includes(arajs2[i]))
      {
        beigparbaude1 = true;
      }
    }

    if (beigparbaude1 == true){
      msge.channel.send(arajs1[Math.floor((Math.random() * arajs1.length) + 0)]);
    //  const divzivs = client.emojis.cache.find(emoji => emoji.name === "DivainaZivs");
        //msge.channel.send(`<:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800>`).then(msg=>msg.delete({timeout:"300000"}));

      beigparbaude1 = false;
    //  beigparbaude2 = false;
	}
}};
