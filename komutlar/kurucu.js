const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
    .setThumbnail(" ")
    .setColor(0x00AE86)
        .setDescription("** © NIGHT TIGERS™; **")
        .addField("**© NIGHT TIGERS™ |Kurucusu ve Yapımcısı @[ENİS]#6055**",`**--Ekip**`, true)
        .addField("**© NIGHT TIGERS™ |Yapımcı ve Ceo @Gökhan ''ReyGrake'' Görgün#2368 **", `::::::::::`, true)
        .addField("**© NIGHT TIGERS™ |Yapımcı @f.aksuu16#7804**" , `Takipte kalın!`, true)
   
        message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kurucu', 
  description: 'Kurucum hakkında bilgi verir',
  usage: 'kurucu'
};