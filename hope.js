const commando = require('discord.js');
const bot = new commando.Client();

bot.on('message', (message) => {

    if(message.content == 'Hello cadet') {
        message.channel.send('Hello Captain');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me carbon prices') {
        message.reply('this is what I have. Carbon: **10** <:Bux:329395951003369476>| **200K** <:Gas:329395933949198337> | **400K-600K** <:Minerals:329395908901076992>');
    }
});

bot.on('message', (message) => {

    if(message.content == 'give me gold prices') {
        message.reply('this is what I have. Gold: **20** <:Bux:329395951003369476>|*Undetermined* <:Gas:329395933949198337>| **850K-1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me titanium prices') {
        message.reply('this is what I have. Titanium: **9-12** <:Bux:329395951003369476>| **250K** <:Gas:329395933949198337> | **850K** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me silicon prices') {
        message.reply('this is what I have. Silicon: **25-30** <:Bux:329395951003369476>| **500K** <:Gas:329395933949198337> | **1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me scrap prices') {
        message.reply('this is what I have. Scrap: **12** <:Bux:329395951003369476>| **300K** <:Gas:329395933949198337> | **850K-1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me dark matter prices') {
        message.reply('that is far too rare for my knowledge... I advise asking other captains.');
    }

});

bot.on('message', (message) => {

    if(message.content == 'give me unknown material prices') {
        message.reply('that is far too rare for my knowledge... I advise asking other captains.');
    }

});

bot.on('message', (message) => {

    if(message.content == 'Who sucks?') {
        message.channel.sendMessage('<@189231734842195968> sucks');
    }
});

bot.on('message', (message) => {

    if(message.content == 'dumb bot') {
        message.channel.sendMessage('I know you are but what am I?');
    }
});

bot.on('message', (message) => {

    if(message.content == '#help') {
        message.reply('I currently do not know many commands, since I was born yesterday, but you can say "give me [material] prices" for common materials and I can tell you what my creator told me the average prices are. If you do not agree with these, please message @Retro Phoenix#8939 with suggested market prices');
    }
});

bot.login(process.env.BOT_TOKEN);
