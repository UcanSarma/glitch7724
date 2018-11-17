const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"YAZI-TURA:__TURA__**",
	"YAZI-TURA:__YAZI__**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "YAZI-TURA:__YAZI__**") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("http://iyilikagaci.org/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_XL.jpg")
		message.channel.send(embedyazı);
		
	} else if (cevap === "YAZI-TURA:__TURA__**") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://www.coinsbook.net/images/coins/844/1706.jpg")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};