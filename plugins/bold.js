const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/bold', { text: teks }, 'APIKEY'), 'bold.mp4', teks, m)
}
handler.help = ['bold'].map((v) => v + " <text>")

handler.command = /^abold$/i

module.exports = handler
