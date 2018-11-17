const Discord = require('discord.js');



exports.run = (client, message, params) => {

    if(message.author.id === "349590263154606090") {

        

        message.channel.send('🔢 **BOT için gerekli şeyler kuruluyor...**');

        

        message.guild.createChannel('log');

        message.guild.createChannel('ceza-takip-listesi');
        
        message.guild.createChannel('giriş-çıkış');

        message.channel.send('✅ **Herşey Kuruldu**');

        

    } else {

        message.channel.send('❌ **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');

    }

};


exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 3

};


exports.help = {

  name: 'kur',

  description: 'Bot için gerekli ayarları kurar.',

  usage: 'kur'

};