const Discord = require("discord.js")
require("dotenv").config()



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in to: ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)