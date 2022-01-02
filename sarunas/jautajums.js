const {abzp, randoms} = require(`./atbilzhandleris.js`)
const ulmanarajs = ['Ulmani','ulmani','karli','Karli','kārli','Kārli']
const arajs1 = [`Jā.`,`Nē`,`Iespējams`,`Nezinu`,`Noteikti, ka jā`,`Noteikti, ka nē`,`Kā tad savādāk?`,`Kas tas par stulbu jautājumu?`];
              const arajs2 = [`?`];
module.exports = (client,msge) => {
  
    if (abzp(msge,ulmanarajs,arajs2)){
      msge.channel.send(randoms(arajs1));
      return
	}
};
