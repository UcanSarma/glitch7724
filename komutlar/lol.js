const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "LOL Gamer");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **LOL Gamer rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lol',
  description: 'LOL GAMER ROLÜ VERİR',
  usage: 'lol'
};