const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("https://merttaspinar31.wixsite.com/esnavvige");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['internetsitesi'],
  permLevel: 0 
};

exports.help = {
  name: 'internetsitesi', 
  description: 'Botun internet sitesini gösterir.',
  usage: 'internetsitesi'
};