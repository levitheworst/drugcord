"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const env = require('../globalconfig.json');
var discordConfig = {
    commandPrefix: '%'
};
try {
    discordConfig = require('../appconfig.json');
}
catch (error) {
    console.error(error.message);
    console.log('Unable to configure server environment from \"appconfig.json\", default settings applied');
}
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMembers
    ]
});
// Bot set
client.once(discord_js_1.Events.ClientReady, (c) => {
    console.log(`Successfully logged in as ${c.user.tag}`);
});
// Bot run
client.login(env.token);
client.on('messageCreate', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg === null || msg === void 0 ? void 0 : msg.author.bot)
        return;
}));
