const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "CS:GO Gamer");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **CS:GO Gamer rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'csgo',
  description: 'CSGO GAMER ROLÜ VERİR.',
  usage: 'csgo'
};