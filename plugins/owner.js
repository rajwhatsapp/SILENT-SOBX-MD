const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const config = require('../config')

cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let owner = ` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *Raj Kumar*
*AGE:-* *22 YEARS*
*PUBLIC NAME:-* *RajWhatsApp*

> *BY RAJ-BOT-OFC*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "RAJ-BOT-OFC",
      serverMessageId: 999
    },
externalAdReply: { 
title: '★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://Wa.me/+994407122025/?text=★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★" ,
thumbnailUrl: "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
