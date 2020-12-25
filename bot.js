const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
 if (message.content === "?random") { // checks if the message says "?random"
        const number = Math.random(); // generates a random number
        message.channel.send(number.toString()); // sends a message to the channel with the number
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
