const {abzp} = require(`./atbilzhandleris.js`)
const arajs1 = [`aizveries okupant`,`Nerunā ar mani okupant`,`okupant turi muti ciet`];
              const arajs2 = [`А`,`а`,`Б`,`б`,`В`,`в`,`Г`,`г`,`Д`,`д`,`Е`,`е`,`Ё`,`ё`,`Ж`,`ж`,`З`,`з`,`И`,`и`,`Й`,`й`,`К`,`к`,`Л`,`л`,`М`,`м`,`Н`,`н`,`О`,`о`,`П`,`п`,`Р`,`р`,`С`,`с`,`Т`,`т`,`У`,`у`,`Ф`,`ф`,`Х`,`х`,`Ц`,`ц`,`Ч`,`ч`,`Ш`,`ш`,`Щ`,`щ`,`Ъ`,`ъ`,`Ы`,`ы`,`Ь`,`ь`,`Э`,`э`,`Ю`,`ю`,`Я`,`я`];
module.exports = (client, message) => {



    if (abzp(message,arajs2)){
      message.channel.send(randoms(arajs1));
      message.channel.send(`.kakts <@${message.member.id}> 1 m`).then(msg=>msg.delete({timeout:"3"}))
      //const divzivs = client.emojis.cache.find(emoji => emoji.name === "");


      
      return;

	}
};
