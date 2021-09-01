const {abzp, randoms} = require(`./atbilzhandleris.js`)
const arajs1 = [`martinsonas lenkas`,`martinsons nodokļus nemaksā <:Trola_seja:797826157226491965>`,`<@517429149543956480>`,`Lenkinsonas`];
              const arajs2 = [`martinsons`,`Martinsonas`,`Martinsons`,`martinsonas`,`Lenkinson`,`lenkinson`];
module.exports = (client, message) => {    
    if (abzp(message,arajs2)){
    message.channel.send(randoms(arajs1));

      return
	}
};
