const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Reygrake**")
        .setImage("https://cdn.discordapp.com/attachments/459252203157323776/496792752512696336/InShot_20180905_213028724.jpg")
        .setThumbnail("https://im0-tub-tr.yandex.net/i?id=2b4c5b66370392955a07c2d6ca33cb94&n=13")
        .setColor(0x00AE86)
        .addField("Lakabı", "The Gamer (Oyuncu)", true)
        .addField("Yetenekleri", `
        *E-Spor Oyuncusudur.
        *Çok güzel CS:GO oynar.
        *En büyük özelliği:Acıma duygusu yoktur !!!
   `, true)
   .addField("Motto", `That's nice headshot, eh? (güzel kafadan vuruş, ha?)`, true)
   .addField("selam", "Selamun Aleyküm ")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'reygrake', 
  description: 'Reygrake hakkında bilgi verir',
  usage: 'reygrake'
};