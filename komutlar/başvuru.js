const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "500648555476680704";
	var channelID = "505469024323239951";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **nt!başvuru <becerileri>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Ekibe katılma başvurusu!")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Becerileri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("** Başvurunuz onaylanmıştır! Yapımcılarımız tarafından değerlendirilecektir. İyi günler takipte kalın! **");
	};


};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["başvuru"], 
  permLevel: 0 
};

exports.help = {
  name: 'başvuru', 
  description: "Ekibe katılma başvurularını alır.", 
  usage: 'başvuru <beceriler>' 
};