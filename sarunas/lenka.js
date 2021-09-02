const {abzp} = require(`./atbilzhandleris.js`)
const arajs1 = [`<@424817815397203969>`,`<@289805100141248512>`,`<@527924293934383105>`];
              const arajs2 = [`Lenka`,`lenka`,`ļenka`,`Ļenka`,`Leenka`];
           //   var beigparbaude1 = false;
module.exports = (client, msge) => {

    if (abzp(msge,arajs2)){
      msge.channel.send(randoms(arajs1))
    //  const divzivs = client.emojis.cache.find(emoji => emoji.name === "DivainaZivs");
	}
};
