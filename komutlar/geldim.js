const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
 
  .setColor("RANDOM")
  .addField('Şu Kullanıcı Artık Afk Değil! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter("Geri Döndüm!", " ")
  message.delete();
 

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan Çıkmanı Sağlar.',
  usage: 'geldim'
};