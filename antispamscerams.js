//const Discord = require('discord.js');
//const bot = require('../bot.js')

const usersMap = new Map();
const atkartot = new Map();
const LIMIT = 10;
const DIFF = 90000;
var tikkoielikts = false;
//const client = new Discord.Client();
module.exports = (client) => {
	client.on('message', (message) => {

    if(message.author.bot) return;

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
				const spamStreak = atkartot.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, 50000);
						spamStreak.timer = setTimeout(() => {
                spamStreak.delete(message.author.id);
                console.log('Removed from map.')
            }, 60000);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {

               if (spamsentreply == false)
               {
								 if (!spamStreak){
									 message.reply('Spamotāj ej dirst <:Trola_seja:797826157226491965>')
									 atkartot.set(message.author.id, 1)
									 tikkoielikts = true
									 let fn = setTimeout(() => {
					             tikkoielikts = false
					         }, 4000);
									 message.channel.send(`.kakts <@${message.member.id}> 1 m`).then(msg=>msg.delete({timeout:"3"}))
								 }
								 if (atkartot.get(message.author.id)==1 && tikkoielikts==false){
									 message.reply('Otrais brīdinājums dauni <:Nuja:843402339581952010>')
									 tikkoielikts = true
									 let fn = setTimeout(() => {
					             tikkoielikts = false
					         }, 4000);

									 atkartot.set(message.author.id, 2 && tikkoielikts==false)
									 message.channel.send(`.kakts <@${message.member.id}> 10 m`).then(msg=>msg.delete({timeout:"3"}))
								 }
								 if (atkartot.get(message.author.id)==2  && tikkoielikts==false){
									 message.reply('Pats vainīgs <:Izbrinits:843106796083871744>')
									 tikkoielikts = true
									 let fn = setTimeout(() => {
					             tikkoielikts = false
					         }, 5000);

									 atkartot.delete(message.author.id);
									message.channel.send(`.kakts <@${message.member.id}> 2 h`).then(msg=>msg.delete({timeout:"3"}))
								}

							 spamsentreply = true;
             }
              //message.channel.bulkDelete(LIMIT+4);

            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, 30000);
        spamsentreply = false;
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})};
