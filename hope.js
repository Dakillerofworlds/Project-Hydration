const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'Hello cadet') {
        message.channel.send('Hello Captain');
    }

});

bot.login(process.env.BOT_TOKEN);