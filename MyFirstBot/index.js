const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'BOT_TOKEN';

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
