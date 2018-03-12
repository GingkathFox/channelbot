
const Discord = require("discord.js");
const { token } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'M");
  client.channels.get("422238891115020289");
});
//change the numbers with the
//channel you want by using \#channel-name in Discord
client.on('message', message => {
  let channel = message.channel;
  let roles = message.guild.roles;
  if (channel.members.size >= 2) {
      function closeDownChannel(message) {
   // let channel = message.channel;
   // let roles = message.guild.roles; // collection

    // find specific role - enter name of a role you create here
    let testRole = roles.find('name', 'Gingkatest');

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions(
        testRole,
        { 'SEND_MESSAGES': true
          'READ_MESSAGES': true },
        // optional 'reason' for permission overwrite
        'revealing!'
    )
    // handle responses / errors
    .then(console.log)
    .catch(console.log);
       }//function closing
    }//if closing
 else if (channel.members.size <= 1){
   channel.overwritePermissions(
        testRole,
        { 'SEND_MESSAGES': false
          'READ_MESSAGES': false },
        // optional 'reason' for permission overwrite
        'hiding!'
    )
   if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
});

client.login(token);
