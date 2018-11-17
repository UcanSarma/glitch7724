const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**JUR1ZZZ**")
        .setImage("https://cdn.discordapp.com/attachments/384418539190222848/496368297579773953/sa.jpg")
        .setThumbnail("https://im0-tub-tr.yandex.net/i?id=d161ba6d6fcf585323cef8230d5c0038&n=13")
        .setColor(0x00AE86)
        .addField("Lakabı", "Youtuber", true)
        .addField("Yetenekleri", `
        *Çok güzel CS:GO-PUBG ve Tresh oynar.
        *En büyük özelliği:Takımına bağlıdır. !!!
   `, true)
   .addField("Motto", `Benden kaçamazsın!`, true)
   .addField("selam", "Selamun Aleyküm ")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'jur1zzz', 
  description: 'JUR1ZZZ hakkında bilgi verir',
  usage: 'jur1zzz'
};