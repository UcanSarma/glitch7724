const snekfetch = require('snekfetch');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reports = message.guild.channels.find('name' , 'şikayetler');
        let reason =  args.slice(1).join(' ');

        if(!target) return message.channel.send('`Bir kullanıcı gir.`');
        if(!reason) return message.channel.send('`Bir sebep gir.`');
        if(!reports) return message.channel.send('`#şikayetler` isminde bir kanal yok.');

        let reportembed = new Discord.RichEmbed()
            .setThumbnail(target.user.avatarURL)
            .setAuthor('Şikayet', 'https://cdn.discordapp.com/emojis/465245981613621259.png?v=1')
            .addField('Sunucun Adı', message.guild.name)
            .addField('Eylem', 'Şikayet')
            .addField('Şikayet Edilen Kullanıcı', `${target.user.tag}\n(${target.user.id})`)
            .addField('Şikayet Eden', `${message.author.tag}\n(${message.author.id})`)
            .addField('Şikayet Sebebi:', `${reason}`)
            .addField('Şikayetin Olduğu Kanal', `${message.channel}`)
            .setFooter('Sohbet ve Eğlence', client.user.avatarURL)
            .setColor('36393F')
            .setTimestamp();
        reports.send(reportembed);

        message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${target.user.tag} isimli kullanıcı şikayet edildi. :white_check_mark:`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };
  
  exports.help = {
    name: 'şikayet',
  description: 'Herhanki konuda şikayette bulunursunuz.',
  usage: 'şikayet'
  };