const Discord = require('discord.js');


exports.run = function(client, message) {

 
  message.author.send(":heart: Bizi Tercih Ettiğiniz İçin Teşekkürler :heart:https://discordapp.com/oauth2/authorize?client_id=492613026235809802&scope=bot&permissions=2146958591 :heart:");
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet linkimi özelden attım. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) };

  };

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['davetlinkim'],
  permLevel: 0 
};

exports.help = {
  name: 'davetlinkim', 
  description: 'Botun davet linkini gösterir.',
  usage: 'davetlinkim'
};