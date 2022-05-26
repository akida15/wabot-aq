let handler = async (m, { command, text }) => {
  m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])}
`.trim())
}
handler.help = ['apakah <pertanyaan>']
handler.command = /^aapakah$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}