const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription(" **Zorkingg** ( **Burak** ) ")
        .setImage("https://cdn.discordapp.com/attachments/500633565302620181/500646022108676107/DSC_0856.JPG")
        .setThumbnail("https://cdn.discordapp.com/attachments/500633565302620181/500645868509331486/IMG_20180124_171436.jpg")
        .setColor(0x00AE86)
        .addField("Lakabı", " **Zorkingg** ", true)
        .addField("Yetenekleri", `
        * **Awp ve AK-47'de Mükemmel oynar.**
        * **Herkes onu sever çünkü mükemmel bir yayıncıdır.**
        * **Yarı yayıncı yarı profesyonel oyuncudur.** 
        `, true)
   .addField("Motto", `1v1 gel!`, true)
   .addField("Kanalı :https://www.twitch.tv/zorkingg ")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'zorkingg', 
  description: 'Zorkingg hakkında bilgi verir',
  usage: 'zorkingg'
};