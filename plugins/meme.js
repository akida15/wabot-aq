let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/meme'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m)
}

handler.help = ['ميمز']
handler.tags = ['الاوامر']

handler.command = /^(meme)$/i

handler.group = true

module.exports = handler
