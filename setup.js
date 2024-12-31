require("./database/module")

//================OWNER'S NAME AND PHONE NUMBER=============\
global.owner = "234814082xxxx" //replace with your actual phone number
global.botName = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5" //name of the bot
global.creatorName = "𝑩𝑨𝑫𝑩𝑶𝑰" //name of the creator
global.ownernumber = '2348140××××××'  //creator number
global.location = "Nigeria, Ogun-state, ilese"
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.autoJoin = false //DO NOT CHANGE
global.antiLink = false //DO NOT CHANGE
global.version = 'V5' //DO NOT CHANGE
global.inviteCode = "CswK4kvQD1u7SfSmsYfMHZ"
//================LINKS AND IMAGES=============\
global.imageUrl = 'https://i.imgur.com/Bhex1tf.jpeg' //replace with your Telegra.ph image link
global.idsaluran = "120363290640941556@newsletter"
global.imageUrl2 = 'https://i.imgur.com/TX1sfjs.jpeg' //replace with your Telegra.ph image link
global.link = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x' //any link you want
global.thumb = fs.readFileSync("./thumb.png") //DO NOT CHANGE
global.author = "king Badboi" //CHANGE TO YOUR NAME
// DELAY JPM
global.delayjpm = 5500

//database created by king pussy 
global.database = `\`[ 👑 ] 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 \` \n*

    🚫 *Access Denied!* 🚫

    Sorry, you don't have the necessary permissions to use this command.

    *Only users in our database can access.* 😎
*contact king pussy or king badboi for database* 
*Whatsapp contact* : *@2348140825959*
*Whatsapp contact* : *@2349136616989*
*Whatsapp Channel* : *https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x*
  *THANK FOR USING SCARLET-V3-CRASHER*`
  
  
//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story


//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/xdvhtw.jpeg'
global.isLink = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x'
global.packname = "𝑩𝑨𝑫𝑩𝑶𝑰"
global.author = "𝑩𝑨𝑫𝑩𝑶𝑰"
global.jumlah = "5"
 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})