
 const mongo = require('../mongo')
 const commandPrefixSchema = require('../schemas/command-prefix-schema')
 const { prefix: globalPrefix } = require('../config.json')
 const guildPrefixes = {} // { 'guildId' : 'prefix' }
 const Discord = require('discord.js')
 const {atbilde} = require('../sarunas/atbilzhandleris.js')
 const {komandbazeslogo} = require('../bildes.json')
 
 const validatePermissions = (permissions) => {
   const validPermissions = [
     'CREATE_INSTANT_INVITE',
     'KICK_MEMBERS',
     'BAN_MEMBERS',
     'ADMINISTRATOR',
     'MANAGE_CHANNELS',
     'MANAGE_GUILD',
     'ADD_REACTIONS',
     'VIEW_AUDIT_LOG',
     'PRIORITY_SPEAKER',
     'STREAM',
     'VIEW_CHANNEL',
     'SEND_MESSAGES',
     'SEND_TTS_MESSAGES',
     'MANAGE_MESSAGES',
     'EMBED_LINKS',
     'ATTACH_FILES',
     'READ_MESSAGE_HISTORY',
     'MENTION_EVERYONE',
     'USE_EXTERNAL_EMOJIS',
     'VIEW_GUILD_INSIGHTS',
     'CONNECT',
     'SPEAK',
     'MUTE_MEMBERS',
     'DEAFEN_MEMBERS',
     'MOVE_MEMBERS',
     'USE_VAD',
     'CHANGE_NICKNAME',
     'MANAGE_NICKNAMES',
     'MANAGE_ROLES',
     'MANAGE_WEBHOOKS',
     'MANAGE_EMOJIS',
   ]
 
   for (const permission of permissions) {
     if (!validPermissions.includes(permission)) {
       throw new Error(`Unknown permission node "${permission}"`)
     }
   }
 }
 
 let recentlyRan = [] // guildId-userId-command
 
 module.exports = (client, commandOptions) => {
   let {
     commands,
     expectedArgs = '',
     permissionError = 'Tev nav nepieciešamo atļauju.',
     minArgs = 0,
     maxArgs = null,
     formats = "sekunžu",
     cooldown = -1,
     permissions = [],
     requiredRoles = [],
     callback,
   } = commandOptions
 
   // Ensure the command and aliases are in an array
   if (typeof commands === 'string') {
     commands = [commands]
   }
 
   console.log(`Registering command "${commands[0]}"`)
 
   // Ensure the permissions are in an array and are all valid
   if (permissions.length) {
     if (typeof permissions === 'string') {
       permissions = [permissions]
     }
 
     validatePermissions(permissions)
   }
 
   // Listen for messages
   client.on('message', async (message) => {
     const { member, content, guild } = message
 
     const prefix = guildPrefixes[guild.id] || globalPrefix
 
     for (const alias of commands) {
       const command = `${prefix}${alias.toLowerCase()}`
 
       if (
         content.toLowerCase().startsWith(`${command} `) ||
         content.toLowerCase() === command
       ) {
         // A command has been ran
 
         // Ensure the user has the required permissions
         for (const permission of permissions) {
           if (!member.hasPermission(permission)) {
             message.reply(permissionError)
             return
           }
         }
 
         // Ensure the user has the required roles
         if (typeof requiredRoles[0] != 'undefined'){
         var hasonerole = false
         for (const requiredRole of requiredRoles) {
           const role = guild.roles.cache.find(
             (role) => role.name === requiredRole
           )
           if (member.roles.cache.has(role.id)) {
             hasonerole = true
           }
         }
         if (!hasonerole){
           atbilde('Piedod',komandbazeslogo, `Tev vajag "${requiredRoles[0]}" lomu`, message,'#0c4bf4', Discord)
           return
         }}
 
         // Ensure the user has not ran this command too frequently
         //guildId-userId-command
         let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
         console.log('cooldownString:', cooldownString)
 var cooldownchanged = cooldown
         if (formats=='stundu')
         { 
           cooldownchanged = cooldownchanged /3600

         }
         if (formats=='minūšu')
         { 
           cooldownchanged = cooldownchanged /60

         }
         if (formats=='dienu')
         { 
           cooldownchanged = cooldownchanged /86400

         }
         if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
           atbilde('Piedod',komandbazeslogo, `Tu jau to nesen dariji! Šajai komandai ir ${cooldownchanged} ${formats} ilgs gaidīšanas laiks!`, message,'#0c4bf4', Discord)
           return
         }
 
         // Split on any number of spaces
         const arguments = content.split(/[ ]+/)
 
         // Remove the command which is the first index
         arguments.shift()
 
         // Ensure we have the correct number of arguments
         if (
           arguments.length < minArgs ||
           (maxArgs !== null && arguments.length > maxArgs)
         ) {
           message.reply(
             `Nepareizs sintakss ${prefix}${alias} ${expectedArgs}`
           )
           return
         }
 
         if (cooldown > 0) {
           recentlyRan.push(cooldownString)
 
           setTimeout(() => {
             console.log('Before:', recentlyRan)
 
             recentlyRan = recentlyRan.filter((string) => {
               return string !== cooldownString
             })
 
             console.log('After:', recentlyRan)
           }, 1000 * cooldown)
         }
 
         // Handle the custom command code
         callback(message, arguments, arguments.join(' '), client)
 
         return
       }
     }
   })
 }
 
 
 module.exports.updateCache = (guildId, newPrefix) => {
   guildPrefixes[guildId] = newPrefix
 }
 
 module.exports.loadPrefixes = async (client) => {
   await mongo().then(async (mongoose) => {
     try {
       for (const guild of client.guilds.cache) {
         const guildId = guild[1].id
 
         const result = await commandPrefixSchema.findOne({ _id: guildId })
         guildPrefixes[guildId] = result ? result.prefix : globalPrefix
       }
 
       console.log(guildPrefixes)
     } finally {
       mongoose.connection.close()
     }
   })
 }