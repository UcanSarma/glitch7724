const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "PUBG Gamer");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **PUBG GAMER rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pubg',
  description: 'PUBG rolü verir',
  usage: 'pubg'
};