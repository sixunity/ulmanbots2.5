const {abzp} = require(`./atbilzhandleris.js`)
const divainaszivsarray = [`Ļoti smieklīgi`,`Kāds mums te jokdaris atradies`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`,`Eu paskaties <@594176832023298048>`];
              const divaina_ = [`Šīs`,`šīs`,`sis`,`Sis`,`šīm`,`Šīm`];
              const _zivs = [`Olas`,`olas`, `olām`,`Olām`];
        
module.exports = (client, Discord, message) => {
	
    
    if (abzp(message,divaina_,_zivs)){
      message.channel.send(divainaszivsarray[Math.floor((Math.random() * divainaszivsarray.length) + 0)]);
    //  const divzivs = client.emojis.cache.find(emoji => emoji.name === "DivainaZivs");
	}
  return;
};
