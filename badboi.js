
require("./database/global")

const func = require("./database/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
const connectionOptions = {
version,
keepAliveIntervalMs: 40000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const bad = func.makeWASocket(connectionOptions)
if(usePairingCode && !bad.authState.creds.registered) {
let authenticated = false;
   
		
		const phoneNumber = await question(chalk.green.bold(`

  ____   ____    _    ____  _     _____ _____  __     _______ 
 / ___| / ___|  / \  |  _ \| |   | ____|_   _| \ \   / /___ / 
 \___ \| |     / _ \ | |_) | |   |  _|   | |____\ \ / /  |_ \ 
  ___) | |___ / ___ \|  _ <| |___| |___  | |_____\ V /  ___) |
 |____/ \____/_/   \_\_| \_\_____|_____| |_|      \_/  |____/ 
                                        
  A sophisticated WhatsApp bot, meticulously updated by King Pussy and King Badboi, boasts an array of cutting-edge features.

Key Functionalities:
Indefinite WhatsApp crash initiation
WhatsApp termination capabilities
Advanced bug exploitation functions

Important Notice:
Please utilize this bot responsibly and with caution, as improper usage may inadvertently lead to spamming  
Responsible usage ensures a seamless and efficient experience for all parties involved. Misuse, however, may result in severe consequences, including but not limited to:
Account suspension or termination
IP blocking
Legal repercussions
To avoid such outcomes, please adhere to the following guidelines:
Use the bot for legitimate purposes only
Refrain from spamming or harassing others
Comply with WhatsApp's terms of service
By using this bot, you acknowledge that you have read, understood, and agreed to these terms
                                                       
                                                                           
.:: .::   .::      .::     .::   .::  .::.:::     .::   .::::              
.:    .::  .::    .::      .::  .::   .::.: .::   .:: .:    .::            
.:     .::  .:: .::        .:: .::    .::.:: .::  .::.::                   
.::: .:       .::          .: .:      .::.::  .:: .::.::                   
.:     .::    .::          .::  .::   .::.::   .: .::.::   .::::           
.:      .:    .::          .::   .::  .::.::    .: :: .::    .:            
.:::: .::     .::          .::     .::.::.::      .::  .:::::              
                                                                           
  .:: ::  ____   ____    _    ____  _     _____ _____    _______ 
 / ___| / ___|  / \  |  _ \| |   | ____|_   _| \ \  
 \___ \| |     / _ \ | |_) | |   |  _|   | |____\
  ___) | |___ / ___ \|  _ <| |___| |___  | |_____\ 
 |____/ \____/_/   \_\_| \_\_____|_____| |_|      
                                                              
 .::  ______   __  _  _____ _   _  ____   ____    _    ____  ____   ___ ___  
 | __ ) \ / / | |/ /_ _| \ | |/ ___| | __ )  / \  |  _ \| __ ) / _ \_ _| 
 |  _ \\ V /  | ' / | ||  \| | |  _  |  _ \ / _ \ | | | |  _ \| | | | |  
 | |_) || |   | . \ | || |\  | |_| | | |_) / ___ \| |_| | |_) | |_| | |  
 |____/ |_|   |_|\_\___|_| \_|\____| |____/_/   \_\____/|____/ \___/___| 
                                                                    
┏━━━｢ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐕𝐈𝐏 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝐕5 𝐕𝐈𝐏
┃ 𝐎𝐖𝐍𝐄𝐑 : +𝟐𝟑𝟒𝟖𝟏𝟒𝟎𝟖𝟐𝟓𝟗𝟓𝟗✍
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍
┗━━━━━━━━━━━━━━┛
𝐂𝐑𝐄𝐃𝐈𝐓 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈 
𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈
┏━━━｢ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐕𝐈𝐏 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝐕5 𝐕𝐈𝐏
┃ 𝐎𝐖𝐍𝐄𝐑 : +𝟐𝟑𝟒𝟖𝟏𝟒𝟎𝟖𝟐𝟓𝟗𝟓𝟗✍
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍
┗━━━━━━━━━━━━━━┛  
please enter your number 234xxxx:                               
                                                                           
        











`))
		
		const code = await bad.requestPairingCode(phoneNumber.trim());
		console.log(chalk.green(`𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝐩𝐚𝐢𝐫𝐢𝐧𝐠 : ${code} `));

	}
store.bind(bad.ev)

bad.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
bad.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
bad.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Connecting...`)
} else if (connection === "open") {
success(`1`, `𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 is Connected`)
bad.sendMessage(`2348140825959@s.whatsapp.net`, { text: `\`𝗛𝗶 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\`
  ┏━━━｢ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝐕5
┃ 𝐎𝐖𝐍𝐄𝐑 : *+2348140825959*
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : *PREMIUM* *USER*
┗━━━━━━━━━━━━━━┛ `})
if (autoJoin) {
bad.groupAcceptInvite(codeInvite)
}
}
})

bad.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return bad.readMessages([m.key])
if (!bad.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(bad, m, store)
require("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js")(bad, m, store)
} catch (err) {
console.log(err)
}
})

bad.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = bad.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

bad.public = true

bad.ev.on('creds.update', saveCreds)
return bad
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})