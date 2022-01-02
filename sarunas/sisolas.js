const {abzp, randoms} = require(`./atbilzhandleris.js`)
const arajs1 = [`Ļoti smieklīgi`,`Kāds mums te jokdaris atradies`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`];
              const divaina_ = [`Šīs`,`šīs`,`sis`,`Sis`,`šīm`,`Šīm`];
              const _zivs = [`Olas`,`olas`, `olām`,`Olām`];
        
module.exports = (client, Discord, message) => {
	
    
    if (abzp(message,divaina_,_zivs)){
      message.channel.send(randoms(arajs1));
    //  const divzivs = client.emojis.cache.find(emoji => emoji.name === "DivainaZivs");
	}
  return;
};
