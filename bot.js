const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();
البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Diamond Codes')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

const adminprefix = "+";
const devs = ['490076609215201282','383606619671494659'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//حقوق دايموند كودز
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//حقوق دايموند كودز
}
});

const p = {}
const devs = ['490076609215201282','383606619671494659'];
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "+"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'تم تغيير البرفكس ${newPrefix}**`);
} 


});

client.login(process.env.BOT_TOKEN);
