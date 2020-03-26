const Discord = require('discord.js'); 
const bot = new Discord.Client();

const PREFIX = "-";

bot.on('ready', function() {
    console.log("I'm ready !");
})

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "-hello") {
            //message.reply('Coucou !');
            message.channel.send('CA MARCHE !!')
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue Youhou '+ member.displayName);
    }).catch(console.error)
})

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "-Cava?") {
            message.channel.send(
`**Ca va et toi ?**
*Je suis content de te parler !*
***Youhou !***
~~T'as vu mon enthousiasme~~
__Hé hé__
`);
        }
        else if(message.content === "-Colère") {
            message.channel.send({embed: {
                color: 15158332,
                description: 'Pas content !'
            }})
        }
    }});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "😄") {
        reaction.message.channel.send(`Ca marche`);
    }
    // d'abord tu choppes le serveur dans lequel la réaction a été ajoutée
    const serv = reaction.message.guild;
    // puis tu choppes le "mamager" qui en dit long sur tous les membres du serveur
    const membersManager = serv.members;
    // puis tu l'interroge à propos du user qui a mis la réaction pour chopper le member qui a mis la réaction
    membersManager.fetch({ user })
        .then( membre => {
        let role = membre.roles.cache.find(r => r.name === "Crash test 0.5");
        if(role) {
        //il a le role
            membre.roles.remove(role)
        } else {
            let role = reaction.message.guild.roles.cache.find(r => r.name === "Crash test 0.5");
            console.log(role)
            membre.roles.add(role.id);
    }}
)});


bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "-Tumedéçois") {
            message.channel.send(`Pardon maîtresse !!`);
    }}});     

bot.login('NjYwODEwNjM1NjA0MzkzOTk0.Xnodug.-8jOODhzJkRCXBOS7_cnT2NpUKI') //Token
