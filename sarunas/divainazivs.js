const {abzp} = require(`./atbilzhandleris.js`)
const {divainaszivsarray} = require('../config.json')
              const divaina_ = [`divaina`,`dīvaina`,`Divaina`,`Dīvaina`,`dīvainā`,`Dīvainā`,`divainas`,`Divainas`,`Dīvaino`,`dīvaino`];
              const _zivs = [`Zivs`,`zivs`,`zive`,`zoivs`,`Zive`,`Zoivs`,`zivi`,`Zivi`];
module.exports = (client, Discord, message) => {
    if (abzp(message,divaina_,_zivs)){
      message.channel.send(new Discord.MessageEmbed().setImage(divainaszivsarray[Math.floor((Math.random() * divainaszivsarray.length) + 0)])).then(msg=>msg.delete({timeout:"300000"}));
        message.channel.send(`<:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800><:DivainaZivs:858075717831884800>`).then(msg=>msg.delete({timeout:"300000"}));
	}
  return;
};
