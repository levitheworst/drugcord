import { Message } from 'discord.js';

const env = require('../globalconfig.json');

var discordConfig = {
    commandPrefix: '%'
};

try {
    discordConfig = require('../appconfig.json');
} catch (error:any) {
    console.error(error.message);
    console.log('Unable to configure server environment from \"appconfig.json\", default settings applied');
}

import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// Bot set
client.once(Events.ClientReady, (c:any) => {
    console.log(`Successfully logged in as ${c.user.tag}`);
});

// Bot run
client.login(env.token);

client.on('messageCreate', async (msg:Message) => {
    if(msg?.author.bot) return;
});