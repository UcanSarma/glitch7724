const Discord = require('discord.js');
module.exports = member => {
    const channel = member.guild.channels.find('name', 'giriş-çıkış');
    if (!channel) return;
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
   .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
   .setTitle('Üye Giriş Yaptı;')
   .setDescription(`Sunucuya giriş yaptı [${member.guild.memberCount} üye]!`)
   .setFooter('NIGHT TIGERS')
   .setTimestamp()
   channel.send(embed);
};
