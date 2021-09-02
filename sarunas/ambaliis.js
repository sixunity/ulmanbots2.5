const {abzp, randoms} = require(`./atbilzhandleris.js`)
const arajs1 = [`Moderātori <:Depresija:844857910160523274>`,`Ambālis komunists`,`1984`];
              const arajs2 = [`ambalis`,`Ambalis`,`ambālis`,`Ambālis`,`ambāls`];
              var beigparbaude1 = false;
              //bambālis
module.exports = (client, message) => {
    if (abzp(message,arajs2)){
      message.channel.send(randoms(arajs1));
      return;
	}

}
