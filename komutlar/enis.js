const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Enis (Kurucu)**")
        .setImage("https://cdn.discordapp.com/attachments/451785301992538113/498529133010092032/Picture_20180926_173739651.jpg")
        .setThumbnail("")
        .setColor(0x00AE86)
        .addField("Lakabı", "Düzenleyici", true)
        .addField("Yetenekleri", `
        *Awp ve AK-47'de Mükemmel oynar
        *Herkes onu sever çünkü ... 
        ***NIGHT TIGERS** Botunun tek sahibidir!  
        `, true)
   .addField("Motto", `Bana karışmak istemezsin!`, true)
   .addField("Selamı", "**Selamlar**")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'enis', 
  description: 'Enis hakkında bilgi verir',
  usage: 'enis'
};