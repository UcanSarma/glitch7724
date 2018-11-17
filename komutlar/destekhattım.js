const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("https://discord.gg/JCJRwVA");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['destekhattım'],
  permLevel: 0 
};

exports.help = {
  name: 'destekhattım', 
  description: 'Botun destek hattını gösterir.',
  usage: 'destekhattım'
};