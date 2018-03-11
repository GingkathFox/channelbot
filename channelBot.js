
const Discord = require("discord.js");
const { token } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'M");
});
client.channels.get("422238891115020289");
client.on('message', message => {
    if (channel.members.size >= 2) {

});

client.login(token);
