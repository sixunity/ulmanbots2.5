const {abzp, randoms} = require(`./atbilzhandleris.js`)
const arajs1 = [`Reiz`,`Raiz`,`reiz`,`REIZ`];
              const arajs2 = [`bija bunkurs trīspadsmit, Kur veči dzīvoja. Kad granātu tur iemeta, Tad sūdi pajuka.`];
              var beigparbaude1 = false;
              //bambālis
module.exports = (client, message) => {
    if (abzp(message,arajs2)){
      message.channel.send(randoms(arajs1));
      return;
	}

}
