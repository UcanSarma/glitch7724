const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yenile', 
  description: 'Botu yeniden başlatır',
  usage: 'yenile'
};