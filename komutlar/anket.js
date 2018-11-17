const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) {
		message.channel.send('geçersiz izinler.');
		return;
	}

    // Check for input
    if (!args[0]) return message.channel.send('Doğru kullanım : //anket <soru>');

    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") 
        .setFooter('Oy verebilirsin.')
        .setDescription(args.join(' '))
        .setTitle(`Anket ${message.author.username} tarafından oluşturuldu`);

    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'anket', 
  description: 'Bir anket oluşturur.',
  usage: 'anket <konu>'
};