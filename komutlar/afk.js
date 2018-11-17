const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
 
  .setColor("RANDOM")
  .addField('Kullanıcı Artık Afk! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter("GERİ DÖNÜCEM!", " ")
  message.delete();
 

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Modundan Çıkmanı Sağlar.',
  usage: 'afk'
};
