const Discord = require("discord.js");

const TOKEN = "NDUxNzMzMTMwNDY2OTUxMTY4.DfGIVA.qGuk4UaiInWScSpq7qm7WnDwv48";
const PREFIX = "!"
const bot = new Discord.Client();

var fortunes = [
    "Yes",
    "No",
    "maybe",
    "error 404",
];


bot.on("ready", function() {
    console.log("Ready");
});

bot.on('guildMemberAdd', member => {
    let welcomeChannel = bot.channels.find(`name`, "welcome");
    if(!welcomeChannel) return message.channel.send("Can't find general channel.");
    welcomeChannel.send("Welcome to TEA "  +  member);

    var role = member.guild.roles.find('name', 'MEMBER');
    member.addRole(role)

});

bot.on("message", function(message) {           // Alerts the bot that it will be needed with neccersary name
 
    if (message.author.equals(bot.user)) return;                          // Checks messages
    if (!message.content.startsWith(PREFIX)) return;                      // Checks if it  starts with "PREFIX"                        
    var args = message.content.substring(PREFIX.length).split(" ");       // removes the prefix from the command so can be matched below
    switch (args[0].toLowerCase()) {                                      // Switches it to lower case
 
        case "ping":                                                                // if it matches with ping run this
            message.delete("ping"); //Delets users command
            message.channel.sendMessage("Pong!");                                   // sends "pong" to the channel the command was sent in
            break; // moves on
        case "info":                                                                // if it matches with info run this
            message.delete("info"); //Delets users command
            message.channel.sendMessage("I'm being worked on by MaxPearce4444,please support us") // sends message to channel the command was sent in
            break; // moves on
        case "8ball":                                                               // if it matches with 8ball run this                                    
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); // finds a random number and picks it from previously made list
            else
                message.channel.sendMessage("can't read that english bro?")// sends message to channel the command was sent in
            break; // moves on
        case "say":                                                                // if it matches with say run this
            message.delete("say"); //Delets users command
            let messageArray = message.content.split(" "); // splits message so removes the say (we already removed the prefix above)
            let xyz = messageArray.slice(1);               // sets variable to the split message
            const sayMessage = xyz.join(" ");              // sets it as a constant joined with nothing (not like commas like we had the issue with)
            let sayembed = new Discord.RichEmbed()         // creates a new embed
            .setDescription(`${sayMessage}`)               // Sets description of the embed
            .setColor(0xFF0000)                            // sets the colour of the embed, dont change 0x change the 6 digit hex colour code after it
            message.channel.send(sayembed);                // sends embed to the channel the command was run in
            break; // moves on
   
        default: // anything which isnt in the case list above
             message.channel.sendMessage("Invalid command use !help to get a list of commands"); // if the command dosn't exist in the list of commands above, show this
    }
});
 
bot.login(TOKEN) // logs into server with token and performs actions
