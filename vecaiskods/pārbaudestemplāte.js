const Discord = require('discord.js');
const bot = require('../bot.js')
const arajs1 = [`test1`,`test2`];
              const arajs2 = [`test3`,`test4`];
              const arajs3 = [`test5`,`test6`];
              var beigparbaude1 = false;
              var beigparbaude2 = false;
              const client = new Discord.Client();
module.exports = {
	name: 'pārbaudestemplāte',
	description: 'Ping!',
	execute(msge, args) {
    for(var i = 0; i < arajs2.length; i++)
    {
      console.log(i);
      if (msge.content.includes(arajs2[i]))
      {
        beigparbaude1 = true;
        console.log(beigparbaude1);
      }
    }
    for(var i = 0; i < arajs3.length; i++)
    {
      console.log(i);
      if (msge.content.includes(arajs3[i]))
      {
        beigparbaude2 = true;
        console.log(beigparbaude2);
      }
    }
    if (beigparbaude1 == true && beigparbaude2 == true){
      msge.channel.send(new Discord.MessageEmbed().setImage(arajs1[Math.floor((Math.random() * divainaszivsarray.length) + 0)])).then(msg=>msg.delete({timeout:"300000"}));
    //  const divzivs = client.emojis.cache.find(emoji => emoji.name === "DivainaZivs");
        msge.channel.send(`<:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800>`).then(msg=>msg.delete({timeout:"300000"}));

      beigparbaude1 = false;
      beigparbaude2 = false;
	}
}};
