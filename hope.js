const commando = require('discord.js');
const bot = new commando.Client();

bot.on('message', (message) => {

    if(message.content == 'Hello cadet') {
        message.channel.send('Hello Captain');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices carbon') {
        message.reply('this is what I have. Carbon: **10** <:Bux:329395951003369476>| **200K** <:Gas:329395933949198337> | **400K-600K** <:Minerals:329395908901076992>');
    }
});

bot.on('message', (message) => {

    if(message.content == 'h!prices gold') {
        message.reply('this is what I have. Gold: **20** <:Bux:329395951003369476>|*Undetermined* <:Gas:329395933949198337>| **850K-1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices titanium') {
        message.reply('this is what I have. Titanium: **9-12** <:Bux:329395951003369476>| **250K** <:Gas:329395933949198337> | **850K** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices silicon') {
        message.reply('this is what I have. Silicon: **25-30** <:Bux:329395951003369476>| **500K** <:Gas:329395933949198337> | **1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices scrap') {
        message.reply('this is what I have. Scrap: **12** <:Bux:329395951003369476>| **300K** <:Gas:329395933949198337> | **850K-1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices dark matter') {
        message.reply('that is far too rare for my knowledge... I advise asking other captains.');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices unknown material') {
        message.reply('that is far too rare for my knowledge... I advise asking other captains.');
    }

});

bot.on('message', (message) => {

    if(message.content == 'h!prices all') {
        message.channel.sendMessage('Carbon: **10** <:Bux:329395951003369476>| **200K** <:Gas:329395933949198337> | **400K-600K** <:Minerals:329395908901076992>');
        message.channel.sendMessage('Scrap: **12** <:Bux:329395951003369476>| **300K** <:Gas:329395933949198337> | **850K-1M** <:Minerals:329395908901076992>');
        message.channel.sendMessage('Gold: **20** <:Bux:329395951003369476>|*Undetermined* <:Gas:329395933949198337>| **850K-1M** <:Minerals:329395908901076992>');
        message.channel.sendMessage('Titanium: **9-12** <:Bux:329395951003369476>| **250K** <:Gas:329395933949198337> | **850K** <:Minerals:329395908901076992>');
        message.channel.sendMessage('Silicon: **25-30** <:Bux:329395951003369476>| **500K** <:Gas:329395933949198337> | **1M** <:Minerals:329395908901076992>');
    }

});

bot.on('message', (message) => {

    if(message.content == 'Who sucks?') {
        message.channel.sendMessage('DMH sucks');
    }
});

bot.on('message', (message) => {

    if(message.content == 'What is love') {
        message.channel.sendMessage('Baby don‘t hurt me');
    }
});

bot.on('message', (message) => {

    if(message.content == 'I wanna know what love is') {
        message.channel.sendMessage('I want you to show me!');
    }
});

bot.on('message', (message) => {

    if(message.content == 'h!help') {
        message.reply('I currently don‘t know many commands, since I‘m only a hatchling, but you can say "h!prices [material]" for most materials (or all for all available) and I can tell you what my creator told me the average prices are. If you don‘t agree with these please message <@231347753614049282> with suggested market prices');
    }
});

bot.on('message', (message) => {

    if(message.content == 'h!pet') {
        message.reply('you quietly pet <@243565320571322368>');
    }
});

bot.on('message', (message) => {

    if(message.content == 'h!ion') {
        message.channel.send('```The Ion Cannon is a powerful weapon that takes a singificant amount of time to charge and consumes an Ion Core for each volley. The Ion Cannon is available for construction on Level 11 starships.```', { files: ['http://i.imgur.com/ua20rU0.gif'] });
    }
});

bot.login(process.env.BOT_TOKEN);
