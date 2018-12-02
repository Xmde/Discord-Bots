const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTE4NTYyODA5MDA1NjA0OTAx.DuSzIg.3yLzPI73e_wQM3ahN-DbhKKGSPE';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ '/commands');

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

bot.on('message', function(message){
    if(message.content.toLowerCase().includes('nigger')){
        message.delete();
        message.reply('You cannont say that!')
    }
});

bot.on('message', function(message){
    if(message.content.toLowerCase().includes('nibba')){
        message.delete();
        message.reply('You cannont say that!')
    }
});

bot.on('message', function(message){
    if(message.content.toLowerCase().includes('test')){
        message.delete();
        message.reply('You cannont say that!')
    }
});

bot.on('ready', function(){
    console.log('Ready')
});

bot.login(TOKEN);
