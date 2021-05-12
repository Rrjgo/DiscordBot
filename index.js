require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

let gamestat = {
    started: false,
    rolls: [{
        id: "tuojrtuh",
        number: 20
    }, {
        id: "hgj",
        number: 30
    }]
}

//gamestat.rolls.map(item=>item.number)
//[ 20, 30 ]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (msg.content.charAt(0) !== '!') {
        return
    }
    const command = msg.content.substring(1).toLowerCase();
    console.log(msg.content)

    switch (command) {
        case 'help':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'commands':
        case 'ping':
            msg.reply('pong');
            break;
        default:
            msg.reply('Command not found');
    }
});

client.login(process.env.TOKEN);