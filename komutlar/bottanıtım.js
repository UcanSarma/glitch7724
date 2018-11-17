const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**NIGHT TIGERS BOT**")
        .setImage("https://cdn.discordapp.com/attachments/459252203157323776/509002123887902732/IMG-20181105-WA0002.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/459252203157323776/509002123887902730/IMG-20181105-WA0001.jpg")
        .setColor(0x00AE86)
        .addField("Hizmet Verdiklerimi", "13000 e yakın Kullanıcı ,163 Sunucu", true)
        .addField("SİZİN İÇİN ", `
        *© NIGHT TIGERS™
   *Size Hizmet Vermeye Hazır.
   `, true)
   .addField("Prefix", `nt!`, true)
   .addField("YAPIMCI", "[ENİS]#6055")
   .addField("Website", "Yapım Aşamasında")
   .addField("Mottomuz", "Daha Kolay VE Eğlenceli Bir Hayat!")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['bottanıt'],
  permLevel: 0 
};

exports.help = {
  name: 'NIGHTTIGERS', 
  description: 'Botun Tanıtım Kartını Gönderir',
  usage: 'NIGHTTIGERS'
};