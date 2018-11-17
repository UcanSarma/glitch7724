const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `= Bot İstatistikler =
• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   :: ${duration}
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}7
• Sunucular        :: ${client.guilds.size.toLocaleString()}3
• Kanallar         :: ${client.channels.size.toLocaleString()}5
• Discord.JS sürüm :: v${Discord.version}
• Ping             :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};