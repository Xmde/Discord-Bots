const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTE4NTYyODA5MDA1NjA0OTAx.DuSl9g.FLNL3jAzgKqKIxdwUGCUhry1D6g';

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.reply('Hello, how are you?')
    }
});

bot.on('message', function(message){
    if(message.content == 'Hi'){
        message.channel.sendMessage('Hi, how are you?')
    }
});

bot.on('ready', function(){
    console.log('Ready')
});

bot.login(TOKEN);