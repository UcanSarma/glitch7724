const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "ÜYE");
  var rol = message.guild.roles.find(rol => rol.name === "ÜYE");
  message.member.removeRole(rol);
  message.member.addRole(role);
  message.channel.send('Kayıt Oldunuz');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-ol',
  description: 'sdas.',
  usage: 'kayıt-ol'
};