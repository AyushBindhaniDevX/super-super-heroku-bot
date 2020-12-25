const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
if (msg.content === 'ping') {
  msg.reply('pong');
  msg.channel.send('pong');

} else if (msg.content.startsWith('!kick')) {
  if (msg.mentions.users.size) {
    const taggedUser = msg.mentions.users.first();
    msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  } else {
    msg.reply('Please tag a valid user!');
  }
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
