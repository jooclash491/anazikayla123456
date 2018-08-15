const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
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
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
{
  "name": "kingserver",
  "version": "2.1.0",
  "description": "-- AWESOMENESS --",
  "main": "reload.js",
  "scripts": {
    "start": "node reload.js"
  },
  "dependencies": {
    "canvas": "^1.6.10",
    "discord.js": "^11.3.2",
    "discord.js-musicbot-addon": "^1.10.3",
    "express": "^4.16.3",
    "finalhandler": "^1.1.1",
    "fortnite": "^3.0.0",
    "fs": "^0.0.2",
    "get-youtube-id": "^1.0.0",
    "jimp": "^0.2.28",
    "moment": "^2.22.1",
    "ms": "^2.1.1",
    "node-opus": "^0.2.7",
    "opusscript": "0.0.6",
    "python": "0.0.4",
    "request": "^2.85.0",
    "router": "^1.3.2",
    "snekfetch": "^3.6.4",
    "sqlite": "^2.9.1",
    "youtube-info": "^1.2.0",
    "ytdl-core": "^0.20.2"
  },
  "engines": {
    "node": "8.x"
  }
}
client.login(process.env.BOT_TOKEN);
