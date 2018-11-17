const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "419928037422006273";
	var channelID = "506832966068994049";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **nt!modolmakistiyorum <becerileri>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Moderatörlük Başvurusu!")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Becerileri", öneri)
			
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("** Başvurunuz onaylanmıştır! İyi günler takipte kalın! **");

	};


};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["modolmakistiyorum"], 
  permLevel: 0 
};

exports.help = {
  name: 'modolmakistiyorum', 
  description: "Moderatör başvurularını alır.", 
  usage: 'modolmakistiyorum <beceriler>' 
};