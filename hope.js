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

    if(message.content == '#help') {
        message.reply('I currently don‘t know many commands, since I‘m only a hatchling, but you can say "give me [material] prices" for most materials and I can tell you what my creator told me the average prices are. If you don‘t agree with these please message <@231347753614049282> with suggested market prices');
    }
});

bot.on('message', (message) => {

    if(message.content == '#pet') {
        message.reply('you quietly pet <@243565320571322368>');
    }
});

bot.on('message', (message) => {

    if(message.content == '%Ion') {
        message.channel.send('```The Ion Cannon is a powerful weapon that takes a singificant amount of time to charge and consumes an Ion Core for each volley. The Ion Cannon is available for construction on Level 11 starships.```', { files: ['https://vignette3.wikia.nocookie.net/pixelstarships/images/5/53/IonCannon1.gif/revision/latest?cb=20170331011033'] } , { files: ['https://vignette1.wikia.nocookie.net/pixelstarships/images/3/33/IonCannon2.gif/revision/latest?cb=20170331011041'] });
    }
});

bot.on('message', (message) => {

    if(message.content == 'How does lucis comment make you feel') {
        message.reply('It makes me very sad;-;');
    }
});

bot.login(process.env.BOT_TOKEN);
