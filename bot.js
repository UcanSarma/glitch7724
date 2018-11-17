const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const { GOOGLE_API_KEY } = require('./anahtarlar.json');
const YouTube = require('simple-youtube-api');
const queue = new Map();  
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require('ytdl-core');
const Jimp = require('jimp');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};

client.on("message", message => {
  const dmchannel = client.channels.find("name", "dm-log");
  if (message.channel.type === "dm") {
      if (message.author.bot) return;
      dmchannel.sendMessage("", {embed: {
          color: 3447003,
          title: `Gönderen: ${message.author.tag}`,
          description: `Bota Özelden Gönderilen DM: ${message.content}`
      }})
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Üzgünüz.", "Stattrak AWP | Asiimov", "Karambit | Doopler 🗡", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade 🗡", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi 🗡", "Hatıra Faction Bicaği 🗡"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Sana **${sonuc}** Çikti`)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nt!sunucular') {
        setTimeout(() => {
    }, 1000);//NIGHT TIGERS
    msg.react(':wink:')
    msg.react(':wink: ')
            setTimeout(() => {
    }, 1500);
    msg.channel.send(`Ben şu an **${client.guilds.size}3** sunucuda **${client.users.size}7** kullanıcı ile sana hizmet veriyorum **NIGHT TIGERS BOT** Beni sunucuna eklermisin!`)   

  }
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });


client.on("message", msg => {
  const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
  if (kufur.some(word => msg.content.includes(word))) {
    try {
       if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();

            return msg.reply('Küfür etmemelisin! ⚠').then(msg => msg.delete(3000));
       }              
    } catch(err) {
      console.log(err);
    }
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
		if (!msg.guild.member(msg.author).hasPermission(member)) {
      msg.channel.sendMessage(member + 'Hoşgeldin  : smiley : '); 
    } else {
	
    }
	}
});

client.on("message", async message => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  if(sayac[message.guild.id]) {
      if(sayac[message.guild.id].sayi <= message.guild.members.size) {
          const embed = new Discord.RichEmbed()
              .setDescription(`Tebrikler ${message.guild.name}! Başarıyla ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! Sayaç sıfırlandı!`)
              .setColor('#ac85ff')
              .setTimestamp()
          message.channel.send({embed})
          delete sayac[message.guild.id].sayi;
          delete sayac[message.guild.id];
          fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
              console.log(err)
          })
      }
  }
})

client.on("guildMemberAdd", member => {
  let otorol = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/otorol.json", "utf8"));

  var role = otorol[member.guild.id].role;
const rol = member.guild.roles.find('name', role);
  if (!rol)
  member.addRole(role);
});

client.on('message', async msg => {

	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'çal') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
    .setDescription(' ** :mega:  İlk olarak sesli bir kanala giriş yapmanız gerek.** '));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(' ** :mega: İlk olarak sesli bir kanala giriş yapmanız gerek. **'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(' ** Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.  **'));
        }

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			 return msg.channel.sendEmbed(new Discord.RichEmbed)
      .setTitle(`**✅ | Oynatma Listesi: **${playlist.title}** Kuyruğa Eklendi!**`)
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          
				 msg.channel.sendEmbed(new Discord.RichEmbed()                  
         .setTitle('NIGHT TIGERS| Şarkı Seçimi')
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('**1 veya 10 Arasında Şarkı Seç**')
         .setColor('0x36393E'));
          msg.delete(5000)
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('0x36393E')
            .setDescription('**Şarkı Değeri Belirtmediğiniz İçin Seçim İptal Edilmiştir**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('0x36393E')
          .setDescription('**Aradım Fakat Hiç Bir Sonuç Çıkmadı**'));
                }
            }
			return handleVideo(video, msg, voiceChannel);
      
		}
	} else if (command === 'geç') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' <**Lütfen öncelikle sesli bir kanala katılınız**.'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('**Hiç Bir Müzik Çalmamakta**'));                                              
		serverQueue.connection.dispatcher.end('**Müziği Geçtim!**');
		return undefined;
	} else if (command === 'durdur') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('**Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('** Hiç Bir Müzik Çalmamakta**'));                                              
		msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Müzik Durduruldu`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**Müzik Bitti**');
		return undefined;
	} else if (command === 'ses') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('** Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('**Hiç Bir Müzik Çalmamakta**'));                                              
		if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
   .setTitle(`:loud_sound: Şuanki Ses Seviyesi: **${serverQueue.volume}**`)
    .setColor('RANDOM'))
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(`:loud_sound: Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
    .setColor('RANDOM'));                             	
  } else if (command === 'çalan') {
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(" **Çalan Müzik Bulunmamakta**")
    .setColor('RANDOM'));
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("NIGHT TIGERS Müzik | Çalan")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
	} else if (command === 'sıra') {
    let index = 0;
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(" **Sırada Müzik Bulunmamakta**")
    .setColor('RANDOM'));
		  return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('NIGHT TIGERS Müzik | Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
	} else if (command === 'duraklat') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:pause_button: Müzik Senin İçin Durduruldu!**")
      .setColor('RANDOM'));
		}
		return msg.channel.send(' **Çalan Müzik Bulunmamakta**');
	} else if (command === 'devam') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:arrow_forward: Müzik Senin İçin Devam Etmekte!**")
      .setColor('RANDOM'));
		}
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("** Çalan Müzik Bulunmamakta.**")
    .setColor('RANDOM'));
	}	 else if (command === 'ayrıl') {
    const voiceChannel = msg.member.voiceChannel;

    voiceChannel.leave()
  
}
  

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
        durations: video.duration.seconds,
    views: video.views,
    };
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(` **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`);
			queue.delete(msg.guild.id);
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle(` **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`)
      .setColor('RANDOM'))
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(` **${song.title}** Adlı Müzik Kuyruğa Eklendi!`)
    .setColor('RANDOM'))
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === '<:basarisiz:474973245477486612> | **Yayın Akış Hızı Yeterli Değil.**') console.log('Müzik Bitti.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	 serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()                                   
  .setTitle("**NIGHT TIGERS Müzik  Müzik Başladı**",`https://cdn.discordapp.com/avatars/473974675194511361/6bb90de9efe9fb80081b185266bb94a6.png?size=2048`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('RANDOM'));
}

client.on("message", msg => {
  const uyarıembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(":crown: " + msg.author + "Reklam Yapmayı Kes :x:  ")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00AE86)
    .setDescription("Sunucunda Reklam Yapıyor Uyar komutu ile kişiyi uyara bilirsin")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
  if(msg.member.hasPermission('BAN_MEMBERS')){
  return;
  } else {
  msg.delete(30).then(deletedMsg => {
   deletedMsg.channel.send(uyarıembed)
   msg.guild.owner.send(dmembed).catch(e => {
          console.error(e);
        });
      }).catch(e => {
        console.error(e);
      });
    };
    };
  })

  client.on("channelCreate", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'log');
    if (!logs) return console.log("log Kanalını Bulamadım.");
    const cembed = new Discord.RichEmbed()
      .setTitle("Kanal Oluşturma")
      .setColor("RANDOM")
      .setDescription(`Bir **${channel.type} kanalı**,  **${channel.name}**, adlı kanal oluşturuldu.`)
      .setTimestamp(new Date());
    logs.send(cembed)
  });

  

  client.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find('name', 'log');
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        await message.guild.createChannel('log', 'text');
    }
    if (!logs) {
        return console.log('log kanalı oluşturmanız lazım.')
    }
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
        user = entry.executor.username
    } else {
        user = message.author
    }
    const logembed = new Discord.RichEmbed()
        //.setTitle('Message Deleted')
        .setAuthor(user.tag, message.author.displayAvatarURL)
        .addField(`** ${message.author.username} Tarafından mesaj silindi. ${message.channel.name} Kanalında.**\n\n`, message.content)
        .setColor(message.guild.member(client.user).displayHexColor)
        .setFooter(`<#${message.channel.id}>`)
        .setTimestamp()
    //console.log(entry)
    logs.send(logembed);
})
  
 client.on("channelDelete", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'log');
    if (!logs) return console.log("log kanalını bulamadım.");
    const cembed = new Discord.RichEmbed()
      .setTitle("Kanal Silme")
      .setColor("RANDOM")
      .setDescription(` **${channel.type} kanalı**,**${channel.name}**, isimli Kanal silindi.`)
      .setTimestamp(new Date())
    logs.send(cembed)
  });
  
  client.on('guildMemberAdd', member => {
    let guild = member.guild;
  
    const channel = member.guild.channels.find('name', 'giriş-çıkış');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle('  Sunucuya katıldı!')
    channel.sendEmbed(embed);
  });
  
  client.on('guildMemberRemove', member => {
    let guild = member.guild;
  
    const channel = member.guild.channels.find('name', 'giriş-çıkış');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle('  Sunucudan Ayrıldı!')
    channel.sendEmbed(embed);
  });
  
  client.on("guildMemberAdd", async member => {
  const kanal = member.guild.channels.find("name", "genel-sohbet")
  kanal.sendMessage(member + '  ' + member.guild.name + ' adlı sunucuya hoşgeldin! Seni görmek ne güzel.')
  })
  
  client.on('guildCreate', guild => {
    const owner = guild.owner
    const mrb = guild.systemChannel
    if (!mrb) return;
    let merhaba = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setAuthor(guild.name, guild.iconURL)
    .addField('**NIGHT TIGERS Bot Sunucuya Eklendi**', `${owner}`)
    .addField('**NIGHT TIGERS** sunucunuzdaki insanlara kolaylıklar sağlar.', `**${prefix}bottanıt** yazmanız yeterlidir!`)
    .addField('**Botumuzun özelliklerini öğrenmek için**', `**${prefix}yardım** yazmanız yeterlidir!`)
    mrb.send(merhaba);
  });
  
  client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Bir Sunucuya Katıldım;')
    .setDescription(`Bot, 》${guild.name}《 adlı sunucuya katıldı [${guild.memberCount} Üye]!`)
    .setFooter('NIGHT TIGERS', client.user.avatarURL)
    .setTimestamp()
    client.channels.get('512366917202214915').send(embed);
  });
  
  client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Bir Sunucudan Ayrıldım;')
    .setDescription(`Bot, 》${guild.name}《 sunucudan ayrıldı [${guild.memberCount} Üye]!`)
    .setFooter('NIGHT TIGERS', client.user.avatarURL)
    .setTimestamp()
    client.channels.get('512366917202214915').send(embed);
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === '<@492613026235809802>') {
          if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
              msg.channel.sendMessage('** Prefixim nt! Yardım menüsü için nt!yardım yazabilirsin. Takipte Kalın **'); 
          } else {
          msg.channel.send('** Prefixim nt! Yardım menüsü için nt!yardım yazabilirsin. Takipte Kalın ! **');
          }
      }
  });

  let cooldown = new Set();
  let cdseconds = 0;
  
  client.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./ayarlar/prefix.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: ayarlar.prefix
      };
    }
   let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
      message.delete();
      return message.reply("Komutlar arasında 5 saniye beklemelisin.")
    }
    if(!message.member.hasPermission("ADMINISTRATOR")){
      cooldown.add(message.author.id);
    }
  
  
    let messageArray = message.content.split("");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
  
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)
  });

  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'merhaba') {
      if (!msg.guild.member(msg.author).hasPermission(member)) {
        msg.channel.sendMessage(member + 'Hoşgeldin  : smiley : '); 
      } else {
    
      }
    }
  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);