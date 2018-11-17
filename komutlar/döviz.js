const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  var request = require('request');
  request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
      var info = JSON.parse(body);
      request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
        if (error) return console.log('Hata:', error);
        else if (!error) {
          var euro = JSON.parse(body);
          const mesaj = new Discord.RichEmbed()
            .setDescription(`Dolar Satış: **${info.selling}**\nDolar Alış: **${info.buying}**\n\nEuro Satış: **${euro.selling}TL**\nEuro Alış: **${euro.buying}TL**`)
            .setColor('RANDOM')
            .setTitle('Anlık Döviz Kurları')
          message.channel.send(mesaj);
        }
      })
    }
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'döviz',
  description: 'Anlık Döviz Kurlarını Gösterir',
  usage: 'döviz'
};