const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "419928037422006273";
	var channelID = "508032944460267521";
	
	if (!öneri){
		return message.reply("Oyundaki isminizi belirtin! Doğru kullanım: **nt!kayıt <oyundaki isminiz>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Turnuvaya Kayıt İşlemi!")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Oyundaki ismi", öneri)
			
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("** Kayıtınız yapılmıştır! İyi günler takipte kalın! **");

	};


};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["kayıt"], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt', 
  description: "Turnuvaya kayıt eder.", 
  usage: 'kayıt <Oyundaki ismi>' 
};