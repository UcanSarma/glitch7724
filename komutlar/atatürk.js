const Discord = require('discord.js');

const cevaplar = [
    ":heart: https://im0-tub-tr.yandex.net/i?id=8d91c01a1e67e7cb538f39de4f69681e&n=13 :heart:",
    ":heart: https://www.tuvall.com/upload/images/006315/006315.jpg :heart:",
    ":heart: https://cdn.bolgegundem.com/d/gallery/679_41.jpg :heart:",
    ":heart: http://www.transanatolie.com/ic/images/Ataturk/ataturk_041.jpg :heart:",
    ":heart: https://isteataturk.com/gorseller/thumb/1511697733_ataturk.jpg :heart:",
    ":heart: http://www.kisa-ozet.org/wp-content/uploads/2013/08/Atatürk-Ün-Fotoğraf-Albümü-26.jpg :heart:",
    ":heart: http://tablobudur.com/upload/images/tbl2034/tbl2034.jpg :heart:",
    ":heart: https://i.pinimg.com/736x/a6/1d/f3/a61df3ec0a6efe5011aa955319e725c1--celebrity-history.jpg :heart:",
    ":heart: https://iasbh.tmgrup.com.tr/5954a6/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/turkiye/ataturkun-yeni-fotograflari/5.jpg :heart:",
    ":heart: https://i.pinimg.com/736x/bc/82/ca/bc82caa86b6fff78aa22c2b44f984609--hayao-miyazaki-posts.jpg :heart:",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('1 den ∞ a kadar sayı yazabilirsin!:)')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'atatürk', 
  description: 'Mustafa Kemal Atatürkün rastgele bir fotoğrafını gösterir',
  usage: 'Atatürk <1-∞>'
};