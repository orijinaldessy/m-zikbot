const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('619124250414153741') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`<a:gear:601271998026350592> ${client.user.username} - Komutlar`)
        .setDescription(`<a:tools:601273857189609473> | **${ayarlar.prefix}yetkili** Yetkili Komutları.\n <a:tools:601273859131572267> | **${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n <a:joystick:601273850738507817> |  **${ayarlar.prefix}eğlence** Eğlence Komutları.\n <a:moneybag:601273852676276235> | **${ayarlar.prefix}premium** Premium Komutlar.\n <a:musical_note:601273850663141401> | **${ayarlar.prefix}müzik** Müzik Komutları.\n`)
        .setThumbnail(client.user.avatarURL)
        .addField(`<a:link:599310200163401748> » Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Yaratıcı](https://instagram.com/yetismiyorsanasesim/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};