const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'FLIPS A COIN NOOB'
        })
    }

    async run(message, args){
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.reply("It Landed on Tails");
        }else{
            message.reply("It Landed on Heads")
        }
    }
}

module.exports = CoinFlipCommand;