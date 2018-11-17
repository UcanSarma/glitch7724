const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
    .setThumbnail(" ")
    .setColor(0x00AE86)
    .setDescription("** İşte Logimeck'in kanalı ; **")  
    .addField("https://www.twitch.tv/logimeck", `Takip etmeyi unutmayın.`, true)
   
   
        message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'logimeck', 
  description: 'Logimeckin kanalını gösterir.',
  usage: 'logimeck'
};